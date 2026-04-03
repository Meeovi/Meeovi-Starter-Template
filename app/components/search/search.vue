<template>
  <div class="search-entry">
    <ClientOnly>
      <component :is="instantComponents.instantSearch" v-if="instantReady" :search-client="searchClient"
        :index-name="activeIndex">
        <component :is="instantComponents.searchBox">
          <template #default="{ currentRefinement, refine }">
            <form class="search-entry-form" @submit.prevent="submitInstant(currentRefinement)">
              <v-text-field :model-value="currentRefinement" variant="outlined" density="compact" hide-details clearable
                rounded="xl" label="Search" placeholder="Search products or articles" @update:model-value="refine" />
              <v-btn color="primary" type="submit">
                <v-icon icon="fas fa-search"></v-icon>
              </v-btn>
            </form>
          </template>
        </component>
      </component>

      <form v-else class="search-entry-form" @submit.prevent="submitFallback">
        <v-text-field v-model="fallbackQuery" variant="outlined" density="compact" hide-details clearable rounded="xl"
          label="Search" placeholder="Search products or articles" @keydown.enter.prevent="submitFallback" />
        <v-btn color="primary" type="submit">
          <v-icon icon="fas fa-search"></v-icon>
        </v-btn>
      </form>

      <template #fallback>
        <form class="search-entry-form" @submit.prevent="submitFallback">
          <v-text-field v-model="fallbackQuery" variant="outlined" density="compact" hide-details clearable rounded="xl"
            prepend-inner-icon="fas fa-search" label="Search" placeholder="Search products or articles"
            @keydown.enter.prevent="submitFallback" />
          <v-btn color="primary" type="submit">
            Search
          </v-btn>
        </form>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  import {
    onMounted,
    reactive,
    ref
  } from 'vue'
  import 'instantsearch.css/themes/satellite-min.css'

  const config = useRuntimeConfig()
  const indexes = computed(() => {
    const value = config.public.alternateSearchIndexes
    return Array.isArray(value) && value.length > 0 ? value : ['products']
  })

  const activeIndex = computed(() => indexes.value[0] || 'products')
  const fallbackQuery = ref('')
  const instantReady = ref(false)

  const instantComponents = reactive < {
    instantSearch: any | null
    searchBox: any | null
  } > ({
    instantSearch: null,
    searchBox: null,
  })

  const searchClient = {
    search(requests: Array < {
      params ? : {
        page ? : number;hitsPerPage ? : number;query ? : string
      }
    } > = []) {
      const results = requests.map((request) => ({
        hits: [],
        nbHits: 0,
        page: request?.params?.page || 0,
        nbPages: 0,
        hitsPerPage: request?.params?.hitsPerPage || 20,
        processingTimeMS: 0,
        query: request?.params?.query || '',
      }))

      return Promise.resolve({
        results
      })
    },
  }

  onMounted(async () => {
    try {
      const instant = await import('vue-instantsearch/vue3/es')
      instantComponents.instantSearch = instant.AisInstantSearch
      instantComponents.searchBox = instant.AisSearchBox
      instantReady.value = Boolean(instantComponents.instantSearch && instantComponents.searchBox)
    } catch {
      instantReady.value = false
    }
  })

  async function navigateToResults(query: string) {
    const normalized = query.trim()
    await navigateTo({
      path: '/results',
      query: {
        ...(normalized ? {
          q: normalized
        } : {}),
        index: activeIndex.value,
        page: '1',
      },
    })
  }

  async function submitInstant(value: string) {
    await navigateToResults(value)
  }

  async function submitFallback() {
    await navigateToResults(fallbackQuery.value)
  }
</script>

<style scoped>
  .search-entry {
    width: 100%;
  }

  .search-entry-form {
    display: flex;
    align-items: center;
    gap: 8rem;
    width: 100%;
  }

  /* Vuetify deep targets - grow text field, keep button fixed */
  .search-entry-form :deep(.v-input) {
    flex: 1 1 auto;
  }

  .search-entry-form :deep(.v-btn) {
    border-radius: 0 35px 35px 0;
    position: relative;
    top: -10.3rem;
    left: 170px;
  }

  .search-entry-form :deep(.v-field) {
    border-radius: 999px;
    width: 500px;
  }

  .search-entry-form :deep(.v-field__input) {
    min-height: 40px;
  }
</style>