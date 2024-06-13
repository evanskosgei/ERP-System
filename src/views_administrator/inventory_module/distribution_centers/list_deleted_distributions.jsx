import React, { useEffect, useState } from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import Alert from '../../../components/Alert';
import mtaApi from '../../../api/mtaApi';
import Status from '../../supplier_module/inventory_suppliers/status';
import { useNavigate } from 'react-router-dom';
import Success from '../../../components/Success';

const Deleteddistributions = () => {
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [divStack, setDivStack] = useState(["table"]);
    const [alert, setAlert] = useState(null);
    const [success, setSuccess] = useState(null);
    const [showStatusModal, setShowStatusModal] = useState(false);

    const columnDefs = [
        { headerName: "#", field: "count", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 5 },
        { headerName: "Name", field: "name", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
        { headerName: "Mobile Number", field: "mobile_number", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
        // { headerName: "Tel Number", field: "telephone_number", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
        { headerName: "Email", field: "email", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
        { headerName: "Shop Number", field: "shop_number", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 5 },
        // { headerName: "P.Location", field: "physical_location", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
        { headerName: "Address", field: "address", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
        { headerName: "Building", field: "building", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
        { headerName: "Postal Code", field: "postal_code", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
        { headerName: "City", field: "city", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
        { headerName: "County", field: "county", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
        // { headerName: "Region", field: "region", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
        { headerName: "Country", field: "country", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
        // { headerName: "Date Created", field: "created_date", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
        // { headerName: "D.Center ID", field: "distribution_center_type_id", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 10 },
    ];

    const onGridReady = useEffect(() => {
        const Activedistributions = async () => {
            try {
                const { data } = await mtaApi.distributions.list_distribution('1')
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
        Activedistributions();
    }, []);

    const onRowClicked = (event) => {
        const selectedData = event.data;
        setSelectedRowData(selectedData);
        handleClick('distributioncenterDetails');
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

    const deleteDistribution = (data) => {
        console.log('Deleting distributions:', data);
        setShowStatusModal(true);
    };
    const closeModal = () => {
        setShowStatusModal(false);
    };

    const deleteEXP = async () => {
        await mtaApi.distributions.delete_distribution(selectedRowData.id)
            .then(response => {
                const msg = response.description;
                setSuccess({ type: "success", msg })
                navigate("/supplier/deactivated-suppliers")
            }).catch(error => {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            })
    }
    const deactivate = async () => {
        // await mtaApi.suppliers.deactivate_supplier(selectedRowData.id)
        //     .then(response => {
        //         const msg = response.description;
        //         setSuccess({ type: "success", msg })
        //         navigate("/supplier/deactivated-suppliers")
        //     }).catch(error => {
        //         const message = error.response?.data?.error ?? error.message;
        //         setAlert({ type: "error", message });
        //     })
    }

    return (
        <div>
            {currentDiv === "table" && (
                <div>
                    <PageHeader currentpage="Deleted Distribution Centers" href="/inventory/dashboard/" activepage="Inventory" mainpage="Deleted Distribution Centers" />
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '50%', boxSizing: 'border-box' }}
                        />
                        <CSVLink data={filteredData.length > 0 ? filteredData : rowData} filename="Deleted Distribution Centers.csv" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
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
                            // defaultColDef={defaultColDef}
                            pagination={true}
                            paginationPageSize={20}
                            onGridReady={onGridReady}
                            getRowNodeId={(data) => data.id}
                            onRowClicked={onRowClicked}
                        />
                    </div>
                </div>
            )}
            {currentDiv === "distributioncenterDetails" && (
                <div>
                    <PageHeader currentpage="Deleted Distribution Center" activepage="Inventory" mainpage="Deleted Distribution Center" />
                    <button className='className="flex left-0 text-blue-700 hover:bg-gray-100 p-3 font-bold'
                        onClick={handleBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                        <h4>back</h4>
                    </button>
                    <div id="profile-1" className="ml-4" role="tabpanel">
                        <h5 className="box-title my-3">Personal Information</h5>
                        <div className="overflow-auto">
                            <table className="ti-custom-table border-0 whitespace-nowrap">
                                <tbody>
                                <tr className="">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Shop Number</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.shop_number}</td>
                                    </tr>
                                    <tr className="">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Shop Name</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.name}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Shop Mobile No.</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.mobile_number}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Shop Tel No.</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.telephone_number}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Shop Email</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.email}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Building Name</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.building}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Physical Location</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.physical_location}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Address</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.address}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Postal Code</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.postal_code}</td>
                                    </tr>
                                    <tr className="">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">City</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.city}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">County</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.county}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Region</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.region}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Country</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.country}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Date created</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.created_date}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Remarks</td>
                                        <td className="!p-2">:</td>
                                        <div className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.notes}</div>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Deleteddistributions;
