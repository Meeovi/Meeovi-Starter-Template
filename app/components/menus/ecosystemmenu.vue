<template>
    <div>
        <UDropdownMenu v-if="activeMenus.length !== 0" v-for="menu in activeMenus" :key="menu?.id" :items="getItems(menu)" :ui="{content: 'w-48'}">
            <UButton icon="i-lucide-menu" color="neutral" variant="ghost" />
        </UDropdownMenu>
    </div>
</template>

<script setup lang="ts">
    import {
        ref,
        computed
    } from 'vue'
    import type {
        DropdownMenuItem
    } from '@nuxt/ui'

    const {
        $directus,
        $readItem
    } = useNuxtApp()
    const route = useRoute()

    const {
        data: eco
    } = await useAsyncData('eco', () => {
        return $directus.request($readItem('navigation', '12'))
    })

    const dialog = ref(false);

    // Add this computed property to filter active menus
    const activeMenus = computed(() => {
        return eco.value?.menus?.filter((menu: { active: string }) => menu.active === 'Active') || []
    })

    function getItems(menu: any): DropdownMenuItem[][] {
        return [
            [{
                label: 'The Meeovi Company',
                avatar: {
                    src: '/images/logo.png'
                },
                type: 'label'
            }],
            [{
                label: menu?.name,
                icon: menu?.icon,
                to: menu?.slug
            }],
        ]
    }

</script>