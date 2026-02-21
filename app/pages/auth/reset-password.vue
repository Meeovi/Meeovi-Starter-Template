<script setup lang="ts">
    import type {
        AuthFormField
    } from '@nuxt/ui'

    const fields = ref < AuthFormField[] > ([{
            name: 'email',
            type: 'text',
            label: 'Email'
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password'
        }
    ])
</script>

<template>
    <UAuthForm title="Reset Password" description="Enter your email to reset your password." icon="i-lucide-user"
        :fields="fields" class="max-w-md" />
</template>