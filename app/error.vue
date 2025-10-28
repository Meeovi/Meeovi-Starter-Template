<template>
    <div>
        <section data-bs-version="5.1" class="header18 cid-v0WfSD6Mxt mbr-fullscreen"
            data-bg-video="https://www.youtube.com/watch?v=2Gg6Seob5Mg" id="header18-3">


            <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(0, 0, 0);"></div>
            <div class="container-fluid">
                <div class="row">
                    <div class="content-wrap col-12 col-md-12">
                        <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">
                            <strong>{{ page?.name }}</strong>
                        </h1>

                        <p class="mbr-fonts-style mbr-text mbr-white mb-4 display-7" v-html="page?.content"></p>

                        <div class="mbr-section-btn">
                            <NuxtLink class="btn btn-white-outline display-7" :to="page?.link">
                                {{ page?.repeaterTextBox?.[1]?.name }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const route = useRoute();
    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: page
    } = await useAsyncData('page', () => {
        return $directus.request($readItems('pages', {
            filter: {
                id: {
                    _eq: 16
                }
            },
            fields: ['*'],
            limit: 1
        })).then(response => response?.[0]) // Get first item from response
    })
</script>