<template>
    <div>
        <NuxtLink class="logobrand" href="/">
            <div v-if="blocksSiteoverview?.media?.directus_files_id">
                <UButton :avatar="{src: `${$directus.url}assets/${blocksSiteoverview?.media?.[0]?.directus_files_id?.filename_disk}`}" size="xl" color="neutral" variant="ghost">
                    {{ blocksSiteoverview?.name || 'Meeovi' }}
                </UButton>
            </div>

            <div v-else start>
                <UButton :avatar="{ src: '/images/logo.png' }" size="md" color="neutral" variant="ghost">
                    {{ blocksSiteoverview?.name || 'Meeovi' }}
                </UButton>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: blocksSiteoverview
    } = await useAsyncData('blocksSiteoverview', () => {
        return $directus.request($readItem('page_blocks', '19', {
            fields: ['*', 'media.*.*'],
        }))
    })
</script>