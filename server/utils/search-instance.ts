// ---------------------------------------------------------------------------
// starter-template — alternate-search singleton
//
// Imports directly from the alternate-search source tree (monorepo relative
// path), so no build step is required. Nitro/Vite transpiles TypeScript at
// startup.
//
// Resolved paths (from this file's location):
//   themes/framework/starter-template/server/utils/
//     ../../../../  → alternate-framework/ (monorepo root)
//     ../../../../packages/modules/alternate-search/ → alternate-search source
// ---------------------------------------------------------------------------

import { createSearch } from '../../../../../packages/modules/alternate-search/core/search'
import {
  multiBackendProxyAdapter,
  type ProxyBackendPreset,
} from '../../../../../packages/modules/alternate-search/adapters/proxy/index'
import { memoryAdapter } from '../../../../../packages/modules/alternate-search/adapters/memory/index'
import {
  createCsvAnalyticsProvider,
  createFileAnalyticsProvider,
  createOpenTelemetryAnalyticsProvider,
  createPostHogAnalyticsProvider,
  createSegmentAnalyticsProvider,
} from '../../../../../packages/modules/alternate-search/analytics/index'
import {
  caching,
  createMemoryCacheStorage,
  createRedisCacheStorage,
  type RedisCacheClient,
} from '../../../../../packages/modules/alternate-search/plugins/caching'
import type { SearchAdapter, SearchQuery, SearchResult } from '../../../../../packages/modules/alternate-search/core/types'
import type { SearchInstance } from '../../../../../packages/modules/alternate-search/core/types'
import type { SearchAnalyticsProvider } from '../../../../../packages/modules/alternate-search/core/types'
import { createRequire } from 'node:module'

let _instance: SearchInstance | null = null
let _redisClient: RedisCacheClient | null = null
let _demoSeedPromise: Promise<void> | null = null

type AlternateSearchAdapterName =
  | 'opensearch'
  | 'elasticsearch'
  | 'meilisearch'
  | 'typesense'
  | 'memory'
  | 'algolia'
  | 'sqlite'
  | 'pgvector'
  | 'multi-backend'

function buildDemoDocuments(indexName: string): Array<Record<string, unknown>> {
  const normalized = indexName.toLowerCase()

  if (normalized.includes('article') || normalized.includes('blog') || normalized.includes('post')) {
    return [
      {
        id: `${indexName}-launch-checklist`,
        title: 'Weekend launch checklist',
        body: 'Health endpoint, search endpoint, responsive layout, and seeded demo content are all in place.',
        author: 'Alternate Framework',
        tags: ['launch', 'demo', 'ops'],
        published: true,
        createdAt: '2026-04-03T08:00:00.000Z',
        url: 'https://framework.meeovi.com/docs',
      },
      {
        id: `${indexName}-memory-fallback`,
        title: 'Memory fallback explained',
        body: 'When no backend is configured, the starter-template seeds a small in-memory search index so the demo still works.',
        author: 'Alternate Framework',
        tags: ['search', 'memory'],
        published: true,
        createdAt: '2026-04-03T08:15:00.000Z',
      },
    ]
  }

  return [
    {
      id: `${indexName}-demo-starter-kit`,
      title: 'Demo Starter Kit',
      description: 'A seeded product record used to verify the search flow without an external backend.',
      category: 'demo',
      brand: 'Alternate Framework',
      price: 49,
      published: true,
      createdAt: '2026-04-03T08:00:00.000Z',
      url: 'https://framework.meeovi.com',
    },
    {
      id: `${indexName}-weekend-launch`,
      title: 'Weekend Launch Bundle',
      description: 'Focused starter experience with health checks, seeded data, and minimal runtime dependencies.',
      category: 'operations',
      brand: 'Meeovi',
      price: 99,
      published: true,
      createdAt: '2026-04-03T08:10:00.000Z',
    },
    {
      id: `${indexName}-search-observability`,
      title: 'Search Observability Pack',
      description: 'Shows runtime analytics hooks and cache-aware search behavior in a compact demo.',
      category: 'search',
      brand: 'Alternate Framework',
      price: 129,
      published: true,
      createdAt: '2026-04-03T08:20:00.000Z',
    },
  ]
}

function seedDemoData(instance: SearchInstance, configuredIndexes: string[]) {
  if (_demoSeedPromise) return _demoSeedPromise

  const indexNames = configuredIndexes.length > 0 ? configuredIndexes : ['products', 'articles']

  _demoSeedPromise = (async () => {
    try {
      await Promise.all(indexNames.map((indexName) => instance.index(indexName, buildDemoDocuments(indexName), { upsert: true })))
    } catch (error) {
      console.warn('[alternate-search] failed to seed demo data', error)
    }
  })()

  return _demoSeedPromise
}

function normalizeUrl(raw: unknown): string {
  const text = String(raw ?? '').trim()
  if (!text) return ''
  if ((text.startsWith('[') && text.endsWith(']')) || (text.startsWith('{') && text.endsWith('}'))) {
    try {
      const parsed = JSON.parse(text.replace(/'/g, '"'))
      if (Array.isArray(parsed)) return String(parsed[0] ?? '').trim()
      if (typeof parsed === 'string') return parsed.trim()
    } catch {
      // continue with plain fallback below
    }
  }

  const csvCandidate = text
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
  if (csvCandidate.length > 0) return csvCandidate[0]
  return text
}

function parseUrlList(raw: unknown): string[] {
  const text = String(raw ?? '').trim()
  if (!text) return []

  if ((text.startsWith('[') && text.endsWith(']')) || (text.startsWith('{') && text.endsWith('}'))) {
    try {
      const parsed = JSON.parse(text.replace(/'/g, '"'))
      if (Array.isArray(parsed)) {
        return parsed.map((value) => String(value).trim()).filter(Boolean)
      }
      if (typeof parsed === 'string') {
        return [parsed.trim()].filter(Boolean)
      }
    } catch {
      // continue with plain fallback below
    }
  }

  return text
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
}

function parseIndexes(raw: unknown): string[] {
  return String(raw ?? '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean)
}

function buildDefaultIndexes(indexNames: string[]): Record<string, { fieldMap: Record<string, { type: string; filterable?: boolean; searchable?: boolean; sortable?: boolean; facetable?: boolean }> }> {
  const fallback = ['products', 'articles']
  const names = indexNames.length > 0 ? indexNames : fallback

  return Object.fromEntries(names.map((name) => {
    const normalized = name.toLowerCase()
    if (normalized.includes('article') || normalized.includes('blog') || normalized.includes('post')) {
      return [name, {
        fieldMap: {
          id:        { type: 'string', filterable: true },
          title:     { type: 'string', searchable: true, sortable: true },
          body:      { type: 'string', searchable: true },
          author:    { type: 'string', filterable: true, facetable: true },
          tags:      { type: 'string[]', filterable: true, facetable: true },
          published: { type: 'boolean', filterable: true },
          createdAt: { type: 'date', sortable: true },
        },
      }]
    }

    return [name, {
      fieldMap: {
        id:          { type: 'string',  filterable: true },
        title:       { type: 'string',  searchable: true, sortable: true },
        description: { type: 'string',  searchable: true },
        price:       { type: 'number',  filterable: true, sortable: true, facetable: true },
        category:    { type: 'string',  filterable: true, facetable: true },
        brand:       { type: 'string',  filterable: true, facetable: true },
        published:   { type: 'boolean', filterable: true },
        createdAt:   { type: 'date',    sortable: true },
      },
    }]
  }))
}

function getRedisClient(redisUrl: string): RedisCacheClient | null {
  if (!redisUrl) return null
  if (_redisClient) return _redisClient

  try {
    const require = createRequire(import.meta.url)
    const redisModule = require('redis')
    const createClient = redisModule?.createClient
    if (typeof createClient !== 'function') return null

    const client = createClient({ url: redisUrl })
    client.on?.('error', (error: unknown) => {
      console.warn('[alternate-search] Redis client error', error)
    })
    void client.connect?.()
    _redisClient = client as RedisCacheClient
    return _redisClient
  } catch (error) {
    console.warn('[alternate-search] redis package is not installed, using in-memory cache', error)
    return null
  }
}

function buildAnalyticsProviders(config: ReturnType<typeof useRuntimeConfig>): SearchAnalyticsProvider[] {
  const providers: SearchAnalyticsProvider[] = []

  const posthogApiKey = String(config.alternateSearchAnalyticsPosthogApiKey || '').trim()
  const posthogHost = String(config.alternateSearchAnalyticsPosthogHost || '').trim()
  if (posthogApiKey) {
    providers.push(createPostHogAnalyticsProvider({
      apiKey: posthogApiKey,
      ...(posthogHost ? { host: posthogHost } : {}),
    }))
  }

  const segmentWriteKey = String(config.alternateSearchAnalyticsSegmentWriteKey || '').trim()
  const segmentHost = String(config.alternateSearchAnalyticsSegmentHost || '').trim()
  if (segmentWriteKey) {
    providers.push(createSegmentAnalyticsProvider({
      writeKey: segmentWriteKey,
      ...(segmentHost ? { host: segmentHost } : {}),
    }))
  }

  const jsonlPath = String(config.alternateSearchAnalyticsJsonlPath || '').trim()
  if (jsonlPath) {
    providers.push(createFileAnalyticsProvider({ filePath: jsonlPath }))
  }

  const csvPath = String(config.alternateSearchAnalyticsCsvPath || '').trim()
  if (csvPath) {
    providers.push(createCsvAnalyticsProvider({ filePath: csvPath }))
  }

  const otelEnabled = String(config.alternateSearchAnalyticsOpenTelemetryEnabled || '').toLowerCase() === 'true'
  if (otelEnabled) {
    try {
      const require = createRequire(import.meta.url)
      const otelApi = require('@opentelemetry/api')
      const tracer = otelApi?.trace?.getTracer?.(
        String(config.alternateSearchAnalyticsOpenTelemetryServiceName || 'alternate-search-proxy')
      )
      const meter = otelApi?.metrics?.getMeter?.(
        String(config.alternateSearchAnalyticsOpenTelemetryServiceName || 'alternate-search-proxy')
      )

      providers.push(createOpenTelemetryAnalyticsProvider({
        tracer,
        meter,
        serviceName: String(config.alternateSearchAnalyticsOpenTelemetryServiceName || 'alternate-search-proxy'),
        staticAttributes: {
          'deployment.environment': process.env.NODE_ENV || 'development',
        },
      }))
    } catch (error) {
      console.warn('[alternate-search] @opentelemetry/api is not installed, OpenTelemetry provider skipped', error)
    }
  }

  return providers
}

/**
 * Returns the shared, lazily-initialised SearchInstance for this Nuxt server.
 * The instance is created once per process and reused across requests.
 *
 * Configuration is read from Nuxt runtime config (which in turn reads from
 * environment variables — see nuxt.config.ts).
 */
export function getSearchInstance(): SearchInstance {
  if (_instance) return _instance

  const config = useRuntimeConfig()
  const provider = String((config.public as any)?.meeoviProvider || '').toLowerCase()
  const explicitAdapter = String(config.alternateSearchAdapter || process.env.ALTERNATE_SEARCH_ADAPTER || '').trim().toLowerCase() as AlternateSearchAdapterName | ''
  const adapter = explicitAdapter || ''

  const protocol = String(config.alternateSearchProtocol || process.env.ALTERNATE_SEARCH_PROTOCOL || 'http').trim() || 'http'
  const host = String(config.alternateSearchHost || process.env.ALTERNATE_SEARCH_HOST || '').trim()
  const port = Number(config.alternateSearchPort || process.env.ALTERNATE_SEARCH_PORT || 0)
  const hostPortUrl = host
    ? `${protocol}://${host}${port > 0 ? `:${port}` : ''}`
    : ''

  const configuredUrlRaw = String(config.alternateSearchUrl || process.env.ALTERNATE_SEARCH_URL || '').trim()
  const configuredUrl = normalizeUrl(configuredUrlRaw)
  const baseUrl: string = configuredUrl || hostPortUrl || 'http://localhost:9200'
  const username: string = (config.alternateSearchUsername as string) || ''
  const password: string = (config.alternateSearchPassword as string) || ''
  const apiKey: string = (config.alternateSearchApiKey as string) || ''
  const configuredIndexes = parseIndexes(config.alternateSearchIndexes || process.env.ALTERNATE_SEARCH_INDEXES || '')

  const magentoBaseUrl: string = ((config.public as any)?.magento?.baseUrl as string) || process.env.MAGE_STORE_URL || ''
  const magentoToken: string = ((config.public as any)?.magento?.accessToken as string)
    || process.env.WEBSITE_TOKEN
    || process.env.GQL_KEY
    || ''
  const directusBaseUrl: string = ((config.public as any)?.directus?.url as string)
    || process.env.DIRECTUS_URL
    || ''
  const directusToken: string = ((config.public as any)?.directus?.staticToken as string)
    || process.env.DIRECTUS_STATIC_TOKEN
    || process.env.NUXTUS_DIRECTUS_STATIC_TOKEN
    || ''
  const directusCollections: string[] = String(
    process.env.ALTERNATE_SEARCH_DIRECTUS_COLLECTIONS || 'posts,articles,pages'
  )
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean)
  const directusSearchFields: string[] = String(
    process.env.ALTERNATE_SEARCH_DIRECTUS_FIELDS || 'title,name,description,excerpt,body,content,slug'
  )
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean)

  const redisUrl = String(config.alternateSearchRedisUrl || '').trim()
  const redisPrefix = String(config.alternateSearchRedisPrefix || 'alternate-search:proxy:').trim()
  const cacheTtlMs = Number(config.alternateSearchCacheTtlMs || 120_000) || 120_000
  const indexPrefix = String(config.alternateSearchIndexPrefix || '').trim()

  const indexAliases = (() => {
    const raw = String(config.alternateSearchIndexAliases || '').trim()
    if (!raw) return {}
    try {
      const parsed = JSON.parse(raw)
      return typeof parsed === 'object' && parsed !== null ? parsed : {}
    } catch {
      return {}
    }
  })() as Record<string, string>

  const virtualIndexes = (() => {
    const raw = String(config.alternateSearchVirtualIndexes || '').trim()
    if (!raw) return {}
    try {
      const parsed = JSON.parse(raw)
      return typeof parsed === 'object' && parsed !== null ? parsed : {}
    } catch {
      return {}
    }
  })() as Record<string, { sourceIndex: string; filters?: Array<{ field: string; operator?: string; value: unknown }> | Record<string, unknown> }>

  const redisClient = getRedisClient(redisUrl)
  const cacheStorage = redisClient
    ? createRedisCacheStorage(redisClient, { prefix: redisPrefix })
    : createMemoryCacheStorage({ maxSize: 1000 })

  const analyticsProviders = buildAnalyticsProviders(config)

  const magentoGraphqlUrl = `${magentoBaseUrl.replace(/\/$/, '')}/graphql`

  const magentoAdapter: SearchAdapter = {
    async setup() {
      return
    },
    async index() {
      return
    },
    async delete() {
      return
    },
    async query(_indexName: string, query: SearchQuery): Promise<SearchResult> {
      const page = Number(query.page || 1) || 1
      const pageSize = Number(query.pageSize || 12) || 12
      const term = String((query as any).search || (query as any).q || (query as any).term || '').trim()
      const startedAt = Date.now()

      if (!magentoBaseUrl) {
        return { items: [], total: 0, page, pageSize, facets: [], took: Date.now() - startedAt }
      }

      const response = await $fetch<any>(magentoGraphqlUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          // Public product search is allowed on this store; avoid forcing auth headers
          // that can produce 401s for non-customer tokens.
          ...(process.env.MAGENTO_FORCE_AUTH === 'true' && magentoToken ? { Authorization: `Bearer ${magentoToken}` } : {})
        },
        body: {
          query: `
            query SearchProducts($search: String!, $pageSize: Int!, $currentPage: Int!) {
              products(filter: { name: { match: $search } }, pageSize: $pageSize, currentPage: $currentPage) {
                total_count
                items {
                  sku
                  name
                  image { url }
                  small_image { url }
                  price_range {
                    minimum_price {
                      final_price { value }
                    }
                  }
                }
              }
            }
          `,
          variables: {
            search: term,
            pageSize,
            currentPage: page
          }
        }
      })

      const items = (response?.data?.products?.items || []).map((item: any) => ({
        id: item?.sku || '',
        title: item?.name || item?.sku || 'Untitled',
        name: item?.name || item?.sku || 'Untitled',
        image: item?.small_image?.url || item?.image?.url || null,
        price: item?.price_range?.minimum_price?.final_price?.value ?? null
      }))

      return {
        items,
        total: Number(response?.data?.products?.total_count || items.length),
        page,
        pageSize,
        facets: [],
        took: Date.now() - startedAt
      }
    },
    async stats() {
      return { count: 0 }
    }
  }

  const directusAdapter: SearchAdapter = {
    async setup() {
      return
    },
    async index() {
      return
    },
    async delete() {
      return
    },
    async query(_indexName: string, query: SearchQuery): Promise<SearchResult> {
      const page = Number(query.page || 1) || 1
      const pageSize = Number(query.pageSize || 12) || 12
      const term = String((query as any).search || (query as any).q || (query as any).term || '').trim()
      const startedAt = Date.now()

      if (!directusBaseUrl || !term) {
        return { items: [], total: 0, page, pageSize, facets: [], took: Date.now() - startedAt }
      }

      const perCollectionLimit = Math.max(1, Math.ceil(pageSize / Math.max(1, directusCollections.length)))

      const results = await Promise.allSettled(
        directusCollections.map(async (collection) => {
          const filter = {
            _or: directusSearchFields.map((field) => ({ [field]: { _icontains: term } }))
          }

          const response = await $fetch<any>(`${directusBaseUrl.replace(/\/$/, '')}/items/${collection}`, {
            method: 'GET',
            headers: {
              ...(directusToken ? { Authorization: `Bearer ${directusToken}` } : {})
            },
            query: {
              page,
              limit: perCollectionLimit,
              fields: '*.*',
              meta: 'filter_count',
              filter: JSON.stringify(filter)
            }
          })

          const data: any[] = Array.isArray(response?.data) ? response.data : []
          const total = Number(response?.meta?.filter_count || data.length || 0)

          return {
            collection,
            total,
            items: data.map((item: any) => {
              const rawTitle = item?.title || item?.name || item?.slug || item?.id || 'Untitled'
              const rawDescription = item?.description || item?.excerpt || item?.body || item?.content || ''
              return {
                id: item?.id ? `${collection}:${String(item.id)}` : `${collection}:${rawTitle}`,
                title: String(rawTitle),
                name: String(rawTitle),
                description: typeof rawDescription === 'string' ? rawDescription : JSON.stringify(rawDescription),
                collection,
                slug: item?.slug || null,
                image: item?.image || item?.thumbnail || null,
                createdAt: item?.date_created || item?.createdAt || null,
                updatedAt: item?.date_updated || item?.updatedAt || null,
              }
            })
          }
        })
      )

      const mergedItems: any[] = []
      let total = 0
      for (const res of results) {
        if (res.status !== 'fulfilled') continue
        total += res.value.total
        mergedItems.push(...res.value.items)
      }

      return {
        items: mergedItems.slice(0, pageSize),
        total,
        page,
        pageSize,
        facets: [],
        took: Date.now() - startedAt
      }
    },
    async stats() {
      return { count: 0 }
    }
  }

  const backends: ProxyBackendPreset[] = []

  const shouldUseEnvAdapter = adapter !== ''

  if (shouldUseEnvAdapter) {
    if (adapter === 'memory') {
      _instance = createSearch({
        adapter: memoryAdapter(),
        indexPrefix,
        indexAliases,
        virtualIndexes,
        plugins: [
          caching({
            ttl: cacheTtlMs,
            storage: cacheStorage,
          }),
        ],
        analytics: analyticsProviders,
        indexes: buildDefaultIndexes(configuredIndexes),
      })
      void seedDemoData(_instance, configuredIndexes)
      return _instance
    }

    if (adapter === 'multi-backend') {
      const urls = parseUrlList(configuredUrlRaw)
      const resolvedUrls = urls.length > 0
        ? urls
        : [baseUrl]

      resolvedUrls.forEach((url, idx) => {
        backends.push({
          kind: 'elasticsearch',
          id: `multi-backend-${idx + 1}`,
          config: {
            baseUrl: url,
            ...(apiKey ? { apiKey } : {}),
            ...(username && password ? { username, password } : {}),
          },
          priority: 10 + idx,
          optional: idx > 0,
          weight: 100,
        })
      })
    } else if (adapter === 'opensearch' || adapter === 'elasticsearch') {
      backends.push({
        kind: 'elasticsearch',
        id: adapter,
        config: {
          baseUrl: hostPortUrl || baseUrl,
          ...(apiKey ? { apiKey } : {}),
          ...(username && password ? { username, password } : {}),
        },
        priority: 10,
        optional: false,
        weight: 100,
      })
    } else if (adapter === 'meilisearch') {
      backends.push({
        kind: 'meilisearch',
        id: 'meilisearch',
        config: {
          baseUrl: hostPortUrl || baseUrl,
          ...(apiKey ? { apiKey } : {}),
        },
        priority: 10,
        optional: false,
        weight: 100,
      })
    } else if (adapter === 'typesense') {
      const typesenseHost = hostPortUrl || baseUrl
      if (apiKey && typesenseHost) {
        backends.push({
          kind: 'typesense',
          id: 'typesense',
          config: {
            host: typesenseHost,
            apiKey,
          },
          priority: 10,
          optional: false,
          weight: 100,
        })
      }
    }
  }

  const opensearchEnabled =
    !shouldUseEnvAdapter && (
    provider === 'opensearch'
    || provider === 'elasticsearch'
    || provider === 'all'
    || provider === 'multi'
    || provider === ''
    )

  if (opensearchEnabled && baseUrl) {
    backends.push({
      kind: 'elasticsearch',
      id: 'opensearch',
      config: {
        baseUrl,
        ...(apiKey ? { apiKey } : {}),
        ...(username && password ? { username, password } : {}),
      },
      priority: 20,
      optional: true,
      weight: 80,
    })
  }

  const magentoEnabled =
    !shouldUseEnvAdapter && (
    provider === 'magento'
    || provider === 'all'
    || provider === 'multi'
    || provider === ''
    )

  if (magentoEnabled && magentoBaseUrl) {
    backends.push({
      kind: 'custom',
      id: 'magento',
      adapter: magentoAdapter,
      priority: 10,
      optional: true,
      weight: 100,
    })
  }

  const directusEnabled =
    !shouldUseEnvAdapter && (
    provider === 'directus'
    || provider === 'all'
    || provider === 'multi'
    || provider === ''
    )

  if (directusEnabled && directusBaseUrl) {
    backends.push({
      kind: 'custom',
      id: 'directus',
      adapter: directusAdapter,
      priority: 15,
      optional: true,
      weight: 90,
    })
  }

  // Always run through the proxy adapter when backends exist.
  // If no backend is resolvable from env/provider config, fall back to memory.
  const selectedBackends: ProxyBackendPreset[] = backends.length > 0
    ? backends
    : []

  const selectedAdapter: SearchAdapter = selectedBackends.length > 0
    ? multiBackendProxyAdapter({
      backends: selectedBackends,
      aggregationStrategy: 'merge',
      parallel: true,
      debug: process.env.DEBUG_SEARCH === 'true',
    })
    : memoryAdapter()

  _instance = createSearch({
    adapter: selectedAdapter,
    indexPrefix,
    indexAliases,
    virtualIndexes,
    plugins: [
      caching({
        ttl: cacheTtlMs,
        storage: cacheStorage,
      }),
    ],
    analytics: analyticsProviders,
    indexes: buildDefaultIndexes(configuredIndexes),
  })

  if (selectedBackends.length === 0) {
    void seedDemoData(_instance, configuredIndexes)
  }

  return _instance
}
