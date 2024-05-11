import { data } from "autoprefixer";
import { del, get, post, put } from "./base";

const mtaApi = {
  auth: {
    login: (data: any) => post("/users/login", data),
  },
  users: {
    create_user: (data: any) => post("/users/create-user", data),
    list_categories: (status: any) => post("/users/list-user-categories", { status }),
    list_users: (status: any) => post("/users/list-users", { status }),
  },
  distributions: {
    create_distribution: (data: any) => post("/distribution-centers/create-distribution-center", data),
    list_distribution: (status: any) => post("/distribution-centers/list-distribution-centers", {status}),
    approve_distribution: (status: any) => post("/distribution-centers/approve-distribution-center",{id: status}),
    delete_distribution: (id: any) => post('',id)
  },
  suppliers: {
    create_supplier: (data: any) => post("/suppliers/create-inventory-supplier", data),
    get_suppliers: (status: any) => post("/suppliers/list-inventory-suppliers", { id: status }),
    approve_supplier: (status: any) => post("/approve-inventory-supplier", {id: status}),
    deactivate_supplier: (id: any) => post("", id),
  },
  product_models: {
    createPhoneModel: (data: any) => post("/products/create-phone-model", data),
    list_mobile_phone_model: (status: any) => post('/products/list-phone-models', {id: status}),
  },
};

export default mtaApi;
