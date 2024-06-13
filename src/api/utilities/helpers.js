import axios from "axios";
// import { getRefreshToken, saveToken } from "../base/token";

// export const refreshToken = async () => {
//   // console.log("refresh token helper function");
//   const BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:5000/api/v1" : "https://www.bytebridge.codefremics.com/api/v1"
//   const refreshToken = getRefreshToken();
//   const response = await axios.post(`${BASE_URL}/user/renew-token`, null, {
//     headers: { Authorization: `Bearer ${refreshToken}` },
//   });
//   // console.log("response after refresh token", response.data);
//   saveToken(response.data.auth, refreshToken);
// };

export const numberWithCommas = (val) => {
  if (isNaN(parseFloat(val))) return "NaN";
  val = parseFloat(val);
  return val
    .toFixed(2)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
