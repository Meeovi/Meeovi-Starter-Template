// ---------------------------------------------------------------------------
// starter-template — Nuxt server route: /api/search/:index
//
// Wires the alternate-search SearchInstance into an h3 event handler via the
// official Nuxt integration helper. Supports the full REST contract:
//
//   GET  /api/search/:index                full-text query (query-string)
//   GET  /api/search/:index?_action=stats  index statistics
//   POST /api/search/:index                SearchQuery body
//   POST /api/search/:index?_action=index  bulk-index { documents: [...] }
//   DELETE /api/search/:index?id=:docId    delete a document
// ---------------------------------------------------------------------------

import { defineSearchEventHandler } from '../../../../../../packages/modules/alternate-search/integrations/nuxt'
import { getSearchInstance } from '../../utils/search-instance'

export default defineEventHandler(async (event) => {
  const search = getSearchInstance()
  const handler = defineSearchEventHandler(search, {
    cors: process.env.ALTERNATE_SEARCH_CORS || '*',
  })
  return handler(event)
})
