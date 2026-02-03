import { defineNuxtPlugin } from '#app'
import { initThemeSearch } from '../stores'

export default defineNuxtPlugin(() => {
  // Initialize search config early on the client so layer-search
  // composables can read runtime config when used in components.
  try {
    initThemeSearch()
  } catch (e) {
    // Keep plugin safe — if init fails, don't break app startup.
    // Errors usually mean env variables are missing during dev.
    // eslint-disable-next-line no-console
    console.warn('initThemeSearch() failed:', e)
  }
})
