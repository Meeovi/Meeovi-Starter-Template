import process from 'node:process'

const sw = process.env.SW === 'true'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 5,
  },

  ssr: true,

  extends: [
    //'@mframework/layer-shared',
    //'@mframework/layer-auth',
    '@mframework/layer-search'
  ],

  app: {
    baseURL: '/',
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      templateParams: {
        separator: '·'
      },
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: '%s - Meeovi Starter',
      meta: [{
          name: 'description',
          content: `${process.env.NUXT_PUBLIC_SITE_DESCRIPTION || 'Meeovi Starter Template'}`
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
      link: [{
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon-180x180.png'
        }
      ]
    }
  },

  appConfig: {
    titleSuffix: `${process.env.NUXT_PUBLIC_SITE_NAME || ' - Meeovi Starter Template'}`
  },

  css: [
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/theme/css/style.css',
    'assets/mobirise/css/mbr-additional.css',
    'assets/styles/main.css',
    'assets/styles/mobile.css',
    'assets/styles/styles.css',
  ],

  modules: ['@vite-pwa/nuxt', '@nuxt/image', '@nuxt/ui'],

  pwa: {
    strategies: sw ? 'injectManifest' : 'generateSW',
    srcDir: sw ? 'service-worker' : undefined,
    filename: sw ? 'sw.ts' : undefined,
    registerType: 'autoUpdate',
    manifest: {
      name: process.env.NUXT_PUBLIC_SITE_NAME || 'Meeovi Starter Template',
      short_name: process.env.NUXT_PUBLIC_SITE_NAME || 'Meeovi Starter Template',
      theme_color: '#ffffff',
      icons: [{
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },

    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },

  runtimeConfig: {
    meeoviSecret: process.env.MEEOVI_SECRET,
    public: {
      meeoviProvider: process.env.MEEOVI_PROVIDER || (process.env.OPENSEARCH_HOST ? 'opensearch' : 'directus'),
      directus: {
        url: process.env.DIRECTUS_URL || '',
        staticToken: process.env.DIRECTUS_STATIC_TOKEN || ''
      },
      magento: {
        baseUrl: process.env.MAGENTO_BASE_URL || '',
        accessToken: process.env.MAGENTO_ACCESS_TOKEN || ''
      },
      appName: process.env.APP_NAME || 'Meeovi Starter',
      // expose a public search index name for client-side components (optional)
      search: {
        index: process.env.NUXT_PUBLIC_SEARCH_INDEX || process.env.NUXT_PUBLIC_OPENSEARCH_INDEX || process.env.NUXT_PUBLIC_SEARCHKIT_INDEX || process.env.OPENSEARCH_INDEX || process.env.SEARCH_INDEX || ''
      }
    }
  },

  compatibilityDate: '2026-02-15',
  nitro: {
    experimental: {
      wasm: true,
    },
  },
})