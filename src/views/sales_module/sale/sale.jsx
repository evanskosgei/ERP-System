import React, { useState, useEffect, useCallback } from 'react';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form";
import { AgGridReact } from "ag-grid-react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import mtaApi from '../../../api/mtaApi';
import Alert from "../../../components/Alert";
import { useNavigate } from 'react-router-dom';

const Sale = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
    const [rowData, setRowData] = useState([]);
    const [modes, setPaymentModes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [modalData, setModalData] = useState({});
    const [selectedSupplierId, setSelectedSupplierId] = useState('');
    const [alert, setAlert] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const navigate = useNavigate();

    const columnDefs = [
        { cellRenderer: 'agCheckboxCellRenderer', checkboxSelection: true, showDisabledCheckboxes: false, cellEditor: 'agCheckboxCellEditor', resizable: true, minWidth: 10 },
        { headerName: "#", field: "count", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 5 },
        { headerName: "Global ID", field: "global_id", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Distribution ID", field: "distribution_center_id", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "IMEI 1", field: "imei_1", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "IMEI 2", field: "imei_2", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: " Date Created", field: "created_date", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    ];

    const defaultColDef = { sortable: true, filter: true, flex: 1, floatingFilter: false };
    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await mtaApi.payment.list_payment_modes("1");

                console.log("response = ", response)
                setPaymentModes(response.data.response);
            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }
        };
        fetchData();
    }, []);

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

    const onGridReady = useCallback(() => {
        const newUnApproved = async () => {
            try {
                const { data } = await mtaApi.agent.get_agent_stock('1')
                console.log("data = ", data)
                if (data.status === 200) {
                    const modifiedData = data.response.map((item, index) => ({
                        ...item,
                        count: index + 1
                    }));
                    setRowData(modifiedData);
                }
            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }
        }
        newUnApproved();
    }, []);
    const handleSupplierChange = (event) => {
        setSelectedSupplierId(event.target.value);
    };

    const onSubmitModal = async (formData) => {
        const payload = {
            sales_date: new Date().toISOString(), // Automatically generate sales_date
            sales_remarks: formData.sales_remarks,
            payment_mothod: selectedPaymentMethod,
            customer_name: formData.customer_name,
            customer_mobile_number: formData.customer_mobile_number,
            customer_email: formData.customer_email,
            product_details: selectedRows.map(row => ({
                model_id: row.model_id,
                imei_1: row.imei_1,
                mobilephone_agentstock_id: row.id
            }))
        };
console.log(payload)
        try {
            const { data } = await mtaApi.sale.cash_sale(payload);
            navigate("/sale/approve-sale");
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
                                    <label className="ti-form-label mb-0">Select Payment mode</label>
                                    <select {...register("supplier", { required: true })} id='supplier' className="my-auto ti-form-input" onChange={handleSupplierChange}>
                                        <option value="">...select payment mode</option>
                                        {modes.map((pay_mode, index) => (
                                            <option key={index} value={pay_mode.id}>{pay_mode.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmitModal)} className="grid grid-cols-2 gap-6">
                            <div className="mb-4">
                                <label htmlFor="sales_remarks" className="block text-gray-700">Sales Remarks:</label>
                                <input id="sales_remarks" {...register("sales_remarks")} className="my-auto ti-form-input" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="customer_name" className="block text-gray-700">Customer Name:</label>
                                <input id="customer_name" {...register("customer_name")} className="my-auto ti-form-input" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="customer_mobile_number" className="block text-gray-700">Customer Mobile Number:</label>
                                <input id="customer_mobile_number" {...register("customer_mobile_number")} className="my-auto ti-form-input" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="customer_email" className="block text-gray-700">Customer Email:</label>
                                <input id="customer_email" {...register("customer_email")} className="my-auto ti-form-input" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Select Payment method</label>
                                <select {...register("payment_method")} className="my-auto ti-form-input" onChange={handlePaymentMethodChange}>
                                    <option value="">...select payment method</option>
                                    {modes.map((pay_mode, index) => (
                                        <option key={index} value={pay_mode.id}>{pay_mode.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-2 flex justify-center">
                                <button type="submit" className={`ti-btn ti-btn-primary  ti-custom-validate-btn`}>Purchase</button>
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
                    style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '50%', border: 'none', borderBottom: '1px solid black' }}
                />
            </div>
            <div className="ag-theme-alpine" style={{ height: 'calc(50vh - 100px)', width: '100%', position: 'relative', zIndex: 1, overflowY: 'auto', overflowX: 'auto' }}>
                <AgGridReact
                    rowData={rowData.length < 0 ? filteredData : rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={20}
                    onGridReady={onGridReady}
                    getRowNodeId={(data) => data.id}
                    rowSelection={"multiple"}
                    rowMultiSelectWithClick={true}
                    onSelectionChanged={(event) => setSelectedRows(event.api.getSelectedRows())}
                />
            </div>

        </div>
    );
}

export default Sale;
