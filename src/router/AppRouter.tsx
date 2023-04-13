import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../pages/Cart/Cart';
import FullProduct from '../pages/FullProduct/FullProduct';
import Admin from '../pages/Admin/Admin';
import Catalog from '../pages/Catalog/Catalog';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/product/:id" element={<FullProduct />} />
      <Route path="*" element={<Catalog />} />
    </Routes>
  );
};

export default AppRouter;