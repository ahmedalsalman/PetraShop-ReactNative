import { SET_PRODUCTS } from "./actionTypes";

import axios from "axios";

/**
 * Move your instance into a separate file.
 * That way, every future actions file will
 * be importing the SAME instance
 */
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const fetchProducts = () => async dispatch => {
  try {
    const res = await instance.get("product-list/"); //modify
    const products = res.data;
    console.log(products); // <-- don't commit console logs
    dispatch({ type: SET_PRODUCTS, payload: products });
  } catch (err) {
    console.error(err);
  }
};
