import { FilterState, FilterAction, SortType, FiltersActionTypes } from '../types/filter';
import data from './../data/data.json';

const initialState: FilterState = {
  sort: { name: 'title', sortProperty: 'asc' },
  category: 'Все',
  priceMin: 10,
  priceMax: 10000,
  manufacturer: [],
  filterProducts: data.products,
};

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case FiltersActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload };

    case FiltersActionTypes.FILTER_PRODUCTS:
      let productsCopy = [...action.payload.filterProducts];

      if (action.payload.category !== 'Все') {
        productsCopy = productsCopy.filter((product) => product.typecare.includes(action.payload.category));
      }

      productsCopy = productsCopy.filter((product) => product.price < action.payload.priceMax && product.price > action.payload.priceMin);

      return { ...state, filterProducts: productsCopy };

    case FiltersActionTypes.SET_PARAMETERS:
      return { ...state, priceMin: action.payload.priceMin, priceMax: action.payload.priceMax, manufacturer: action.payload.manufacturer };

    case FiltersActionTypes.CLEAR_PARAMETERS:
      return { ...state, priceMin: 10, priceMax: 10000, manufacturer: [] };

    default:
      return state;
  }
};
