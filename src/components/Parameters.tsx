import React from 'react';
import RemoveBtn from './UI/RemoveBtn/RemoveBtn';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { getManufactures } from '../utils/getManufactures';

const manufNumber = 3;

const Parameters: React.FC = () => {
  const { priceMin, priceMax, manufacturers, filterProducts } = useTypedSelector(state => state.filter);
  const { products } = useTypedSelector(state => state.productsRed);
  const { setParameters, clearParameters } = useActions();
  const [min, setMin] = React.useState(priceMin);
  const [max, setMax] = React.useState(priceMax);
  const [manuf, setManuf] = React.useState<[string, number][]>();
  const [checkedManuf, setCheckedManuf] = React.useState<{ [key: string]: boolean }>({});
  const [show, setShow] = React.useState(true);
  const [searchBrand, setSearchBrand] = React.useState('');

  React.useEffect(() => {
    const newMap = new Map();
    filterProducts.forEach(product => {
      if (newMap.has(product.manufacturer)) {
        newMap.set(product.manufacturer, newMap.get(product.manufacturer) + 1);
      } else {
        newMap.set(product.manufacturer, 1);
      }
    });
    const arr = Array.from(newMap.entries()).sort((a, b) => b[1] - a[1]);
    setManuf(arr);
  }, [filterProducts, manufacturers]);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const arrChecked = [];

    if (manuf) {
      for (const item of manuf) {
        if (checkedManuf[item[0]]) arrChecked.push(item[0]);
      }
    }
    setParameters({ priceMin: min, priceMax: max, manufacturers: arrChecked });
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedManuf((state) => { return { ...state, [e.target.name]: e.target.checked } });
  };

  const onClickClear = () => {
    setMin(10);
    setMax(10000);
    setSearchBrand('');
    clearParameters(getManufactures(products));
    setCheckedManuf({});
  }

  const searchHandler = () => {
    setManuf(state => state?.filter(item => item[0].toLowerCase().includes(searchBrand.toLowerCase())));
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

          <div className="manufacturer__search">
            <input type="search" className="manufacturer__input search-input" placeholder="Поиск..."
              value={searchBrand} onChange={(e) => setSearchBrand(e.target.value)} />
            <button className="manufacturer__btn search-btn" type="button" onClick={searchHandler}>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5294 16.5294L13.0989 13.0928L16.5294 16.5294ZM15 8.5C15 10.2239 14.3152 11.8772 13.0962 13.0962C11.8772 14.3152 10.2239 15 8.5 15C6.77609 15 5.12279 14.3152 3.90381 13.0962C2.68482 11.8772 2 10.2239 2 8.5C2 6.77609 2.68482 5.12279 3.90381 3.90381C5.12279 2.68482 6.77609 2 8.5 2C10.2239 2 11.8772 2.68482 13.0962 3.90381C14.3152 5.12279 15 6.77609 15 8.5V8.5Z"
                  stroke="white" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="manufacturer__list">
            {manuf && manuf.map((item, index) => (!show || show && index < manufNumber) &&
              <label key={item[0]} className="manufacturer__label">
                <input className="manufacturer__checkbox" type="checkbox" value={item[0]} name={item[0]}
                  checked={checkedManuf[item[0]] || false} onChange={onChangeHandler} />{item[0]}
                <span className="manufacturer__count"> ({item[1]})</span>
              </label>
            )}
          </div>

          <div className={show ? `show-all manufacturer__show-all _down` : `show-all manufacturer__show-all _up`} onClick={() => setShow(!show)}>Показать все</div>
        </div>
        <div className="parameters__actions-row">
          <input type="submit" defaultValue="Показать" className="parameters__submit yellow-btn btn" />
          <RemoveBtn action={onClickClear} cssClass={'parameters__remove-btn'} />
        </div>
      </form>
    </div>
  );
};

export default Parameters;