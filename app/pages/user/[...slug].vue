<template>
    <div>
        <h1>User Page</h1>
        <p>This is a dynamic user page. The slug is: {{ slug }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug
</script>