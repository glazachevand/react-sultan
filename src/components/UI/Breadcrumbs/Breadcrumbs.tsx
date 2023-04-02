import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cl from "./Breadcrumbs.module.scss"

const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  return (
    <nav className={cl.breadcrumb}>
      <ul className={cl.breadcrumb__list}>
        <li><Link to='/' className={cl.breadcrumb__link}>Главная</Link></li>
        <li><Link to='/' className={cl.breadcrumb__link}>Каталог</Link></li>
        {location.pathname.includes('cart') && (<li><div className={cl.breadcrumb__item}>Корзина</div></li>)}
        {location.pathname.includes('product') && (<li><div className={cl.breadcrumb__item}>Название товара</div></li>)}
        {location.pathname.includes('admin') && (<li><div className={cl.breadcrumb__item}>Администрирование</div></li>)}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
