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

const ReceiveDelivery = () => {

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
    const [distributionCenters, setDistributionCenters] = useState([]);
    const [bankAccounts, setBankAccounts] = useState([]);
    const { register, handleSubmit, formState: { errors, isValid }, formState, setValue, reset } = useForm();

    const columnDefs = [
        { headerName: "#", field: "count", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 5 },
        { headerName: "Model Name", field: "model_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Model Number", field: "model_id", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Delivery Number", field: "delivery_note_number", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Delivery From", field: "delivery_address", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Recipient Name", field: "recipient_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Recipient Address", field: "recipient_address", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Transporter Name", field: "transporter_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Contact Person", field: "contact_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    ];
    const defaultColDef = { sortable: true, flex: 1, filter: true, floatingFilter: false };

    const onGridReady = useCallback(() => {
        const newUnApproved = async () => {
            try {
                const { data } = await mtaApi.receive_stock.list_phone_devices_intransit('1');
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

        const fetchDistributionCenters = async () => {
            try {
                const { data } = await mtaApi.distributions.list_distribution('1');
                if (data.status === 200) {
                    setDistributionCenters(data.response);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchDistributionCenters();

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
            products_in_transit_id: selectedRows.length > 0 ? selectedRows[0].id : null,
            model_id: selectedRows.length > 0 ? selectedRows[0].model_id : null,
            
        };
        try {
            
            const response = await mtaApi.receive_stock.receive_phone_models(formattedData)
            if (response.data.status === 200) {
                navigate("/inventory/approve-receive-stock")
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
                    <PageHeader currentpage="Mobile Phone To Receive" href="/transport/dashboard/" activepage="Transport" mainpage="Receive Stock in Transit" />
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
                    <PageHeader currentpage="Mobile Phone To Receive" href="/transport/dashboard/" activepage="Transport" mainpage="Receive Stock in Transit" />

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
                                                <h5 className="box-title  text-center">Mobile Phone Device Features</h5>
                                            </div>
                                            <div className="box-body">
                                                <div>
                                                    <div className="grid lg:grid-cols-2 gap-6">

                                                    
                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">Model Name :</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {selectedRowData.model_name}
                                                            </span>
                                                        </div>

                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">Model Number :</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {selectedRowData.model_id}
                                                            </span>
                                                        </div>

                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">RAM Size :</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {selectedRowData.ram}
                                                            </span>
                                                        </div>

                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">Internal Storage :</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {selectedRowData.internal_storage}
                                                            </span>
                                                        </div>

                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">Main Camera :</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {selectedRowData.main_camera}
                                                            </span>
                                                        </div>

                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">Front Camera :</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {selectedRowData.front_camera}
                                                            </span>
                                                        </div>

                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">Display:</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {selectedRowData.display}
                                                            </span>
                                                        </div>

                                                        <div className="space-x-3">
                                                            <span className="text-sm font-bold">Processor:</span>
                                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                                {selectedRowData.processor}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box border-0 shadow-none mb-0">

                                            <div className="box-header">
                                                <h5 className="box-title  text-center">Enter Device Details</h5>
                                            </div>
                                            <div className="box-body">
                                                <div>
                                                    <div className="grid lg:grid-cols-2 gap-6">

                                                    
                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Device IMEI 1</label>
                                                            <input type="text" {...register("imei_1", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter phone IMEI 1" required />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Device IMEI 2</label>
                                                            <input type="text" {...register("imei_2", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter IMEI 2" required />
                                                        </div>

                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Select Distribution Center</label>
                                                            <select {...register("distribution_center_id", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                                <option value="">Select Store</option>
                                                                {distributionCenters.map(center => (
                                                                    <option key={center.id} value={center.id}>{center.name}</option>
                                                                ))}
                                                            </select>
                                                            {errors.distribution_center_id && <span className="text-red-500">{errors.distribution_center_id.message}</span>}
                                                        </div>


                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Device Qr Code</label>
                                                            <input type="text" {...register("qr_code_id", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Scan phone bar code" required />
                                                        </div>


                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Warranty Period</label>
                                                            <input type="text" {...register("warranty_period", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter warranty period. i.e 1 Year" required />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Date Received</label>
                                                            <input type="date" {...register("received_date", { required: false })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='...Enter Received Date' />   
                                                        </div>

                                                        <div className="space-y-2">
                                                            <label className="ti-form-label mb-0">Remarks</label>
                                                            <input type="textarea" {...register("remarks", { required: true })} className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ...Enter remarks" required />
                                                        </div>
                                                    </div>
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

export default ReceiveDelivery;