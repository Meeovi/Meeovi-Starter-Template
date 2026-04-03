<template>
    <div>
        <NuxtLink class="logobrand" href="/">
            <div v-if="blocksSiteoverview?.media?.directus_files_id">
                <v-btn :avatar="{src: `${$directus.url}assets/${blocksSiteoverview?.media?.[0]?.directus_files_id?.filename_disk}`}" size="xl" color="neutral" variant="text">
                    {{ blocksSiteoverview?.name || 'Meeovi' }}
                </v-btn>
            </div>

            <div v-else start>
                <v-btn :avatar="{ src: '/images/logo.png' }" size="md" color="neutral" variant="text">
                    {{ blocksSiteoverview?.name || 'Meeovi' }}
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
                name: 'Meeovi',
                media: [],
            }
        }

        return $directus.request($readItem('page_blocks', '19', {
            fields: ['*', 'media.*.*'],
        })).catch(() => ({
            name: 'Meeovi',
            media: [],
        }))
    })
</script>