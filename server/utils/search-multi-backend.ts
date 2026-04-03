import type { SearchAdapter } from 'alternate-search';
import {
  createSearch,
  multiBackendAdapter,
  elasticsearchAdapter,
  meilisearchAdapter,
} from 'alternate-search';

/**
 * Production-grade multi-backend search configuration
 *
 * This file demonstrates how to configure alternate-search to query
 * multiple backends simultaneously with:
 * - Complete security (credentials server-side only)
 * - Intelligent result aggregation
 * - Per-backend timeout and resource limits
 * - Graceful degradation
 * - Production error handling
 *
 * Security Model:
 * - All backend credentials stored in environment variables
 * - Client never sees individual backend details
 * - Results aggregated on server, unified response sent to client
 * - Backend origin tracked for observability
 */

// Validate required environment variables at module load time
function validateEnv() {
  const required = ['ELASTICSEARCH_URL'];

  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}. ` +
      `These should be set in .env`,
    );
  }
}

/**
 * Build the multi-backend adapter with configured backends
 *
 * Strategy:
 * - Magento: Primary backend (priority 10, weight 100)
 * - Elasticsearch: Secondary with full coverage (priority 20, weight 80, optional)
 * - Meilisearch: Optional fast fallback (priority 30, weight 60, optional)
 *
 * All queries execute in parallel and results are intelligently merged.
 */
function buildMultiBackendAdapter(): SearchAdapter {
  // Build backend configs with credentials from env vars
  const backends = [
    {
      id: 'elasticsearch' as const,
      adapter: elasticsearchAdapter({
        // ⚠️ Never expose these credentials to clients
        node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
        auth: {
          username: process.env.ELASTICSEARCH_USER || 'elastic',
          password: process.env.ELASTICSEARCH_PASSWORD || '',
        },
      }),
      priority: 10, // Primary backend
      weight: 100, // Full weight in merged results
      optional: false, // Required backend
      timeoutMs: 6000,
      maxResults: 100,
    },

    // Meilisearch: Optional if configured
    ...(process.env.MEILISEARCH_URL
      ? [
          {
            id: 'meilisearch' as const,
            adapter: meilisearchAdapter({
              // ⚠️ Never expose these credentials to clients
              baseUrl: process.env.MEILISEARCH_URL,
              apiKey: process.env.MEILISEARCH_KEY,
            }),
            priority: 30, // Query last
            weight: 60, // Lower weight (nice-to-have results)
            optional: true, // Can fail
            timeoutMs: 5000,
            maxResults: 100,
          },
        ]
      : []),
  ];

  return multiBackendAdapter({
    backends,
    aggregationStrategy: 'merge', // Merge and rank results from all backends
    parallel: true, // Execute all queries simultaneously
    defaultTimeoutMs: 7000, // Fallback timeout if none specified
    debug: process.env.NODE_ENV === 'development', // Enable debug logs in dev
  });
}

/**
 * Initialize multi-backend search instance
 * This is called once at server startup
 */
async function initializeSearch() {
  validateEnv();

  const multiBackend = buildMultiBackendAdapter();

  const searchInstance = createSearch({
    adapter: multiBackend,
    indexes: {
      products: {
        fields: [
          { name: 'id', type: 'keyword' },
          { name: 'title', type: 'text', searchable: true },
          { name: 'description', type: 'text', searchable: true },
          { name: 'sku', type: 'keyword' },
          { name: 'price', type: 'number', facetable: true },
          { name: 'category', type: 'keyword', facetable: true },
          { name: 'rating', type: 'number', facetable: true },
          { name: 'availability', type: 'keyword', facetable: true },
          { name: 'image', type: 'text' },
        ],
      },

      articles: {
        fields: [
          { name: 'id', type: 'keyword' },
          { name: 'title', type: 'text', searchable: true },
          { name: 'content', type: 'text', searchable: true },
          { name: 'author', type: 'keyword' },
          { name: 'published', type: 'date', facetable: true },
          { name: 'tags', type: 'keyword', facetable: true },
        ],
      },
    },
    queryTimeoutMs: 10000,
  });

  try {
    await searchInstance.setup();
    console.log(
      '✅ Multi-backend search initialized successfully with backends: ' +
      'elasticsearch (required), meilisearch (optional)',
    );
  } catch (error) {
    console.error('❌ Failed to initialize multi-backend search', error);
    throw error;
  }

  return searchInstance;
}

// Create singleton instance
let searchInstance: ReturnType<typeof createSearch> | null = null;

/**
 * Get or create the search instance (singleton)
 */
export async function getMultiBackendSearchInstance() {
  if (!searchInstance) {
    searchInstance = await initializeSearch();
  }
  return searchInstance;
}

export { getMultiBackendSearchInstance as default };
