export function useCommerce() {
  const meeovi = useMeeovi();

  return {
    getProducts: meeovi.commerce.getProducts,
    getProduct: meeovi.commerce.getProduct,
  };
}