import { combineReducers } from "redux";

import productsReducer from "./products";
import user from "./user";
const rootReducer = combineReducers({
  productsState: productsReducer,
  user: user,
});

export default rootReducer;
