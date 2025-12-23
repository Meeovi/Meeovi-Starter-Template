<template>
    <ais-instant-search :search-client="searchClient" index-name="steam-video-games"
        :initial-ui-state="{ 'steam-video-games': { query: q } }">
        <ais-search-box />

        <ais-hits>
            <template v-slot:item="{ item }">
                <v-card class="hit" variant="flat">
                    <h2>{{ item.name }}</h2>
                    <p v-if="item.short_description">{{ item.short_description }}</p>
                </v-card>
            </template>
        </ais-hits>

        <ais-pagination />
    </ais-instant-search>
</template>

<script setup>
    import {
        MeiliSearch
    } from 'meilisearch';
    import 'instantsearch.css/themes/satellite.css';
    import {
        useRoute
    } from 'vue-router';
    import {
        computed
    } from 'vue';

    const host = process.env.MEILI_HOST || process.env.NUXT_PUBLIC_MEILI_HOST || 'http://127.0.0.1:7700';
    const apiKey = process.env.MEILI_API_KEY || process.env.NUXT_PUBLIC_MEILI_API_KEY || '';

    const meili = new MeiliSearch({
        host,
        apiKey
    });

    const createSearchClient = (client) => ({
        async search(requests) {
            const results = await Promise.all(
                requests.map(async (request) => {
                    const index = client.index(request.indexName);
                    const params = request.params || {};
                    const query = params.query ?? '';
                    const hitsPerPage = params.hitsPerPage ?? 20;
                    const page = params.page ?? 0;
                    const offset = page * hitsPerPage;

                    const options = {};
                    if (hitsPerPage) options.limit = hitsPerPage;
                    if (offset) options.offset = offset;
                    if (params.filters) options.filter = params.filters;
                    if (params.facets) options.facetsDistribution = params.facets;
                    if (params.attributesToRetrieve) options.attributesToRetrieve = params
                        .attributesToRetrieve;

                    const res = await index.search(query, options);

                    const nbHits = res.nbHits ?? res.estimatedTotalHits ?? res.total ?? res.hits
                        .length;

                    return {
                        hits: res.hits,
                        nbHits,
                        processingTimeMS: res.processingTimeMs ?? 0,
                        query,
                    };
                })
            );
            return ({
                results
            });
        },
        searchForFacetValues() {
            return Promise.resolve({
                results: []
            });
        },
    });

    const searchClient = createSearchClient(meili);

    const route = useRoute();
    const q = computed(() => route.query.q ?? '');
</script>