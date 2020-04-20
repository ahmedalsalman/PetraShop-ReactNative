import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM,
  CHECKOUT,
  SET_CART,
} from "../actions/actionTypes";

const initialState = { items: [] };
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // case ADD_ITEM_TO_CART:
    //   const newItem = payload;
    //   let newArray = [];
    //   newArray.push(newItem);

    //   // const foundItem = items.find((item) => item.id === newItem.id);
    //   // if (foundItem) {
    //   //   return items.map((item) =>
    //   //     item === foundItem
    //   //       ? { ...item, quantity: item.count + newItem.quantity }
    //   //       : item
    //   //   );
    //   // } else return [...items, { ...newItem }];
    //   return { ...state, items: newArray.concat(state.items) };

    case ADD_ITEM_TO_CART:
      const item = payload;

      return {
        ...state,
        items: [...state.items, item],
      };

    // case REMOVE_ITEM:

    //   return items.filter((item) => item !== payload);

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
