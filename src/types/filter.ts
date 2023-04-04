import { Product } from './products';

export type SortType = 'title_desc' | 'title_asc' | 'price_desc' | 'price_asc';

export type ParametersType = {
  priceMin: number;
  priceMax: number;
  manufacturers: string[];
};
export type FilterType = {
  sort: SortType;
  category: string;
  priceMin: number;
  priceMax: number;
  manufacturers: string[];
  products: Product[];
};
export interface FilterState {
  sort: SortType;
  category: string;
  priceMin: number;
  priceMax: number;
  manufacturers: string[];
  page: number;
  filterProducts: Product[];
}

export const ItemsPerPage = 9;

export enum FiltersActionTypes {
  SET_CATEGORY = 'SET_CATEGORY',
  SET_SORT = 'SET_SORT',
  FILTER_PRODUCTS = 'FILTER_PRODUCTS',
  SET_PARAMETERS = 'SET_PARAMETERS',
  CLEAR_PARAMETERS = 'CLEAR_PARAMETERS',
  SET_PAGE = 'SET_PAGE',
}

interface SetCategoryFilterAction {
  type: FiltersActionTypes.SET_CATEGORY;
  payload: string;
}

interface SetSortFilterAction {
  type: FiltersActionTypes.SET_SORT;
  payload: SortType;
}

interface SetPageFilterAction {
  type: FiltersActionTypes.SET_PAGE;
  payload: number;
}

interface FilterProductsFilterAction {
  type: FiltersActionTypes.FILTER_PRODUCTS;
  payload: FilterType;
}

interface SetParametersFilterAction {
  type: FiltersActionTypes.SET_PARAMETERS;
  payload: ParametersType;
}
interface ClearParametersFilterAction {
  type: FiltersActionTypes.CLEAR_PARAMETERS;
  payload: string[];
}

export type FilterAction =
  | SetCategoryFilterAction
  | SetSortFilterAction
  | SetPageFilterAction
  | FilterProductsFilterAction
  | SetParametersFilterAction
  | ClearParametersFilterAction;
