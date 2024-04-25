import { data } from "autoprefixer";
import { del, get, post } from "./base";

const mtaApi = {
  auth: {
    login: (data: any) => post("/users/login", data),
  },
  supplierModule : (data: any) => post("/addsupplier")
};

export default mtaApi;
