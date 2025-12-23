import { createDirectus, rest, readItem, readItems, createItem, deleteItem, uploadFiles, readSingleton, readFieldsByCollection } from '@directus/sdk';
import type { DirectusSchema } from '~/types/directus';

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig()

	const directus = createDirectus<DirectusSchema>(`${config.public.directus.url}`).with(rest())

	// Provide safely to avoid "Cannot redefine property" when multiple plugins register Directus
	try {
		const app = nuxtApp.vueApp
		const provides = app && app._context && app._context.provides
		const gp = app && app.config && app.config.globalProperties

		if (!(provides && ('directus' in provides)) && !(gp && ('$directus' in gp))) {
			nuxtApp.provide('directus', directus)
		}

		const helpers = { readItem, readItems, createItem, deleteItem, uploadFiles, readSingleton, readFieldsByCollection }
		for (const [name, fn] of Object.entries(helpers)) {
			if (!(provides && (name in provides)) && !(gp && (`$${name}` in gp))) {
				try { nuxtApp.provide(name, fn) } catch (e) {}
			}
		}
	} catch (e) {
		// fallback: attempt to provide without checks
		try { nuxtApp.provide('directus', directus) } catch (e) {}
		try { nuxtApp.provide('readItem', readItem) } catch (e) {}
		try { nuxtApp.provide('readItems', readItems) } catch (e) {}
		try { nuxtApp.provide('createItem', createItem) } catch (e) {}
		try { nuxtApp.provide('deleteItem', deleteItem) } catch (e) {}
		try { nuxtApp.provide('uploadFiles', uploadFiles) } catch (e) {}
		try { nuxtApp.provide('readSingleton', readSingleton) } catch (e) {}
		try { nuxtApp.provide('readFieldsByCollection', readFieldsByCollection) } catch (e) {}
	}
})