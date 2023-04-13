import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';
import BtnBack from '../../components/UI/BtnBack/BtnBack';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import OrderModal from '../../components/UI/OrderModal/OrderModal';

const Cart: React.FC = () => {
  const { items, totalPrice } = useTypedSelector(state => state.cart);
  const { clearCartItems } = useActions();
  const [modal, setModal] = React.useState(false);

  const onClickClear = () => {
    clearCartItems();
    setModal(true);
  };

  return (
    <div className="_container" data-testid="cart-page">
      <Link to="/admin"><button className="admin__btn yellow-btn btn">Админ</button></Link>
      <Breadcrumbs />
      <BtnBack cssClass={'pink-bg btn'} />
      <section className="cart">
        <div className="cart__container">
          <h1 className="cart__title title1">Корзина</h1>
          {items.length ?
            items.map(item => <CartItem key={item.id} {...item} data-testid="cart-item" />)
            : <h2 className="title2">в корзине ничего нет  <span>😕</span></h2>}
          <div className="cart__bottom">
            <button className="cart__order yellow-btn btn" disabled={!totalPrice} onClick={onClickClear}>Оформить заказ</button>
            <div className="cart__price-total">{totalPrice} ₽</div>
          </div>
        </div>
      </section>
      {modal && (
        <OrderModal visible={modal} setVisible={setModal} />
      )}
    </div>
  );
};

export default Cart;