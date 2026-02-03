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
