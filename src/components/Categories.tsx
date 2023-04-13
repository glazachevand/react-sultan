import React from 'react';
import { useTypedSelector } from "./../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
interface CategoriesProps {
  cssClass?: string
};

const Categories: React.FC<CategoriesProps> = ({ cssClass }) => {
  const { categories } = useTypedSelector(state => state.productsRed);
  const { category } = useTypedSelector(state => state.filter);
  const { setCategory } = useActions();

  const categoryIndex = categories.findIndex(item => item === category);

  const onChangeCategory = (idx: number): void => {
    setCategory(categories[idx] ? categories[idx] : 'Все');
  };

  return (
    <>
      {
        categories.length && categories.map((item, i) => (
          <li className={categoryIndex === i ? `${cssClass} _active` : `${cssClass}`} key={String(item)} onClick={() => onChangeCategory(i)} data-testid="category-item">{item}</li>))
      }
    </>
  );
};

export default Categories;