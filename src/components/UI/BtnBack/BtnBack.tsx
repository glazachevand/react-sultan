import React from 'react';
import cl from './BtnBack.module.scss'

interface BtnBackProps {
  cssClass?: string
}

const BtnBack: React.FC<BtnBackProps> = ({ cssClass }) => {

  return (
    <div className={cl.btnBack}>
      <a href="#!" className={[cl.btnBack__btn, cssClass].join(' ')}>
        <div className="_icon-left_page"></div>
      </a>
      <div className={cl.btnBack__text}>Назад</div>
    </div>);
};

export default BtnBack;