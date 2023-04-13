
import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from '../store';
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../router/AppRouter";
import Admin from "../pages/Admin/Admin";
import Cart from "../pages/Cart/Cart";

describe('Test Breadcrumbs', () => {
  test('Click on catalog link', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    const catalogLink = screen.getAllByTestId('catalog-link')[0];
    userEvent.click(catalogLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('Breadcrumbs contains cart text on cart page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/cart']}>
          <Cart />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('breadcrumbs-cart')).toBeInTheDocument();
  });

  test('Breadcrumbs-list contains "Администрирование" on admin page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/admin']}>
          <Admin />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('breadcrumbs-list')).toContainHTML('Администрирование');
  });

})