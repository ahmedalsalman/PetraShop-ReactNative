import { HISTORY_ORDER } from "./actionTypes";
import instance from "./instance";

export const histortOrder = () => async (dispatch) => {
  try {
    const res = await instance.get(`cart/history/`);
    const order = res.data;
    dispatch({ type: HISTORY_ORDER, payload: order });
  } catch (err) {
    console.error(err);
  }
};
