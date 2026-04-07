import {
  useLayers
} from 'nuxt-layers-utils'

const layers = useLayers(__dirname, {
  shared: '../../../layers/shared',
  auth: '../../../layers/auth',
})

export default defineNuxtConfig({
  extends: layers.extends(),
  alias: layers.alias('#'),

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
      titleTemplate: `%s - ${process.env.NUXT_PUBLIC_SITE_NAME || 'M Framework Starter Template'}`,
      meta: [{
          name: 'description',
          content: `${process.env.NUXT_PUBLIC_SITE_DESCRIPTION || 'M Framework Starter Template'}`
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
    titleSuffix: `${process.env.NUXT_PUBLIC_SITE_NAME || ' - M Framework Starter Template'}`
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

  runtimeConfig: {
    meeoviSecret: process.env.MEEOVI_SECRET,
    public: {
      meeoviProvider: process.env.MEEOVI_PROVIDER || 'opensearch',
      directus: {
        url: process.env.DIRECTUS_URL || '',
        staticToken: process.env.DIRECTUS_STATIC_TOKEN || ''
      },
      magento: {
        baseUrl: process.env.MAGENTO_BASE_URL || '',
        accessToken: process.env.MAGENTO_ACCESS_TOKEN || ''
      },
      search: {
        index: process.env.NUXT_PUBLIC_SEARCH_INDEX || process.env.NUXT_PUBLIC_OPENSEARCH_INDEX || process.env.NUXT_PUBLIC_SEARCHKIT_INDEX || process.env.OPENSEARCH_INDEX || process.env.SEARCH_INDEX || ''
      }
    }
  },

  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'fa',
        sets: [
          {
            name: 'fa',
            cdn: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/css/all.min.css'
          }
        ]
      }
    }
  },

  compatibilityDate: '2026-02-15'
})