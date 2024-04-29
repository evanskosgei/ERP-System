//@ts-nocheck
import axios from "axios";
import { getToken } from "../../utils/helpers";

// const baseURL = "https://stemprotocol.codefremics.com/api/v2";
declare const importMeta: {
  readonly env: ImportMetaEnv;
};

const baseURL =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_APP_HOST_URL
    : import.meta.env.VITE_APP_HOST_URL_LIVE;

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(function (config) {
  const token = getToken();
  console.log(token)
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && error.config.url !== "/auth/login") {
      console.log("interceptor");
      window.logout();
    }
    return await Promise.reject(error);
  }
);

export default instance;
