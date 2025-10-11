<template>
  <div>
    <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
      <h4>Related Articles</h4>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="(news, index) in articles" :key="index">
          <articleCard :class="['ma-4', selectedClass]" :article="news" v-if="isSelected" @click="toggle" />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import articleCard from '~/components/related/article.vue'

    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const model = ref(null)

    const {
        data: articles
    } = await useAsyncData('articles', () => {
        return $directus.request($readItems('articles', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })
</script>