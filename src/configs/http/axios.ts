import axios from "axios";
import { API_URL } from "configs/contants/contants";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
