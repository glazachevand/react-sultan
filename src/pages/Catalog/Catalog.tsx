import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';
import Categories from '../../components/Categories';
import Parameters from '../../components/Parameters';
import Sort from '../../components/UI/Sort/Sort';
import Product from '../../components/Product';
import Pagination from '../../components/Pagination';
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ItemsPerPage } from '../../types/filter';
import { Product as ProductType } from '../../types/products';

const Catalog: React.FC = () => {
  const { products } = useTypedSelector(state => state.productsRed);
  const { category, priceMin, priceMax, manufacturers, filterProducts, page } = useTypedSelector(state => state.filter);
  const { filterAllProducts } = useActions();
  const [productsPage, setProductsPage] = React.useState<ProductType[]>();

  React.useEffect(() => {
    filterAllProducts({ category, priceMin, priceMax, manufacturers, products: products });
  }, [category, priceMin, priceMax, manufacturers, products]);

  React.useEffect(() => {
    let productsCopy = [...filterProducts];
    const startItem = (page - 1) * ItemsPerPage;
    const endItem = page * ItemsPerPage;
    productsCopy = productsCopy.slice(startItem, endItem);
    setProductsPage(productsCopy);
  }, [page, filterProducts]);

  return (
    <div className="_container" data-testid="main-page">
      <Link to="/admin" data-testid="admin-link"><button className="admin__btn yellow-btn btn">Админ</button></Link>
      <Breadcrumbs />
      <section className="catalog">
        <div className="catalog__container">
          <h1 className="catalog__title title1">Косметика и гигиена</h1>
          <div className="catalog__categories categories">
            <ul className="categories__list">
              <Categories cssClass={'categories__item'} />
            </ul>
          </div>
          <div className="catalog__content">
            <div className="catalog__aside">
              <div className="parameters__title-row">
                <h2 className="parameters__title">ПОДБОР ПО ПАРАМЕТРАМ</h2>
                <button className="parameters__btn-down btn _up"></button>
              </div>
              <Parameters />
              <div className="catalog__categories-left categories-left">
                <ul className="categories-left__list">
                  <Categories cssClass={'categories-left__item'} />
                </ul>
              </div>
              <Sort />
            </div>
            <div className="catalog__main">
              <div className="catalog__products">
                {productsPage?.length ?
                  productsPage.map((product) => <Product key={product.id} {...product} />)
                  : <h2 className="title2">Ничего не найдено  <span>😕</span></h2>}
              </div>
              <Pagination />
              <p className="catalog__footer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis
                iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue
                mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;