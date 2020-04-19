import decode from "jwt-decode";

import instance from "./instance";

import { SET_CURRENT_USER } from "./actionTypes";
import { AsyncStorage } from "react-native";
import { fetchCart } from "./cart";
import { acc } from "react-native-reanimated";

const setCurrentUser = (token) => {
  setAuthToken(token);
  return {
    type: SET_CURRENT_USER,
    payload: token ? decode(token) : null,
  };
};
export const checkForToken = () => async (dispatch) => {
  const currentTimeInSeconds = Date.now() / 1000;
  const token = await AsyncStorage.getItem("token");
  dispatch(fetchCart(decode(token).user_id));

  if (token && decode(token).exp >= currentTimeInSeconds)
    dispatch(setCurrentUser(token));
  else dispatch(setCurrentUser());
};

const setAuthToken = (token) => {
  if (token) {
    AsyncStorage.setItem("token", token);
    instance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    AsyncStorage.removeItem("token");
    delete instance.defaults.headers.Authorization;
  }
};

export const login = (userData, redirect) => async (dispatch) => {
  try {
    const response = await instance.post("login/", userData);
    const { access } = response.data;
    // const { user_id } = response.data;
    // console.log("ssss  " + response.data.id);
    console.log(decode(access).user_id);
    dispatch(setCurrentUser(access));
    dispatch(fetchCart(decode(access).user_id));

    redirect();
  } catch (error) {
    console.error("Error while logging in!", error);
  }
};

export const signup = (userData, redirect) => async (dispatch) => {
  try {
    const res = await instance.post("signup/", userData);
    console.log(res.data);
    dispatch(login(userData, redirect));
  } catch (error) {
    console.error("Error while signing up!", error);
  }
};

export const logout = () => {
  return setCurrentUser();
};
