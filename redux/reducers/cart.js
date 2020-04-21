import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM,
  CHECKOUT,
  SET_CART,
} from "../actions/actionTypes";

const initialState = { items: [] };
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_TO_CART:
      const item = payload;

      return {
        ...state,
        items: [...state.items, item],
      };
    case CHECKOUT:
      return {
        ...state,
        items: [],
      };

    case SET_CART:
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
};
