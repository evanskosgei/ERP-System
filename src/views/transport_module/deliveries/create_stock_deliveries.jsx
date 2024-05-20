import React, { useState, useEffect, useCallback } from 'react';
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { AgGridReact } from 'ag-grid-react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../../providers/AuthProvider";
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Alert from '../../../components/Alert';
import ALLImages from "../../../common/imagesdata";
import mtaApi from '../../../api/mtaApi';

const ApprovedStockCashPurchased = () => {

    const navigate = useNavigate();
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [productDetailsSearchQuery, setProductDetailsSearchQuery] = useState(''); // New state variable
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [selectedRows, setSelectedRows] = useState([]);
    const [divStack, setDivStack] = useState(["listpage"]);
    const [alert, setAlert] = useState(null);
    const { user } = useAuth();
    const [modes, setModes] = useState([]);
    const [transportPayableAccounts, setTransportPayableAccounts] = useState([]);
    const [bankAccounts, setBankAccounts] = useState([]);
    const { register, handleSubmit, formState: { errors, isValid }, formState, setValue, reset } = useForm();

    const columnDefs = [
        { headerName: "#", field: "count", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 5 },
        { headerName: "Supplier Name", field: "supplier_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Transaction ID", field: "transaction_id", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Total Amount", field: "total_amount", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10, valueFormatter: (params) => formatAmount(params.value) },
        { headerName: "Date Purchased", field: "purchase_date", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Date Created", field: "created_date", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Created By", field: "user_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    ];
    const defaultColDef = { sortable: true, flex: 1, filter: true, floatingFilter: false };

    const onGridReady = useCallback(() => {
        const newUnApproved = async () => {
            try {
                const { data } = await mtaApi.purchase.list_purchases_todeliver('1');
                if (data.status === 200) {
                    const modifiedData = data.response.map((item, index) => ({
                        ...item,
                        count: index + 1,
                    }));
                    setRowData(modifiedData);
                }
            } catch (error) {
                console.log(error)
            }
        }
        newUnApproved();
    }, []);

    const onRowClicked = (event) => {
        const selectedData = event.data;
        setSelectedRowData(selectedData);
        setSelectedRows([selectedData]);
        handleClick('details');
    };

    const handleClick = (divId) => {
        setDivStack(prevStack => {
            if (prevStack.includes(divId)) {
                return prevStack.slice(0, prevStack.indexOf(divId) + 1);
            } else {
                return [...prevStack, divId];
            }
        });
        
    };

    const handleBack = () => {
        if (divStack.length > 1) {
            setDivStack(prevStack => prevStack.slice(0, -1));
           
            setAlert('')
        }
    };


    const currentDiv = divStack[divStack.length - 1];

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };



    const filteredData = rowData.filter((row) => {
        return columnDefs.some((column) => {
            const fieldValue = row[column.field];
            if (fieldValue && typeof fieldValue === 'string') {
                return fieldValue.toLowerCase().includes(searchQuery.toLowerCase());
            } else if (fieldValue && typeof fieldValue !== 'string') {
                return fieldValue.toString().toLowerCase().includes(searchQuery.toLowerCase());
            }
            return false;
        });
    });
    const filteredProductDetails = selectedRowData?.product_details?.filter((item) =>
        Object.values(item).some(
            (value) =>
                value &&
                typeof value === 'string' &&
                value.toLowerCase().includes(productDetailsSearchQuery.toLowerCase())
        )
    ) || [];

    useEffect(() => {
        const get_transporter_modes = async () => {
            try {
                const { data } = await mtaApi.transport.list_transport_modes('1')
                if (data.status === 200) {
                    setModes(data.response)
                }
            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }
        }
        get_transporter_modes();

        const getTransportPayableAccounts = async () => {
            try {
                const { data } = await mtaApi.accounts.get_transport_payable_default_account('1');
                if (data.status === 200) {
                    // Ensure the response is wrapped in an array
                    setTransportPayableAccounts([data.response]);
                }
            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }
        };
        getTransportPayableAccounts();

        const fetchData = async () => {
            try {
                const bankAccountsResponse = await mtaApi.accounts.list_account_by_type({ type: '1', status: '1' });
                setBankAccounts(bankAccountsResponse.data.response);

            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }
        };
        fetchData();

    }, [])

    const formatCost = (value) => {
        const parts = value.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    };

    const handleAmountChange = (event) => {
        const inputValue = event.target.value.replace(/,/g, '');
        const formattedValue = formatCost(inputValue);
        setValue("transporter_cost", formattedValue);
    };

    const onSubmit = async (data) => {
        const formattedData = {
            ...data,
            stock_purchases_id: selectedRows.length > 0 ? selectedRows[0].id : null,
            product_details: selectedRows.flatMap((row, index) => row.product_details.map((product, productIndex) => ({
            model_id: product.model_id,
            quantity: product.quantity
        })))
        };
        try {
            
            const response = await mtaApi.stock_in_transit.create_stock_delivery(formattedData)
            if (response.data.status === 200) {
                navigate("/transport/new-unapproved-stock-delivery")
                reset()
            } else {
                const message = response.data.description
                setAlert({ type: "error", message });
            }
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        }
    };

    const formatAmount = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    };

    return (
        <div>
            {currentDiv === "listpage" && (
                <div>
                    <PageHeader currentpage="Create Stock Delivery" href="/transport/dashboard/" activepage="Transport" mainpage="Deliver Stock Purchased" />
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
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
                        <CSVLink data={filteredData.length > 0 ? filteredData : rowData.length > 0 ? rowData : []} filename="new_unapproved_purchased_stock" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Export
                        </CSVLink>
                    </div>
                    <div className="ag-theme-alpine" style={{ height: 'calc(100dvh - 130px)', width: '100%', position: 'relative', zIndex: 1, overflowY: 'auto' }}>
                        <AgGridReact
                            rowData={filteredData.length > 0 ? filteredData : rowData}
                            columnDefs={columnDefs}
                            defaultColDef={defaultColDef}
                            pagination={true}
                            paginationPageSize={20}
                            onGridReady={onGridReady}
                            getRowNodeId={(data) => data}
                            onRowClicked={onRowClicked}
                            
                        />
                    </div>
                </div>
            )}

            {currentDiv === "details" && (
                <div>
                    <PageHeader currentpage="Create Stock Delivery" href="/transport/dashboard/" activepage="Transport" mainpage="Stock Purchased Details" />
                    <button className='flex items-center text-blue-700 hover:bg-gray-100 p-2 font-semibold text-sm'
                        onClick={handleBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                        <h4 className="ml-1">back</h4>
                    </button>

                    <div className="grid grid-cols-12 gap-x-12">
                        <div className="col-span-12 xl:col-span-12">
                            <div className="box">
                                <div className="box-body p-0">

                                    <div id="profile-settings-1" role="tabpanel" aria-labelledby="profile-settings-item-1">
                                        <div className="box border-0 shadow-none mb-0">

                                            <div className="box-header">
                                                <h5 className="box-title  text-center">Purchase Details</h5>
                                            </div>
                                            <div className="box-body">
                                                <div>
                                                    <div className="grid lg:grid-cols-2 gap-6">

                                                    
                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">Transaction / Invoice Number :</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {selectedRowData.transaction_id}
                                                            </span>
                                                        </div>

                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">Supplier Name :</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {selectedRowData.supplier_name}
                                                            </span>
                                                        </div>

                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">Total Purchase Amount :</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {user.currency} {Number(selectedRowData.total_amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                            </span>
                                                        </div>

                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">Global ID :</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {selectedRowData.global_id}
                                                            </span>
                                                        </div>

                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">Purchase Date :</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {selectedRowData.purchase_date}
                                                            </span>
                                                        </div>

                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">Purchase Remarks :</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {selectedRowData.notes}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box border-0 shadow-none mb-0">

                                            <div className="box-header">
                                                <h5 className="box-title  text-center">Enter Stock Delivery Details</h5>
                                            </div>
                                            <div className="box-body">
                                                <div>
                                                    <div className="grid lg:grid-cols-2 gap-6">

                                                    
                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Delivery Note Number</label>
                                                            <input type="text" {...register("delivery_note_number", { required: true })} className="my-auto ti-form-input" placeholder=" ... Enter delivery note number" required />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Delivery date</label>
                                                            <input type="date" {...register("delivery_date", { required: true })} className="my-auto ti-form-input" placeholder=" ... Enter delivery date" required />
                                                        </div>


                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Delivery From</label>
                                                            <input type="text" {...register("delivery_address", { required: true })} className="my-auto ti-form-input" placeholder=" ... Enter delivery address i.e Nairobi" required />
                                                        </div>


                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Delivery To</label>
                                                            <input type="text" {...register("recipient_address", { required: true })} className="my-auto ti-form-input" placeholder="Enter recipient address i.e Kisumu" required />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Recipient Name</label>
                                                            <input type="text" {...register("recipient_name")} className="my-auto ti-form-input" placeholder="Enter recipient name" required />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Recipient Mobile Number</label>
                                                            <input type="text" {...register("recipient_mobile_number")} className="my-auto ti-form-input" placeholder="Enter recipient mobile number" required />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Transporter Name</label>
                                                            <input type="text" {...register("transporter_name", { required: true })} className="ti-form-input" placeholder=" ... Enter transporter name" required />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Transporter ID</label>
                                                            <input type="text" {...register("transporter_id", { required: true })} className="ti-form-input" placeholder=" ... Enter transporter id" required />
                                                        </div>

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

                                                        <select {...register("transporter_payable_account_number", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                            <option value="">Select Bank Account</option>
                                                            {Array.isArray(transportPayableAccounts) && transportPayableAccounts.map(account => (
                                                                <option key={account.account_number} value={account.account_number}>
                                                                    {account.account_name}
                                                                </option>
                                                            ))}
                                                        </select>

                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Transporter Cost</label>
                                                            <input type="text" {...register("transporter_cost", { required: true })} className="ti-form-input" placeholder=" ...Enter transporter cost" onChange={handleAmountChange} required />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Transport Mode</label>
                                                            <select type="text" {...register("transport_mode", { required: true })} className="ti-form-input">
                                                                {/* <option value=""> ...Select mode of transport</option>
                                                <option value="1"> Air</option>
                                                <option value="2"> Road</option>
                                                <option value="3"> Rail</option> */}
                                                                {modes.map((mode, index) => (
                                                                    <option key={index} value={mode.id}>{mode.name}</option>
                                                                ))}
                                                            </select>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Contact Name</label>
                                                            <input type="text" {...register("contact_name", { required: true })} className="ti-form-input" placeholder=" ...Enter driver name" required />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Vehicle Registration</label>
                                                            <input type="text" {...register("registration_number", { required: true })} className="ti-form-input" placeholder=" ...Enter vehicle number plate" required />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Contact Mobile Number</label>
                                                            <input type="text" {...register("contact_number", { required: true })} className="ti-form-input" placeholder=" ...Enter driver mobile number" required />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Remarks</label>
                                                            <input type="text" {...register("notes", { required: true })} className="ti-form-input" placeholder=" ...Enter remarks" required />
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box-body">
                                                <div className="pb-5">
                                                    <div className="md:flex justify-between space-y-2 md:space-y-0">
                                                        <div className="relative max-w-xs">
                                                            <label htmlFor="hs-table-search" className="sr-only">Search</label>
                                                            {/* <input type="text" onChange={(ele) => { myfunction(ele.target.value) }} name="hs-table-search" id="hs-table-search" className="p-2 ltr:pr-10 rtl:pl-10 ti-form-input" placeholder="Search for items" /> */}
                                                            <input
                                                                type="text"
                                                                value={productDetailsSearchQuery}
                                                                onChange={(e) => setProductDetailsSearchQuery(e.target.value)}
                                                                placeholder="Search for items"
                                                                className="p-2 ltr:pr-10 rtl:pl-10 ti-form-input"
                                                                onFocus={(e) => e.target.style.borderColor = '#007BFF'}
                                                                onBlur={(e) => e.target.style.borderColor = '#ccc'}
                                                            />

                                                            <div className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none ltr:pr-4 rtl:pl-4">
                                                                <svg className="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="overflow-auto">
                                                    <table className="ti-custom-table table-bordered ti-custom-table-head">
                                                        <thead className="bg-gray-50 dark:bg-black/20">
                                                            <tr>
                                                                <th scope="col" className="!min-w-[13rem]">Model ID</th>
                                                                <th scope="col">Price Per Unit</th>
                                                                <th scope="col">Quantity</th>
                                                                <th scope="col">Quantity Delivered</th>
                                                                <th scope="col">Pending Delivery</th>
                                                                <th scope="col">Total Amount Per Model</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {selectedRowData && Array.isArray(filteredProductDetails) && filteredProductDetails.length > 0 ? (
                                                                filteredProductDetails.map((item, productIndex) => (
                                                                    <tr key={productIndex}>
                                                                        <td>{item.model_id}</td>
                                                                        <td>{item.price_per_unit}</td>
                                                                        <td>{item.quantity}</td>
                                                                        <td>{item.quantity_delivered}</td>
                                                                        <td>{item.to_deliver}</td>
                                                                        <td>{item.total_amount_per_model}</td>
                                                                    </tr>
                                                                ))
                                                            ) : (
                                                                <tr key="no-product-details">
                                                                    <td colSpan="4">No product details available</td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                    </table>

                                                </div>
                                                <div className="py-1 ltr:float-right rtl:float-left">
                                                    <nav className="flex items-center space-x-2 rtl:space-x-reverse">
                                                        <Link className="text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-md" to="#">
                                                            <span aria-hidden="true">«</span>
                                                            <span className="sr-only">Previous</span>
                                                        </Link>
                                                        <Link className="w-10 h-10 bg-primary text-white p-4 inline-flex items-center text-sm font-medium rounded-full" to="#" aria-current="page">1</Link>
                                                        <Link className="w-10 h-10 text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" to="#">2</Link>
                                                        <Link className="w-10 h-10 text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" to="#">3</Link>
                                                        <Link className="text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-md" to="#">
                                                            <span className="sr-only">Next</span>
                                                            <span aria-hidden="true">»</span>
                                                        </Link>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="loader" style={{ display: 'none' }}>
                        <span className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue rounded-full" role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </span>
                    </div>

                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12">
                            <div className="box !bg-transparent border-0 shadow-none">
                                <div className="box-footer text-center border-t-0 px-0">
                                    <button type="submit" onClick={handleSubmit(onSubmit)} className={`ti-btn ti-btn-primary ti-custom-validate-btn ${!isValid && 'opacity-50 cursor-not-allowed'}`} disabled={!isValid}>Submit Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {alert && <Alert alert={alert} />}
                </div >
            )}
        </div >
    )
}

export default ApprovedStockCashPurchased;
