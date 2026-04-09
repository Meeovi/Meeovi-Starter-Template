<template>
  <v-card class="query-filters" flat rounded="0" :loading="pending">
    <v-card-text class="pa-4">
      <div class="query-filters__header">
        <h4 class="query-filters__title">Filter results</h4>
        <p v-if="query" class="query-filters__query">for "{{ query }}"</p>
      </div>

      <v-select
        v-model="sortByModel"
        class="mb-4"
        :items="sortOptions"
        item-title="label"
        item-value="value"
        label="Sort by"
        density="comfortable"
        variant="outlined"
        hide-details
        @update:model-value="emitApply"
      />

      <section class="query-filters__group" v-if="categoryOptions.length">
        <h5 class="query-filters__section-title">Category</h5>
        <v-list class="pa-0" density="compact" bg-color="transparent">
          <v-list-item
            v-for="option in categoryOptions"
            :key="`cat-${option.value}`"
            class="query-filters__item"
            density="compact"
          >
            <template #prepend>
              <v-checkbox-btn
                :model-value="selectedCategoriesModel.includes(option.value)"
                :value="option.value"
                @update:model-value="toggleCategory(option.value)"
              />
            </template>
            <v-list-item-title>{{ option.value }}</v-list-item-title>
            <template #append>
              <small class="query-filters__count">{{ option.count }}</small>
            </template>
          </v-list-item>
        </v-list>
      </section>

      <section class="query-filters__group" v-if="brandOptions.length">
        <h5 class="query-filters__section-title">Brand</h5>
        <v-list class="pa-0" density="compact" bg-color="transparent">
          <v-list-item
            v-for="option in brandOptions"
            :key="`brand-${option.value}`"
            class="query-filters__item"
            density="compact"
          >
            <template #prepend>
              <v-checkbox-btn
                :model-value="selectedBrandsModel.includes(option.value)"
                :value="option.value"
                @update:model-value="toggleBrand(option.value)"
              />
            </template>
            <v-list-item-title>{{ option.value }}</v-list-item-title>
            <template #append>
              <small class="query-filters__count">{{ option.count }}</small>
            </template>
          </v-list-item>
        </v-list>
      </section>

      <section class="query-filters__group" v-if="priceBands.length">
        <h5 class="query-filters__section-title">Price</h5>
        <v-radio-group
          class="query-filters__price-group"
          :model-value="selectedPriceBandModel"
          color="primary"
          density="compact"
          hide-details
          @update:model-value="setPriceBand"
        >
          <v-radio label="Any" value="" />
          <v-radio
            v-for="band in priceBands"
            :key="`price-${band.id}`"
            :label="`${band.label} (${band.count})`"
            :value="band.id"
          />
        </v-radio-group>
      </section>
    </v-card-text>

    <v-divider />

    <v-card-actions class="pa-4 d-flex ga-2">
      <v-btn block variant="outlined" @click="clearAll" :disabled="pending">Clear all</v-btn>
      <v-btn block color="primary" variant="flat" @click="emitApply" :disabled="pending">Apply</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
type SortOption = {
  value: string
  label: string
}

type FilterOption = {
  value: string
  count: number
}

type PriceBandOption = {
  id: string
  label: string
  count: number
}

const props = withDefaults(
  defineProps<{
    query?: string
    pending?: boolean
    sortBy: string
    selectedCategories: string[]
    selectedBrands: string[]
    selectedPriceBand: string
    sortOptions: SortOption[]
    categoryOptions: FilterOption[]
    brandOptions: FilterOption[]
    priceBands: PriceBandOption[]
  }>(),
  {
    query: '',
    pending: false,
  },
)

const emit = defineEmits<{
  'update:sortBy': [value: string]
  'update:selectedCategories': [value: string[]]
  'update:selectedBrands': [value: string[]]
  'update:selectedPriceBand': [value: string]
  apply: []
  clear: []
}>()

const sortByModel = computed({
  get: () => props.sortBy,
  set: (value: string) => emit('update:sortBy', value),
})

const selectedCategoriesModel = computed({
  get: () => props.selectedCategories,
  set: (value: string[]) => emit('update:selectedCategories', value),
})

const selectedBrandsModel = computed({
  get: () => props.selectedBrands,
  set: (value: string[]) => emit('update:selectedBrands', value),
})

const selectedPriceBandModel = computed({
  get: () => props.selectedPriceBand,
  set: (value: string) => emit('update:selectedPriceBand', value),
})

function toggleCategory(value: string) {
  const next = selectedCategoriesModel.value.includes(value)
    ? selectedCategoriesModel.value.filter((entry) => entry !== value)
    : [...selectedCategoriesModel.value, value]
  selectedCategoriesModel.value = next
}

function toggleBrand(value: string) {
  const next = selectedBrandsModel.value.includes(value)
    ? selectedBrandsModel.value.filter((entry) => entry !== value)
    : [...selectedBrandsModel.value, value]
  selectedBrandsModel.value = next
}

function setPriceBand(value: string | null) {
  selectedPriceBandModel.value = value || ''
}

function clearAll() {
  emit('update:selectedCategories', [])
  emit('update:selectedBrands', [])
  emit('update:selectedPriceBand', '')
  emit('update:sortBy', props.sortOptions[0]?.value || 'relevance')
  emit('clear')
}

function emitApply() {
  emit('apply')
}
</script>