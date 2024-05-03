import { data } from "autoprefixer";
import { del, get, post, put } from "./base";

const mtaApi = {
  auth: {
    login: (data: any) => post("/authentication/login", data),
  },
 supplier: {
  addSupplier: (data: any) => post("/supplier", data),
  createSupplierContact: (id: any, data: any) => post(`/supplier/contact/${id}`, data),

  getActiveSuppliers: get("/supplier?status=active&approval=true"),
  getNewUnApprovedSuppliers: get("/supplier?status=created&approval=false"),
  getInactiveSuppliers: get("/supplier?status=deactivated&approval=true"),
  // getASupplier: (id: any) => get(`/supplier/${id}`),
  // getSupplierContact: (id: any,) => get(`/supplier/contact/${id}`),
  // getSpecificSupplierContacts: (id: any, contact_id:any) => get(`/supplier/contact/${id}/${contact_id}`),

  // deleteSupplier: (id: any) => del(`/supplier/${id}`),
  // deletedSuppliers: get("/supplier/deleted"),
  // deleteSupplierContact: (id: any, contact_id: any) => del(`/supplier/contact/${id}/${contact_id}`),

  updateSupplier: (id: any, data: any) => put(`/supplier/${id}`, data),

  // updateSupplierContact: (id: any, contact_id: any, data: any) => put(`/supplier/contact/${id}/${contact_id}`, data),
 },
};

export default mtaApi;
