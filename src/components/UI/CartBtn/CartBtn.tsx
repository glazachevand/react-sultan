import React from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const CartBtn: React.FC = () => {
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
    <Link to='/cart' className="cart header__cart">
      <div className="cart__img">
        <div className="_icon-basket"></div>
        <div className="cart__count">{totalCount}</div>
      </div>
      <div className="cart__body">
        <div className="cart__text">Корзина</div>
        <div className="cart__price">{totalPrice} ₸</div>
      </div>
    </Link>
  );
};

export default CartBtn;