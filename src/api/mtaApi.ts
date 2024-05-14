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
    list_distribution: (status: any) => post("/distribution-centers/list-distribution-centers", { status }),
    approve_distribution: (status: any) => post("/distribution-centers/approve-distribution-center", { id: status }),
    delete_distribution: (id: any) => post('', id)
  },
  suppliers: {
    create_supplier: (data: any) => post("/suppliers/create-inventory-supplier", data),
    get_suppliers: (status: any) => post("/suppliers/list-inventory-suppliers", { status: status }),
    approve_supplier: (status: any) => post("/suppliers/approve-inventory-supplier", { id: status }),
    deactivate_supplier: (id: any) => post("", id),
  },
  product_models: {
    createPhoneModel: (data: any) => post("/products/create-phone-model", data),
    list_mobile_phone_model: (status: any) => post('/products/list-phone-models', { status }),
    approve_mobile_phone_model: (status: any) => post("/products/approve-phone-model", { id: status }),
  },
  Accounts_model: {
    create_account: (data: any) => post("/accounting/create-account", data),
    list_account: (status: any) => post("/accounting/list-accounts", { status }),
    approve_account: (status: any) => post("/accounting/approve-account", { id: status }),
    list_account_categories: (status: any) => post("accounting/list-account-categories", { status }),
    list_account_types: (status: any) => post("/accounting/list-account-types", { status }),
  },
  purchase: {
    cashstockPurchase: (data: any) => post("/cashstock-purchase/create-cash-stock-purchase", data),
    list_stock_purchased_cash: (status: any) => post("/cashstock-purchase/list-cash-stock-purchase", { status }),
    approve_stock_purchased_cash: (status: any) => post("/cashstock-purchase/approve-cash-stock-purchase", { id: status })
  },
  finance_module: {
    create_finance_injection: (data: any) => post("/finance/create-capital-injection", data),
    list_capital_entries: (status: any) => post("/finance/list-capital-injection-entries", { status }),
    approve_capital_injections: (status: any) => post("/finance/approve-capital-injection", { id: status })
  },
  stock_in_transit: {
    put_in_transit: (data: any) => post("/transit-stock/create-stock-transit", data),
    list_stock_in_transit: (status: any) => post("/transit-stock/list-stock-transit", { status }),
    approve_stock_in_transit: (status: any) => post("/transit-stock/approve-stock-transit", { id: status }),
  },
  transport: {
    list_transport_modes: (status: any) => post("/transport/list-transport-modes", {status}),
  },
  receive_stock:{
  receive_phone_models: (data: any) =>post("/mobilephone-receive-transit-stock/receive-stock", data),
  list_received_phone_models: (status :any) =>post("/mobilephone-receive-transit-stock/list-received-stock", {status}),
  approve_received_phones_models: (status: any) => post("/mobilephone-receive-transit-stock/approve-received-stock",{id:status}),
  },
  distribute_stock_stockist:{
    distribute_stock_manager: (data: any) =>post("/manager-distribution/dispatch-stock",data),
    list_distribution:(id:any)=>post("manager-distribution/list-dispatched-stock",{status:id}),
    approve_distribution:(id:any)=>post("manager-distribution/approve-dispatched-stock",{id:id})
    },
  team_leader_distribution : {
    team_leader_dispatch_phones:(data:any) => post("/teamleader-distribution/dispatch-stock", data),
  }
};

export default mtaApi;
