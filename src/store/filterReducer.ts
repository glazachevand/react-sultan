import { FilterState, FilterAction, FiltersActionTypes } from '../types/filter';
import { getManufactures } from '../utils/getManufactures';
import data from './../data/data.json';

const initialState: FilterState = {
  sort: 'price_asc',
  category: 'Все',
  priceMin: 10,
  priceMax: 10000,
  manufacturers: getManufactures(data.products),
  filterProducts: data.products,
};

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case FiltersActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload };

    case FiltersActionTypes.SET_SORT:
      return { ...state, sort: action.payload };

    case FiltersActionTypes.FILTER_PRODUCTS:
      let productsCopy = [...action.payload.filterProducts];

      if (action.payload.category !== 'Все') {
        productsCopy = productsCopy.filter((product) => product.typecare.includes(action.payload.category));
      }

      switch (action.payload.sort) {
        case 'title_asc':
          productsCopy = productsCopy.sort((a, b) => a.brand.localeCompare(b.brand));
          break;

        case 'title_desc':
          productsCopy = productsCopy.sort((a, b) => b.brand.localeCompare(a.brand));
          break;

        case 'price_asc':
          productsCopy = productsCopy.sort((a, b) => a.price - b.price);
          break;

        case 'price_desc':
          productsCopy = productsCopy.sort((a, b) => b.price - a.price);
          break;

        default:
          break;
      }

      productsCopy = productsCopy.filter((product) => product.price < action.payload.priceMax && product.price > action.payload.priceMin);

      productsCopy = productsCopy.filter((product) => action.payload.manufacturers.includes(product.manufacturer));

      return { ...state, filterProducts: productsCopy };

    case FiltersActionTypes.SET_PARAMETERS:
      return { ...state, priceMin: action.payload.priceMin, priceMax: action.payload.priceMax, manufacturers: action.payload.manufacturers };

    case FiltersActionTypes.CLEAR_PARAMETERS:
      return { ...state, priceMin: 10, priceMax: 10000, manufacturers: [] };

    default:
      return state;
  }
};
