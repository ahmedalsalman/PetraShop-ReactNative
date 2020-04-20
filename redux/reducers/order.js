import { HISTORY_ORDER } from "../actions/actionTypes";

const initialState = { orders: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HISTORY_ORDER:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
