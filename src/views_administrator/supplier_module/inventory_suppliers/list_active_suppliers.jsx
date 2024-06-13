import React, { useState, useEffect, useCallback } from 'react';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import Alert from "../../../components/Alert";
import mtaApi from '../../../api/mtaApi';
import Status from './status';
import { useNavigate } from 'react-router-dom';
import Success from '../../../components/Success';
import { Link } from 'react-router-dom';

const ActiveSuppliers = () => {
    const navigate = useNavigate();
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [divStack, setDivStack] = useState(["table"]);
    const [alert, setAlert] = useState(null);
    const [success, setSuccess] = useState(null);
    const [showStatusModal, setShowStatusModal] = useState(false);

    const columnDefs = [
        { headerName: "#", field: "count", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 5 },
        { headerName: "Business Name", field: "business_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Trade Name", field: "trading_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Email", field: "company_email", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Mobile Number", field: "company_mobile_number", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Address", field: "address", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Postal Code", field: "postal_code", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Country", field: "country", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "ID", field: "id", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 2 },
    ];

    const defaultColDef = {
        sortable: true,
        flex: 1,
        filter: true,
        floatingFilter: false
    };

    const onGridReady = useEffect(() => {
        const ActiveSuppliers = async () => {
            try {
                const { data } = await mtaApi.suppliers.get_suppliers('1');
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
        ActiveSuppliers();
    }, []);

    const deleteSupplier = (data) => {
        console.log('Deleting supplier:', data);
        setShowStatusModal(true);
    };

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

    const closeModal = () => {
        setShowStatusModal(false);
    };

    const deleteEXP = async () => {
        await mtaApi.suppliers.approve_supplier(selectedRowData.id)
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
        await mtaApi.suppliers.deactivate_supplier(selectedRowData.id)
            .then(response => {
                const msg = response.description;
                setSuccess({ type: "success", msg })
                navigate("/supplier/deactivated-suppliers")
            }).catch(error => {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            })
    }

    const PayableAccounts = Array.isArray(selectedRowData?.payable_account)
        ? selectedRowData.payable_account.filter((item) =>
            Object.values(item).some(
                (value) =>
                    value &&
                    typeof value === 'string' &&
                    value.toLowerCase().includes(searchQuery.toLowerCase())
            )
        ) : [];
    const PrepaidAccount = Array.isArray(selectedRowData?.prepaid_account)
    ? selectedRowData.prepaid_account.filter((item) =>
        Object.values(item).some(
            (value) =>
                value &&
                typeof value === 'string' &&
                value.toLowerCase().includes(searchQuery.toLowerCase())
        )
    ) : [];
    return (
        <div>
            {currentDiv === "table" && (
                <div>
                    <PageHeader currentpage="Active Supplier" href="/supplier/dashboard/" activepage="Supplier" mainpage="Active Supplier" />
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '50%', boxSizing: 'border-box' }}
                        />
                        <CSVLink data={filteredData.length > 0 ? filteredData : rowData.length > 0 ? rowData : []} filename="Active_suppliers.csv" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Export
                        </CSVLink>
                    </div>
                    <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 130px)', width: '100%', position: 'relative', zIndex: 1, overflowY: 'auto' }}>
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
                <PageHeader currentpage=" Supplier Details" activepage="Supplier" mainpage="Active supplier Details" />
                <button className='className="flex left-0 text-blue-700 hover:bg-gray-100 p-3 font-bold'
                    onClick={handleBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                    <h4>back</h4>
                </button>
                <div className="grid grid-cols-12 gap-x-12">
                    <div className="col-span-12 xl:col-span-12">
                        <div className="box">
                            <div className="box-body p-0">

                                <div id="profile-settings-1" role="tabpanel" aria-labelledby="profile-settings-item-1">
                                    <div className="box border-0 shadow-none mb-0">

                                        <div className="box-header">
                                            <h5 className="box-title  text-center">Supplier Details</h5>
                                        </div>
                                        <div className="box-body">
                                            <div>
                                                <div className="grid lg:grid-cols-2 gap-6">
                                                    <div className="space-x-3">
                                                        <span className="text-sm font-bold">Business Name :</span>
                                                        <span className="text-sm text-gray-800 dark:text-white/70">{selectedRowData.business_name}</span>
                                                    </div>
                                                    <div className="space-x-3">
                                                        <span className="text-sm font-bold">Trading Name :</span>
                                                        <span className="text-sm text-gray-800 dark:text-white/70">{selectedRowData.trading_name}</span>
                                                    </div>
                                                    <div className="space-x-3">
                                                        <span className="text-sm font-bold">Company Email :</span>
                                                        <span className="text-sm text-gray-800 dark:text-white/70">{selectedRowData.company_email}</span>
                                                    </div>

                                                    <div className="space-x-3">
                                                        <span className="text-sm font-bold"> Telephone Number :</span>
                                                        <span className="text-sm text-gray-800 dark:text-white/70">{selectedRowData.company_mobile_number}</span>
                                                    </div>

                                                    <div className="space-x-3">
                                                        <span className="text-sm font-bold">Address:</span>
                                                        <span className="text-sm text-gray-800 dark:text-white/70">{selectedRowData.address}</span>
                                                    </div>

                                                    <div className="space-x-3">
                                                        <span className="text-sm font-bold">Postal Code :</span>
                                                        <span className="text-sm text-gray-800 dark:text-white/70">{selectedRowData.postal_code}</span>
                                                    </div>
                                                    <div className="space-x-3">
                                                        <span className="text-sm font-bold">Country :</span>
                                                        <span className="text-sm text-gray-800 dark:text-white/70">{selectedRowData.country}</span>
                                                    </div>

                                                    <div className="space-x-3">
                                                        <span className="text-sm font-bold">Created By :</span>
                                                        <span className="text-sm text-gray-800 dark:text-white/70">{selectedRowData.createdby}</span>
                                                    </div>

                                                    <div className="space-x-3">
                                                        <span className="text-sm font-bold">Date Created :</span>
                                                        <span className="text-sm text-gray-800 dark:text-white/70">{selectedRowData.datecreated}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="overflow-auto">
                                            <h5 className="box-title  text-center">Payable Account Details</h5>
                                            <table className="ti-custom-table table-bordered ti-custom-table-head">
                                                <thead className="bg-gray-50 dark:bg-black/20">
                                                    <tr>
                                                        <th scope="col" className="!min-w-[13rem]">Account Name</th>
                                                        <th scope="col">Account Number</th>
                                                        <th scope="col">Account Currency</th>
                                                        <th scope="col">Account Balance</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {selectedRowData && Array.isArray(selectedRowData.payable_account) && selectedRowData.payable_account.length > 0 ? (
                                                        PayableAccounts.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>{item.account_name}</td>
                                                                <td>{item.account_number}</td>
                                                                <td>{item.account_currency}</td>
                                                                <td>{item.account_balance}</td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr key="no-product-details">
                                                            <td colSpan="4">No Payable account details</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                        <hr className='mt-8 mb-8 text-gray-400' />
                                        <div className="overflow-auto">
                                            <h5 className="box-title  text-center">Prepaid Account Details</h5>
                                            <table className="ti-custom-table table-bordered ti-custom-table-head">
                                                <thead className="bg-gray-50 dark:bg-black/20">
                                                    <tr>
                                                        <th scope="col" className="!min-w-[13rem]">Account Name</th>
                                                        <th scope="col">Account Number</th>
                                                        <th scope="col">Account Currency</th>
                                                        <th scope="col">Account Balance</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {selectedRowData && Array.isArray(selectedRowData.prepaid_account) && selectedRowData.prepaid_account.length > 0 ? (
                                                        PrepaidAccount.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>{item.account_name}</td>
                                                                <td>{item.account_number}</td>
                                                                <td>{item.account_currency}</td>
                                                                <td>{item.account_balance}</td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr key="no-product-details">
                                                            <td colSpan="4">No Prepaid account details</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="box-footer text-end space-x-3 rtl:space-x-reverse" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                                <Link to="#" className= "ti-btn m-0 ti-btn-soft-warning" onClick=""><i className="ri ri-refresh-line"></i> Deactivate</Link> 
                                <Link to="#" className= "ti-btn m-0 ti-btn-soft-danger" onClick=""><i className= "ri ri-close-circle-line"></i>Delete </Link>
                                <Link to="#" className= "ti-btn m-0 ti-btn-soft-secondary" onClick={() => window.print()}><i className= "ri ri-printer-line"></i>Print</Link>
                            </div>
                        </div>
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
    );
};
export default ActiveSuppliers;
