<template>
  <div>
    <v-navigation-drawer absolute permanent>
      <v-list>
            <NuxtLink :to="isLoggedIn ? `/u/${user?.id}` : '/login'" class="text-decoration-none">
                <v-list-item :title="userName" :subtitle="userEmail" class="mb-3">
                    <template #prepend>
                        <UserAvatar :src="userAvatar" :name="userName" :email="userEmail" :size="40" />
                    </template>
                </v-list-item>
            </NuxtLink>
      </v-list>

      <v-divider></v-divider>

      <v-list :lines="false" density="compact" nav>
        <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import UserAvatar from '#social/app/components/user/UserAvatar.vue'

  const auth = useAuth()
  const user = auth.user

  const isLoggedIn = computed(() => auth.loggedIn.value)
  const userName = computed(() => user.value?.name || 'Guest')
  const userEmail = computed(() => user.value?.email || 'Not logged in')
  const userAvatar = computed(() => user.value?.image || user.value?.avatar || '')

  const items = [{
      text: 'My Files',
      icon: 'fas fa-folder'
    },
    {
      text: 'Shared with me',
      icon: 'fas fa-users'
    },
    {
      text: 'Starred',
      icon: 'fas fa-star'
    },
    {
      text: 'Recent',
      icon: 'fas fa-history'
    },
    {
      text: 'Offline',
      icon: 'fas fa-check-circle'
    },
    {
      text: 'Uploads',
      icon: 'fas fa-upload'
    },
    {
      text: 'Backups',
      icon: 'fas fa-cloud-upload'
    },
  ]
</script>