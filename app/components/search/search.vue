<template>
  <v-container>
    <v-text-field v-model="q" label="Search" prepend-inner-icon="search" @input="onInput" />
    <v-progress-linear v-if="loading" indeterminate class="my-4" />
    <v-list v-if="results">
      <v-list-item v-for="item in results" :key="item.id">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.snippet }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
const q = ref('')
const page = ref(1)

const { data, loading } = useMApiQuery(
  () => ['search', q.value, page.value],
  `
    query Search($q: String!, $page: Int) {
      search(q: $q, page: $page) {
        results {
          id
          title
          snippet
          image
        }
        facets {
          name
          buckets { value count }
        }
        pageInfo {
          page
          totalPages
          hasNext
          hasPrev
        }
      }
    }
  `,
  () => ({ q: q.value, page: page.value })
)

const results = computed(() => data.value?.search.results || [])
const facets = computed(() => data.value?.search.facets || [])
const pageInfo = computed(() => data.value?.search.pageInfo)
</script>