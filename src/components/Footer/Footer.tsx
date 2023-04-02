import React from 'react';
import { Link } from "react-router-dom";
import logo from "./img/logo_footer.png"
import mastercard from "./img/mastercard.png"
import visa from "./img/visa.png"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="_container">
        <div className="footer__container">
          <div className="footer__logo-container logo-container">
            <Link to="/" className="logo-container__logo"><img src={logo} alt="logo" /></Link>
            <p className="logo-container__description">
              Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области
            </p>
            <form className="logo-container__form subscription" action="#" method="POST" name="subscriptionform">
              <label htmlFor="subscription" className="subscription__label">
                Подпишись на скидки и акции
              </label>
              <input className="subscription__input" type="email" name="subscription" id="subscription" placeholder="Введите ваш E-mail" />
              <button className="subscription__btn btn">
                <div className="_icon-right"></div>
              </button>
            </form>
          </div>
          <div className="footer__content">
            <nav className="footer__menu footer-menu">
              <h3>Меню сайта:</h3>
              <ul className="footer-menu__list">
                <li>
                  <a href="#!" className="footer__link">
                    О компании
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Доставка и оплата
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <div className="footer__categories footer-categories">
              <h3>Категории:</h3>
              <ul className="footer-categories__list">
                <li>
                  <a href="#!" className="footer__link">
                    Бытовая химия
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Косметика и гигиена
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Товары для дома
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Товары для детей и мам
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Посуда
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__price-list-container price-list">
              <h3 className="price-list__title">Скачать прайс-лист:</h3>
              <a href="#!" className="price-list__btn btn yellow-btn" download="">
                Прайс-лист<div className="_icon-download"></div>
              </a>
              <div className="footer__social footer-social">
                <div className="footer-social__title">Связь в мессенджерах:</div>
                <div className="footer-social__row">
                  <a href="#!" className="footer-social__whatsapp">
                    <div className="_icon-whatsapp"></div>
                  </a>
                  <a href="#!" className="footer-social__telegram">
                    <div className="_icon-telegram"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer__contacts-container footer-contacts">
              <h3 className="footer-contacts__title">Контакты:</h3>
              <a href="tel:+77774900091" className="footer-contacts__tel">
                +7 (777) 490-00-91
              </a>
              <div className="footer-contacts__work-hours">время работы: 9:00-20:00</div>
              <a href="#!" className="footer-contacts__tel-request">
                Заказать звонок
              </a>
              <a href="mailto:" className="footer-contacts__mail">
                opt.sultan@mail.ru
              </a>
              <div className="footer-contacts__mail-text">На связи в любое время</div>
              <div className="footer-contacts__cards">
                <div className="footer-contacts__visa">
                  <img src={visa} alt="visa" />
                </div>
                <div className="footer-contacts__nastercard">
                  <img src={mastercard} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
