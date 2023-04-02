
import React from 'react';
import { Product } from '../types/products';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

interface FormProductProps {
  product?: Product;
  lastId: number;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormProduct: React.FC<FormProductProps> = ({ product, lastId, setVisible }) => {
  const { categories } = useTypedSelector(state => state.productsRed);
  const { updateProduct, addProduct } = useActions();

  const productItem: Product = {
    id: product?.id || lastId,
    title: product?.title || '',
    url: product?.url || 'product1.webp',
    barcode: product?.barcode || 6684049097549,
    manufacturer: product?.manufacturer || '',
    brand: product?.brand || '',
    description: product?.description || '',
    typesize: product?.typesize || 'вес',
    size: product?.size || '',
    typecare: product?.typecare || [],
    price: product?.price || 0
  }

  const [item, setItem] = React.useState<Product>(productItem);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setItem((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  const onChangeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItem((state) => {
      let arr = state?.typecare;
      if (state.typecare?.includes(e.target.value)) {
        arr = arr.filter(item => item !== e.target.value);
      } else if (e.target.value) {
        arr.push(e.target.value);
      }
      return { ...state, typecare: arr };
    });
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product) {
      updateProduct(item);
    } else {
      addProduct(item);
    }
    setVisible(false)
  };

  return (
    <div className='form-product'>
      <form action="#" name='productform' onSubmit={onSubmitHandler}>
        <h2 className="form-product__title">Редактирование / добавление товара</h2>
        <div className='form-product__label'>Название</div>
        <input className='form-product__input' name="title" type="text" value={item?.title} onChange={onChangeHandler} required />
        <div className='form-product__label'>Фото</div>
        <input className='form-product__input' name="url" type="text" value={item ? item.url : 'product14.webp'} onChange={onChangeHandler} required />
        <div className='form-product__label'>Бренд</div>
        <input className='form-product__input' name="brand" type="text" value={item?.brand} onChange={onChangeHandler} required />
        <div className='form-product__label'>Штрихкод</div>
        <input className='form-product__input' name="barcode" type="text" value={item?.barcode} onChange={onChangeHandler} required />
        <div className='form-product__label'>Производитель</div>
        <input className='form-product__input' name="manufacturer" type="text" value={item?.manufacturer} onChange={onChangeHandler} required />
        <div className='form-product__label'>Описание</div>
        <textarea className='form-product__input' name="description" value={item?.description} onChange={onChangeHandler} required></textarea>
        <div className='form-product__label'>Тип размера</div>
        <label htmlFor="weight">Вес</label>
        <input className='form-product__radio' type="radio" name="typesize" value="вес" id='weight'
          checked={item?.typesize === 'вес' ? true : false} onChange={onChangeHandler} />
        <label htmlFor="volume">Объем</label>
        <input className='form-product__radio' type="radio" name="typesize" value="объем" id='volume'
          checked={item?.typesize === 'вес' ? false : true} onChange={onChangeHandler} />
        <div className='form-product__label'>Размер</div>
        <input className='form-product__input' name="size" type="text" value={item?.size} onChange={onChangeHandler} required />
        <select className='form-product__select' name="typecare" multiple onChange={onChangeSelectHandler}
          value={item?.typecare} >
          <option className='form-product__option' disabled>Тип ухода</option>
          {categories.map(category => category !== 'Все' && (
            <option className='form-product__option' value={category} key={category}>{category}</option>
          ))}
        </select>
        <div className='form-product__label'>Цена</div>
        <input className='form-product__input' name="price" type="text" value={item?.price} onChange={onChangeHandler} required />
        <button className="form-product__btn yellow-btn btn">Сохранить</button>
      </form>
    </div>
  );
};

export default FormProduct;
