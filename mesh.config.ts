import {
  defineConfig,
  defineGatewayConfig,
  loadGraphQLHTTPSubgraph
} from '@mframework/api'

export const gatewayConfig = defineGatewayConfig({
  webhooks: true,
  cache: 'memory'
})

export const composeConfig = defineConfig({
  plugins: [
    { module: '@mframework/api/plugins/auth' },
    { module: '@mframework/api/plugins/search' }
  ],
  subgraphs: [
    loadGraphQLHTTPSubgraph('Auth', {
      endpoint: process.env.AUTH_ENDPOINT!,
      operationHeaders: {
        Authorization: '{context.headers["authorization"]}'
      }
    }),
    loadGraphQLHTTPSubgraph('Search', {
      endpoint: process.env.SEARCH_ENDPOINT!
    })
  ]
})
