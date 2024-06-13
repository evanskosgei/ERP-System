import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader'
import React, { useState, useEffect, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import { useNavigate } from 'react-router-dom';
import mtaApi from '../../../api/mtaApi';
import Alert from '../../../components/Alert';
import { Link } from 'react-router-dom';
import { useAuth } from "../../../providers/AuthProvider";

const ListStockistManagerDispatch = () => {
    const navigate = useNavigate();
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [divStack, setDivStack] = useState(["listpage"]);
    const [editMode, setEditMode] = useState(false);
    const [alert, setAlert] = useState(null);  
    const { user } = useAuth();


    const columnDefs = [
        { headerName: "#", field: "count", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 5 },
        { headerName: "Global ID", field: "global_id", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Distribution Center", field: "distribution_center_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Manager Name", field: "manager_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "IMEI 1", field: "imei_1", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "IMEI 2", field: "imei_2", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "QR Code", field: "qr_code_id", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Date Dispatched", field: "stockist_dispatch_date", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Stockist Name", field: "stockist_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Stock Status", field: "stock_status", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Date Created", field: "created_date", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    ];
    const defaultColDef = { sortable: true, flex: 1, filter: true, floatingFilter: false };

    const onGridReady = useCallback(() => {
        const newUnApproved = async () => {
            try {
                const { data } = await mtaApi.stockist_dispatch.list_manager_dispatch('1')
                console.log(data)
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

    const onRowClicked = (event) => {
        const selectedData = event.data;
        setSelectedRowData(selectedData);
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

    return (
        <div>
            {currentDiv === "listpage" && (
                <div>
                    <PageHeader currentpage="Stock Dispatched to Managers" href="/inventory/dashboard/" activepage="Inventory" mainpage="Stock sent to managers" />
                    <div className="grid grid-cols-12 gap-6">
                    </div>
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
                        <CSVLink data={filteredData.length > 0 ? filteredData : rowData.length > 0 ? rowData : []} filename="Newly_received_stock" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
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
                    <PageHeader currentpage="Stock Dispatched to Managers" href="/inventory/dashboard/" activepage="Inventory" mainpage="Stock sent to managers" />
                    <button className='className="flex left-0 text-blue-700 hover:bg-gray-100 p-3 font-bold'
                        onClick={handleBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                        <h4>back</h4>
                    </button>
                    <div className= "grid grid-cols-12 gap-x-12">
                    <div className= "col-span-12 xl:col-span-12">
					<div className= "box">
						<div className= "box-body p-0">

							<div id="profile-settings-1" role="tabpanel" aria-labelledby="profile-settings-item-1">
								<div className= "box border-0 shadow-none mb-0">
									
                                    <div className="box-header">
                            <h5 className="box-title  text-center">Manager Stock Dispatch Details</h5>
                        </div>
									<div className= "box-body">
										<div>
										<div className= "grid lg:grid-cols-2 gap-6">
                                        
                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">Distribution Center :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.distribution_center_name}</span>
									    </div>

                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">Manager Name :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.manager_name}</span>
									    </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Global ID :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.global_id}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Model Name :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.model_name}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Device Qr Code :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.qr_code_id}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Device IMEI 1 :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.imei_1}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Device IMEI 2 :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.imei_2}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">RAM Size :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.ram}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Internal Storage Size :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.internal_storage}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Main Camera :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.main_camera}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Front Camera :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.front_camera}</span>
                                        </div>


                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Display :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.display}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Processor :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.processor}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Warranty Period :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.warranty_period}</span>
                                        </div>


                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Date Dispatched :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.stockist_dispatch_date}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Date Created  :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.created_date}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Stockist Remarks :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.stockist_remarks}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Stockist Name :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.stockist_name}</span>
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
                    
                    {alert && <Alert alert={alert} />}
                </div>
            )}

        </div >
    )
}

export default ListStockistManagerDispatch;
