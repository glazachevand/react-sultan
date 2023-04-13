import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from "react-redux";
import { MemoryRouter } from 'react-router-dom';
import { rootReducer } from '../store';
import { createStore, Store } from 'redux';
import CountContainer from '../components/UI/CountContainer/CountContainer';
import AppRouter from '../router/AppRouter';
import Header from '../components/Header/Header';

describe('Test counter container', () => {
  let initialState: ReturnType<typeof store.getState>;
  let store: Store;

  beforeEach(() => {
    initialState = {
      productsRed: {
        products: [
          {
            id: 1,
            title: 'BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот',
            url: 'product1.webp',
            barcode: 4604049097548,
            manufacturer: 'BioMio',
            brand: 'BioMio',
            description: 'Экологичное гипоаллергенное туалетное мыло BioMio.',
            typesize: 'вес',
            size: '1020 г',
            typecare: [
              'Уход за руками',
              'Уход за телом',
              'Уход за ногами'
            ],
            price: 95
          },
        ],
        categories: [
          'Все',
          'Уход за телом',
          'Уход за руками',
          'Уход за ногами',
          'Уход за лицом',
          'Уход за волосами',
          'Средства для загара',
          'Средства для бритья',
          'Подарочные наборы',
          'Гигиеническая продукция',
          'Гигиена полости рта',
          'Бумажная продукция'
        ]
      },
      filter: {
      },
      cart: {
        items: [
          {
            id: 1,
            title: 'BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот',
            url: 'product1.webp',
            brand: 'BioMio',
            description: 'Экологичное гипоаллергенное туалетное мыло BioMio.',
            typesize: 'вес',
            size: '1020 г',
            price: 95,
            count: 2
          }
        ],
        totalPrice: 190
      }
    }

    store = createStore(rootReducer, initialState);
  });

  test('Click on buttons - check counts', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/cart']}>
          <CountContainer id={1} />
        </MemoryRouter>
      </Provider>
    );

    const minus = screen.getByTestId('minus');
    const plus = screen.getByTestId('plus');
    expect(screen.getByTestId('count')).toHaveTextContent('2')
    fireEvent.click(plus);
    expect(screen.getByTestId('count')).toHaveTextContent('3')
    fireEvent.click(plus);
    expect(screen.getByTestId('count')).toHaveTextContent('4')
    fireEvent.click(minus);
    expect(screen.getByTestId('count')).toHaveTextContent('3')
    expect(screen.getByTestId('count')).toMatchSnapshot();
  });

  test('Click on buttons plus - check cart in the header', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/cart']}>
          <Header />
          <main className="main">
            <AppRouter />
          </main>
        </MemoryRouter>
      </Provider>
    );

    const plus = screen.getByTestId('plus');
    expect(screen.getByTestId('count')).toHaveTextContent('2')
    expect(screen.getAllByTestId('cart-icon-count')[0]).toHaveTextContent('2')
    fireEvent.click(plus);
    expect(screen.getByTestId('count')).toHaveTextContent('3')
    expect(screen.getAllByTestId('cart-icon-count')[0]).toHaveTextContent('3')
    fireEvent.click(plus);
    expect(screen.getByTestId('count')).toHaveTextContent('4')
    expect(screen.getAllByTestId('cart-icon-count')[0]).toHaveTextContent('4')
  });
});