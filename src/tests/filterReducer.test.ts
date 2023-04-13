import { filterReducer } from '../store/filterReducer';
import { FiltersActionTypes, SortType, FilterAction } from '../types/filter';

describe('Test filterReducer', () => {
  test('Set category test', () => {
    const initialState = {
      sort: 'price_asc' as SortType,
      category: 'Все',
      priceMin: 10,
      priceMax: 10000,
      manufacturers: ['BioMio', 'Tresemme'],
      page: 1,
      filterProducts: [
        {
          id: 1,
          title: 'BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот',
          url: 'product1.webp',
          barcode: 4604049097548,
          manufacturer: 'BioMio',
          brand: 'BioMio',
          description: 'Экологичное гипоаллергенное туалетное мыло BioMio BIO-SOAP.',
          typesize: 'вес',
          size: '1020 г',
          typecare: ['Уход за руками', 'Уход за телом', 'Уход за ногами'],
          price: 95,
        },
        {
          id: 2,
          title: 'Шампунь beauty-full volume плотность и объем',
          url: 'product2.webp',
          barcode: 4704049097548,
          manufacturer: 'Tresemme',
          brand: 'Tresemme',
          description: 'Головокружительный объем от самых корней.',
          typesize: 'объем',
          size: '650 мл',
          typecare: ['Уход за волосами'],
          price: 419,
        },
      ],
    };

    const action: FilterAction = {
      type: FiltersActionTypes.SET_CATEGORY,
      payload: 'Уход за волосами',
    };

    const stateAfterFilter = {
      sort: 'price_asc',
      category: 'Уход за волосами',
      priceMin: 10,
      priceMax: 10000,
      manufacturers: ['BioMio', 'Tresemme'],
      page: 1,
      filterProducts: [
        {
          id: 1,
          title: 'BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот',
          url: 'product1.webp',
          barcode: 4604049097548,
          manufacturer: 'BioMio',
          brand: 'BioMio',
          description: 'Экологичное гипоаллергенное туалетное мыло BioMio BIO-SOAP.',
          typesize: 'вес',
          size: '1020 г',
          typecare: ['Уход за руками', 'Уход за телом', 'Уход за ногами'],
          price: 95,
        },
        {
          id: 2,
          title: 'Шампунь beauty-full volume плотность и объем',
          url: 'product2.webp',
          barcode: 4704049097548,
          manufacturer: 'Tresemme',
          brand: 'Tresemme',
          description: 'Головокружительный объем от самых корней.',
          typesize: 'объем',
          size: '650 мл',
          typecare: ['Уход за волосами'],
          price: 419,
        },
      ],
    };

    expect(filterReducer(initialState, action)).toEqual(stateAfterFilter);
  });
});
