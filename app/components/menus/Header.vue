<template>
  <UHeader toggle-side="left">
    <template #left>
      <USlideover side="left" title="Starter Template">
        <UButton label="Menu" size="xl" color="neutral" variant="ghost" icon="i-lucide-menu" />

        <template #body>
          <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-48" />
        </template>
      </USlideover>
    
      <Logo class="h-6 w-auto" />
    </template>

    <template #right>
      <Search />
      
      <UColorModeButton />

      <USlideover side="right" title="Starter Template">
        <UButton size="xl" color="neutral" variant="ghost" icon="i-lucide-circle-user" />

        <template #body>
          <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-48" />
        </template>
      </USlideover>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
  import type {
    NavigationMenuItem
  } from '@nuxt/ui'
  import Logo from '../blocks/logo.vue'
  import Search from '../search/search.vue'

  const route = useRoute()

  const items = computed < NavigationMenuItem[] > (() => [{
    label: 'Docs',
    to: '/docs/getting-started',
    icon: 'i-lucide-book-open',
    active: route.path.startsWith('/docs/getting-started')
  }, {
    label: 'Components',
    to: '/docs/components',
    icon: 'i-lucide-box',
    active: route.path.startsWith('/docs/components')
  }, {
    label: 'Figma',
    icon: 'i-simple-icons-figma',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank'
  }, {
    label: 'Releases',
    icon: 'i-lucide-rocket',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank'
  }])
</script>