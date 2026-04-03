/**
 * Multi-backend search API endpoint
 *
 * This endpoint provides unified search across multiple backends (Magento,
 * Elasticsearch, Meilisearch) without exposing any backend credentials or
 * implementation details to the client.
 *
 * Security:
 * - All backend URLs and auth tokens stay server-side
 * - Client only sees aggregated results
 * - Backend origin tracked for observability but not exposed
 * - Safe error handling without leaking infrastructure details
 *
 * Path: /api/search/multi/[index]
 * Method: GET
 * Query Parameters:
 *   - q: Search query (required)
 *   - page: Page number (default: 1)
 *   - pageSize: Results per page (default: 20, max: 100)
 *   - filters: JSON-encoded filter conditions (optional)
 *   - facets: Comma-separated facet fields (optional)
 *   - sort: Field name to sort by (optional)
 *
 * Example:
 *   GET /api/search/multi/products?q=laptop&page=1&pageSize=20
 *   GET /api/search/multi/products?q=laptop&facets=category,price&filters=[{"field":"price","operator":"gte","value":100}]
 */

import type { SearchResult, SearchQuery } from '@mframework/alternate-search';
import { getMultiBackendSearchInstance } from '../../../utils/search-multi-backend';

export default defineEventHandler(async (event) => {
  const index = getRouterParam(event, 'index');
  const query = getQuery(event);

  try {
    // Input validation
    if (!index) {
      throw createError({
        statusCode: 400,
        message: 'Index parameter required',
      });
    }

    const searchQuery = (query.q || '') as string;

    if (!searchQuery || searchQuery.trim().length === 0) {
      // Empty search returns empty results
      return {
        items: [],
        total: 0,
        page: 1,
        pageSize: 20,
        facets: [],
        took: 0,
      };
    }

    // Sanitize and validate pagination
    const page = Math.max(1, parseInt(query.page as string) || 1);
    const pageSize = Math.min(100, Math.max(1, parseInt(query.pageSize as string) || 20));

    // Parse optional filters
    let filters = [];
    if (query.filters) {
      try {
        filters = JSON.parse(query.filters as string);
      } catch {
        throw createError({
          statusCode: 400,
          message: 'Invalid filters parameter (must be valid JSON)',
        });
      }
    }

    // Parse optional facets
    let facets = [];
    if (query.facets) {
      facets = (query.facets as string)
        .split(',')
        .map((f) => f.trim())
        .filter((f) => f.length > 0);
    }

    // Get multi-backend search instance
    const search = await getMultiBackendSearchInstance();

    // Execute search against all configured backends
    const result: SearchResult = await search.query(index, {
      search: searchQuery.trim(),
      page,
      pageSize,
      filters,
      facets,
      sort: query.sort ? [{ field: query.sort as string, order: 'asc' }] : [],
    });

    // Set cache headers for search results
    // Cache for 1 minute since search results are relatively stable
    setHeader(event, 'cache-control', 'public, max-age=60, stale-while-revalidate=300');

    // Add timing header for observability
    if (result.took) {
      setHeader(event, 'x-search-time-ms', String(result.took));
    }

    // Add header indicating this is aggregated multi-backend result
    setHeader(event, 'x-search-backends', 'multi-backend');

    return {
      ...result,
      // Client receives unified results without seeing backend details
    };
  } catch (error) {
    console.error(`Multi-backend search failed for index "${index}"`, error);

    // Map errors to user-safe responses without exposing infrastructure
    if (error instanceof Error) {
      const message = error.message.toLowerCase();

      // Timeout error - provide user-friendly message
      if (message.includes('timeout') || message.includes('abort')) {
        return createError({
          statusCode: 504,
          message: 'Search took too long. Try with fewer results or more specific terms.',
        });
      }

      // Required backend unavailable
      if (message.includes('required backends failed')) {
        return createError({
          statusCode: 503,
          message:
            'Primary search service temporarily unavailable. Please try again in a moment.',
        });
      }

      // Invalid query syntax
      if (message.includes('invalid') || message.includes('syntax')) {
        return createError({
          statusCode: 400,
          message: 'Invalid search query. Check your search terms.',
        });
      }
    }

    // Generic error - don't expose backend details
    return createError({
      statusCode: 500,
      message: 'Search service error. Please try again later.',
    });
  }
});
