import * as ProductsActionCreators from './products';
import * as FilterActionCreators from './filter';
import * as CartActionCreators from './cart';

export default {
  ...ProductsActionCreators,
  ...FilterActionCreators,
  ...CartActionCreators,
};
