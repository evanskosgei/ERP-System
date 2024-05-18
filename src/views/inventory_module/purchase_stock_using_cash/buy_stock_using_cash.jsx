import React, { useState, useEffect } from 'react';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form";
import { AgGridReact } from "ag-grid-react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import mtaApi from '../../../api/mtaApi';
import Alert from "../../../components/Alert";
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

const BuyUsingCash = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [rowData, setRowData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [modalData, setModalData] = useState({});
    const [selectedSupplierId, setSelectedSupplierId] = useState('');
    const [alert, setAlert] = useState(null); 
    const navigate = useNavigate();
    const [bankAccounts, setBankAccounts] = useState([]);
    const [supplierAccounts, setSupplierAccounts] = useState([]);
    const [selectedSupplierAccounts, setSelectedSupplierAccounts] = useState([]);

    const columnDefs = [
        { checkboxSelection: true, headerCheckboxSelection: true },
        { headerName: "Phone Model", field: "name", sortable: true, filter: true },
        { headerName: "RAM", field: "ram", sortable: true, filter: true },
        { headerName: "Internal Storage", field: "internal_storage", sortable: true, filter: true },
        { headerName: "Back Camera", field: "main_camera", sortable: true, filter: true },
        { headerName: "Front Camera", field: "front_camera", sortable: true, filter: true },
        { headerName: "Display", field: "display", sortable: true, filter: true },
        { headerName: "Battery", field: "battery", sortable: true, filter: true },
        { headerName: "Connectivity", field: "connectivity", sortable: true, filter: true },
        { headerName: "Amount", field: "amount", sortable: true, filter: true, editable: true },
        { headerName: "Quantity", field: "quantity", sortable: true, filter: true, editable: true },
    ];

    const defaultColDef = { sortable: true, filter: true, flex: 1 };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const suppliersResponse = await mtaApi.suppliers.get_suppliers("1");
                setSuppliers(suppliersResponse.data.response);

                const bankAccountsResponse = await mtaApi.accounts.list_account_by_type({ type: '1', status: '1' });
                setBankAccounts(bankAccountsResponse.data.response);

                const supplierAccountsResponse = await mtaApi.accounts.list_account_by_type({ type: '9', status: '1' });
                setSupplierAccounts(supplierAccountsResponse.data.response);
            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }
        };
        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query) {
            const filtered = rowData.filter(row => 
                Object.values(row).some(val => 
                    String(val).toLowerCase().includes(query.toLowerCase())
                )
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(rowData);
        }
    };

    const handleCategoryChange = async (event) => {
        const selectedCategory = event.target.value;
        try {
            const response = await mtaApi.product_models.list_mobile_phone_model("1");
            setRowData(response.data.response);
            setFilteredData(response.data.response); // Initialize filtered data
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        }
    };

    const handleSupplierChange = (event) => {
        const selectedSupplier = event.target.value;
        setSelectedSupplierId(selectedSupplier);
        setSelectedSupplierAccounts(supplierAccounts.filter(account => account.owner_id === parseInt(selectedSupplier)));
    };

    const onSubmitModal = async (data) => {
        const validRows = selectedRows.filter(row => row.amount !== null && row.quantity !== null);

        if (!selectedSupplierId) {
            setAlert({ type: "error", message: "Please select a supplier" });
            return;
        }

        if (validRows.length === 0) {
            setAlert({ type: "error", message: "Please select rows with non-null amount and quantity" });
            return;
        }

        const totalAmount = validRows.reduce((acc, row) => acc + (row.amount * row.quantity), 0).toFixed(2);

        const payload = {
            transaction_id: data.transaction_id,
            total_amount: totalAmount,
            supplier_name: "",
            supplier_id: selectedSupplierId,
            supplier_payable_account_number: data.supplier_payable_account_number,
            bank_account_number: data.bank_account_number,
            purchase_date: data.purchase_date,
            product_details: validRows.map(row => ({
                model_id: row.id,
                quantity: row.quantity,
                price_per_unit: row.amount,
                total_amount_per_model: (row.amount * row.quantity).toFixed(2)
            })),
            notes: "Stock purchased to be delivered immediately"
        };

        try {
            await mtaApi.purchase.cashstockPurchase(payload);
            navigate("/inventory/new-stock-purchased-using-cash");
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        }
    };

    return (
        <div>
            <PageHeader currentpage="Buy Using Cash" href="/inventory/dashboard/" activepage="Inventory" mainpage="Buy Using Prepayments" />
            {alert && <Alert alert={alert} />}
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">Purchase Stock</h5>
                    </div>
                    <div className="box-body">
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <div className='mb-4'>
                                    <label className="ti-form-label mb-0">Product Supplier</label>
                                    <select
                                        {...register("supplier_id", { required: true })}
                                        className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={selectedSupplierId}
                                        onChange={handleSupplierChange}
                                    >
                                        <option value="">Select Supplier</option>
                                        {suppliers.map(supplier => (
                                            <option key={supplier.id} value={supplier.id}>{supplier.business_name}</option>
                                        ))}
                                    </select>
                                    {errors.supplier_id && <span className="text-red-500">{errors.supplier_id.message}</span>}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className='mb-4'>
                                    <label className="ti-form-label mb-0">Product Category</label>
                                    <select {...register("category", { required: true })} id='category' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleCategoryChange}>
                                        <option value="">...select product category</option>
                                        <option value="mobile_phones">Mobile Phones</option>
                                        <option value="television">Television</option>
                                        <option value="accessories">Accessories</option>
                                    </select>
                                    {errors.category && <span className="text-red-500">{errors.category.message}</span>}
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmitModal)} className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Bank Account Number</label>
                                <select {...register("bank_account_number", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select Bank Account</option>
                                    {bankAccounts.map(account => (
                                        <option key={account.account_number} value={account.account_number}>{account.account_name}</option>
                                    ))}
                                </select>
                                {errors.bank_account_number && <span className="text-red-500">{errors.bank_account_number.message}</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Supplier Payable Account Number</label>
                                <select {...register("supplier_payable_account_number", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select Supplier Payable Account</option>
                                    {/* {selectedSupplierAccounts.map(account => ( */}
                                    {supplierAccounts.map(account => (
                                        <option key={account.account_number} value={account.account_number}>{account.account_name}</option>
                                    ))}
                                </select>
                                {errors.supplier_payable_account_number && <span className="text-red-500">{errors.supplier_payable_account_number.message}</span>}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="transaction_id" className="ti-form-label mb-0">Transaction ID</label>
                                <input id="transaction_id" {...register("transaction_id", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                {errors.transaction_id && <span className="text-red-500">{errors.transaction_id.message}</span>}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="purchase_date" className="ti-form-label mb-0">Purchase Date</label>
                                <input id="purchase_date" type='date' {...register("purchase_date", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                {errors.purchase_date && <span className="text-red-500">{errors.purchase_date.message}</span>}
                            </div>
                            <div className="col-span-2 flex justify-center">
                                <button type="submit" className="ti-btn ti-btn-primary">Purchase</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', margin: '2', maxWidth: '50' }}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    style={{
                        marginTop: '5px',
                        marginBottom: '15px',
                        padding: '8px',
                        width: '30%',
                        boxSizing: 'border-box',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '14px',
                        backgroundColor: '#f9f9f9',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#007BFF'}
                    onBlur={(e) => e.target.style.borderColor = '#ccc'}
                />
            </div>
            <div className="ag-theme-alpine" style={{ height: 'calc(50vh - 100px)', width: '100%', position: 'relative', zIndex: 1, overflowY: 'auto', overflowX: 'auto' }}>
                <AgGridReact
                    rowData={filteredData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination
                    paginationPageSize={20}
                    rowSelection="multiple"
                    onSelectionChanged={event => setSelectedRows(event.api.getSelectedRows())}
                />
            </div>
        </div>
    );
}

export default BuyUsingCash;