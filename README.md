# Meeovi Starter Template (Nuxt 4)

A production-ready, backend-agnostic starter template for building Meeovi-powered applications using Nuxt 4.

## Features

- Plug-and-play Meeovi layers
- Adapter-driven authentication and search
- Dynamic backend adapters (Directus, Magento, mock, custom)
- Lightweight UI and minimal coupling to backend implementations

## Quickstart

1. Clone the repository and open the starter folder:

```bash
git clone https://github.com/meeovi/starter-template my-app
cd my-app
```

2. Install dependencies:

```bash
npm install
```

3. Install a backend adapter (example: Directus):

```bash
npm install @meeovi/adapter-directus
```

4. Configure environment variables

Copy the example environment file and set provider/runtime values:

```bash
cp .env.example .env
```

Common env vars

- `MEEOVI_PROVIDER` — adapter identifier (e.g. `directus`, `mock`)
- `DIRECTUS_URL` — Directus base URL (when using Directus)
- `DIRECTUS_STATIC_TOKEN` — optional static token for server-side requests

5. Run in development:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

> Note: If you enable prerendering, ensure the production runtime config (or env vars) give the app access to any backend endpoints it prerenders, or use the mock adapter to avoid prerender/network errors.

## Project layout (high level)

- `app/` — Nuxt app code
- `app/plugins/` — adapter + Directus initializers and client plugins
- `layers/` — reusable Meeovi layers (auth, search, shared, etc.)
- `packages/` — adapters and shared packages

## Using adapters

The runtime adapter is available via the Nuxt app instance and used by pages and composables:

```ts
const { $meeoviAdapter } = useNuxtApp()
await $meeoviAdapter.auth.login({ email, password })
const results = await $meeoviAdapter.search.query('query')
```

There are also layer-provided composables such as `useAuth()` and `useSearch()` for convenience.

## Directus specifics

- The starter includes plugins that initialize and inject Directus helpers (when using the Directus SDK or adapter):
  - `nuxtApp.$directus` — Directus client + helpers
  - `nuxtApp.$readItems`, `nuxtApp.$readItem`, etc. — helper builders for Directus requests

- During prerender/SSR the app must have access to the Directus endpoint (or use a mock adapter) to avoid runtime prerender errors (e.g. `$readItems is not a function` or network failures).

## Mock adapter (local development)

To develop without an external backend install the mock adapter:

```bash
npm install @meeovi/adapter-mock
export MEEOVI_PROVIDER=mock
```

## TypeScript typings (optional)

Add a declaration to expose typed access to the runtime adapter:

```ts
// types/meeovi.d.ts
import type { MeeoviAdapter } from '@/lib/sdk'

declare module '#app' {
  interface NuxtApp {
    $meeoviAdapter: MeeoviAdapter
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $meeoviAdapter: MeeoviAdapter
  }
}

export {}
```

## Extending the template

- Add or remove layers via `nuxt.config.ts` `extends`.
- Implement or publish adapters under `packages/adapters` and install them into the starter as npm packages (or via workspace references).

## Contributing

Contributions are welcome. Please open issues and PRs in the main repository and follow the repo linting and commit conventions.

## License

MIT
```ts

// src/plugins/adapter.client.ts

import { defineNuxtPlugin, useRuntimeConfig } from '#app'

import { registerAdapter } from '@/lib/sdk'

