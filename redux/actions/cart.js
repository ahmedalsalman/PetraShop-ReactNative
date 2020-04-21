import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM,
  CHECKOUT,
  SET_CART,
} from "./actionTypes";
import instance from "./instance";

export const fetchCart = () => async (dispatch) => {
  try {
    const res = await instance.get(`cart/`);
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
  } catch (err) {
    console.error(err);
  }
};
export const removeItemFromCart = (itemID) => {
  try {
    instance.delete(`item/delete/${itemID}/`);
  } catch (err) {
    console.error(err);
  }
};

export const checkoutCart = () => async (dispatch) => {
  try {
    await instance.post(`cart/checkout/`);
    dispatch({ type: CHECKOUT });
  } catch (err) {
    console.error(err);
  }
};
