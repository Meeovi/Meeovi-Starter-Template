<template>
    <v-menu offset="20" location="bottom left">
        <template v-slot:activator="{ props }">
            <v-btn icon="fas fa-user-circle" size="large" v-bind="props"></v-btn>
        </template>

        <v-card class="account-menu-container">
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="John Leider"
                subtitle="john@example.com" class="mb-3"></v-list-item>

            <v-divider></v-divider>
            
            <v-list v-for="item in navAccount?.menus" :key="item">
                <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url">
                </v-list-item>
            </v-list>
        </v-card>
    </v-menu>
</template>

<script setup>
    const {
        $directus,
        $readItem
    } = useNuxtApp()
    const route = useRoute()

    const {
        data: navAccount
    } = await useAsyncData('navAccount', () => {
        if (!$directus || typeof $directus.request !== 'function' || typeof $readItem !== 'function') {
            return {
                menus: [],
            }
        }

        return $directus.request($readItem('navigation', '2')).catch(() => ({
            menus: [],
        }))
    })
</script>