import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Data actions
import { fetchProducts } from "./actions";

import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchProducts());

export default store;
