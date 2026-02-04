// src/middleware/auth.global.ts
import type { NavigationGuard } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const authMiddleware: NavigationGuard = async (to, from, next) => {
  const { isAuthenticated, fetchUser } = useAuth()

  // Public routes
  if (to.path === '/login') {
    return next()
  }

  if (!isAuthenticated.value) {
    try {
      await fetchUser()
    } catch {
      // ignore
    }
  }

  if (!isAuthenticated.value && to.meta.requiresAuth) {
    return next('/login')
  }

  return next()
}

export default authMiddleware