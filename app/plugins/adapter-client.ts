// src/plugins/adapter.client.ts
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { registerAdapter } from '../../lib/sdk'
import { createAdapter } from '../../lib/adapter-loader'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const adapter = createAdapter(config)
  registerAdapter(adapter)
})