import { createStore, combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { filterReducer } from './filterReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
  productsRed: productsReducer,
  filter: filterReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>;
