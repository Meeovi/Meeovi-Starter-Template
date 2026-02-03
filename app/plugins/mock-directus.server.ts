import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp: any) => {
  // Provide a safe mock Directus client when none is registered. This
  // prevents prerender from failing when pages call `$directus.request`.
  // If an application registers a real Directus client, this mock is
  // skipped.
  if (!nuxtApp.$directus) {
    const mock = {
      request: async () => null,
      client: { request: async () => null },
    }

    const readShim = (..._args: any[]) => ({ shim: true })

    // Provide via both `provide` and direct assignment for compatibility
    // with code that reads `nuxtApp.$directus` or uses injection.
    nuxtApp.provide?.('directus', mock)
    nuxtApp.$directus = mock

    // Provide common Directus helpers used across the theme/layers. These
    // shims return benign objects so `$directus.request($readItems(...))`
    // calls don't throw during prerender. Real applications should provide
    // the actual Directus helpers when available.
    nuxtApp.$readItem = readShim
    nuxtApp.$readItems = readShim
    nuxtApp.$readFieldsByCollection = readShim
    nuxtApp.$readFields = readShim
  }
})
