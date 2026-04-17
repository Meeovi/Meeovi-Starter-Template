import {
  useLayers
} from 'nuxt-layers-utils'

const layers = useLayers(__dirname, {
  shared: '../../../layers/shared',
  auth: '../../../layers/auth',
  social: '../../../layers/social',
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
    'assets/styles/search.css',
  ],

  runtimeConfig: {
    meeoviSecret: process.env.MEEOVI_SECRET,
    databaseProvider: process.env.DATABASE_PROVIDER || 'postgresql',
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
        index: process.env.ALTERNATE_SEARCH_INDEX || process.env.NUXT_PUBLIC_SEARCH_INDEX || process.env.SEARCH_INDEX || ''
      },
      payments: {
        provider: process.env.PAYMENT_PROVIDER || process.env.NUXT_PAYMENT || 'stripe'
      },
      storage: {
        provider: process.env.STORAGE_PROVIDER || process.env.NUXT_APP_STORAGE || 'local'
      },
      image: {
        optimizer: process.env.IMAGE_OPTIMIZER || process.env.IMAGE_PROVIDER || 'netlify',
        cdnDomain: process.env.IMAGE_CDN_DOMAIN || process.env.TWICPICS_DOMAIN || ''
      }
    }
  },


  nitro: {
    externals: {
      trace: false,
      inline: ['vue', '@vue/server-renderer']
    }
  },

  compatibilityDate: '2026-02-15'
})