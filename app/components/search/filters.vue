<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-card>
                    <v-card-title>Filters</v-card-title>
                    <v-list>
                        <v-list-group v-for="facet in facets" :key="facet.name" :value="facet.name">
                            <template #activator="{ props }">
                                <v-list-item v-bind="props">
                                    <v-list-item-title>{{ facet.name }}</v-list-item-title>
                                </v-list-item>
                            </template>

                            <v-list-item v-for="bucket in facet.buckets" :key="bucket.value">
                                <v-list-item-title>
                                    {{ bucket.value }} ({{ bucket.count }})
                                </v-list-item-title>
                            </v-list-item>
                        </v-list-group>
                    </v-list>
                </v-card>
            </v-col>

            <v-col cols="9">
                <v-progress-linear v-if="loading" indeterminate />

                <v-card v-for="item in results" :key="item.id" class="mb-4">
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-text>{{ item.snippet }}</v-card-text>
                </v-card>

                <v-pagination v-if="pageInfo" v-model="page" :length="pageInfo.totalPages" />
            </v-col>
        </v-row>
    </v-container>
</template>