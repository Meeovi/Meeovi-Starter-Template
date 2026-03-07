export function useCurrentUser() {
  const user = useState<any | null>('currentUser', () => null)

  const { data, error } = useMApiQuery<{ me: any }>(
    'me',
    `
      query Me {
        me {
          id
          name
          email
          role
        }
      }
    `
  )

  watchEffect(() => {
    if (data.value?.me) user.value = data.value.me
    if (error.value) user.value = null
  })

  return user
}
