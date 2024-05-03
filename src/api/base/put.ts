import axiosInstance from "./axios";

const PUT = (url: string, data?: any, params?: any) => axiosInstance.put(url, data, { ...params });

export default PUT;