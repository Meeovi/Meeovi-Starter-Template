require('dotenv').config()

export default {
  target: 'static',

  head: {
    title: 'AlternateCMS Starter Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      {rel: 'stylesheet', href: '/assets/styles/main.css'},
      {rel: 'stylesheet', href: '/assets/mdb/plugins/css/all.min.css'},
      {rel: 'stylesheet', href: '/assets/mdb/plugins/css/wysiwyg.min.css'},
      {rel: 'stylesheet', href: '/assets/mdb/css/mdb.min.css'},
    ],
    script: [
      { src: '/assets/scripts/main.js', mode: 'client'},
      { src: '/assets/mdb/plugins/js/all.min.js', mode: 'client'},
      { src: '/assets/mdb/plugins/js/wysiwyg.min.js', mode: 'client'},
      { src: '/assets/mdb/js/mdb.min.js', mode: 'client'},
      { src: 'https://kit.fontawesome.com/5f36ca3a3b.js', crossorigin: 'anonymous', mode: 'client'}
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-highcharts',
    ['@nuxtjs/dotenv', { path: '~/.env'}]
  ],

  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  highcharts: {
    /* module options */
  },

  fontawesome: {
    icons: {
      solid: true
    }
  },

  apollo: {
    clientConfigs: {
      default: '~/apollo/clientConfig.js',

      alternativeClient: {
        httpEndpoint: 'http://localhost:4000',

        browserHttpEndpoint: '/graphql',

        httpLinkOptions: {
          credentials: 'same-origin'
        },
        wsEndpoint: 'ws://localhost:4000',
        tokenName: 'apollo-token',
        persisting: false,
        websocketsOnly: false
      },
    },
    
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
    
    watchLoading: '~/plugins/apollo-watch-loading-handler.js',
    
    errorHandler: '~/plugins/apollo-error-handler.js',

    authenticationType: 'Bearer', 
    tokenName: 'apollo-token',

    cookieAttributes: {
      expires: 7,
      path: '/',
      domain: 'example.com',
      secure: false,
    },
  },

  content: {},

  build: {
    transpile: [{ src: '/assets/scripts/main.js', mode: 'client'}],
  }
}
