import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ItemsPerPage } from '../types/filter';
import { useActions } from '../hooks/useActions';

const Pagination: React.FC = () => {
  const { filterProducts, page } = useTypedSelector(state => state.filter);
  const { products } = useTypedSelector(state => state.productsRed);
  const { setCurrentPage } = useActions();
  const allPages = Math.ceil(filterProducts.length / ItemsPerPage);

  return (
    <div className="catalog__pagination pagination" >
      {page !== 1 && <div className="pagination__prev _icon-left" onClick={() => setCurrentPage(page - 1)}></div>}
      <ul className="pagination__list">
        {[...new Array(allPages)].map((_, p) =>
          <li key={p} className={page === p + 1 ? 'pagination__item _active' : 'pagination__item'}
            onClick={() => setCurrentPage(p + 1)}>{p + 1}</li>
        )}
      </ul>
      {page !== allPages && <div className="pagination__next _icon-right" onClick={() => setCurrentPage(page + 1)}></div>}
    </div>
  );
};

export default Pagination;