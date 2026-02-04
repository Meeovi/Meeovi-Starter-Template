<template>
    <main class="container">
        <header class="header">
            <h1>{{ config.public.appName }}</h1>
            <nav>
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/search">Search</NuxtLink>
                <NuxtLink v-if="!isAuthenticated" to="/login">Login</NuxtLink>
                <button v-else type="button" @click="logout">Logout</button>
            </nav>
        </header>

        <section>
            <h2>Welcome</h2>
            <p>Current route: {{ route.path }}</p>

            <div v-if="isAuthenticated">
                <h3>Signed in as</h3>
                <pre>{{ user }}</pre>
            </div>
            <div v-else>
                <p>You are not signed in.</p>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
    import {
        useAuth
    } from '@/composables/useAuth'
    import {
        useRoute
    } from 'vue-router'
    import {
        useRuntimeConfig
    } from '#app'

    const {
        user,
        isAuthenticated,
        logout
    } = useAuth()
    const route = useRoute()
    const config = useRuntimeConfig()
</script>

<style scoped>
    .container {
        max-width: 960px;
        margin: 0 auto;
        padding: 2rem;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }

    nav a,
    nav button {
        margin-left: 1rem;
    }
</style>