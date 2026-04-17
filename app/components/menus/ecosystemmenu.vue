<template>
    <v-menu offset="20" location="bottom right">
        <template v-slot:activator="{ props }">
            <v-btn 
                :title="eco?.description"
                v-bind="props"
            >
                <v-icon start icon="fas fa-grip"></v-icon>
            </v-btn>
        </template>

        <v-card class="ecosystem-menu-container">
            <div class="d-flex justify-space-between align-center mb-4">
                <v-card-title class="text-h6">{{ eco?.name }}</v-card-title>
            </div>

            <v-row>
                <v-col cols="6" v-for="menu in activeMenus" :key="menu?.id">
                    <NuxtLink :to="menu?.slug">
                        <v-card class="mx-auto h-100" max-width="250">
                            <div class="ecoAvatar d-flex justify-center align-center" style="padding: 16px;">
                                <v-avatar :icon="`fas:fa fa-${menu?.icon}`" size="120"></v-avatar>
                            </div>
                            <v-card-title class="ecoTitle text-center">{{ menu?.name }}</v-card-title>
                        </v-card>
                    </NuxtLink>
                </v-col>
            </v-row>
        </v-card>
    </v-menu>
</template>

<script setup>
    import {
        computed
    } from 'vue'
    const gateway = useGateway()
    const content = gateway.content

    const {
        data: eco
    } = await useAsyncData('eco', () => {
        if (!content || typeof content.readItem !== 'function') {
            return {
                menus: [],
            }
        }

        return content.readItem('navigation', '12').catch(() => ({
            menus: [],
        }))
    }, {
        server: false,
        default: () => ({ menus: [] }),
    })

    // Add this computed property to filter active menus
    const activeMenus = computed(() => {
        return eco.value?.menus?.filter(menu => menu.active === 'Active') || []
    })
</script>