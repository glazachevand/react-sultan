
import React from "react";
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from '../store';
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../router/AppRouter";
import App from "../App";

describe('Test router', () => {
  test('Error url  - go to catalog page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/qweyty']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('Click on button Admin', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    const adminLink = screen.getByTestId('admin-link');
    fireEvent.click(adminLink);
    expect(screen.getByTestId('admin-page')).toBeInTheDocument();
  });

  test('Click on Cart button', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const cartLink = screen.getAllByTestId('cart-link')[0];
    fireEvent.click(cartLink);
    expect(screen.getByTestId('cart-page')).toBeInTheDocument();
  });

})