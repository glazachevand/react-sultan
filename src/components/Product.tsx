import React from 'react';
import { Link } from 'react-router-dom';
import PopularBtn from './UI/PopularBtn/PopularBtn';
import { Product as ProductItem } from '../types/products';
import { useActions } from '../hooks/useActions';
import { } from './CartItem';
import { CartItemType } from './../types/cart';

const Product: React.FC<ProductItem> = ({ id, title, url, barcode, manufacturer, brand, typesize, size, typecare, price, description }) => {
  const productImg = require(`./../pages/img/products/${url}`);
  const { addCartItem } = useActions();

  const onClickAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    const item: CartItemType = { id, title, url, brand, description, typesize, size, price, count: 0 }
    addCartItem(item);
  };

  return (
    <div className="product">
      <div className="product__container">
        <PopularBtn />
        <Link to={`/product/${id}`} rel="noreferrer"><img src={productImg} alt="product" className="product__img" /></Link>
        <div className={typesize === 'вес' ? `product__size _type2` : `product__size _type1`}>{size}</div>
        <Link to={`/product/${id}`}><h3 className="product__title"><span>{brand} </span>{title}</h3></Link>
        <div className="product__barcode">Штрихкод: <span>{barcode}</span></div>
        <div className="product__manufacturer">Производитель: <span>{manufacturer}</span></div>
        <div className="product__brand">Бренд: <span>{brand}</span></div>
        <div className="product__typecare">
          <div className="product__typecare-label">Тип ухода: </div>
          {typecare.map(item => (<div className="product__typecare-item" key={item}>{item}</div>))}
        </div>
      </div>
      <div className="product__bottom">
        <div className="product__price">{price} ₽</div>
        <button className="product__btn yellow-btn btn" onClick={onClickAdd}>В КОРЗИНУ<div className="_icon-basket"></div></button>
      </div>
    </div >
  );
};

export default Product;