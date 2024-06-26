import React, { useCallback, useState } from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import mtaApi from '../../../api/mtaApi';

const Deletedusers = () => {
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [divStack, setDivStack] = useState(["table"]);


    const columnDefs = [
        { headerName: "#", field: "id", sortable: true, editable: false, filter: true },
        { headerName: "First name", field: "first_name", sortable: true, editable: false, filter: true },
        { headerName: "Last name", field: "last_name", sortable: true, editable: false, filter: true },
        { headerName: "Email", field: "email", sortable: true, editable: false, filter: true },
        { headerName: "ID/Passport", field: "id_no", sortable: true, editable: false, filter: true },
        { headerName: "Mobile No.", field: "contact", sortable: true, editable: false, filter: true },
        { headerName: "Address", field: "address", sortable: true, editable: false, filter: true },
        { headerName: "Postal Code", field: "postal_code", sortable: true, editable: false, filter: true },
        { headerName: "City", field: "city", sortable: true, editable: false, filter: true },
        { headerName: "Country", field: "country", sortable: true, editable: false, filter: true },
        { headerName: "KRA PIN", field: "kra_pin", sortable: true, editable: false, filter: true },
        { headerName: "NHIF PIN", field: "nhif_pin", sortable: true, editable: false, filter: true },
        { headerName: "NSSF PIN", field: "nssf_pin", sortable: true, editable: false, filter: true },
    ];

    const defaultColDef = {
        sortable: true,
        flex: 1,
        filter: true,
        floatingFilter: false
    };

    const onGridReady = useCallback((params) => {
        const newUnApproved = async () => {
            try {
                const { data } = await mtaApi.users.list_users('5');
                if (data.status == 200) {
                    setRowData(data.response);
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
        handleClick('Activesupplier');
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
    return (
        <div>
            {currentDiv === "table" && (
                <div>
                    <PageHeader currentpage="Deleted Users" href="/users/dashboard" activepage="Users" mainpage="Deleted Users" />
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '50%', boxSizing: 'border-box' }}
                        />
                        <CSVLink data={filteredData.length >0 ?filteredData : rowData.length > 0 ? rowData : []} filename="deleted_users.csv" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
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
                            getRowNodeId={(data) => data.id}
                            onRowClicked={onRowClicked}
                        />
                    </div>
                </div>
            )}

            {currentDiv === "Activesupplier" && (
                <div>
                    <PageHeader currentpage="Deleted user Details" activepage="user" mainpage="Deleted user Details" />
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
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">First Name</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.first_name}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Last Name</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.last_name}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Other Names</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.other_names}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Mobile Number</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.contact}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Email Address</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.email}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Alt number</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.alternative_number}</td>
                                    </tr>
                                    <h5 className="box-title my-3">Other Information</h5>
                                    <tr className="">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">ID/passport Number</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/60">{selectedRowData.id_no}</td>
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
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">City</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.city}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Country</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.country}</td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">KRA Pin</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.kra_pin}
                                        </td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Nhif pin</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.nhif_pin}
                                        </td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Nssf Pin</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.nssf_pin}
                                        </td>
                                    </tr>
                                    <tr className="!border-0">
                                        <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Date Created</td>
                                        <td className="!p-2">:</td>
                                        <td className="!p-2 !text-gray-500 dark:!text-white/70">4/5/1960
                                        </td>
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
                </div>
            )}

        </div>
    )
}

export default Deletedusers;
