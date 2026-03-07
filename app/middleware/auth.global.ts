export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie<string | null>('auth-token')

  if (!token.value && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login')
  }
})
