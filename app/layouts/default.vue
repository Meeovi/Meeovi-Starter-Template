<template>
  <v-app :theme="theme.global.name.value" class="auto-text">
    <Header />
    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer v-model="drawer" temporary>
            <sidebarnav />
            <v-spacer></v-spacer>
          </v-navigation-drawer>

          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <div>
              <slot />
            </div>
          </main>
        </v-layout>
      </v-card>
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
  import Footer from '~/components/menus/Footer.vue'
  import sidebarnav from '~/components/menus/sidebarnav.vue'
  import { ref, onMounted, watch, computed } from 'vue';
  import { useTheme } from 'vuetify'
  import Header from '~/components/menus/Header.vue'

  const drawer = ref(null);

  const theme = useTheme()

  // Local storage key
  const STORAGE_KEY = 'elite-theme'

  // isDark reflects the current theme name
  const isDark = computed(() => (theme.global.name?.value || '').toLowerCase() === 'dark')

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
  const toggleDark = () => {
    theme.global.name.value = (theme.global.name.value === 'dark') ? 'light' : 'dark'
  }

  // Save preference whenever theme name changes
  watch(
    () => theme.global.name.value,
    (val) => {
      if (val) localStorage.setItem(STORAGE_KEY, val)
    }
  )

  useSeoMeta({
    title: 'Starter Template',
    htmlAttrs: {
      // uncomment this line to simulate dark mode
      // class: 'dark',
    },
  });
</script>