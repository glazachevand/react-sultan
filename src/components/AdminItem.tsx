import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/products';
import RemoveBtn from './UI/RemoveBtn/RemoveBtn';
import { useActions } from '../hooks/useActions';
import FormProduct from './FormProduct';
import FormModal from './UI/FormModal/FormModal';

const AdminItem: React.FC<Product> = (product) => {
  const [modal, setModal] = React.useState(false);
  const { deleteProduct } = useActions();

  const onClickDelete = () => {
    deleteProduct(product);
  };

  const productImg = require(`./../pages/img/products/${product.url}`);

  return (
    <div className="admin__product-row">
      <div className="admin-product">
        <Link to={`/product/${product.id}`} className="admin-product__img" ><img src={productImg} alt="product" /></Link >
        <div className="admin-product__content">
          <Link to={`/product/${product.id}`} className="admin-product__title"><h2><span>{product.brand}</span> {product.title}</h2></Link >
        </div>
      </div>
      <div className="admin__actions">
        <button className="admin__add-btn yellow-btn btn" onClick={() => setModal(true)}>редактировать</button>
        <RemoveBtn action={onClickDelete} />
      </div>
      {modal && (
        <FormModal visible={modal} setVisible={setModal}>
          <FormProduct product={product} lastId={product.id} setVisible={setModal} />
        </FormModal>
      )}
    </div>
  );
};

export default AdminItem;