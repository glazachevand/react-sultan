import React from 'react';
import { Link } from 'react-router-dom';
import CountContainer from './UI/CountContainer/CountContainer';
import RemoveBtn from './UI/RemoveBtn/RemoveBtn';
import { useActions } from '../hooks/useActions';
import { CartItemType } from '../types/cart';

const CartItem: React.FC<CartItemType> = (cartItem) => {
  const productImg = require(`./../pages/img/products/${cartItem.url}`);
  const { deleteCartItem } = useActions();

  const onClickDelete = () => {
    deleteCartItem(cartItem);
  };

  return (
    <div className="cart__product-row">
      <div className="cart-product">
        <Link to={`/product/${cartItem.id}`} className="cart-product__img" ><img src={productImg} alt="product" /></Link >
        <div className="cart-product__content">
          <div className={cartItem.typesize === 'вес' ? `cart-product__size _type2` : `cart-product__size _type1`}>{cartItem.size}</div>
          <Link to={`/product/${cartItem.id}`} className="cart-product__title"><h2><span>{cartItem.brand}</span> {cartItem.title}</h2></Link >
          <p className="cart-product__description">{cartItem.description}</p>
        </div>
      </div>
      <div className="cart__actions">
        <div className="cart__count-line"></div>
        <CountContainer id={cartItem.id} />
        <div className="cart__count-line"></div>
        <div className="cart__price-item">{cartItem.price * cartItem.count} ₽</div>
        <div className="cart__count-line"></div>
        <RemoveBtn action={onClickDelete} cssClass={'cart__remove-btn'} />
      </div>
    </div>
  );
};

export default CartItem;