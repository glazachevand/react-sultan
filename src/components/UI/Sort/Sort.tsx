import React from 'react';

const Sort: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const onClickSort = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="catalog__sort-container sort">
      <form action="#" name="sortForm">
        <div className="sort__label" onClick={onClickSort}>Сортировка:</div>
        <div className={isOpen ? `sort__choice _up` : `sort__choice _down`} onClick={onClickSort}>Цена</div>
        <div className={isOpen ? `sort__popup _open` : `sort__popup`}>
          <div className="sort__item-container">
            <input type="radio" name="sort" id="price-down" defaultValue="price_desc" defaultChecked />
            <label htmlFor="price-down" className="_down">Цена</label>
          </div>
          <div className="sort__item-container">
            <input type="radio" name="sort" id="price-up" defaultValue="price_asc" />
            <label htmlFor="price-up" className="_up">Цена</label>
          </div>
          <div className="sort__item-container">
            <input type="radio" name="sort" id="title-down" defaultValue="title_desc" />
            <label htmlFor="title-down" className="_down">Название</label>
          </div>
          <div className="sort__item-container">
            <input type="radio" name="sort" id="title-up" defaultValue="title_asc" />
            <label htmlFor="title-up" className="_up">Название</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sort;