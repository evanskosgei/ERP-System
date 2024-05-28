import React, { useState, useEffect, useCallback } from 'react';
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { AgGridReact } from 'ag-grid-react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../../providers/AuthProvider";
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Alert from '../../../components/Alert';
import ALLImages from "../../../common/imagesdata";
import mtaApi from '../../../api/mtaApi';

const ApprovedStockCashPurchased = () => {

    const navigate = useNavigate(); 
    const [rowData, setRowData] = useState([]);
    const [purchasedItems, setPurchasedItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [productDetailsSearchQuery, setProductDetailsSearchQuery] = useState(''); // New state variable
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [divStack, setDivStack] = useState(["listpage"]);
    const [editMode, setEditMode] = useState(false);
    const [alert, setAlert] = useState(null);
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        formState,
        setValue,
        reset
    } = useForm();

    const columnDefs = [
        { headerName: "#", field: "count", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 5 },
        { headerName: "Transaction ID", field: "transaction_id", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Total Amount", field: "total_amount", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Supplier Account", field: "supplier_payable_account_number", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Date Purchased", field: "purchase_date", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
        { headerName: "Bank Account", field: "bank_account_number", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    ];
    const defaultColDef = { sortable: true, flex: 1, filter: true, floatingFilter: false };

    const onGridReady = useCallback(() => {
        const newUnApproved = async () => {
            try {
                const { data } = await mtaApi.purchase.list_stock_purchased_cash('1');
                if (data.status === 200) {
                    const modifiedData = data.response.map((item, index) => ({
                        ...item,
                        count: index + 1
                    }));
                    setRowData(modifiedData);
                    setPurchasedItems(modifiedData.product_details);
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
    const filteredProductDetails = selectedRowData?.product_details?.filter((item) =>
        Object.values(item).some(
            (value) =>
                value &&
                typeof value === 'string' &&
                value.toLowerCase().includes(productDetailsSearchQuery.toLowerCase())
        )
    ) || [];


    return (
        <div>
            {currentDiv === "listpage" && (
                <div>
                    <PageHeader currentpage="Stock Purchased Using Cash" href="/inventory/dashboard/" activepage="Inventory" mainpage="Stock Purchased Details" />
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
                        <CSVLink data={filteredData.length > 0 ? filteredData : rowData.length > 0 ? rowData : []} filename="new_unapproved_purchased_stock" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
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
                    <PageHeader currentpage="Stock Purchased Using Cash" href="/inventory/dashboard/" activepage="Inventory" mainpage="Stock Purchased Details" />
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
                            <h5 className="box-title  text-center">Cash Stock Purchase Transaction Details</h5>
                        </div>
									<div className= "box-body">
										<div>
										<div className= "grid lg:grid-cols-2 gap-6">
                                        
                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">Transaction ID :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.transaction_id}</span>
									    </div>

                                        <div className="space-x-3">
                                            <span className="text-sm font-bold">Total Amount :</span> 
                                            <span className="text-sm text-gray-800 dark:text-white/70">
                                                {user.currency} {Number(selectedRowData.total_amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </span>
                                        </div>


                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Supplier Name :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70"> {selectedRowData.supplier_name}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Supplier Account :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70"> {selectedRowData.supplier_payable_account_number}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Bank Account :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70"> {selectedRowData.bank_account_number}</span>
                                        </div> 

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Purchase Date :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.purchase_date}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Created By :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.user_name}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Date Created :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.created_date}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Narrative :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.notes}</span>
                                        </div>
									</div>
									</div>
									</div>

                                    <div className="box-body">
							<div className="pb-5">
								<div className="md:flex justify-between space-y-2 md:space-y-0">
									<div className="relative max-w-xs">
										<label htmlFor="hs-table-search" className="sr-only">Search</label>
										{/* <input type="text" onChange={(ele) => { myfunction(ele.target.value) }} name="hs-table-search" id="hs-table-search" className="p-2 ltr:pr-10 rtl:pl-10 ti-form-input" placeholder="Search for items" /> */}
                                        <input
  type="text"
  value={productDetailsSearchQuery}
  onChange={(e) => setProductDetailsSearchQuery(e.target.value)}
  placeholder="Search for items"
  className="p-2 ltr:pr-10 rtl:pl-10 ti-form-input"
  onFocus={(e) => e.target.style.borderColor = '#007BFF'}
  onBlur={(e) => e.target.style.borderColor = '#ccc'}
/>
										
                                        <div className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none ltr:pr-4 rtl:pl-4">
											<svg className="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
												<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
											</svg>
										</div>
									</div>
									<div className="md:ltr:ml-auto md:rtl:mr-auto">
										<Link to="#" className="ti-btn text-xs m-0 ti-btn-soft-success p-2"><i className="ri ri-add-circle-line"></i>View Stock in Transit</Link>
									</div>
								</div>
							</div>
							<div className="overflow-auto">
                            <table className="ti-custom-table table-bordered ti-custom-table-head">
                                    <thead className="bg-gray-50 dark:bg-black/20">
                                        <tr>
                                            <th scope="col" className="!min-w-[13rem]">Model ID</th>
                                            <th scope="col">Price Per Unit</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total Amount Per Model</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedRowData && Array.isArray(filteredProductDetails) && filteredProductDetails.length > 0 ? (
                                            filteredProductDetails.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.model_id}</td>
                                                    <td>{item.price_per_unit}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.total_amount_per_model}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr key="no-product-details">
                                                <td colSpan="4">No product details available</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>

							</div>
							<div className="py-1 ltr:float-right rtl:float-left">
								<nav className="flex items-center space-x-2 rtl:space-x-reverse">
									<Link className="text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-md" to="#">
										<span aria-hidden="true">«</span>
										<span className="sr-only">Previous</span>
									</Link>
									<Link className="w-10 h-10 bg-primary text-white p-4 inline-flex items-center text-sm font-medium rounded-full" to="#" aria-current="page">1</Link>
									<Link className="w-10 h-10 text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" to="#">2</Link>
									<Link className="w-10 h-10 text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" to="#">3</Link>
									<Link className="text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-md" to="#">
										<span className="sr-only">Next</span>
										<span aria-hidden="true">»</span>
									</Link>
								</nav>
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
                </div >
            )}
        </div >
    )
}

export default ApprovedStockCashPurchased;
