import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { Link } from 'react-router-dom';
import { CSVLink } from "react-csv";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../../../providers/AuthProvider";
import Alert from '../../../../components/Alert';
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import mtaApi from '../../../../api/mtaApi';

const Unapproved_capital_injection = () => {
    const navigate = useNavigate();
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [divStack, setDivStack] = useState(["listpage"]);
    const [editMode, setEditMode] = useState(false);
    const [alert, setAlert] = useState(null);
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors, isValid }, formState, setValue, reset } = useForm();

    const columnDefs = [
        { headerName: "#", field: "number", sortable: true, editable: false, filter: true, flex: 1, resizable: false, minWidth: 10 },
        { headerName: "Bank Account", field: "bank_account", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
        { headerName: "Shareholder Account", field: "shareholder_account", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
        { headerName: "Transaction ID", field: "transaction_id", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
        { headerName: "Amount", field: "amount", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
        { headerName: "Settlement Date", field: "settlement_date", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
        { headerName: "Created By", field: "createdby", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
        { headerName: "Date Created", field: "datecreated", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
    ];

    const defaultColDef = { sortable: true, flex: 1, filter: true, floatingFilter: false };

    const onGridReady = useEffect(() => {
        const getPendingApproval = async () => {
            try {
                const { data } = await mtaApi.capital_injection.list_capital_injection_entries("2")
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
        getPendingApproval();
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

    const onSubmit = async (values) => {
        try {
            document.getElementById('loader').style.display = 'block';
            const { data } = await mtaApi.suppliers.updateSupplier(selectedRowData.id, (values))
            setEditMode(!editMode)
            reset();
            console.log(data.message)
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
            setEditMode(!editMode)
        } finally {
            document.getElementById('loader').style.display = 'none';
        }
    }
    const approve = async () => {
        try {
            const { data } = await mtaApi.capital_injection.approve_capital_injection(selectedRowData.id)
            navigate("/finance/active-capital-injection");
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        }
    }

    return (
        <div>
            {currentDiv === "listpage" && (
                <div>
                    <PageHeader currentpage="Approve Capital Injection Transaction" href="/finance/accouting/" activepage="Dashboard" mainpage="Capital Injections Transaction Details" />
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
                        <CSVLink data={filteredData.length > 0 ? filteredData : rowData.length > 0 ? rowData : []} filename="new_unapproved_capital_injections" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Export
                        </CSVLink>
                    </div>
                    <div className="ag-theme-alpine" style={{ height: 'calc(80dvh - 130px)', width: '100%', position: 'relative', zIndex: 1, overflowY: 'auto', overflowX: 'auto' }}>
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
                    <PageHeader currentpage="Capital Injection Transaction Details" href="/finance/accouting/" activepage="Dashboard" mainpage="Approve Capital Injections Transaction" />
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
                            <h5 className="box-title  text-center">Capital Injection Transaction Details</h5>
                        </div>
									<div className= "box-body">
										<div>
										<div className= "grid lg:grid-cols-2 gap-6">
                                        
                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">Bank Account :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.bank_account}</span>
									    </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Share Holder Account :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.shareholder_account}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Amount :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{user.currency} {selectedRowData.amount}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Transaction ID:</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.transaction_id}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Transaction Reference :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.currency} {selectedRowData.reference}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Value Date :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.settlement_date}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Global ID :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.globalId}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Narrative :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.narrative}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Date Created  :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.datecreated}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Created By :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.createdby}</span>
                                        </div>
									</div>
									</div>
									</div>
								</div>
							</div>
							
						</div>
						<div className= "box-footer text-end space-x-3 rtl:space-x-reverse" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
							
                            <Link to="#" className= "ti-btn m-0 ti-btn-soft-primary" onClick={approve}><i className="ri ri-refresh-line"></i> Approve</Link>
							<Link to="#" className= "ti-btn m-0 ti-btn-soft-secondary" onClick={editMode ? handleSubmit(onSubmit) : toggleEditMode}><i className= "ri ri-close-circle-line"></i> {editMode ? "Save" : "Edit"}</Link>
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
                </div >
            )}
        </div >
    )
}

export default Unapproved_capital_injection;
