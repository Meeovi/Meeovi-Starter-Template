<template>
    <section class="panel hero">
        <div>
            <p class="eyebrow">Weekend launch demo</p>
            <h1>Minimal search demo, ready to deploy.</h1>
            <p class="hero-copy">
                This starter-template now runs as a focused Nuxt app with app-based routes,
                a clean layout, lightweight server endpoints, and a search experience that
                works even when no external backend is configured.
            </p>

            <form class="search-form" @submit.prevent="submitSearch">
                <input
                    v-model="query"
                    class="search-input"
                    type="search"
                    name="q"
                    placeholder="Search products, articles, or demo content"
                    autocomplete="off"
                >

                <select v-model="selectedIndex" class="search-select" name="index">
                    <option v-for="indexName in indexes" :key="indexName" :value="indexName">
                        {{ indexName }}
                    </option>
                </select>

                <button class="button" type="submit">Search</button>
            </form>
        </div>

        <div class="hero-meta">
            <div class="status-pill">
                <span>Health</span>
                <span>{{ healthLabel }}</span>
            </div>

            <div class="status-grid">
                <article class="status-card">
                    <strong>Routes</strong>
                    <p class="muted">App routes live under app/pages and render through a single default layout.</p>
                </article>
                <article class="status-card">
                    <strong>API</strong>
                    <p class="muted">Server endpoints are limited to health checks and search APIs under server/api.</p>
                </article>
                <article class="status-card">
                    <strong>Search</strong>
                    <p class="muted">If no backend env vars are set, the app seeds a small in-memory demo index automatically.</p>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const indexes = computed(() => {
    const value = config.public.alternateSearchIndexes
    return Array.isArray(value) && value.length > 0 ? value : ['products']
})

const route = useRoute()
const query = ref(typeof route.query.q === 'string' ? route.query.q : '')
const selectedIndex = ref(indexes.value[0] || 'products')

const { data: health } = await useFetch<{ status: string }>('/api/health', {
    default: () => ({ status: 'unknown' }),
})

const healthLabel = computed(() => health.value?.status || 'unknown')

async function submitSearch() {
    await navigateTo({
        path: '/results',
        query: {
            ...(query.value.trim() ? { q: query.value.trim() } : {}),
            index: selectedIndex.value,
        },
    })
}
</script>