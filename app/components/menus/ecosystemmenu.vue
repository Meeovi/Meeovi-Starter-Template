<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <UButton v-bind="props" :title="eco?.description">
                    <UIcon start icon="fas:fa fa-grip"></UIcon>
                </UButton>
            </template>
            <UCard>
                <v-toolbar dark color="primary">
                    <UButton icon dark @click="dialog = false">
                        <UIcon icon="fas:fa fa-circle-xmark"></UIcon>
                    </UButton>
                    <template #header>
                        <span class="text-h6">{{ eco?.name }}</span>
                    </template>
                </v-toolbar>
                <v-row style="padding: 10px;">
                    <v-col cols="3" v-for="menu in activeMenus" :key="menu?.id">
                        <NuxtLink :to="menu?.slug">
                            <UCard class="mx-auto" max-width="300">
                                <div class="ecoAvatar">
                                    <UAvatar :icon="`fas:fa fa-${menu?.icon}`" size="180"></UAvatar>
                                </div>
                                <UCard-title class="ecoTitle">{{ menu?.name }}</template>
                            </UCard>
                        </NuxtLink>
                    </v-col>
                </v-row>
            </UCard>
        </v-dialog>
    </v-row>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    const {
        $directus,
        $readItem
    } = useNuxtApp()
    const route = useRoute()

    const {
        data: eco
    } = await useAsyncData('eco', () => {
        return $directus.request($readItem('navigation', '12'))
    })

    const dialog = ref(false);

    // Add this computed property to filter active menus
const activeMenus = computed(() => {
    return eco.value?.menus?.filter(menu => menu.active === 'Active') || []
})
</script>