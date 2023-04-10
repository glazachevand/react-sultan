import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';
import BtnBack from '../../components/UI/BtnBack/BtnBack';
import CountContainer from '../../components/UI/CountContainer/CountContainer';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { CartItemType } from '../../types/cart';

const FullProduct: React.FC = () => {
  const { id } = useParams() || '';
  const navigate = useNavigate();
  const { products } = useTypedSelector(state => state.productsRed);
  const { items } = useTypedSelector(state => state.cart);
  const { addCartItem } = useActions();
  const product = products.find(item => item.id === Number(id));

  const onClickAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    let cartItem = items.find(item => item.id === Number(id));
    if (product && !cartItem) {
      cartItem = {
        id: product.id, title: product.title, url: product.url,
        brand: product.brand, description: product.description, typesize: product.typesize,
        size: product.size, price: product.price, count: 0
      }
    }
    addCartItem(cartItem as CartItemType);
  };

  React.useEffect(() => {
    if (!product) {
      alert('Ошибка при получении продукта');
      navigate('/')
    }
  }, []);

  return (
    <div className='_container'>
      {product && (
        <>
          <Link to="/admin"><button className="admin__btn yellow-btn btn">Админ</button></Link>
          <Breadcrumbs />
          <BtnBack cssClass={'pink-bg btn'} />
          <section className="fullproduct">
            <div className="fullproduct__container">
              <div className="fullproduct__img">
                <img src={require(`./../../pages/img/products/${product.url}`)} alt="product" />
              </div>
              <div className="fullproduct__body">
                <div className="fullproduct__available available">В наличии</div>
                <h1 className="fullproduct__title"><span>{product.brand} </span>{product.title}</h1>
                <div className={product.typesize === 'вес' ? `fullproduct__size _type2` : `fullproduct__size _type1`}>{product.size}</div>
                <div className="fullproduct__actions">
                  <div className="fullproduct__price-item">{product.price} ₽</div>
                  <CountContainer id={product.id} />
                  <button className="fullproduct__cart yellow-btn btn" onClick={onClickAdd}>В корзину<div className="_icon-basket"></div></button>
                  <div className="fullproduct__cart-share-row">
                    <Link to='/cart' className="fullproduct__cart-sm yellow-btn btn">В корзину<div className="_icon-basket"></div></Link>
                    <div className="fullproduct__share-sm _icon-graf btn"></div>
                  </div>
                </div>
                <div className="fullproduct__price-row">
                  <div className="fullproduct__share _icon-graf btn"></div>
                  <div className="fullproduct__delivery">При покупке от <span>10 000 ₸</span> бесплатная доставка по Кокчетаву и области</div>
                  <a href="#" className="fullproduct__price-list btn " download="">Прайс-лист <div className="_icon-download"></div></a>
                </div>
                <div className="fullproduct__properties properties">
                  <div className="properties__properties-top">
                    <div className="properties__manufacturer">Производитель: <span>{product.manufacturer}</span></div>
                    <div className="properties__brand">Бренд: <span>{product.brand}</span></div>
                    <div className="properties__article">Артикул: <span>460404</span></div>
                    <div className="properties__count-in-box">Кол-во в коробке: <span>2</span></div>
                    <div className="properties__barcode">Штрихкод: <span>{product.barcode}</span></div>
                    <div className="properties__size-box">Размеры коробки(Д*Ш*В):<span>10х10х10</span></div>
                    <div className="properties__weight-box">Вес коробки: <span>1020 г</span></div>
                  </div>
                  <div className="properties_description-label _up">Описание</div>
                  <p className="properties__description _up"> {product.description}</p>
                  <div className="properties__properties-label _down">Характеристики</div>
                  <div className="properties__properties-bottom _down">
                    <div className="properties__appointment">Назначение: <span>BioMio</span></div>
                    <div className="properties__type">Тип: <span>BioMio</span></div>
                    <div className="properties__manufacturer">Производитель: <span>{product.manufacturer}</span></div>
                    <div className="properties__brand">Бренд: <span>{product.brand}</span></div>
                    <div className="properties__article">Артикул: <span>460404</span></div>
                    <div className="properties__barcode">Штрихкод: <span>{product.barcode}</span></div>
                    <div className="properties__typesize">Вес: <span>{product.size}</span></div>
                    <div className="properties__count-in-box">Кол-во в коробке: <span>2</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

    </div>
  );
};

export default FullProduct;