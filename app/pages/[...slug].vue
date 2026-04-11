<template>
    <div class="dynamic-page">
        <!-- Render social feature component if resolved -->
        <component v-if="featureComponent" :is="featureComponent" />

        <!-- Fall back to Directus page content -->
        <div v-else-if="directusPage?.content" v-html="directusPage.content" />

        <!-- 404 fallback -->
        <div v-else class="p-8 text-center">
            <p class="text-gray-500">Page not found</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {
        useSocialFeatureComponent
    } from '#social/app/composables/useSocialFeatureRegistry'

    const route = useRoute()
    const {
        $directus,
        $readItems
    } = useNuxtApp()

    // Extract slug as string (handle array from [...slug] routing)
    const slug = computed(() => {
        const raw = route.params.slug
        return Array.isArray(raw) ? raw.join('/') : raw
    })

    // Try to resolve as a social feature component first
    const featureComponent = ref < any > (null)
    const directusPage = ref < any > (null)

    onMounted(async () => {
        // 1. Try social feature registry (e.g., 'radio', 'channels', 'spaces')
        const slugBase = slug.value.split('/')[0] // Get first segment
        const resolved = await useSocialFeatureComponent(slugBase)
        if (resolved) {
            featureComponent.value = resolved
            return
        }

        // 2. Fall back to Directus pages
        try {
            const response = await $directus.request(
                $readItems('pages', {
                    filter: {
                        slug: {
                            _eq: slug.value
                        }
                    },
                    fields: ['*'],
                    limit: 1,
                })
            )
            directusPage.value = response?.[0] || null
        } catch (err) {
            console.warn(`[...slug] Failed to load Directus page for slug "${slug.value}":`, err)
        }
    })

    useHead({
        title: () => {
            if (featureComponent.value) return 'Social Feature'
            return directusPage.value?.name || 'Page'
        },
    })
</script>