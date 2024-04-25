import { data } from "autoprefixer";
import { del, get, post } from "./base";

const mtaApi = {
  auth: {
    login: (data: any) => post("/authentication/login", data),
  },
 supplier: {
  addSupplier: (data: any) => post("/supplier/register", data),
 },
};

export default mtaApi;
