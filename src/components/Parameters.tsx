import React from 'react';
import RemoveBtn from './UI/RemoveBtn/RemoveBtn';
import SearchInput from './UI/SearchInput/SearchInput';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Parameters: React.FC = () => {
  const { priceMin, priceMax, manufacturers } = useTypedSelector(state => state.filter);
  const { products } = useTypedSelector(state => state.productsRed);
  const { setParameters, clearParameters } = useActions();
  const [min, setMin] = React.useState(priceMin);
  const [max, setMax] = React.useState(priceMax);
  const [manuf, setManuf] = React.useState<[string, number][]>();
  const form = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    const newMap = new Map();
    products.forEach(product => {
      if (newMap.has(product.manufacturer)) {
        newMap.set(product.manufacturer, newMap.get(product.manufacturer) + 1);
      } else {
        newMap.set(product.manufacturer, 1);
      }
    });
    const arr = Array.from(newMap.entries()).sort((a, b) => b[1] - a[1]);
    setManuf(arr);
  }, [products]);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const arrChecked = []
    for (const item of form?.current?.['man']) {
      if (item.checked) arrChecked.push(item.value);
    }
    setParameters({ priceMin: min, priceMax: max, manufacturers: arrChecked });
  }

  const onClickClear = () => {
    setMin(10);
    setMax(10000);
    clearParameters();
  }

  return (
    <div className="catalog__parameters parameters _up">
      <form ref={form} action="#" method="GET" name="parametersForm" onSubmit={onSubmitHandler}>
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
            {manuf && manuf.map((item) =>
              <label key={item[0]} className="manufacturer__label">
                <input className="manufacturer__checkbox" type="checkbox" value={item[0]} name="man"
                  defaultChecked={manufacturers.includes(item[0])} />{item[0]}
                <span className="manufacturer__count"> ({item[1]})</span>
              </label>
            )}
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