export function useSearch() {
  const meeovi = useMeeovi();

  return {
    query: meeovi.search.query,
  };
}