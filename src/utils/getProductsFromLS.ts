import { Product } from './../types/products';
import data from './../data/data.json';

export const getProductsFromLS = () => {
  const dataFromLS = localStorage.getItem('products');
  let products;

  if (dataFromLS) {
    products = JSON.parse(dataFromLS);
  } else {
    products = data.products;
    localStorage.setItem('products', JSON.stringify(data.products));
  }

  const categoriesFromLS = localStorage.getItem('categories');
  let categories;

  if (categoriesFromLS) {
    categories = JSON.parse(categoriesFromLS);
  } else {
    categories = data.categories;
    localStorage.setItem('categories', JSON.stringify(data.categories));
  }

  return {
    products: products as Product[],
    categories: categories,
  };
};
