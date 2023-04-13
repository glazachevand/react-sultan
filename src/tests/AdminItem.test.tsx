import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from "react-redux";
import { MemoryRouter } from 'react-router-dom';
import AdminItem from '../components/AdminItem'
import { Product } from '../types/products';
import { store } from '../store';
import { ProductsActionTypes } from '../types/products';
import { deleteProduct } from '../store/action-creators/products';

describe('Test AdminItem', () => {
  let item: Product;

  beforeEach(() => {
    item = {
      "id": 2,
      "title": "Шампунь beauty-full volume плотность и объем",
      "url": "product2.webp",
      "barcode": 4704049097548,
      "manufacturer": "Tresemme",
      "brand": "Tresemme",
      "description": "Головокружительный объем от самых корней? Попробуй и убедись сама. Формула серии Beauty-full Volume с уникальным* сочетанием мицеллярной технологии и коллагена мягко очищает волосы и придает объем от самых корней.",
      "typesize": "объем",
      "size": "650 мл",
      "typecare": [
        "Уход за волосами"
      ],
      "price": 419
    }
  })

  test('Click on button editBtn - should be form modal in document', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/admin']}>
          <AdminItem  {...item} />
        </MemoryRouter>
      </Provider>
    )
    const editBtn = screen.getAllByText(/редактировать/i)[0];
    expect(editBtn).toBeInTheDocument();
    fireEvent.click(editBtn);
    expect(screen.getByTestId('form-modal')).toBeInTheDocument();
  });

  test('DeleteProduct action test', () => {
    const expectedAction = {
      type: ProductsActionTypes.DELETE_PRODUCT,
      payload: item
    }

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/admin']}>
          <>
            <AdminItem  {...item} />
          </>
        </MemoryRouter>
      </Provider>
    )

    const deleteBtn = screen.getByTestId('delete-btn');
    expect(deleteBtn).toBeInTheDocument();
    fireEvent.click(deleteBtn);
    expect(deleteProduct(item)).toEqual(expectedAction);
  });
});
