import React from 'react';
import logo from "./img/logo.png"
import call from "./img/call.png"
import { Link } from "react-router-dom";
import CartBtn from '../UI/CartBtn/CartBtn';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const onClickBurger = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      <div className="header__menu-row">
        <div className="header__menu-row-container _container">
          <div className="header__address">
            <div className="_icon-location"></div>
            <div className="header__address-text">г. Кокчетав, ул. Ж. Ташенова 129Б<br /><span>(Рынок Восточный)</span></div>
          </div>
          <div className="header__mail">
            <div className="_icon-mail"></div>
            <div className="header__mail-text"><a href="mailto:">opt.sultan@mail.ru</a><br /><span>На связи в любое время</span></div>
          </div>
          <nav className="header__menu menu">
            <ul className="menu__list">
              <li><a href="#" className="menu__link">О компании</a></li>
              <li><a href="#" className="menu__link">Доставка и оплата</a></li>
              <li><a href="#" className="menu__link">Возврат</a></li>
              <li><a href="#" className="menu__link">Контакты</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header__logo-row">
        <div className="header__logo-row-container _container">
          <Link to="/" className="header__logo"><img src={logo} alt="logo" /></Link>
          <a href="#" className="header__catalog btn yellow-btn">Каталог<svg width="15" height="15" viewBox="0 0 15 15" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z"
              stroke="white" />
            <path
              d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z"
              stroke="white" />
            <path
              d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z"
              stroke="white" />
            <path
              d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z"
              stroke="white" />
          </svg>
          </a>
          <div className="search  header__search">
            <form className="search__form" name="searchForm" action="#" method="get">
              <input type="search" className="search__input search-input" placeholder="Поиск..." />
              <button className="search__btn search-btn">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5294 16.5294L13.0989 13.0928L16.5294 16.5294ZM15 8.5C15 10.2239 14.3152 11.8772 13.0962 13.0962C11.8772 14.3152 10.2239 15 8.5 15C6.77609 15 5.12279 14.3152 3.90381 13.0962C2.68482 11.8772 2 10.2239 2 8.5C2 6.77609 2.68482 5.12279 3.90381 3.90381C5.12279 2.68482 6.77609 2 8.5 2C10.2239 2 11.8772 2.68482 13.0962 3.90381C14.3152 5.12279 15 6.77609 15 8.5V8.5Z"
                    stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </button>
            </form>
          </div>
          <div className="header__tel-content">
            <div className="header__tel-text">
              <a href="tel:+77774900091" className="header__tel">+7 (777) 490-00-91</a>
              <div className="header__work-hours">время работы: 9:00-20:00</div>
              <a href="#" className="header__tel-request">Заказать звонок</a>
            </div>
            <div className="header__tel-img"><img src={call} alt="call" /></div>
          </div>
          <a href="#" className="header__price-list btn yellow-btn" download="">Прайс-лист <div className="_icon-download"></div>
          </a>
          <CartBtn cssClass={'header__cart'} />
        </div>
      </div>
      <div className="header__menu-row-lg">
        <div className="header__menu-row-lg-container _container">
          <div className={isOpen ? `icon-menu _open` : `icon-menu`} onClick={onClickBurger}>
            <div className="icon-menu__burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <a href="#!" className="header__logo"><img src={logo} alt="logo" /></a>
          <CartBtn cssClass={'header__cart'} />
        </div>
      </div>
      <div className="header__logo-row-lg">
        <div className="header__logo-row-lg-container _container">
          <a href="#" className="header__catalog btn yellow-btn">Каталог<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z" />
            <path
              d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z" />
            <path
              d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z" />
            <path
              d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z" />
          </svg>
          </a>
          <div className="search  header__search">
            <form className="search__form" name="searchForm" action="#" method="get">
              <input type="search" className="search__input search-input" placeholder="Поиск..." />
              <button className="search__btn search-btn">
                <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5294 16.5294L13.0989 13.0928L16.5294 16.5294ZM15 8.5C15 10.2239 14.3152 11.8772 13.0962 13.0962C11.8772 14.3152 10.2239 15 8.5 15C6.77609 15 5.12279 14.3152 3.90381 13.0962C2.68482 11.8772 2 10.2239 2 8.5C2 6.77609 2.68482 5.12279 3.90381 3.90381C5.12279 2.68482 6.77609 2 8.5 2C10.2239 2 11.8772 2.68482 13.0962 3.90381C14.3152 5.12279 15 6.77609 15 8.5V8.5Z"
                    strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </button>
            </form>
            <div className="search__title">Поиск</div>
          </div>
        </div>
      </div>
      <div className={isOpen ? `burger-menu _open` : `burger-menu`}>
        <div className="burger-menu__body">
          <div className="_container">
            <div className="header__address">
              <div className="_icon-location"></div>
              <div className="header__address-text">г. Кокчетав, ул. Ж. Ташенова 129Б<br /><span>(Рынок Восточный)</span></div>
            </div>
            <div className="header__mail">
              <div className="_icon-mail"></div>
              <div className="header__mail-text"><a href="mailto:">opt.sultan@mail.ru</a><br /><span>На связи в любое время</span></div>
            </div>
            <div className="header__tel-content">
              <div className="_icon-tel"></div>
              <div className="header__tel-text">
                <h3 className="header__tel-title">Отдел продаж</h3>
                <a href="tel:+77774900091" className="header__tel">+7 (777) 490-00-91</a>
                <div className="header__work-hours">время работы: 9:00-20:00</div>
              </div>
            </div>
            <div className="header__request-container">
              <div className="_icon-tel2 header__icon-request"></div>
              <a href="#" className="header__tel-request">Заказать звонок</a>
            </div>
            <nav className="header__menu menu">
              <h1 className="menu__title">Меню сайта:</h1>
              <ul className="menu__list">
                <li><a href="#" className="menu__link">О компании</a></li>
                <li><a href="#" className="menu__link">Доставка и оплата</a></li>
                <li><a href="#" className="menu__link">Возврат</a></li>
                <li><a href="#" className="menu__link">Контакты</a></li>
              </ul>
            </nav>
            <a href="#" className="header__price-list btn yellow-btn" download="">Прайс-лист <div className="_icon-download"></div></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
