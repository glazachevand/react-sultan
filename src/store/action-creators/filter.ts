import { FiltersActionTypes, FilterAction, FilterState, ParametersType } from '../../types/filter';

export function setCategory(category: string): FilterAction {
  return { type: FiltersActionTypes.SET_CATEGORY, payload: category };
}

export function filterAllProducts(filter: FilterState): FilterAction {
  return { type: FiltersActionTypes.FILTER_PRODUCTS, payload: filter };
}

export function setParameters(parameters: ParametersType): FilterAction {
  return { type: FiltersActionTypes.SET_PARAMETERS, payload: parameters };
}

export function clearParameters(): FilterAction {
  return { type: FiltersActionTypes.CLEAR_PARAMETERS };
}
