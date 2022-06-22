require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Amazon Starter Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: '/assets/styles/main.css'},
      {rel: 'stylesheet', href: '/assets/mdb/plugins/css/all.min.css'},
      {rel: 'stylesheet', href: '/assets/mdb/css/mdb.min.css'},
    ],
    script: [
      { src: '/assets/scripts/main.js', mode: 'client'},
      { src: '/assets/mdb/plugins/all.min.js', mode: 'client'},
      { src: '/assets/mdb/js/mdb.min.js', mode: 'client'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-highcharts',
    // '@nuxtjs/fontawesome',
    ['@nuxtjs/dotenv', { path: '~/.env'}]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
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
    // Sets up the apollo client endpoints
    clientConfigs: {
      // recommended: use a file to declare the client configuration (see below for example)
      default: '~/apollo/clientConfig.js',

      // you can setup multiple clients with arbitrary names
      alternativeClient: {
        // required
        httpEndpoint: 'http://localhost:4000',

        // override HTTP endpoint in browser only
        browserHttpEndpoint: '/graphql',

        // See https://www.apollographql.com/docs/link/links/http.html#options
        httpLinkOptions: {
          credentials: 'same-origin'
        },

        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        wsEndpoint: 'ws://localhost:4000',

        // LocalStorage token
        tokenName: 'apollo-token',

        // Enable Automatic Query persisting with Apollo Engine
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
    
    // setup a global query loader observer (see below for example)
    watchLoading: '~/plugins/apollo-watch-loading-handler.js',
    
    // setup a global error handler (see below for example)
    errorHandler: '~/plugins/apollo-error-handler.js',

    // Sets the authentication type for any authorized request.
    authenticationType: 'Bearer', 
    // Token name for the cookie which will be set in case of authentication
    tokenName: 'apollo-token',

    // Cookie parameters used to store authentication token
    cookieAttributes: {
      expires: 7,
      path: '/',
      domain: 'example.com',
      secure: false,
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
