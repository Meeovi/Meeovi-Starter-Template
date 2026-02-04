// src/lib/sdk.ts
import { ref } from 'vue'

export interface MeeoviAuthAdapter {
  login(credentials: Record<string, any>): Promise<any>
  logout(): Promise<void>
  me(): Promise<any>
}

export interface MeeoviSearchAdapter {
  query(term: string, options?: Record<string, any>): Promise<any[]>
}

export interface MeeoviAdapter {
  auth: MeeoviAuthAdapter
  search: MeeoviSearchAdapter
  // extend with more domains (products, content, etc.)
}

const adapterRef = ref<MeeoviAdapter | null>(null)

export function registerAdapter(adapter: MeeoviAdapter) {
  adapterRef.value = adapter
}

export function useAdapter(): MeeoviAdapter {
  if (!adapterRef.value) {
    throw new Error('Meeovi adapter not registered. Check your adapter plugin.')
  }
  return adapterRef.value
}