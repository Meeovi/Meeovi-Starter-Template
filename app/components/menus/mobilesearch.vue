<template>
    <div id="minSearch" class="mobile-search-shell">
        <div class="text-center">
            <v-dialog v-model="dialog" width="auto">
                <template v-slot:activator="{ props }">
                    <v-btn icon="fas fa-search" title="Search" v-bind="props"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card class="mobile-search-dialog" min-height="100" min-width="280">
                        <Search />
                        <v-card-actions>
                            <v-btn color="primary" block @click="isActive.value = false">Close Search</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import Search from '../search/search.vue'

    const dialog = ref(false)
</script>

<style scoped>
.mobile-search-shell {
    display: none;
}

.mobile-search-dialog {
    width: min(92vw, 34rem);
    padding: 1rem;
}

@media (max-width: 600px) {
    .mobile-search-shell {
        display: block;
    }
}
</style>