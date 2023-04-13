import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from "react-redux";
import { MemoryRouter } from 'react-router-dom';
import { rootReducer } from '../store';
import { createStore, Store } from 'redux';
import FormCategory from '../components/FormCategory';
import userEvent from '@testing-library/user-event';

describe('Test categories admin', () => {
  let initialState: ReturnType<typeof store.getState>;
  let store: Store;
  const mockSubmit = jest.fn();

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
      }
    }

    store = createStore(rootReducer, initialState);
  });

  test('Edit category test', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/admin']}>
          <FormCategory setVisible={mockSubmit} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByDisplayValue(/Подарочные наборы/i)).toBeInTheDocument();
    userEvent.type(screen.getByDisplayValue(/Подарочные наборы/i), '!!!');
    expect(screen.getByDisplayValue(/Подарочные наборы!!!/i)).toBeInTheDocument();
  });

  test('Submit test', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/admin']}>
          <FormCategory setVisible={mockSubmit} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.submit(screen.getByTestId('form-category'));
    expect(mockSubmit).toHaveBeenCalled();
  });
});