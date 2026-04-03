<template>
  <aside class="query-filters" :aria-busy="pending ? 'true' : 'false'">
    <header class="query-filters__header">
      <h4 class="query-filters__title">Filter results</h4>
      <p v-if="query" class="query-filters__query">for "{{ query }}"</p>
    </header>

    <section class="query-filters__group">
      <label class="query-filters__label" for="query-filters-sort">Sort by</label>
      <select id="query-filters-sort" class="query-filters__select" v-model="sortByModel" @change="emitApply">
        <option v-for="option in sortOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </section>

    <section class="query-filters__group" v-if="categoryOptions.length">
      <h5 class="query-filters__section-title">Category</h5>
      <label v-for="option in categoryOptions" :key="`cat-${option.value}`" class="query-filters__option">
        <input
          type="checkbox"
          :value="option.value"
          :checked="selectedCategoriesModel.includes(option.value)"
          @change="toggleCategory(option.value)"
        />
        <span>{{ option.value }}</span>
        <small>{{ option.count }}</small>
      </label>
    </section>

    <section class="query-filters__group" v-if="brandOptions.length">
      <h5 class="query-filters__section-title">Brand</h5>
      <label v-for="option in brandOptions" :key="`brand-${option.value}`" class="query-filters__option">
        <input
          type="checkbox"
          :value="option.value"
          :checked="selectedBrandsModel.includes(option.value)"
          @change="toggleBrand(option.value)"
        />
        <span>{{ option.value }}</span>
        <small>{{ option.count }}</small>
      </label>
    </section>

    <section class="query-filters__group" v-if="priceBands.length">
      <h5 class="query-filters__section-title">Price</h5>
      <label v-for="band in priceBands" :key="`price-${band.id}`" class="query-filters__option">
        <input
          type="radio"
          name="query-filters-price"
          :value="band.id"
          :checked="selectedPriceBandModel === band.id"
          @change="setPriceBand(band.id)"
        />
        <span>{{ band.label }}</span>
        <small>{{ band.count }}</small>
      </label>
    </section>

    <footer class="query-filters__actions">
      <button type="button" class="button-secondary query-filters__button" @click="clearAll" :disabled="pending">
        Clear all
      </button>
      <button type="button" class="button query-filters__button" @click="emitApply" :disabled="pending">
        Apply filters
      </button>
    </footer>
  </aside>
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

function setPriceBand(value: string) {
  selectedPriceBandModel.value = selectedPriceBandModel.value === value ? '' : value
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