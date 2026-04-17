<template>
  <div>
    <component v-if="currentComponent" :is="currentComponent" :page="page?.value" />
    <div v-else v-html="page?.value?.content" />
  </div>
</template>

<script setup>
  import {
    defineAsyncComponent,
    shallowRef
  } from 'vue'
  import { pageComponentMap } from '#shared/app/types/pageComponentMap'
  import {
    useRoute
  } from 'vue-router'
  import { useGateway } from '#imports'

  const route = useRoute()
  const { content } = useGateway()

  // normalize slug (catch-all route can be array)
  const rawSlug = route.params.slug
  const slug = Array.isArray(rawSlug) ? rawSlug.join('/') : rawSlug
  const slugString = String(slug || '')
  const slugTail = slugString.includes('/') ? slugString.split('/').filter(Boolean).at(-1) || slugString : slugString
  const slugCandidates = Array.from(new Set([slugString, slugTail].filter(Boolean)))

  function withTimeout(promise, ms = 5000) {
    return Promise.race([
      promise,
      new Promise((_, reject) => setTimeout(() => reject(new Error(`content lookup timed out after ${ms}ms`)), ms)),
    ])
  }

  // fetch page from Directus safely
  const {
    data: page
  } = await useAsyncData(`page:${slugString || 'index'}`, async () => {
    try {
      if (import.meta.server) {
        return null
      }

      if (!content || typeof content.readItems !== 'function') {
        return null
      }

      for (const candidate of slugCandidates) {
        const resp = await withTimeout(content.readItems('pages', {
          filter: {
            slug: {
              _eq: candidate
            }
          },
          fields: ['*'],
          limit: 1
        }))

        // Directus responses vary; try common shapes
        const pageResult = resp?.data?.[0] || resp?.[0] || null
        if (pageResult) return pageResult
      }

      return null
    } catch (e) {
      console.error('Failed to load page', e)
      return null
    }
  }, {
    server: false,
    default: () => null,
  })

  useHead({
    title: page?.value?.name || 'Page'
  })


  const currentComponent = shallowRef(null)

  // decide component after page resolves
  if (page?.value) {
    const normalizeKey = (value = '') => value.toLowerCase().trim().replace(/[\s_-]+/g, '')
    const nameKey = normalizeKey(page.value.name || '')
    const slugKey = normalizeKey(page.value.slug || '')

    const importer = pageComponentMap[nameKey] || pageComponentMap[slugKey]
    if (importer) {
      currentComponent.value = defineAsyncComponent(importer)
    } else {
      currentComponent.value = null // fallback to raw HTML
    }
  } else {
    currentComponent.value = null
  }
</script>