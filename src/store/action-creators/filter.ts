import { FiltersActionTypes, FilterAction, FilterType, ParametersType, SortType } from '../../types/filter';

export function setCategory(category: string): FilterAction {
  return { type: FiltersActionTypes.SET_CATEGORY, payload: category };
}

export function setSortproperty(sort: SortType): FilterAction {
  return { type: FiltersActionTypes.SET_SORT, payload: sort };
}

export function filterAllProducts(filter: FilterType): FilterAction {
  return { type: FiltersActionTypes.FILTER_PRODUCTS, payload: filter };
}

export function setParameters(parameters: ParametersType): FilterAction {
  return { type: FiltersActionTypes.SET_PARAMETERS, payload: parameters };
}

export function clearParameters(manufactures: string[]): FilterAction {
  return { type: FiltersActionTypes.CLEAR_PARAMETERS, payload: manufactures };
}

export function setCurrentPage(page: number): FilterAction {
  return { type: FiltersActionTypes.SET_PAGE, payload: page };
}
