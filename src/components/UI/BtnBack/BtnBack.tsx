import React from 'react';

const BtnBack: React.FC = () => {

  return (
    <div className="btn-back">
      <a href="#!" className="btn-back__btn pink-bg btn">
        <div className="_icon-left_page"></div>
      </a>
      <div className="btn-back__text">Назад</div>
    </div>);
};

export default BtnBack;