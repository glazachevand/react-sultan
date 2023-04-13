import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from "react-redux";
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store';
import CartItem from '../components/CartItem';
import { CartItemType } from '../types/cart';

describe('Test cart item', () => {
  let cartItem: CartItemType;

  beforeEach(() => {
    cartItem = {
      "id": 2,
      "title": "Шампунь beauty-full volume плотность и объем",
      "url": "product2.webp",
      "brand": "Tresemme",
      "description": "Головокружительный объем от самых корней?",
      "typesize": "объем",
      "size": "650 мл",
      "price": 400,
      "count": 10
    }
  });

  test('Click on delete button', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/cart']}>
          <CartItem {...cartItem} />
        </MemoryRouter>
      </Provider>
    );
    const deleteBtn = screen.getByTestId('delete-btn');
    expect(deleteBtn).toBeInTheDocument();
    expect(screen.getByText(/Шампунь beauty-full/i)).toBeInTheDocument();
    fireEvent.click(deleteBtn);
    expect(screen.queryByTestId(/Шампунь beauty-full/i)).toBeNull();
  });

  test('Сheck totalprice', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/cart']}>
          <CartItem {...cartItem} />
        </MemoryRouter>
      </Provider>
    );

    const totalPrice = screen.getByTestId('totalPrice');
    expect(totalPrice).toHaveTextContent('4000');
    expect(totalPrice).toMatchSnapshot();
  });
});