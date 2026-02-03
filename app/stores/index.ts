import { signIn, signOut, signUp, useSession, resetPassword } from '../../lib/auth-client'
import { setSearchConfig } from '@meeovi/layer-search/app/composables/config'
import { getEnv } from '@meeovi/layer-search/app/utils/env'

export { signIn, signOut, signUp, useSession, resetPassword }

// Initialize search configuration for the theme. Call this early in app
// setup (for example, in a plugin) so layer-search composables have the
// expected runtime config available.
export function initThemeSearch() {
	setSearchConfig({
		host: getEnv('SEARCH_HOST') || '',
		apiKey: getEnv('SEARCH_API_KEY') || ''
	})
}
