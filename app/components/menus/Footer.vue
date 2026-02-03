<template>
    <div>
        <section data-bs-version="5.1" class="nichem5 footer1 cid-uYyskHkMB5 auto-text" once="footer" id="footer01-i">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 logo-footer mb-3 mt-3 align-left">

                        <p class="mbr-fonts-style text-logo-footer pt-2 mb-0 display-4"
                            style="width: 100%; text-align: center;">
                            {{ blocksCopyright?.content?.[0]?.subtitle }} {{ new Date().getFullYear() }}&nbsp;<NuxtLink
                                :to="blocksCopyright?.content?.[0]?.url">{{ blocksCopyright?.name }}&nbsp;&nbsp;
                            </NuxtLink>
                            {{ blocksCopyright?.content?.[0]?.name }}
                        </p>
                    </div>
                    <div class="col-lg-5 copyright mb-3 mt-3 align-self-center">
                        <ul class="mbr-list list-inline align-center">
                            <li class="list-inline-item mbr-fonts-style display-4" v-for="child in about?.menus"
                                :key="child.id">
                                <NuxtLink :to="`${child.url}`" class="text-white mbr-semibold">{{ child?.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: about
    } = await useAsyncData('about', () => {
        return $directus.request($readItem('navigation', '74', ))
    })

    const {
        data: blocksCopyright
    } = await useAsyncData('blocksCopyright', () => {
        return $directus.request($readItem('page_blocks', '5', {
            fields: ['*', 'media.*.*'],
        }))
    })

    const {
        data: copyright
    } = await useAsyncData('copyright', () => {
        return $directus.request($readItem('navigation', '10'))
    })
</script>