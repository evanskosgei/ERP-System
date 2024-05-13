import React, { useState, useEffect } from 'react';
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form";
import { AgGridReact } from "ag-grid-react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import mtaApi from '../../../../api/mtaApi';
import Alert from "../../../../components/Alert";

const BuyusingPrepayment = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
    const [rowData, setRowData] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [modalData, setModalData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [selectedSupplierId, setSelectedSupplierId] = useState('');
    const [alert, setAlert] = useState(null);

    const columnDefs = [
        { cellRenderer: 'agCheckboxCellRenderer', checkboxSelection: true, showDisabledCheckboxes: false, cellEditor: 'agCheckboxCellEditor', resizable: true, minWidth: 10 },
        { headerName: "Phone Name", field: "name", sortable: true, filter: true, flex: 2, resizable: true, minWidth: 5 },
        { headerName: "Ram", field: "ram", sortable: true, filter: true, flex: 2, resizable: true, minWidth: 3 },
        { headerName: "Rom", field: "internal_storage", sortable: true, filter: true, flex: 2, resizable: true, minWidth: 3 },
        { headerName: "Back Camera", field: "main_camera", sortable: true, filter: true, flex: 2, resizable: true, minWidth: 5 },
        { headerName: "Selfie Camera", field: "front_camera", sortable: true, filter: true, flex: 2, resizable: true, minWidth: 5 },
        { headerName: "Display", field: "display", sortable: true, filter: true, flex: 2, resizable: true, minWidth: 5 },
        { headerName: "Battery", field: "battery", sortable: true, filter: true, flex: 2, resizable: true, minWidth: 5 },
        { headerName: "OS", field: "operating_system", sortable: true, filter: true, flex: 2, resizable: true, minWidth: 5 },
        { headerName: "Connectivity", field: "connectivity", sortable: true, filter: true, flex: 2, resizable: true, minWidth: 5 },
        { headerName: "Amount", field: "amount", sortable: true, filter: true, flex: 2, resizable: true, minWidth: 5, editable: true },
        { headerName: "Quantity", field: "quantity", sortable: true, filter: true, flex: 2, resizable: true, minWidth: 5, editable: true },
    ];

    const defaultColDef = { sortable: true, filter: true, flex: 1, floatingFilter: false };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await mtaApi.suppliers.get_suppliers("2");
                setSuppliers(response.data.response);
            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }
        };
        fetchData();
    }, []);

    const handleCategoryChange = async (event) => {
        const selectedCategory = event.target.value;
        try {
            const response = await mtaApi.product_models.list_mobile_phone_model(1);
            setRowData(response.data.response);
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        }
    };
    const handleSupplierChange = (event) => {
        setSelectedSupplierId(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };


    const onSubmitModal = async (modalData) => {
        const validRows = selectedRows.filter(row => row.amount !== null && row.quantity !== null);
        if (!selectedSupplierId) {
            const message = "Please select a supplier"
            setAlert({ type: "error", message });
            return;
        }

        if (validRows.length === 0) {
            const message = "Please select rows with non-null amount and quantityr"
            setAlert({ type: "error", message });
            return;
        }

        // Proceed with purchase request
        const totalAmount = validRows.reduce((acc, row) => {
            return acc + (row.amount * row.quantity);
        }, 0).toFixed(2);
        // console.log("amount", totalAmount);

        const payload = {
            transaction_id: modalData.transaction_id,
            total_amount: totalAmount,
            supplier_name: "",
            supplier_id: selectedSupplierId,
            supplier_payable_account_number: modalData.supplier_payable_account_number,
            bank_account_number: modalData.bank_account_number,
            purchase_date: modalData.purchase_date,
            product_details: validRows.map(row => ({
                model_id: row.id,
                quantity: row.quantity,
                price_per_unit: row.amount,
                total_amount_per_model: (row.amount * row.quantity).toFixed(2)
            })),
            notes: "Stock purchased to be delivered immediately"
        };

        try {
            const response = await mtaApi.purchase.cashstockPurchase(payload);
            console.log("Purchase successful:", response);
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        }
        setShowModal(false);
    };


    return (
        <div>
            {alert && <Alert alert={alert} />}
            <div className="mb-8">
                <form onSubmit={handleSubmit(onSubmitModal)} className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="transaction_id" className="block text-gray-700">Transaction ID:</label>
                        <input id="transaction_id" {...register("transaction_id")} defaultValue={modalData.transaction_id} className="form-input mt-1 block w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="supplier_payable_account_number" className="block text-gray-700">Supplier Payable Account Number:</label>
                        <input id="supplier_payable_account_number" {...register("supplier_payable_account_number")} defaultValue={modalData.supplier_payable_account_number} className="form-input mt-1 block w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="bank_account_number" className="block text-gray-700">Bank Account Number:</label>
                        <input id="bank_account_number" {...register("bank_account_number")} defaultValue={modalData.bank_account_number} className="form-input mt-1 block w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="purchase_date" className="block text-gray-700">Purchase Date:</label>
                        <input id="purchase_date" type='date' {...register("purchase_date")} defaultValue={modalData.purchase_date} className="form-input mt-1 block w-full" />
                    </div>
                    <div className="col-span-2 flex justify-center">
                        <button type="submit" className={`ti-btn ti-btn-primary  ti-custom-validate-btn`}>Purchase</button>
                    </div>
                </form>
            </div>



            <PageHeader currentpage="Buy Using Prepayments" href="/inventory/dashboard/" activepage="Inventory" mainpage="Buy Using Prepayments" />
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">Purchase Stock</h5>
                    </div>
                    <div className="box-body">
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Supplier Name</label>
                                <select {...register("supplier", { required: true })} id='supplier' className="my-auto ti-form-input" onChange={handleSupplierChange}>
                                    <option value="">...select supplier</option>
                                    {suppliers.map((sup, index) => (
                                        <option key={index} value={sup.id}>{sup.business_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Category</label>
                                <select {...register("category", { required: true })} id='category' className="my-auto ti-form-input" onChange={handleCategoryChange}>
                                    <option>...select product category</option>
                                    <option>Mobile Phones</option>
                                    <option>Television</option>
                                    <option>Accessories</option>
                                </select>
                            </div>
                        </div>
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
            <div className="ag-theme-alpine" style={{ height: 'calc(60vh - 100px)', width: '100%', position: 'relative', zIndex: 1, overflowY: 'auto', overflowX: 'auto' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={20}
                    getRowNodeId={(data) => data.id}
                    rowSelection={"multiple"}
                    rowMultiSelectWithClick={true}
                    onSelectionChanged={(event) => setSelectedRows(event.api.getSelectedRows())}
                />
            </div>

        </div>
    );
}

export default BuyusingPrepayment;
