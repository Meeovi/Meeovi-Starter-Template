/**
 * Theme initialization plugin - runs on server
 * Injects an inline script that runs before first paint
 * This prevents "Flash of Unstyled Content" (FOUC) on theme detection
 */
export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        type: 'module',
        innerHTML: `
          (function() {
            const STORAGE_KEY = 'elite-theme'
            try {
              const stored = localStorage?.getItem(STORAGE_KEY)
              if (stored && (stored === 'light' || stored === 'dark')) {
                document.documentElement.setAttribute('data-theme', stored)
                return
              }
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
              const theme = prefersDark ? 'dark' : 'light'
              document.documentElement.setAttribute('data-theme', theme)
            } catch (e) {
              // localStorage access might fail; allow natural preference
            }
          })()
        `,
        async: false,
      },
    ],
  })
})
