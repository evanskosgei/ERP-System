import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader'
import React, { useState, useEffect, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import { useNavigate } from 'react-router-dom';
import mtaApi from '../../../../api/mtaApi';
import Alert from '../../../../components/Alert';

const Approve_received_stock = () => {
    const navigate = useNavigate();
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [divStack, setDivStack] = useState(["listpage"]);
    const [editMode, setEditMode] = useState(false);
    const [alert, setAlert] = useState(null);

    const columnDefs = [
        { headerName: "#", field: "count", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 5 },
        { headerName: "Global ID", field: "global_id", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Distribution ID", field: "distribution_center_id", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "IMEI 1", field: "imei_1", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "IMEI 2", field: "imei_2", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "QR Code", field: "qr_code_id", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Date Received", field: "received_date", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: " Date Created", field: "created_date", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Availability", field: "state", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    ];
    const defaultColDef = { sortable: true, flex: 1, filter: true, floatingFilter: false };

    const onGridReady = useCallback(() => {
        const newUnApproved = async () => {
            try {
                const { data } = await mtaApi.receive_stock.list_received_phone_models('2')
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

    const toggleEditMode = () => {
        setEditMode(!editMode);
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
    const approve = async () => {
        try {
            const { data } = await mtaApi.receive_stock.approve_received_phones_models(selectedRowData.id)
            if (data.status === 200) {
                navigate("/inventory/available-stock")
            }
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        }
    }
    return (
        <div>
            {currentDiv === "listpage" && (
                <div>
                    <PageHeader currentpage="New Receive Stock" href="/inventory/dashboard/" activepage="Inventory" mainpage="New Received Stock Pending Approval" />
                    <div className="grid grid-cols-12 gap-6">
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '50%', boxSizing: 'border-box' }}
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
                    <PageHeader currentpage="Stock Received Details" href="/transport/transit/" activepage="Transport" mainpage="Stock Received Details" />
                    <button className='className="flex left-0 text-blue-700 hover:bg-gray-100 p-3 font-bold'
                        onClick={handleBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                        <h4>back</h4>
                    </button>
                    <div id="profile-1" className="ml-4" role="tabpanel">
                        <h5 className="box-title my-3">Product Information</h5>
                        <div className="overflow-auto">
                            <table className="ti-custom-table border-0 whitespace-nowrap">
                                <tbody>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Distribution Center</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.distribution_center_id}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Global ID</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.global_id}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">IMEI 1</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.imei_1}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">IMEI 2</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.imei_2}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">QR ID</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.qr_code_id}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Received Date</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.received_date}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Date Created</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.created_date}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Availability</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.state}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Remarks</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.remarks}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="loader" style={{ display: 'none' }}>
                        <span className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue rounded-full" role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </span>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            onClick={approve}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:text-white dark:hover:text-white"
                        >
                            Approve
                        </button>
                    </div>
                    {alert && <Alert alert={alert} />}
                </div>
            )}

        </div >
    )
}

export default Approve_received_stock;
