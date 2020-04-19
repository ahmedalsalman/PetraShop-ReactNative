import { combineReducers } from "redux";

import productsReducer from "./products";
import user from "./user";
import cart from "./cart";

const rootReducer = combineReducers({
  productsState: productsReducer,
  user: user,
  cart: cart,
});

export default rootReducer;
