import type {
  NitroRuntimeConfig
} from 'nitropack/types'
import type {
  FileManagerConfig,
  StorageProviderType
} from '../services/file/types'
import {
  config
} from 'dotenv'

declare module '@nuxt/schema' {
  interface RuntimeConfig {
    fileManager: FileManagerConfig
  }
}

let runtimeConfigInstance: NitroRuntimeConfig

export const generateRuntimeConfig = () => ({
  turnstile: {
    secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY
  },

  preset: process.env.NUXT_NITRO_PRESET,
  betterAuthSecret: process.env.NUXT_BETTER_AUTH_SECRET,
  // Stripe
  stripeSecretKey: process.env.NUXT_STRIPE_SECRET_KEY,
  stripeWebhookSecret: process.env.NUXT_STRIPE_WEBHOOK_SECRET,
  stripePriceIdProMonth: process.env.NUXT_STRIPE_PRICE_ID_PRO_MONTH,
  stripePriceIdProYear: process.env.NUXT_STRIPE_PRICE_ID_PRO_YEAR,
  // Polar
  polarServer: process.env.NUXT_POLAR_SERVER,
  polarAccessToken: process.env.NUXT_POLAR_ACCESS_TOKEN,
  polarWebhookSecret: process.env.NUXT_POLAR_WEBHOOK_SECRET,
  polarProductIdProMonth: process.env.NUXT_POLAR_PRODUCT_ID_PRO_MONTH,
  polarProductIdProYear: process.env.NUXT_POLAR_PRODUCT_ID_PRO_YEAR,
  // Resend
  resendApiKey: process.env.NUXT_RESEND_API_KEY,
  // Github
  githubClientId: process.env.NUXT_GH_CLIENT_ID,
  githubClientSecret: process.env.NUXT_GH_CLIENT_SECRET,
  // Google
  googleClientId: process.env.NUXT_GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET,
  // DB
  redisUrl: process.env.NUXT_REDIS_URL,
  databaseUrl: process.env.NUXT_DATABASE_URL,
  // File
  fileManager: {
    storage: {
      provider: process.env.NUXT_APP_STORAGE as StorageProviderType || 'r2',
      local: { // provider: 'local'
        uploadDir: process.env.NUXT_LOCAL_UPLOAD_DIR || './uploads',
        publicPath: process.env.NUXT_LOCAL_PUBLIC_PATH || '/uploads'
      },
      r2: { // provider: 'r2'
        accountId: process.env.NUXT_CF_ACCOUNT_ID!,
        accessKeyId: process.env.NUXT_CF_ACCESS_KEY_ID!,
        secretAccessKey: process.env.NUXT_CF_SECRET_ACCESS_KEY!,
        bucketName: process.env.NUXT_CF_R2_BUCKET_NAME!,
        publicUrl: process.env.NUXT_CF_R2_PUBLIC_URL!
      }
    },
    uploadRateLimit: {
      maxUploadsPerWindow: 100,
      windowSizeMinutes: 1
    }
  } satisfies FileManagerConfig,

  public: {
    baseURL: process.env.NUXT_APP_URL,
    NUXT_TRUSTED_ORIGINS: process.env.NUXT_TRUSTED_ORIGINS || '',
    appSite: process.env.NUXT_PUBLIC_APP_SITE,
    
    appName: process.env.NUXT_APP_NAME,
    appEnv: process.env.NODE_ENV,
    appRepo: process.env.NUXT_APP_REPO,
    appNotifyEmail: process.env.NUXT_APP_NOTIFY_EMAIL,
    appContactEmail: process.env.NUXT_APP_CONTACT_EMAIL,
    payment: process.env.NUXT_PAYMENT || 'stripe',
    auth: {
      redirectUserTo: '/',
      redirectGuestTo: '/signin'
    },

    NUXT_PROJECT_ID: process.env.NUXT_PROJECT_ID,
    NUXT_PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,
    rocketChatUrl: process.env.NUXT_PUBLIC_ROCKETCHAT_URL,
    minioEndpoint: process.env.MINIO_ENDPOINT,
    minioUser: process.env.MINIO_USER,
    minioPass: process.env.MINIO_PASS,

    // Directus
    directus: {
      url: process.env.DIRECTUS_URL,
      nuxtBaseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      auth: {
        email: process.env.NUXTUS_DIRECTUS_ADMIN_EMAIL,
        password: process.env.NUXTUS_DIRECTUS_ADMIN_PASSWORD,
        token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN,
        enabled: true,
        enableGlobalAuthMiddleware: false, // Enable auth middleware on every page
        userFields: ['*'], // Select user fields
        redirect: {
          login: '/auth/login', // Path to redirect when login is required
          logout: '/', // Path to redirect after logout
          home: '/', // Path to redirect after successful login
          resetPassword: '/auth/reset-password', // Path to redirect for password reset
          callback: '/auth/callback', // Path to redirect after login with provider
        },
      }
    },

    // Search (Elasticsearch / Searchkit or MeiliSearch) - set at runtime or via environment
    search: {
      host: process.env.SEARCH_HOST,
      apiKey: process.env.SEARCH_API_KEY,
      // Default index name for InstantSearch components
      indexName: process.env.ALGOLIA_INDEX_NAME || process.env.MEILISEARCH_INDEX_NAME || process.env.SEARCH_INDEX || ''
    },

    supabase: {
      url: process.env.SUPABASE_URL || '',
      key: process.env.SUPABASE_KEY || ''
    },

    commerceUrl: process.env.COMMERCE_STORE_URL,
    commerceGraphql: process.env.COMMERCE_GRAPHQL_URL,
    commerceApiToken: process.env.WEBSITE_TOKEN,

    gtagId: process.env.NUXT_PUBLIC_GTAG_ID,

    // Server
    stripe: {
      key: process.env.STRIPE_SECRET_KEY,
    },

    // Commerce
    commerce: {
      magentoEndpoint: process.env.MAGE_MAGENTO_GRAPHQL_URL || '',
      magentoToken: process.env.MAGE_MAGENTO_TOKEN || '',
    },

    ups: {
      apiKey: process.env.UPS_API_KEY,
      apiUrl: process.env.UPS_API_URL || 'https://onlinetools.ups.com/api'
    },

    fedex: {
      apiKey: process.env.FEDEX_API_KEY,
      apiUrl: process.env.FEDEX_API_URL
    },

    dhl: {
      apiKey: process.env.DHL_API_KEY,
      apiUrl: process.env.DHL_API_URL
    },

    payments: {
      enabledProviders: process.env.PAYMENT_PROVIDERS?.split(',') || ['stripe', 'offline'],
      defaultProvider: process.env.DEFAULT_PAYMENT_PROVIDER || 'stripe',
      currency: process.env.DEFAULT_CURRENCY || 'USD'
    },
  },
  paypal: {
    clientId: process.env.PAYPAL_CLIENT_ID,
    clientSecret: process.env.PAYPAL_CLIENT_SECRET,
    sandbox: process.env.PAYPAL_SANDBOX === 'true'
  },
})

if (typeof useRuntimeConfig !== 'undefined') {
  runtimeConfigInstance = useRuntimeConfig()
} else {
  // for cli: npm run auth:schema
  config()
  runtimeConfigInstance = generateRuntimeConfig() as unknown as NitroRuntimeConfig
}

export const runtimeConfig = runtimeConfigInstance
