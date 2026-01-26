export function useAuth() {
  const meeovi = useMeeovi();

  return {
    login: meeovi.auth.login,
    logout: meeovi.auth.logout,
    session: meeovi.auth.session,
  };
}