import { combineReducers } from 'redux';
import { cartReducer, wishlistReducer, categoryReducer } from './reducers';
const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  category: categoryReducer
});

export default rootReducer;