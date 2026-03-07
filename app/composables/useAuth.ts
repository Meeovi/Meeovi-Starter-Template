export function useAuth() {
  const user = useCurrentUser()
  const token = useCookie<string | null>('auth-token')

  const loginMutation = useMApiMutation<{
    login: { token: string; user: any }
  }>(`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user { id name email role }
      }
    }
  `)

  const logoutMutation = useMApiMutation<{ logout: boolean }>(`
    mutation Logout {
      logout
    }
  `)

  async function login(email: string, password: string) {
    const res = await loginMutation.execute({ email, password })
    if (res?.login?.token) {
      token.value = res.login.token
      user.value = res.login.user
      await navigateTo('/')
    }
  }

  async function logout() {
    await logoutMutation.execute()
    token.value = null
    user.value = null
    await navigateTo('/login')
  }

  return { user, login, logout }
}
