import axios from "axios";

export const instance = axios.create({
  baseURL: "https://petra-drf.herokuapp.com/",
});

export default instance;
