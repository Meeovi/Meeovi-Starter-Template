<template>
    <UCard variant="text" class="lowerBar">
        <v-tabs v-model="tab" :bg-color="lowerbar?.color" :color="lowerbar?.colortext" align-tabs="center">
            <div v-for="(menu, index) in lowerbar?.menus" :key="index">
                <v-tab :value="menu?.value">
                    <UButton variant="text" :style="`color: ${lowerbar?.colortext} !important`"
                        :href="menu?.url">{{ menu?.name }}</UButton>
                </v-tab>
            </div>
        </v-tabs>
    </UCard>
</template>

<script setup>
    import {
        ref
    } from 'vue'

    const tab = ref(null);

    const {
        $directus,
        $readItem
    } = useNuxtApp()
    const route = useRoute()

    const {
        data: lowerbar
    } = await useAsyncData('lowerbar', () => {
        return $directus.request($readItem('navigation', '51', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })
</script>