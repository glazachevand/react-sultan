import { CartsAction, CartActionTypes } from './../../types/cart';
import { CartItemType } from './../../types/cart';

export function addCartItem(item: CartItemType): CartsAction {
  return { type: CartActionTypes.ADD_ITEM, payload: item };
}

export function minusCartItem(item: CartItemType): CartsAction {
  return { type: CartActionTypes.MINUS_ITEM, payload: item };
}

export function deleteCartItem(item: CartItemType): CartsAction {
  return { type: CartActionTypes.DELETE_ITEM, payload: item };
}

export function clearCartItems(): CartsAction {
  return { type: CartActionTypes.CLEAR_ITEMS };
}
