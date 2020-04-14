import { SET_PRODUCTS } from "../actions/actionTypes";

/**
 * If you're not adding any more keys to this state,
 * you can simplify it to just be the array:
 *
 * const initialState = [];
 *
 */
const initialState = {
  products: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
