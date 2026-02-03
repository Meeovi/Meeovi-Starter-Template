# Starter Template — Alternate Framework

This starter is the official base for new sites built on the Alternate Framework.
It wires the framework theme to the in-repo layers (`auth`, `search`, `shared`) and includes a minimal, plug-and-play setup so teams can get running quickly.

## Purpose

- Provide a working site scaffold that uses `@meeovi/layer-auth`, `@meeovi/layer-search`, and `@meeovi/layer-shared`.
- Ship a small set of helpers (search initializer plugin, `lib/auth-client.ts`) so developers can start in `dev` mode without extra setup.

## Quickstart (development)

From the monorepo root:

```bash
# install workspace deps (root)
npm install

# run the starter-template locally
cd themes/framework/starter-template
npm run dev
```

Or run the template-specific install and dev commands directly inside `themes/framework/starter-template`.

## Required environment variables

Create a `.env` (or set env vars in your environment). Important variables used by this template:

- `BETTER_AUTH_URL` — base URL for your auth backend (development default: `http://0.0.0.0:3011`)
- `NUXT_BETTER_AUTH_SECRET` (or `BETTER_AUTH_SECRET`) — secret used by the auth runtime
- `SEARCH_HOST` — Search host URL (used by `@meeovi/layer-search`)
- `SEARCH_API_KEY` — Search API key
- `DATABASE_URL` — (optional) Prisma/DB connection if you enable server features

See `.env.example` in the template for a sample set of values.

## How auth is wired (production-ready guidance)

- The layer pages use the layer composable `useAuth()` (in `layers/auth`) to obtain an application auth client.
- The starter-template ships with a theme-level `lib/auth-client.ts` that creates a `better-auth` client for convenience during development. For production you should:

  1. Create your application-level auth client using `createAuthClient` from `better-auth/client` with production config/plugins.
  2. Export the client or helper functions in a package or entry that your layers/pages can consume (for example a local `@meeovi/auth` package or a Nuxt plugin that provides the client via provide/inject).

Example minimal export (app-level package or `lib/auth-client.ts`):

```ts
import { createAuthClient } from 'better-auth/client'
import { getAuthPlugins } from '@meeovi/layer-auth/app/utils/plugins'

export const authClient = createAuthClient({
  plugins: getAuthPlugins({ subscription: true }),
  baseURL: process.env.BETTER_AUTH_URL,
})

export const { signIn, signOut, signUp, useSession } = authClient
```

Then ensure your app exposes this (for instance publish `@meeovi/auth` or export via a Nuxt plugin) so `layers/auth` can consume it in production.

## Search initialization

- The starter includes `app/plugins/init-theme-search.client.ts` which calls `initThemeSearch()` on the client to set `host` and `apiKey` from the layer helper `getEnv()`.
- Ensure `SEARCH_HOST` and `SEARCH_API_KEY` are set for search features to work.

## Prerendering / Nitro notes

- During development and early integration the repo had Nitro prerender disabled in some layer/theme `nuxt.config.ts` to avoid runtime errors when backend services are not available.
- To enable full prerendering for production: ensure runtime services (DB, Directus, auth) are available and then set:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: { prerender: { enabled: true } }
})
```

Also remove any development-only shims and ensure `DATABASE_URL`/auth endpoints are reachable during the prerender step.

## Production checklist

- [ ] Replace the development auth client with your production auth client (see section above).
- [ ] Set production env vars: auth, search, database, secrets.
- [ ] Re-enable Nitro prerender when backend services are ready.
- [ ] Run a full build and smoke test: `npm run build && npm run preview` inside `themes/framework/starter-template`.
- [ ] Run the repo typecheck: from repo root `npm run typecheck`.

## Troubleshooting

- Build fails with bundling errors referencing `nuxt.config.ts` from a layer: ensure your code imports runtime/dist composables or that layers expose only runtime entrypoints (avoid importing layer package root `nuxt.config.ts` from client code).
- Missing Prisma runtime errors: install `@prisma/client-runtime-utils` if your runtime depends on Prisma internals.
- If prerender fails with `request` undefined, the prerender step may be executing server code that expects a runtime environment; reconfigure prerender or mock services while building.

## Contributing / Extending

- Add environment-specific examples in `.env.example`.
- Document any additional steps required by new layers.

---
For questions or to have me proceed with re-enabling prerender and running a production build, tell me which backend services or mocks you'll provide and I will continue.
## This Application is in Beta Release ##

# Starter Template

A powerful, consistent, and flexible starter template with tons of integrations. 

## Features include:

- Starter template for the Alternate Framework that provides a slim shell to get started.
- Extendible system that supports Nuxtjs, Vuejs modules.
- Integrated with @meeovi/layer-auth supporting all of Better-Auth features (both client and server-side).
- Searchkit and Instantsearch.js support via @meeovi/layer-search.
- Extendable with @meeovi/adapter-* providing custom features extending @meeovi/layer-*.
- Wire server-side semantic reranking (call your embeddings API + rerank).
- Added an error page
- Vuetify, Fontawesome integration for design system via @meeovi/layer-shared.
- Google Tag Manager, Google Analytics integration via @meeovi/layer-shared.
- Pluggable payment system supporting numerous payment methods via @meeovi/layer-commerce.
- Directus integration for content management system integration via @meeovi/adapter-directus.

and much more. Take a look at template.meeovi.com 

## Prerequisites:

You will need:

Git = https://git-scm.com/

Nodejs = https://nodejs.org/en/

We recommend postgres as the database 

rename .sample.env file to .env 

Add your database type to DATABASE_PROVIDER, example is DATABASE_PROVIDER="postgresql" (" " are required)

Add your database credentials to DATABASE_URL, example is DATABASE_URL=postgresql://databaseusername:databasepassword@databasehost:5432/databasename

## Steps to Install - 10 Minute Install

1. git clone https://github.com/meeovi/AlternateFramework
2. cd Starter Template
3. npm install
4. npm run all

Starter Template will be at: http://localhost:3001
