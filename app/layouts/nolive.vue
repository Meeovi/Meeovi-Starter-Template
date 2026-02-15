<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme?.global?.name?.value" class="auto-text">
      <Header />

      <v-main>
        <v-card>
          <v-layout>
            <v-navigation-drawer v-model="drawer" temporary>
              <sidebarnav />
              <v-spacer />
            </v-navigation-drawer>

            <v-main id="sidebarNav" />
            <main id="mainSection">
              <slot />
            </main>
          </v-layout>
        </v-card>

        <Footer />
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
  import Footer from '../components/menus/Footer.vue'
  import sidebarnav from '../components/menus/sidebarnav.vue'
  import Header from '../components/menus/Header.vue'
  import {
    ref,
    watch,
    onMounted
  } from 'vue'
  import {
    useTheme
  } from 'vuetify'

  const drawer = ref(null)
  const theme = useTheme()

  const STORAGE_KEY = 'elite-theme'

  // Load saved theme on mount
  onMounted(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      theme.global.name.value = stored
    }
  })

  // Save theme when it changes
  watch(
    () => theme.global.name.value,
    (val) => {
      if (val) localStorage.setItem(STORAGE_KEY, val)
    }
  )

  useSeoMeta({
    title: 'Starter Template'
  })
</script>