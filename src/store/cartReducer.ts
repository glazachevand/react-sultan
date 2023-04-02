import { CartState, CartsAction, CartActionTypes } from '../types/cart';
import { calcTotalPrice } from '../utils/calcTotalPrice';
import { getCartFromLS } from '../utils/getCartFromLS';

const initialState: CartState = getCartFromLS();

export const cartReducer = (state = initialState, action: CartsAction): CartState => {
  let totalPrice, itemsCopy, findItem;

  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      itemsCopy = [...state.items];
      findItem = itemsCopy.find((item) => item.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        itemsCopy.push({ ...action.payload, count: 1 });
      }

      totalPrice = calcTotalPrice(itemsCopy);
      return { ...state, items: itemsCopy, totalPrice };

    case CartActionTypes.DELETE_ITEM:
      const itemsFilter = [...state.items.filter((item) => item.id !== action.payload.id)];
      totalPrice = calcTotalPrice(itemsFilter);
      return { ...state, items: itemsFilter, totalPrice };

    case CartActionTypes.MINUS_ITEM:
      itemsCopy = [...state.items];
      findItem = itemsCopy.find((item) => item.id === action.payload.id);

      if (findItem) {
        findItem.count--;
      }

      totalPrice = calcTotalPrice(itemsCopy);
      return { ...state, items: itemsCopy, totalPrice };

    case CartActionTypes.CLEAR_ITEMS:
      return { ...state, items: [], totalPrice: 0 };

    default:
      return state;
  }
};
