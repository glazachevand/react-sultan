import { ProductsState, ProductsAction, ProductsActionTypes } from '../types/products';
import { getProductsFromLS } from './../utils/getProductsFromLS';

const initialState: ProductsState = getProductsFromLS();

export const productsReducer = (state = initialState, action: ProductsAction): ProductsState => {
  let arrCopy, index;
  switch (action.type) {
    case ProductsActionTypes.DELETE_PRODUCT:
      return { ...state, products: [...state.products.filter((product) => product.id !== action.payload.id)] };

    case ProductsActionTypes.ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    case ProductsActionTypes.UPDATE_PRODUCT:
      arrCopy = [...state.products];
      index = arrCopy.findIndex((item) => item.id === action.payload.id);
      arrCopy.splice(index, 1, action.payload);
      return { ...state, products: arrCopy };

    case ProductsActionTypes.DELETE_CATEGORY:
      arrCopy = [...state.categories].filter((item) => item !== action.payload);
      return { ...state, categories: arrCopy };

    case ProductsActionTypes.UPDATE_CATEGORIES:
      return { ...state, categories: action.payload };

    case ProductsActionTypes.ADD_CATEGORY:
      return { ...state, categories: [...state.categories, action.payload] };

    default:
      return state;
  }
};
