import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="catalog__pagination pagination">
      <a href="#!" className="pagination__prev _icon-left"></a>
      <ul className="pagination__list">
        <li><a href="#!" className="pagination__item _active">1</a></li>
        <li><a href="#!" className="pagination__item">2</a></li>
        <li><a href="#!" className="pagination__item">3</a></li>
        <li><a href="#!" className="pagination__item">4</a></li>
        <li><a href="#!" className="pagination__item">5</a></li>
      </ul>
      <a href="#!" className="pagination__next _icon-right"></a>
    </div>
  );
};

export default Pagination;