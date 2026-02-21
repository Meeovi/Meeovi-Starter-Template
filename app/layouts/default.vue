<template>
  <div>
    <NuxtPwaManifest />
    <NuxtLoadingIndicator />
    <UApp>
      <Header />

      <UMain>
        <slot />
      </UMain>
      
      <Footer />
    </UApp>

    <ClientOnly>
      <div v-if="$pwa?.offlineReady || $pwa?.needRefresh" class="pwa-toast" role="alert">
        <div class="message">
          <span v-if="$pwa.offlineReady">
            App ready to work offline
          </span>
          <span v-else>
            New content available, click on reload button to update.
          </span>
        </div>
        <UButton v-if="$pwa.needRefresh" @click="$pwa.updateServiceWorker()">
          Reload
        </UButton>
        <UButton @click="$pwa.cancelPrompt()">
          Close
        </UButton>
      </div>
      <div v-if="$pwa?.showInstallPrompt && !$pwa?.offlineReady && !$pwa?.needRefresh" class="pwa-toast" role="alert">
        <div class="message">
          <span>
            Install PWA
          </span>
        </div>
        <UButton @click="$pwa.install()">
          Install
        </UButton>
        <UButton @click="$pwa.cancelInstall()">
          Cancel
        </UButton>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
  import Footer from '../components/menus/Footer.vue'
  import sidebarnav from '../components/menus/sidebarnav.vue'
  import Header from '../components/menus/Header.vue'

  useSeoMeta({
    title: 'Starter Template'
  })
</script>

<style>
  .pwa-toast {
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 16px;
    padding: 12px;
    border: 1px solid #8885;
    border-radius: 4px;
    z-index: 1;
    text-align: left;
    box-shadow: 3px 4px 5px 0 #8885;
  }

  .pwa-toast .message {
    margin-bottom: 8px;
  }

  .pwa-toast button {
    border: 1px solid #8885;
    outline: none;
    margin-right: 5px;
    border-radius: 2px;
    padding: 3px 10px;
  }
</style>