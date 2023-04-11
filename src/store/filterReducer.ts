import { FilterState, FilterAction, FiltersActionTypes } from '../types/filter';
import { getManufactures } from '../utils/getManufactures';
import data from './../data/data.json';

const initialState: FilterState = {
  sort: 'price_asc',
  category: 'Все',
  priceMin: 10,
  priceMax: 10000,
  manufacturers: getManufactures(data.products),
  page: 1,
  filterProducts: data.products,
};

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
  let productsCopy;
  switch (action.type) {
    case FiltersActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload };

    case FiltersActionTypes.SET_SORT:
      productsCopy = [...state.filterProducts];

      switch (action.payload) {
        case 'title_asc':
          productsCopy = productsCopy.sort((a, b) => `${a.brand} ${a.title}`.localeCompare(`${b.brand} ${b.title}`));
          break;

        case 'title_desc':
          productsCopy = productsCopy.sort((a, b) => `${b.brand} ${b.title}`.localeCompare(`${a.brand} ${a.title}`));
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

      return { ...state, sort: action.payload, filterProducts: productsCopy };

    case FiltersActionTypes.SET_PAGE:
      return { ...state, page: action.payload };

    case FiltersActionTypes.FILTER_PRODUCTS:
      productsCopy = [...action.payload.products];

      if (action.payload.category !== 'Все') {
        productsCopy = productsCopy.filter((product) => product.typecare.includes(action.payload.category));
      }

      productsCopy = productsCopy.filter((product) => product.price < action.payload.priceMax && product.price > action.payload.priceMin);

      productsCopy = productsCopy.filter((product) => action.payload.manufacturers.includes(product.manufacturer));

      return { ...state, filterProducts: productsCopy };

    case FiltersActionTypes.SET_PARAMETERS:
      return { ...state, priceMin: action.payload.priceMin, priceMax: action.payload.priceMax, manufacturers: action.payload.manufacturers };

    case FiltersActionTypes.CLEAR_PARAMETERS:
      return { ...state, priceMin: 10, priceMax: 10000, manufacturers: action.payload };

    default:
      return state;
  }
};
