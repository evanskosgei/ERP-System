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
    approve_users: (status: any) => post("/users/get-user-details", { id: status }),
  },
  distributions: {
    create_distribution: (data: any) => post("/distribution-centers/create-distribution-center", data),
    list_distribution: (status: any) => post("/distribution-centers/list-distribution-centers", {status}),
    approve_distribution: (status: any) => post("/distribution-centers/approve-distribution-center",{id: status}),
    delete_distribution: (id: any) => post('',id)
  },
  suppliers: {
    create_supplier: (data: any) => post("/suppliers/create-inventory-supplier", data),
    get_suppliers: (status: any) => post("/suppliers/list-inventory-suppliers", { status: status }),
    approve_supplier: (status: any) => post("/approve-inventory-supplier", {id: status}),

    deactivate_supplier: (id: any) => post("", id),
  },
  product_models: {
    createPhoneModel: (data: any) => post("/products/create-phone-model", data),
    list_mobile_phone_model: (status: any) => post('/products/list-phone-models', {status}),
    approve_mobile_phone_model: (status: any) => post("/products/approve-phone-model", {id:status}),
  },
  Accounts_model: {
    create_account:(data: any) => post("/accounting/create-account", data),
    list_account: (status: any) => post("/accounting/list-accounts",{status}),
    approve_account: (status: any) => post("/accounting/approve-account", {id:status}),
    list_account_categories: (status: any) => post("accounting/list-account-categories", {status}),
    list_account_types: (status :any) => post("/accounting/list-account-types", {status}),
  },
  purchase: {
    cashstockPurchase: (data: any) => post("/cashstock-purchase/create-cash-stock-purchase", data),
  },
  finance_module:{
    create_finance_injection:(data: any) => post("/finance/create-capital-injection", data),
    list_capital_entries: (status: any) => post("/finance/list-capital-injection-entries", {status}),
    approve_capital_injections: (status: any) =>post("/finance/approve-capital-injection", {id: status})
},
};

export default mtaApi;
