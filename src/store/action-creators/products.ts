import { ProductsAction, ProductsActionTypes } from '../../types/products';
import { Product } from '../../types/products';

export function addProduct(product: Product): ProductsAction {
  return { type: ProductsActionTypes.ADD_PRODUCT, payload: product };
}

export function deleteProduct(product: Product): ProductsAction {
  return { type: ProductsActionTypes.DELETE_PRODUCT, payload: product };
}

export function updateProduct(product: Product): ProductsAction {
  return { type: ProductsActionTypes.UPDATE_PRODUCT, payload: product };
}

export function deleteCategory(category: string): ProductsAction {
  return { type: ProductsActionTypes.DELETE_CATEGORY, payload: category };
}

export function updateCategories(categories: string[]): ProductsAction {
  return { type: ProductsActionTypes.UPDATE_CATEGORIES, payload: categories };
}
