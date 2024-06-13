import React, { useState, useEffect, useCallback } from 'react';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import { useNavigate } from 'react-router-dom';
import mtaApi from '../../../api/mtaApi';
import Alert from '../../../components/Alert';
import { useForm } from "react-hook-form";

const CreateStockDelivery = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState, reset } = useForm();
    const navigate = useNavigate();
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [divStack, setDivStack] = useState(["listpage"]);
    const [editMode, setEditMode] = useState(false);
    const [alert, setAlert] = useState(null);
    const [selectedRows, setSelectedRows] = useState([]);
    const [modes, setModes] = useState([]);

    const columnDefs = [
        { cellRenderer: 'agCheckboxCellRenderer', checkboxSelection: true, showDisabledCheckboxes: false, cellEditor: 'agCheckboxCellEditor', resizable: true, minWidth: 10 },
        { headerName: "#", field: "count", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 5 },
        { headerName: "Transaction ID", field: "transaction_id", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Total Amount", field: "total_amount", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10, valueFormatter: (params) => formatAmount(params.value) },
        { headerName: "Supplier Name", field: "supplier_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Date Purchased", field: "purchase_date", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Created By", field: "user_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Created Date", field: "created_date", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    ];
    const defaultColDef = { sortable: true, flex: 1, filter: true, floatingFilter: false };

    const onGridReady = useCallback(() => {
        const newUnApproved = async () => {
            try {
                const { data } = await mtaApi.purchase.list_stock_purchased_cash('1');
                if (data.status === 200) {
                    const modifiedData = data.response.map((item, index) => ({
                        ...item,
                        count: index + 1
                    }));
                    setRowData(modifiedData);
                }
            } catch (error) {
                console.log(error)
            }
        }
        newUnApproved();
    }, []);

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
    }, [])

    const handleClick = () => {
        if (!selectedRows || selectedRows.length === 0) {
            const message = "Please select rows to put in transit.";
            setAlert({ type: "error", message });
            return;
        } else {
            setDivStack(prevStack => [...prevStack, "details"]);
            setAlert('');
        }
    };

    const handleBack = () => {
        if (divStack.length > 1) {
            setDivStack(prevStack => prevStack.slice(0, -1));
            setSelectedRows()
            setAlert('')
        }
    };
    const currentDiv = divStack[divStack.length - 1];
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // const filteredData = rowData.filter((row) => {
    //     return columnDefs.some((column) => {
    //         const fieldValue = row[column.field];
    //         if (fieldValue && typeof fieldValue === 'string') {
    //             return fieldValue.toLowerCase().includes(searchQuery.toLowerCase());
    //         } else if (fieldValue && typeof fieldValue !== 'string') {
    //             return fieldValue.toString().toLowerCase().includes(searchQuery.toLowerCase());
    //         }
    //         return false;
    //     });
    // });


    const onSubmit = async (data) => {
        const formattedData = {
            ...data,
            product_details: selectedRows.flatMap((row, index) => row.product_details.map((product, productIndex) => ({
                model_id: product.model_id,
                quantity: product.quantity
            })))
        };
        try {
            const response = await mtaApi.stock_in_transit.create_stock_delivery(formattedData)
            if(response.data.status === 200){
                navigate("/transport/new-unapproved-stock-delivery")
                reset()
            }else{
                const message = response.data.description
                setAlert({ type: "error", message });
            }
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        }
    };

    const rowTotals = selectedRows ? selectedRows.map((row) =>
        row.product_details.reduce((total, product) => total + product.quantity, 0)
    ) : [];
    const grandTotal = rowTotals.reduce((total, subtotal) => total + subtotal, 0);

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
                    <PageHeader currentpage="Create Stock Delivery" href="/transport/dashboard/" activepage="Transport" mainpage="Put Stock in Transit" />
                    {alert && <Alert alert={alert} />}

                    <div className="col-span-2 flex justify-between">
                        <button onClick={handleClick} type="submit" className={`ti-btn ti-btn-primary  ti-custom-validate-btn`}>Put In Transit</button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2', maxWidth: '50' }}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '50%', border: 'none', borderBottom: '1px solid black' }}
                        />
                    </div>
                    <div className="ag-theme-alpine" style={{ height: 'calc(60vh - 100px)', width: '100%', position: 'relative', zIndex: 1, overflowY: 'auto', overflowX: 'auto' }}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={columnDefs}
                            defaultColDef={defaultColDef}
                            pagination={true}
                            onGridReady={onGridReady}
                            paginationPageSize={20}
                            getRowNodeId={(data) => data.id}
                            rowSelection={"multiple"}
                            rowMultiSelectWithClick={true}
                            onSelectionChanged={(event) => setSelectedRows(event.api.getSelectedRows())}
                        />
                    </div>
                </div>
            )}

            {currentDiv === "details" && (
                <div>
                    <PageHeader currentpage="Create Stock Delivery" href="/transport/dashboard/" activepage="Transport" mainpage="Stock Purchased Details" />
                    {alert && <Alert alert={alert} />}
                    <button className='className="flex left-0 text-blue-700 hover:bg-gray-100 p-3 font-bold'
                        onClick={handleBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                        <h4>back</h4>
                    </button>

                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <h5 className="box-title text-center">Product Details</h5>
                                </div>
                                <div className="box-body">
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Purchase Type</label>
                                            <select {...register("purchase_type", { required: true })} className="my-auto ti-form-input">
                                                <option value="">...select purchase type</option>
                                                <option value="1">Cash Purchases</option>
                                                <option value="2">Prepaid Purchases</option>
                                                <option value="3">Credit Purchases</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Stock Purchase ID</label>
                                            <input type="text" {...register("stock_purchases_id", { required: true })} className="my-auto ti-form-input" placeholder=" ... Enter stack purchases id" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Global ID</label>
                                            <input type="text" {...register("global_id", { required: true })} className="my-auto ti-form-input" placeholder=" ... Enter Global id" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Delivery Address</label>
                                            <input type="text" {...register("delivery_address", { required: true })} className="my-auto ti-form-input" placeholder=" ... Enter delivery address" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Delivery note number Address</label>
                                            <input type="text" {...register("delivery_note_number", { required: true })} className="my-auto ti-form-input" placeholder=" ... Enter delivery note number" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">delivery date</label>
                                            <input type="date" {...register("delivery_date", { required: true })} className="my-auto ti-form-input" placeholder=" ... Enter delivery date" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Recipient_address</label>
                                            <input type="text" {...register("recipient_address", { required: true })} className="my-auto ti-form-input" placeholder="Enter recipient address" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Recipient name</label>
                                            <input type="text" {...register("recipient_name")} className="my-auto ti-form-input" placeholder="Enter recipient name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Recipient mobile number</label>
                                            <input type="text" {...register("recipient_mobile_number")} className="my-auto ti-form-input" placeholder="Enter recipient mobile number" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Transporter name</label>
                                            <input type="text" {...register("transporter_name", { required: true })} className="ti-form-input" placeholder=" ... Enter transporter name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Transporter ID</label>
                                            <input type="text" {...register("transporter_id", { required: true })} className="ti-form-input" placeholder=" ... Enter transporter id" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Bank account number</label>
                                            <input type="text" {...register("bank_account_number", { required: true })} className="ti-form-input" placeholder=" ...Enter transporter bank account number" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Transporter payable account number</label>
                                            <input type="text" {...register("transporter_payable_account_number", { required: true })} className="ti-form-input" placeholder=" ...Enter transporter account number" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Transporter cost</label>
                                            <input type="text" {...register("transporter_cost", { required: true })} className="ti-form-input" placeholder=" ...Enter transporter cost" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Transport mode</label>
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
                                            <label className="ti-form-label mb-0">Transporter Registration</label>
                                            <input type="text" {...register("registration_number", { required: true })} className="ti-form-input" placeholder=" ...Enter registration number" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Transporter Name</label>
                                            <input type="text" {...register("contact_name", { required: true })} className="ti-form-input" placeholder=" ...Enter transporter name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Transporter Mobile number</label>
                                            <input type="text" {...register("contact_number", { required: true })} className="ti-form-input" placeholder=" ...Enter transporter mobile number" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ti-form-label mb-0">Add Note</label>
                                            <input type="text" {...register("notes", { required: true })} className="ti-form-input" placeholder=" ...Enter a note" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className="hidden box-title text-center mb-4">Product Details</h5>
                    <div>
                        {selectedRows && selectedRows.length > 0 ? (
                            selectedRows.map((row, index) => (
                                <div key={index}>
                                    {row.product_details.map((product, productIndex) => (
                                        <div key={productIndex} className="grid lg:grid-cols-2 gap-6">
                                            <div className="hidden space-y-2">
                                                <label className="ti-form-label mb-0">Model ID</label>
                                                <input
                                                    type="text"
                                                    defaultValue={product.model_id}
                                                    {...register(`product_details[${index}][${productIndex}].model_id`)}
                                                    className="my-auto ti-form-input"
                                                    readOnly
                                                />
                                            </div>
                                            <div className="hidden space-y-2">
                                                <label className="ti-form-label mb-0">Quantity</label>
                                                <input
                                                    type="text"
                                                    defaultValue={product.quantity}
                                                    {...register(`product_details[${index}][${productIndex}].quantity`)}
                                                    className="my-auto ti-form-input"
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    {/* <div>
                                        <h2 className="text-md font-medium" ><strong>Total Quantity for Row  {index + 1} : {rowTotals[index]}</strong></h2>
                                    </div> */}
                                </div>
                            ))
                        ) : (
                            <div>No data available</div>
                        )}
                        {/* {selectedRows && selectedRows.length > 0 && (
                            <div className="text-lg font-bold mt-4">
                                <strong>Grand Total Quantity: {grandTotal}</strong>
                            </div>
                        )} */}
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
                </div >
            )}

        </div>
    )
}

export default CreateStockDelivery;
