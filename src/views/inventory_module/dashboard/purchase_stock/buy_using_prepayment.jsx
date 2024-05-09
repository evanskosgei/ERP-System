import React, { useState, useCallback } from 'react'
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form"
import { AgGridReact } from "ag-grid-react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";

const BuyusingPrepayment = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();

    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const columnDefs = [
        { headerName: "#", field: "id", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 3 },
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

    const defaultColDef = { sortable: true, flex: 1, filter: true, floatingFilter: false };

    const onGridReady = useCallback((params) => {
        const deletedSupp = async () => {
            await mtaApi.suppliers.deletedSuppliers
                .then(resp => {
                    setRowData(resp.data.message);
                    console.log(resp.data.message)
                })
                .catch(error => {
                    console.log(error)
                });
        };
        deletedSupp();
    }, []);

    const onRowClicked = (event) => {
        const selectedData = event.data;
        setSelectedRowData(selectedData);
    };
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
                                    <option>...select supplier</option>
                                    <option>John Pombe</option>
                                    <option>Stephen Juma</option>
                                    <option>Arasa Makori</option>
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
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Sub-Category</label>
                                <select {...register("sub_category", { required: true })} id='sub_category' className="my-auto ti-form-input">
                                    <option>...select product category</option>
                                    <option>OLED</option>
                                    <option>TV Mkia</option>
                                    <option>Kabambe</option>
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
                    style={{ marginTop: '10px',marginBottom: '10px', padding: '5px',width: '50%',border:'none', borderBottom: '1px solid black' }}
                />

            </div>
            <div className="ag-theme-alpine" style={{ height: 'calc(60dvh - 100px)', width: '100%', position: 'relative', zIndex: 1, overflowY: 'auto' }}>
                <AgGridReact
                    rowData={filteredData.length > 0 ? filteredData : rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={5}
                    // onGridReady={onGridReady}
                    getRowNodeId={(data) => data.id}
                    onRowClicked={onRowClicked}
                />
            </div>
        </div>
    )
}

export default BuyusingPrepayment;
