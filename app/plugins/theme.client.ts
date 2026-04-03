/**
 * Theme initialization plugin - runs on client
 * Detects stored preference or system preference
 * Must run synchronously before first paint to prevent FOUC
 */
export default defineNuxtPlugin((nuxtApp) => {
  const STORAGE_KEY = 'elite-theme'
  const { $vuetify } = nuxtApp

  // Check for server-set cookie or stored preference
  const initTheme = (): string => {
    // First check: stored preference
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    if (stored && (stored === 'light' || stored === 'dark')) {
      return stored
    }

    // Second check: system preference
    const prefersDark =
      typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }

  const theme = initTheme()
  if ($vuetify) {
    $vuetify.theme.global.name.value = theme
  }

  return {
    provide: {
      theme: {
        current: theme,
      },
    },
  }
})
