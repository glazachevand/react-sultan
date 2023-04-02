import { Product } from './products';

export enum SortPropertyEnum {
  TITLE_DESC = 'title_desc',
  TITLE_ASC = 'title_asc',
  PRICE_DESC = 'price_desc',
  PRICE_ASC = 'price_asc',
}

export type SortType = {
  name: 'title' | 'price';
  sortProperty: 'asc' | 'desc';
};

export type ParametersType = {
  priceMin: number;
  priceMax: number;
  manufacturer: string[];
};
export interface FilterState {
  sort: SortType;
  category: string;
  priceMin: number;
  priceMax: number;
  manufacturer: string[];
  filterProducts: Product[];
}

export enum FiltersActionTypes {
  SET_CATEGORY = 'SET_CATEGORY',
  FILTER_PRODUCTS = 'FILTER_PRODUCTS',
  SET_PARAMETERS = 'SET_PARAMETERS',
  CLEAR_PARAMETERS = 'CLEAR_PARAMETERS',
}

interface SetCategoryFilterAction {
  type: FiltersActionTypes.SET_CATEGORY;
  payload: string;
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

export type FilterAction = SetCategoryFilterAction | FilterProductsFilterAction | SetParametersFilterAction | ClearParametersFilterAction;
