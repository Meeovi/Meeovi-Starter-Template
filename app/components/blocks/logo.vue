<template>
    <div>
        <NuxtLink class="logobrand sf-header__logo-link" href="/">
            <div v-if="blocksSiteoverview?.media?.directus_files_id">
                <v-btn class="sf-header__logo-img" :avatar="{src: `${$directus.url}assets/${blocksSiteoverview?.media?.[0]?.directus_files_id?.filename_disk}`}" size="xl" color="neutral" variant="text">
                    {{ blocksSiteoverview?.name || 'Starter Template' }}
                </v-btn>
            </div>

            <div v-else start>
                <v-btn class="sf-header__logo-img" :avatar="{ src: '/images/logo.png' }" size="md" color="neutral" variant="text">
                    {{ blocksSiteoverview?.name || 'Starter Template' }}
                </v-btn>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import {
        useNuxtApp,
        useAsyncData
    } from '#app'

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: blocksSiteoverview
    } = await useAsyncData('blocksSiteoverview', () => {
        if (!$directus || typeof $directus.request !== 'function' || typeof $readItem !== 'function') {
            return {
                name: 'Starter Template',
                media: [],
            }
        }

        return $directus.request($readItem('page_blocks', '19', {
            fields: ['*', 'media.*.*'],
        })).catch(() => ({
            name: 'Starter Template',
            media: [],
        }))
    })
</script>