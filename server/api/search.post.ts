// server/api/search.post.ts
import Searchkit, { SearchkitConfig } from 'searchkit'
import { defineEventHandler, readBody } from 'h3'
import 'dotenv/config'

const baseConfig: Omit<SearchkitConfig, 'search_settings'> & { search_settings?: any } = {
  connection: {
    host: process.env.SEARCH_HOST!,
    apiKey: process.env.SEARCH_API_KEY
  }
}

function buildSearchSettingsFromRequest(body: any, totalHits?: number) {
  // Try to extract the raw query text from common request shapes
  const query = (
    body?.queries?.[0]?.params?.query ||
    body?.params?.query ||
    body?.query ||
    ''
  )?.toString?.() || ''

  const trimmed = query.trim()

  // Base settings
  const settings: any = {
    highlight_attributes: ['title'],
    search_attributes: [{ field: 'title', weight: 3 }, 'actors', 'plot'],
    result_attributes: ['title', 'actors', 'poster', 'plot'],
    facet_attributes: [
      { attribute: 'type', field: 'type', type: 'string' },
      { attribute: 'actors', field: 'actors.keyword', type: 'string' }
    ]
  }

  // Heuristic: adjust weights based on query length and total hits
  if (!trimmed) {
    // empty query => prefer facets and return light fields
    settings.search_attributes = [{ field: 'title', weight: 2 }, 'actors']
    settings.result_attributes = ['title', 'poster']
  } else if (trimmed.length < 3) {
    settings.search_attributes = [{ field: 'title', weight: 2 }, 'actors']
  } else if (trimmed.split(' ').length > 2) {
    // multi-word queries: prioritize title and full-text fields
    settings.search_attributes = [{ field: 'title', weight: 4 }, 'actors', 'plot']
    settings.snippet_attributes = ['plot']
  } else {
    // default: moderate weighting
    settings.search_attributes = [{ field: 'title', weight: 3 }, 'actors', 'plot']
  }

  // Use totalHits to make further adjustments
  if (typeof totalHits === 'number') {
    if (totalHits === 0) {
      // no matches — broaden search attributes to include more fields
      settings.search_attributes = [{ field: 'title', weight: 2 }, 'actors', 'plot']
      settings.result_attributes = ['title', 'poster']
    } else if (totalHits > 1000) {
      // too many results: prefer title and use lighter result set
      settings.search_attributes = [{ field: 'title', weight: 4 }, 'actors']
      settings.result_attributes = ['title', 'actors', 'poster']
    }
  }

  // If request asked for particular facets, include them
  const requestedFacets = body?.queries?.[0]?.params?.facets || body?.params?.facets
  if (Array.isArray(requestedFacets) && requestedFacets.length > 0) {
    settings.facet_attributes = requestedFacets.map((f: any) => {
      if (typeof f === 'string') return { attribute: f, field: `${f}`, type: 'string' }
      return f
    })
  }

  return settings
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  // --- Two-step search: lightweight count first ---
  const countBody = JSON.parse(JSON.stringify(body))
  try {
    if (Array.isArray(countBody.queries)) {
      countBody.queries.forEach((q: any) => {
        q.params = q.params || {}
        // Request zero hits to get counts/aggregation only
        q.params.hitsPerPage = 0
        q.params.page = 0
      })
    } else if (countBody.params) {
      countBody.params.hitsPerPage = 0
      countBody.params.page = 0
    }

    const countConfig: SearchkitConfig = {
      ...baseConfig
    } as SearchkitConfig

    const searchkitForCount = new Searchkit(countConfig)
    const countResponse = await (searchkitForCount as any).handleRequest(countBody)

    // Try to derive total hits from common shapes
    let totalHits: number | undefined
    try {
      const first = (countResponse?.results || countResponse?.results?.[0] || countResponse)?.results?.[0] || countResponse?.results?.[0] || countResponse?.hits
      totalHits = first?.nbHits ?? first?.nb_hits ?? first?.total ?? first?.hits?.length ?? undefined
    } catch (e) {
      // ignore
    }

    // server-side debug
    // eslint-disable-next-line no-console
    console.debug('[search.post] preliminary totalHits:', totalHits)

    const dynamicSearchSettings = buildSearchSettingsFromRequest(body, totalHits)

    const config: SearchkitConfig = {
      ...baseConfig,
      search_settings: dynamicSearchSettings
    } as SearchkitConfig

    // Create a Searchkit instance per-request using the dynamic settings.
    const searchkit = new Searchkit(config)

    // Searchkit's typings don't expose handleRequest; cast to any to call it.
    const raw = await (searchkit as any).handleRequest(body)
    return normalizeSearchResponse(raw, body)
  } catch (err) {
    // Fallback: if anything fails, run with default dynamic settings
    // eslint-disable-next-line no-console
    console.error('[search.post] two-step search failed, falling back', err)
    const dynamicSearchSettings = buildSearchSettingsFromRequest(body)
    const config: SearchkitConfig = {
      ...baseConfig,
      search_settings: dynamicSearchSettings
    } as SearchkitConfig
    const searchkit = new Searchkit(config)
    try {
      const raw = await (searchkit as any).handleRequest(body)
      return normalizeSearchResponse(raw, body)
    } catch (e) {
      // final fallback: return a minimal, UI-friendly empty response
      // eslint-disable-next-line no-console
      console.error('[search.post] final fallback, returning empty results', e)
      return {
        results: [
          {
            hits: [],
            nbHits: 0,
            hitsPerPage: 0,
            page: 0
          }
        ],
        query: (body?.queries?.[0]?.params?.query || body?.params?.query || body?.query || '')
      }
    }
  }
})

function normalizeSearchResponse(raw: any, body: any) {
  // If response already in expected Searchkit shape, return it
  if (!raw) return { results: [{ hits: [], nbHits: 0, hitsPerPage: 0, page: 0 }] }
  if (raw.results && Array.isArray(raw.results)) return raw

  // Some clients return { hits, nbHits, page, hitsPerPage }
  if (Array.isArray(raw.hits) || raw.hits) {
    const hits = Array.isArray(raw.hits) ? raw.hits : []
    const nbHits = raw.nbHits ?? raw.nb_hits ?? raw.total ?? hits.length
    const hitsPerPage = raw.hitsPerPage ?? raw.pageSize ?? (raw.params && raw.params.hitsPerPage) ?? 20
    const page = raw.page ?? (raw.params && raw.params.page) ?? 0
    return {
      results: [
        {
          hits,
          nbHits,
          hitsPerPage,
          page
        }
      ]
    }
  }

  // If raw contains nested results in other shapes, try to pull them out
  if (raw.results && typeof raw.results === 'object') return { results: Array.isArray(raw.results) ? raw.results : [raw.results] }

  // Last resort: return empty, but include the original raw for debugging
  return {
    results: [
      {
        hits: [],
        nbHits: 0,
        hitsPerPage: 0,
        page: 0
      }
    ],
    _raw: raw,
    query: (body?.queries?.[0]?.params?.query || body?.params?.query || body?.query || '')
  }
}
