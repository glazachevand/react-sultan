import { Product } from './products';

export type SortType = 'title_desc' | 'title_asc' | 'price_desc' | 'price_asc';

export type ParametersType = {
  priceMin: number;
  priceMax: number;
  manufacturers: string[];
};
export interface FilterState {
  sort: SortType;
  category: string;
  priceMin: number;
  priceMax: number;
  manufacturers: string[];
  filterProducts: Product[];
}

export enum FiltersActionTypes {
  SET_CATEGORY = 'SET_CATEGORY',
  SET_SORT = 'SET_SORT',
  FILTER_PRODUCTS = 'FILTER_PRODUCTS',
  SET_PARAMETERS = 'SET_PARAMETERS',
  CLEAR_PARAMETERS = 'CLEAR_PARAMETERS',
}

interface SetCategoryFilterAction {
  type: FiltersActionTypes.SET_CATEGORY;
  payload: string;
}

interface SetSortFilterAction {
  type: FiltersActionTypes.SET_SORT;
  payload: SortType;
}

interface FilterProductsFilterAction {
  type: FiltersActionTypes.FILTER_PRODUCTS;
  payload: FilterState;
}

interface SetParametersFilterAction {
  type: FiltersActionTypes.SET_PARAMETERS;
  payload: ParametersType;
}
interface ClearParametersFilterAction {
  type: FiltersActionTypes.CLEAR_PARAMETERS;
}

export type FilterAction =
  | SetCategoryFilterAction
  | SetSortFilterAction
  | FilterProductsFilterAction
  | SetParametersFilterAction
  | ClearParametersFilterAction;
