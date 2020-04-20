import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM,
  CHECKOUT,
  SET_CART,
} from "./actionTypes";
import instance from "./instance";

// export const addItemToCart = (item) => ({
//   type: ADD_ITEM_TO_CART,
//   payload: item,
// });
// export const removeItemFromCart = (item) => {
//   console.log(item);
//   return {
//     type: REMOVE_ITEM,
//     payload: item,
//   };
// };

// export const checkoutCart = (order) => ({
//   type: CHECKOUT,
//   payload: order,
// });

export const fetchCart = (ID) => async (dispatch) => {
  try {
    const res = await instance.get(`cart/${ID}/`);
    const cart = res.data;
    dispatch({ type: SET_CART, payload: cart.items });
  } catch (err) {
    console.error(err);
  }
};
export const addItemToCart = (itemID, count) => async (dispatch) => {
  try {
    const res = await instance.post(`item/create/`, {
      product: itemID,
      count: count,
    });
    const product = res.data;
    dispatch({ type: ADD_ITEM_TO_CART, payload: product });
    fetchCart(itemID);
  } catch (err) {
    console.error(err);
  }
};
export const removeItemFromCart = (itemID) => {
  try {
    instance.delete(`item/delete/${itemID}/`);
    fetchCart(itemID);
  } catch (err) {
    console.error(err);
  }
};
export const checkoutCart = () => {
  try {
    console.log("ssss");
    const res = instance.post(`cart/checkout/`);
    console.log(res.data);
    // fetchCart(chartID);
  } catch (err) {
    console.error(err);
  }
};
