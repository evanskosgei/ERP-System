import React, { useState, useCallback, useEffect } from 'react'
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form"
import { AgGridReact } from "ag-grid-react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import mtaApi from '../../../../api/mtaApi';

const data = [
    {
        id: "1",
        name: "Phone 1",
        ram: "4GB",
        internal_storage: "64GB",
        main_camera: "12MP",
        front_camera: "8MP",
        display: "6.2 inches",
        battery: "4000mAh",
        operating_system: "Android",
        connectivity: "4G"
    },
    {
        id: "2",
        name: "Phone 2",
        ram: "6GB",
        internal_storage: "128GB",
        main_camera: "48MP",
        "front_camera": "20MP",
        "display": "6.5 inches",
        "battery": "5000mAh",
        "operating_system": "iOS",
        "connectivity": "5G"
    },
    {
        "id": 3, "name": "Phone 3", "ram": "8GB", "internal_storage": "256GB",
        "main_camera": "64MP", "front_camera": "32MP", "display": "6.8 inches",
        "battery": "6000mAh", "operating_system": "Android", "connectivity": "5G"
    },
    {
        "id": 4, "name": "Phone 4", "ram": "16GB", "internal_storage": "512GB",
        "main_camera": "64MP", "front_camera": "32MP", "display": "6.8 inches",
        "battery": "6000mAh", "operating_system": "Android", "connectivity": "5G"
    }

]
const BuyusingPrepayment = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
    const [rowData, setRowData] = useState(data);
    const [suppiers, setSuppliers] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCheckboxClick = (event) => {
        const selectedData = event.data;
        const selectedIndex = selectedRowData.findIndex((row) => row.id === selectedData.id);
        if (selectedIndex === 1) {
            setSelectedRowData([...selectedRowData, selectedData]);
        } else {
            const updatedSelectedRowData = [...selectedRowData];
            updatedSelectedRowData.splice(selectedIndex, 1);
            setSelectedRowData(updatedSelectedRowData);
        }
        console.log(selectedRowData);
    };


    const columnDefs = [
        {
            cellRenderer: 'agCheckboxCellRenderer', checkboxSelection: true,
            showDisabledCheckboxes: false, cellEditor: 'agCheckboxCellEditor', resizable: true, minWidth: 10,
        },
        { headerName: "Phone Name", field: "name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5 },
        { headerName: "Ram", field: "ram", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 3 },
        { headerName: "Rom", field: "internal_storage", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 3 },
        { headerName: "Back Camera", field: "main_camera", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5 },
        { headerName: "Selfie Camera", field: "front_camera", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5 },
        { headerName: "Dispaly", field: "display", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5 },
        { headerName: "Battery", field: "battery", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5 },
        { headerName: "OS", field: "operating_system", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5 },
        { headerName: "Connectivity", field: "connectivity", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5 },
    ];
    const defaultColDef = { onCellClicked: handleCheckboxClick, sortable: true, flex: 1, filter: true, floatingFilter: false };
    const onGridReady = useCallback((params) => {
        setRowData(data)
    }, []);

    useEffect(() => {
        const get_active_suppliers = async () => {
            await mtaApi.suppliers.get_suppliers("2")
                .then(response => {
                    // console.log(response.data.response)
                    setSuppliers(response.data.response)
                })
        };
        get_active_suppliers()
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
    // console.log(selectedRowData)
    return (
        <div>
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
                                <select {...register("supplier", { required: true })} id='supplier' className="my-auto ti-form-input">
                                    <option value="">...select supplier</option>
                                    {suppiers.map((sup, index) => (
                                        <option key={index} value={sup.id}>{sup.business_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Category</label>
                                <select {...register("category", { required: true })} id='category' className="my-auto ti-form-input">
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
            <div className="ag-theme-alpine .ag-cell-focus, .ag-cell-no-focus { border: none !important; }" style={{ height: 'calc(60dvh - 100px)', width: '100%', position: 'relative', zIndex: 1, overflowY: 'auto', overflowX: 'auto' }}>
                <AgGridReact
                    rowData={filteredData.length > 0 ? filteredData : rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={20}
                    onGridReady={onGridReady}
                    getRowNodeId={(data) => data.id}
                    rowSelection={"multiple"}
                    rowMultiSelectWithClick={true}
                />
            </div>
        </div>
    )
}

export default BuyusingPrepayment;
