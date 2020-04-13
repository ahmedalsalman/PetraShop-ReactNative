import { combineReducers } from "redux";

import productsReducer from "./products";

const rootReducer = combineReducers({
  productsState: productsReducer,
});

export default rootReducer;
