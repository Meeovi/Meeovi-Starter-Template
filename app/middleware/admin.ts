export default defineNuxtRouteMiddleware(() => {
  const user = useCurrentUser()
  if (user.value && user.value.role !== 'admin') {
    return navigateTo('/')
  }
})
