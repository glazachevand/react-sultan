import React from 'react';
import './scss/main.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './router/AppRouter';


function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <main className="main">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
