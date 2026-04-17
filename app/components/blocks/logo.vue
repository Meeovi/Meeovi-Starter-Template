<template>
    <div>
        <NuxtLink class="logobrand sf-header__logo-link" href="/">
            <div v-if="blocksSiteoverview?.media?.directus_files_id">
                <v-btn class="sf-header__logo-img" :avatar="{ src: logoAssetSrc }" size="xl" color="neutral" variant="text">
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
        computed
    } from 'vue'

    const gateway = useGateway()
    const content = gateway.content

    const {
        data: blocksSiteoverview
    } = await useAsyncData('blocksSiteoverview', () => {
        if (!content || typeof content.readItem !== 'function') {
            return {
                name: 'Starter Template',
                media: [],
            }
        }

        return content.readItem('page_blocks', '19', {
            fields: ['*', 'media.*.*'],
        }).catch(() => ({
            name: 'Starter Template',
            media: [],
        }))
    }, {
        server: false,
        default: () => ({
            name: 'Starter Template',
            media: [],
        }),
    })

    const logoAssetSrc = computed(() => {
        const file = blocksSiteoverview.value?.media?.[0]?.directus_files_id

        if (!file || !content || typeof content.getAssetUrl !== 'function') {
            return '/images/logo.png'
        }

        return content.getAssetUrl(file)
    })
</script>