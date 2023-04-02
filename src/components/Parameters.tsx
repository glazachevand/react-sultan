import React from 'react';
import RemoveBtn from './UI/RemoveBtn/RemoveBtn';
import SearchInput from './UI/SearchInput/SearchInput';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Parameters: React.FC = () => {
  const { priceMin, priceMax, manufacturer, filterProducts } = useTypedSelector(state => state.filter);
  const { setParameters, clearParameters } = useActions();
  const [min, setMin] = React.useState(priceMin);
  const [max, setMax] = React.useState(priceMax);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParameters({ priceMin: min, priceMax: max, manufacturer: [] });
  }

  const onClickClear = () => {
    setMin(10);
    setMax(10000);
    clearParameters();
  }

  return (
    <div className="catalog__parameters parameters _up">
      <form action="#" method="GET" name="parametersForm" onSubmit={onSubmitHandler}>
        <div className="parameters__price-filter price-filter">
          <h3 className="price-filter__title">Цена ₽</h3>
          <div className="price-filter__inputs">
            <input type="text" name="priceRangeMin" value={min} onChange={(e) => setMin(Number(e.target.value))} className="price-filter__input1 pink-bg" placeholder="10" /> -
            <input type="text" name="priceRangeMax" value={max} onChange={(e) => setMax(Number(e.target.value))} className="price-filter__input2 pink-bg" placeholder="10 000" />
          </div>
        </div>
        <div className="parameters__manufacturer manufacturer">
          <h3 className="manufacturer__title">Производитель</h3>
          <SearchInput />
          <div className="manufacturer__list">
            <label className="manufacturer__label"><input className="manufacturer__checkbox" type="checkbox" />BioMio <span
              className="manufacturer__count">(5)</span></label>
            <label className="manufacturer__label"><input className="manufacturer__checkbox" type="checkbox" />Synergetic <span
              className="manufacturer__count">(3)</span></label>
            <label className="manufacturer__label"><input className="manufacturer__checkbox" type="checkbox" />Sesderma <span
              className="manufacturer__count">(2)</span></label>
          </div>
          <div className="show-all manufacturer__show-all">Показать все</div>
        </div>
        <div className="parameters__actions-row">
          <input type="submit" defaultValue="Показать" className="parameters__submit yellow-btn btn" />
          <RemoveBtn action={onClickClear} />
        </div>
      </form>
    </div>
  );
};

export default Parameters;