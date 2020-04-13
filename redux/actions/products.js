import { SET_PRODUCTS } from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await instance.get("product-list/"); //modify
    const products = res.data;
    console.log(products);
    dispatch({ type: SET_PRODUCTS, payload: products });
  } catch (err) {
    console.error(err);
  }
};
