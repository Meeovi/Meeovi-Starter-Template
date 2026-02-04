export default defineNuxtConfig({
  srcDir: 'src',

  ssr: true,

  typescript: {
    strict: true,
    typeCheck: true
  },

  extends: [
    '@meeovi/layer-auth',
    '@meeovi/layer-search',
    '@meeovi/layer-shared'
  ],

  experimental: {
    watcher: 'parcel',
    payloadExtraction: true
  },

  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      templateParams: { separator: '·' },
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s - Meeovi Starter',
      meta: [
        { name: 'description', content: `${process.env.NUXT_PUBLIC_SITE_DESCRIPTION || 'Meeovi Starter Template'}` },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-180x180.png' }
      ]
    }
  },

  appConfig: {
    titleSuffix: `${process.env.NUXT_PUBLIC_SITE_NAME || ' - Meeovi Starter Template'}`
  },

  css: [],

  modules: [
    '@nuxt/image'
  ],

  image: { provider: 'netlify' },

  runtimeConfig: {
    meeoviSecret: process.env.MEEOVI_SECRET,
    public: {
      meeoviProvider: process.env.MEEOVI_PROVIDER || 'directus',
      directus: { url: process.env.DIRECTUS_URL || '', staticToken: process.env.DIRECTUS_STATIC_TOKEN || '' },
      magento: { baseUrl: process.env.MAGENTO_BASE_URL || '', accessToken: process.env.MAGENTO_ACCESS_TOKEN || '' },
      appName: process.env.APP_NAME || 'Meeovi Starter'
    }
  },

  nitro: {
    preset: 'node-server',
    prerender: { crawlLinks: false },
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'SAMEORIGIN',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        }
      }
    }
  },

  vite: {
    build: { sourcemap: process.env.NODE_ENV !== 'production' }
  }
})