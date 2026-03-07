<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="onSubmit">
              <v-text-field v-model="email" label="Email" type="email" required />
              <v-text-field v-model="password" label="Password" type="password" required />
              <v-btn :loading="loading" type="submit" block color="primary">
                <Fa icon="user" class="mr-2" /> Login
              </v-btn>
              <v-alert v-if="error" type="error" class="mt-2">
                {{ errorMessage }}
              </v-alert>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  const email = ref('')
  const password = ref('')
  const {
    login
  } = useAuth()
  const loading = computed(() => false) // handled inside useAuth if you want
  const error = ref < any > (null)
  const errorMessage = computed(() => 'Invalid credentials')

  async function onSubmit() {
    try {
      await login(email.value, password.value)
    } catch (e) {
      error.value = e
    }
  }
</script>