import { cartReducer } from '../store/cartReducer';
import { CartActionTypes } from '../types/cart';

describe('Test cartReducer', () => {
  test('Delete item test', () => {
    const initialState = {
      totalPrice: 1000,
      items: [
        {
          id: 1,
          title: 'BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот',
          url: 'product1.webp',
          brand: 'BioMio',
          description: 'Экологичное гипоаллергенное туалетное мыло',
          typesize: 'вес',
          size: '1020 г',
          price: 100,
          count: 4,
        },
        {
          id: 2,
          title: 'Шампунь beauty-full volume плотность и объем',
          url: 'product2.webp',
          brand: 'Tresemme',
          description: 'Головокружительный объем от самых корней? Попробуй и убедись сама. ',
          typesize: 'объем',
          size: '650 мл',
          price: 200,
          count: 3,
        },
      ],
    };

    const action = {
      type: CartActionTypes.DELETE_ITEM,
      payload: {
        id: 2,
        title: 'Шампунь beauty-full volume плотность и объем',
        url: 'product2.webp',
        brand: 'Tresemme',
        description: 'Головокружительный объем от самых корней? Попробуй и убедись сама. ',
        typesize: 'объем',
        size: '650 мл',
        price: 200,
        count: 3,
      },
    };

    const stateAfterDelete = {
      totalPrice: 400,
      items: [
        {
          id: 1,
          title: 'BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот',
          url: 'product1.webp',
          brand: 'BioMio',
          description: 'Экологичное гипоаллергенное туалетное мыло',
          typesize: 'вес',
          size: '1020 г',
          price: 100,
          count: 4,
        },
      ],
    };

    expect(cartReducer(initialState, action)).toEqual(stateAfterDelete);
  });
});
