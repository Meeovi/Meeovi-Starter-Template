<template>
    <div>
        <v-app-bar id="topnav" density="compact">
            <template #prepend>
                <v-btn variant="flat" @click="$emit('toggleDrawer')">
                    <v-icon start icon="fas fa-bars" />
                    Menu
                </v-btn>
            </template>

            <div class="header-brand px-4 text-high-emphasis">
                <Logo />
            </div>

            <v-spacer />

            <mobilesearch class="mobile-search" />

            <div class="desktop-search">
                <SearchWrapper />
            </div>

            <v-spacer />

            <div class="d-flex align-center ga-2 pr-2">
                <v-btn title="Health" icon="fas fa-heartbeat" href="/api/health" variant="text" />
                <v-btn @click="toggleDark" variant="text">
                    <v-icon>
                        {{ isDark ? 'fas fa-moon' : 'fas fa-sun' }}
                    </v-icon>
                </v-btn>

                <ecosystemmenu />

                <accountMenu />
            </div>
        </v-app-bar>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import SearchWrapper from '../search/SearchWrapper.vue'
import Logo from '../blocks/logo.vue'
import mobilesearch from './mobilesearch.vue'
import ecosystemmenu from './ecosystemmenu.vue'
import accountMenu from './accountMenu.vue'

defineProps({
    drawer: {
        type: Boolean,
        default: false,
    },
})

defineEmits(['toggleDrawer'])

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')

const toggleDark = () => {
    theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>