import React from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { SortType } from '../../../types/filter';

const Sort: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { sort } = useTypedSelector(state => state.filter);
  const { setSortproperty } = useActions();

  const SortList = {
    'title_asc': 'Название (по возрастанию)',
    'title_desc': 'Название (по убыванию)',
    'price_asc': 'Цена (по возрастанию)',
    'price_desc': 'Цена (по убыванию)',
  }

  const onChangeSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortproperty(e.target.value as SortType);
    setIsOpen(!isOpen);
  }

  const onClickSort = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="catalog__sort-container sort">
      <div className="sort__label" onClick={onClickSort}>Сортировка:</div>
      <div className={isOpen ? `sort__choice _up` : `sort__choice _down`} onClick={onClickSort}>{SortList[sort]}</div>
      <div className={isOpen ? `sort__popup _open` : `sort__popup`}>
        <div className="sort__item-container">
          <input type="radio" name="sort" id="price-down" value="price_desc" defaultChecked={sort === 'price_desc'} onChange={onChangeSort} />
          <label htmlFor="price-down">{SortList['price_desc']}</label>
        </div>
        <div className="sort__item-container">
          <input type="radio" name="sort" id="price-up" value="price_asc" defaultChecked={sort === 'price_asc'} onChange={onChangeSort} />
          <label htmlFor="price-up">{SortList['price_asc']}</label>
        </div>
        <div className="sort__item-container">
          <input type="radio" name="sort" id="title-down" value="title_desc" defaultChecked={sort === 'title_desc'} onChange={onChangeSort} />
          <label htmlFor="title-down">{SortList['title_desc']}</label>
        </div>
        <div className="sort__item-container">
          <input type="radio" name="sort" id="title-up" value="title_asc" defaultChecked={sort === 'title_asc'} onChange={onChangeSort} />
          <label htmlFor="title-up">{SortList['title_asc']}</label>
        </div>
      </div>
    </div>
  );
};

export default Sort;