<template>
  <div>
    <NuxtLoadingIndicator />
    <v-responsive class="border rounded">
      <v-app :theme="theme?.global?.name?.value" class="auto-text">
        <Header :drawer="drawer" @toggle-drawer="drawer = !drawer" />
        <OfflineAlert />


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
  </div>
</template>

<script setup lang="ts">
  import Footer from '../components/menus/Footer.vue'
  import sidebarnav from '../components/menus/sidebarnav.vue'
  import Header from '../components/menus/Header.vue'
  import OfflineAlert from '#shared/app/components/alerts/OfflineAlert.vue'
  import {
    ref,
    watch
  } from 'vue'
  import {
    useTheme
  } from 'vuetify'

  const drawer = ref(false)
  const theme = useTheme()

  const STORAGE_KEY = 'elite-theme'

  // Theme is now initialized via plugins (server + client)
  // This watcher just ensures persistence when user toggles theme
  watch(
    () => theme.global.name.value,
    (value) => {
      if (typeof localStorage === 'undefined') return
      if (value) {
        localStorage.setItem(STORAGE_KEY, value)
        document.documentElement.setAttribute('data-theme', value)
      }
    },
  )
</script>