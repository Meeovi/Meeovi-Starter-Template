<template>
    <div>
        <v-app-bar id="topnav" density="compact">
            <template v-slot:prepend>
                <v-btn variant="flat" @click="drawer = !drawer">
                    <v-icon start icon="fas fa-bars"></v-icon> Menu
                </v-btn>
            </template>

            <logo />
            <v-spacer></v-spacer>

            <mobilesearch />

            <ClientOnly>
                <Search />
            </ClientOnly>

            <v-spacer></v-spacer>

            <div class="d-flex align-center flex-column flex-sm-row fill-height">
                <v-col cols="3">
                    <v-btn @click="toggleDark()" variant="text">
                        <v-icon>
                            {{ isDark ? 'fas:fa fa-moon' : 'fas:fa fa-sun' }}
                        </v-icon>
                    </v-btn>
                </v-col>
                <!--<v-col>
                    <LayoutNotifications />
                </v-col>-->

                <v-col>
                    <ecosystemmenu />
                </v-col>
                <v-col>
                    <v-menu :location="location" transition="slide-y-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn variant="flat" v-bind="props">
                                <v-icon start icon="fas fa-user-circle"></v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item title="My Account" value="my account" href="/admin/user/"></v-list-item>
                            <v-list-item title="Logout" value="logout" href="/logout"></v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
            </div>
        </v-app-bar>
    </div>
</template>

<script setup>
    import logo from '~/components/blocks/logo.vue'
    import ecosystemmenu from '~/components/menus/ecosystemmenu.vue'
    //import LayoutNotifications from '~/components/menus/Notifications.vue'
    import mobilesearch from '~/components/menus/mobilesearch.vue'
    import {
        ref,
        onMounted,
        watch,
        computed
    } from 'vue';
    import {
        useTheme
    } from 'vuetify'

    const drawer = ref(null);

    const theme = useTheme()
    const location = ref('bottom')

    // Local storage key
    const STORAGE_KEY = 'elite-theme'

    // isDark reflects the current theme name
    const isDark = computed(() => theme.global.name.value === 'dark')

    // Determine initial mode
    onMounted(() => {
        const stored = localStorage.getItem(STORAGE_KEY)

        if (stored) {
            // Use saved preference
            theme.global.name.value = stored
        } else {
            // No preference — follow system
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            theme.global.name.value = prefersDark ? 'dark' : 'light'
        }
    })

    // Toggle between themes
    const toggleDark = () => { theme.global.name.value = isDark.value ? 'light' : 'dark' }

    // Save preference whenever theme name changes
    watch(
        () => theme.global.name.value,
        (val) => {
            if (val) localStorage.setItem(STORAGE_KEY, val)
        }
    )
</script>