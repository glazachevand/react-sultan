import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from "react-redux";
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store';
import CartBtn from '../components/UI/CartBtn/CartBtn';
import AppRouter from '../router/AppRouter';

describe('Test CartBtn', () => {
  test('Click on cart button - go to cart page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <>
            <AppRouter />
            <CartBtn />
          </>
        </MemoryRouter>
      </Provider>
    );

    const cartLink = screen.getByTestId('cart-link');
    fireEvent.click(cartLink);
    expect(screen.getByTestId('cart-page')).toBeInTheDocument();
  });

});