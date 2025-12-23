import type { SchemaOverview } from '@directus/types'

export type DirectusSchema = SchemaOverview

declare module '#app' {
	interface NuxtApp {
		$directus: any
		$readItems: (collection: string, options?: any) => any
		$updateItem: (collection: string, idOrOptions: string | Record<string, any>, data?: any) => any
	}
}

export {}