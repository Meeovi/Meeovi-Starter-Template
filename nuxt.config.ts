export default defineNuxtConfig({
  future: {
    compatibilityVersion: 5,
  },

  ssr: true,

  extends: [
    '@mframework/layer-shared',
    '@mframework/layer-auth',
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
    'assets/styles/mobile.css',
    'assets/styles/styles.css',
  ],

  modules: [],

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