import { combineReducers } from "redux";

import productsReducer from "./products";
import user from "./user";
import cart from "./cart";
import order from "./order";

const rootReducer = combineReducers({
  productsState: productsReducer,
  user: user,
  cart: cart,
  order: order,
});

export default rootReducer;
