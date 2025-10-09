<template>
    <div>
        <section data-bs-version="5.1" class="nichem5 features4 cid-uYyqLlrkj2" id="features04-8">


            <div class="container">
                <div class="mbr-section-head mb-5">
                    <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                        <strong>{{ page?.name }}</strong>
                    </h4>
                    <h5 class="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-7">
                        {{ page?.description }}</h5>
                </div>
                <div class="row justify-content-center mt-4">
                    <div class="item features-image col-12 col-md-6 col-lg-4" v-for="menu in websites" :key="menu?.id">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <v-avatar :icon="`fas:fa fa-${menu?.icon}`" size="180"></v-avatar>
                            </div>
                            <div class="item-content">
                                <h6 class="item-subtitle mbr-fonts-style mt-1 display-4">
                                    <strong>{{ menu?.name }}</strong>
                                </h6>
                                <h5 class="item-title mbr-fonts-style display-7"><strong>{{ menu?.description }}&nbsp;</strong></h5>

                                <NuxtLink :to="menu?.slug" class="mbr-text mbr-fonts-style mt-3 display-4">Visit</NuxtLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const {
        data: page
    } = await useAsyncData('page', () => {
        return $directus.request($readItem('pages', '46', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: websites
    } = await useAsyncData('websites', () => {
        return $directus.request($readItem('navigation', '12'))
    })
</script>