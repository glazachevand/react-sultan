import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ItemsPerPage } from '../types/filter';
import { useActions } from '../hooks/useActions';

const Pagination: React.FC = () => {
  const { filterProducts, page } = useTypedSelector(state => state.filter);
  const { setCurrentPage } = useActions();
  const allPagesCount = Math.ceil(filterProducts.length / ItemsPerPage);
  const [pages, setPages] = React.useState([...Array(allPagesCount)].map((_, i) => i + 1));

  React.useEffect(() => {
    const allPagesCount = Math.ceil(filterProducts.length / ItemsPerPage);
    setPages([...Array(allPagesCount)].map((_, i) => i + 1));
    setCurrentPage(1);
  }, [filterProducts]);

  return (
    <div className="catalog__pagination pagination" >
      {page !== 1 && <div className="pagination__prev _icon-left" onClick={() => setCurrentPage(page - 1)}></div>}
      <ul className="pagination__list">
        {pages.map((_, p) =>
          <li key={p} className={page === p + 1 ? 'pagination__item _active' : 'pagination__item'}
            onClick={() => setCurrentPage(p + 1)}>{p + 1}</li>
        )}
      </ul>
      {page !== pages.length && <div className="pagination__next _icon-right" onClick={() => setCurrentPage(page + 1)}></div>}
    </div>
  );
};

export default Pagination;