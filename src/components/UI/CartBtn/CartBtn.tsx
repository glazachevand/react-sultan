import React from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import cl from './CartBtn.module.scss'

interface CartBtnProps {
  cssClass?: string
}

const CartBtn: React.FC<CartBtnProps> = ({ cssClass }) => {
  const { items, totalPrice } = useTypedSelector(state => state.cart);
  const totalCount = items.reduce((sum: number, item: any) => item.count + sum, 0);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      if (!items.length) {
        localStorage.removeItem('cart');
      } else {
        localStorage.setItem('cart', JSON.stringify(items));
      }
    }
    isMounted.current = true;
  }, [items]);

  return (
    <Link to='/cart' className={[cl.cart, cssClass].join(' ')}>
      <div className={cl.cart__img}>
        <div className={[cl.cart__icon, '_icon-basket'].join(' ')}></div>
        <div className={cl.cart__count}>{totalCount}</div>
      </div>
      <div className={cl.cart__body}>
        <div className={cl.cart__text}>Корзина</div>
        <div className={cl.cart__price}>{totalPrice} ₸</div>
      </div>
    </Link>
  );
};

export default CartBtn;