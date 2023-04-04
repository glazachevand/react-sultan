import { Product } from '../types/products';

export const getManufactures = (products: Product[]) => {
  const newset = new Set<string>();

  products.forEach((product) => {
    newset.add(product.manufacturer);
  });

  return Array.from(newset);
};
