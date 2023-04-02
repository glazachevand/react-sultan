import React from 'react';
import './scss/main.scss';
import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog/Catalog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import FullProduct from './pages/FullProduct/FullProduct';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/product/:id" element={<FullProduct />} />
            <Route path="*" element={<Catalog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
