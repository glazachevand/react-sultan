import React from 'react';
import { useActions } from '../../../hooks/useActions';
import { CartItemType } from '../../../types/cart';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface CountContainerProps {
  id: number
}

const CountContainer: React.FC<CountContainerProps> = ({ id }) => {
  const { products } = useTypedSelector(state => state.productsRed);
  const product = products.find(item => item.id === Number(id));
  const { items } = useTypedSelector(state => state.cart);
  let cartItem = items.find(item => item.id === Number(id));

  if (product && !cartItem) {
    cartItem = {
      id: product.id, title: product.title, url: product.url,
      brand: product.brand, description: product.description, typesize: product.typesize,
      size: product.size, price: product.price, count: 0
    }
  }

  const { addCartItem, minusCartItem } = useActions();

  const onClickPlus: React.MouseEventHandler<HTMLButtonElement> = () => {
    addCartItem(cartItem as CartItemType);
  };

  const onClickMinus: React.MouseEventHandler<HTMLButtonElement> = () => {
    minusCartItem(cartItem as CartItemType);
  };

  return (
    <div className="cart__counts">
      <button className="minus" onClick={onClickMinus} disabled={cartItem?.count === 1}>-</button>
      <div className="count">{cartItem?.count || 0}</div>
      <button className="plus" onClick={onClickPlus}>+</button>
    </div>
  );
};

export default CountContainer;