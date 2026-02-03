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
    // Provide via both `provide` and direct assignment for compatibility
    // with code that reads `nuxtApp.$directus` or uses injection.
    nuxtApp.provide?.('directus', mock)
    nuxtApp.$directus = mock
  }
})
