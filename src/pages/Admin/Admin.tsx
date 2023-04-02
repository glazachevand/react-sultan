import React from 'react';
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';
import BtnBack from '../../components/UI/BtnBack/BtnBack';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import AdminItem from '../../components/AdminItem';
import FormModal from '../../components/UI/FormModal/FormModal';
import FormProduct from '../../components/FormProduct';
import FormCategory from '../../components/FormCategory';

const Admin: React.FC = () => {
  const { products, categories } = useTypedSelector(state => state.productsRed);
  const [modal, setModal] = React.useState(false);
  const [modalCategory, setModalCategory] = React.useState(false);
  const isMounted = React.useRef(false);

  const lastId = products[products.length - 1]?.id + 1 || 1;

  React.useEffect(() => {
    if (isMounted.current) {

      if (!products.length) {
        localStorage.removeItem('products');
      } else {
        localStorage.setItem('products', JSON.stringify(products));
      }

      if (!categories.length) {
        localStorage.removeItem('categories');
      } else {
        localStorage.setItem('categories', JSON.stringify(categories));
      }
    }
    isMounted.current = true;
  }, [products, categories]);

  return (
    <div className="_container">
      <Breadcrumbs />
      <BtnBack />
      <section className="admin">
        <div className="admin__container">
          <h1 className="admin__title title1">Администрирование</h1>
          <div className="admin__top">
            <button className="admin__add-btn yellow-btn btn" onClick={() => setModal(true)}>Добавить товар</button>
            <button className="admin__add-btn yellow-btn btn" onClick={() => setModalCategory(true)}>Редактировать категории</button>
          </div>
          {products.length ?
            products.map(item => <AdminItem key={item.id} {...item} />)
            : <h2 className="title2">Товаров нет  <span>😕</span></h2>}
        </div>
      </section>
      {modal && (
        <FormModal visible={modal} setVisible={setModal}>
          <FormProduct lastId={lastId} setVisible={setModal} />
        </FormModal>
      )}
      {modalCategory && (
        <FormModal visible={modalCategory} setVisible={setModalCategory}>
          <FormCategory setVisible={setModalCategory} />
        </FormModal>
      )}
    </div>
  );
};

export default Admin;