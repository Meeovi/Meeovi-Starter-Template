<template>
    <div>
        <v-app-bar-title>
            <NuxtLink class="logobrand" href="/">
                <v-icon start color="orange" v-if="blocksSiteoverview?.media?.directus_files_id">
                    <img loading="lazy"
                        :src="`${$directus.url}assets/${blocksSiteoverview?.media?.[0]?.directus_files_id?.filename_disk}`"
                        :alt="blocksSiteoverview?.name" />
                </v-icon>

                <v-icon v-else start>
                    <img src="/images/logo.png" :alt="blocksSiteoverview?.name" />
                </v-icon>
                <p class="logotext">{{ blocksSiteoverview?.name }}<!--Meeovi--></p>
            </NuxtLink>
        </v-app-bar-title>
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