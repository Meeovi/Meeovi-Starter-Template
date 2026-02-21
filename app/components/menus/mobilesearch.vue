<template>
    <div id="minSearch">
        <div class="text-center">
            <UModal v-model="dialog" width="auto">
                <template v-slot:activator="{ props }">
                    <UButton icon="fas fa-search" title="Search" v-bind="props"></UButton>
                </template>

                <template v-slot:default="{ isActive }">
                    <UCard min-height="100" min-width="500">
                        <search />
                        <template>
                            <UButton color="primary" block @click="isActive.value = false">Close Search</UButton>
                        </template>
                    </UCard>
                </template>
            </UModal>
        </div>
    </div>
</template>

<script setup>
    import {
        ref,
        watch,
        onMounted,
        nextTick
    } from 'vue'
    import Search from '@mframework/layer-search/app/components/search.vue'

    const dialog = ref(false)
    const searchContainer = ref(null)
    let scriptLoaded = false

    const loadGoogleSearch = () => {
        if (scriptLoaded || window.google?.search?.cse) return
        const script = document.createElement('script')
        script.async = true
        script.src = 'https://cse.google.com/cse.js?cx=4738e106b877e41dd'
        script.onload = () => {
            scriptLoaded = true
        }
        document.head.appendChild(script)
    }

    const renderSearch = () => {
        if (window.google?.search?.cse?.element) {
            window.google.search.cse.element.render({
                div: searchContainer.value,
                tag: 'search'
            })
        }
    }

    onMounted(() => {
        loadGoogleSearch()
    })

    watch(dialog, async (open) => {
        if (open) {
            await nextTick()
            setTimeout(() => {
                if (searchContainer.value && window.google?.search?.cse?.element) {
                    window.google.search.cse.element.render({
                        div: searchContainer.value,
                        tag: 'search'
                    })
                }
            }, 100)
        }
    })
</script>