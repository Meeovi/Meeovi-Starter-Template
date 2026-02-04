// src/lib/adapter-loader.ts
import type { MeeoviAdapter } from './sdk'

export function createAdapter(config: ReturnType<typeof useRuntimeConfig>): MeeoviAdapter {
  const provider = config.public.meeoviProvider

  // cast public config to a known shape (or any) to avoid 'unknown' errors
  const publicConfig = config.public as any

  // NOTE: adapters are optional peer deps; consumer installs what they need.
  switch (provider) {
    case 'directus': {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { DirectusAdapter } = require('@meeovi/adapter-directus')
      return new DirectusAdapter({
        url: publicConfig.directus?.url,
        staticToken: publicConfig.directus?.staticToken
      }) as MeeoviAdapter
    }
    case 'magento': {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { MagentoAdapter } = require('@meeovi/adapter-magento')
      return new MagentoAdapter({
        baseUrl: publicConfig.magento?.baseUrl,
        accessToken: publicConfig.magento?.accessToken
      }) as MeeoviAdapter
    }
    case 'opensearch': {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { createOpenSearchAdapter } = require('@meeovi/adapter-opensearch')
      const adapter = createOpenSearchAdapter({ id: 'opensearch', index: publicConfig.search?.index })

      // adapt core SearchAdapter to the starter template `MeeoviAdapter` shape
      return {
        auth: {
          login: async () => { /* no-op */ },
          logout: async () => { /* no-op */ },
          me: async () => null
        },
        search: {
          query: async (term: string, options: Record<string, any> = {}) => {
            const q = { q: term, page: options.page, limit: options.limit }
            const res = await adapter.search(q as any)
            return res.items
          }
        }
      } as MeeoviAdapter
    }
    default:
      throw new Error(`Unknown Meeovi provider: ${provider}`)
  }
}