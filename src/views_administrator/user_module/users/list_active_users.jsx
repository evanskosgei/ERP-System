import React, { useCallback, useState } from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { AgGridReact } from 'ag-grid-react';
import { Link } from 'react-router-dom';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import mtaApi from '../../../api/mtaApi';

import ALLImages from "../../../common/imagesdata";
import ProfileService from "../../../common/profileservices";

const Activeusers = () => {
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [divStack, setDivStack] = useState(["table"]);
    // const [alert, setAlert] = useState(null);
    // const [showStatusModal, setShowStatusModal] = useState(false);

    const columnDefs = [
        { headerName: "#", field: "number", sortable: true, editable: false, filter: true, resizable:true, flex:1, maxWidth:60},
        { headerName: "First name", field: "first_name", sortable: true, editable: false, filter: true },
        { headerName: "Last name", field: "last_name", sortable: true, editable: false, filter: true },
        { headerName: "Email", field: "email", sortable: true, editable: false, filter: true },
        { headerName: "ID/Passport", field: "id_number", sortable: true, editable: false, filter: true },
        { headerName: "Mobile No.", field: "mobile_number", sortable: true, editable: false, filter: true },
        { headerName: "Distribution Center", field: "distribution_center_name", sortable: true, editable: false, filter: true },
        { headerName: "City", field: "town", sortable: true, editable: false, filter: true },
    ];

    const defaultColDef = {
        sortable: true,
        flex: 1,
        filter: true,
        floatingFilter: false
    };
    const onGridReady = useCallback((params) => {
        const getUsers = async () => {
            try {
                const { data } = await mtaApi.users.list_users('1');
                if (data.status == 200) {
                    setRowData(data.response);
                }

            } catch (error) {
                console.log(error)
            }
        }
        getUsers();
    }, []);

    const onRowClicked = (event) => {
        const selectedData = event.data;
        setSelectedRowData(selectedData);
        handleClick('ActiveUsers');
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
                    <PageHeader currentpage="Active Users" href="/users/dashboard" activepage="Users" mainpage="Active Users" />

                    <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search users ..."
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
                        <CSVLink
                            data={filteredData.length > 0 ? filteredData : rowData.length > 0 ? rowData : []}
                            filename="Active_users.csv"
                            separator={","}
                            className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600"
                        >
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

            {currentDiv === "ActiveUsers" && (
                <div>
                    <PageHeader currentpage="Active User Profile" href="/users/dashboard" activepage="Users" mainpage="User Profile" />
                    <button className='className="flex left-0 text-blue-700 hover:bg-gray-100 p-3 font-bold'
                        onClick={handleBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                        <h4>back</h4>
                    </button>

                    <div className= "grid grid-cols-12 gap-x-6">
				<div className= "col-span-12 xl:col-span-3">
					<div className= "box">
                    <div className= "box-body relative">
							<div className= "flex relative before:bg-black/50 before:absolute before:w-full before:h-full before:rounded-sm">
								<img src= {ALLImages('png106')} alt="profile-image" className= "h-[200px] w-full rounded-sm" id="profile-img2"/>
								
							</div>
							<div className= "absolute top-[4.5rem] inset-x-0 text-center space-y-3">
								<div className= "flex justify-center w-full">
									<div className= "relative">
										<img src= {Image} className= "w-24 h-24 rounded-full ring-4 ring-white/10 mx-auto" id="profile-img" alt="pofile-img"/>
										
									</div>
								</div>
							</div>
						</div>
						<div className= "box-body pt-0">
							<nav className= "flex flex-col space-y-2" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
								<button type="button" className= "hs-tab-active:bg-primary hs-tab-active:border-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mr-px py-3 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 active" id="profile-settings-item-1" data-hs-tab="#profile-settings-1" aria-controls="profile-settings-1" role="tab">
									<i className= "ri ri-shield-user-line"></i> User Profile Information
								</button>
								<button type="button" className= "hs-tab-active:bg-primary hs-tab-active:border-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mr-px py-3 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300" id="profile-settings-item-2" data-hs-tab="#profile-settings-2" aria-controls="profile-settings-2" role="tab">
									<i className= "ri ri-global-line"></i> Other User Details
								</button>
								
							</nav>
						</div>
					</div>
				</div>
				<div className= "col-span-12 xl:col-span-9">
					<div className= "box">
						<div className= "box-body p-0">
							<div id="profile-settings-1" role="tabpanel" aria-labelledby="profile-settings-item-1">
								<div className= "box border-0 shadow-none mb-0">
									<div className= "box-header">
										<h5 className= "box-title leading-none flex"><i className= "ri ri-shield-user-line ltr:mr-2 rtl:ml-2"></i> User Profile Information</h5>
									</div>
									<div className= "box-body">
										<div>
										<div className= "grid lg:grid-cols-2 gap-6">
                                        
                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">First Name :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.first_name}</span>
									    </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Middle Name :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.middle_name}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Last Name :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.last_name}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Username :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.username}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Mobile number :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.username}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Alternative Mobile number :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.mobile_number}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">ID / Passport Number :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.id_number}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">User Category :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.user_type_name}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Distribution Center :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.distribution_center_name}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Distribution Center Location :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.distribution_center_town}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Gender :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.gender}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Email Address :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.email}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Date of Birth :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.date_of_birth}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Marital Status :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.marital_status}</span>
                                        </div>
									
									</div>
									</div>
									</div>
								</div>
							</div>
							<div id="profile-settings-2" className= "hidden" role="tabpanel" aria-labelledby="profile-settings-item-2">
								<div className= "box border-0 shadow-none mb-0">
									<div className= "box-header">
										<h5 className= "box-title leading-none flex"><i className= "ri ri-global-line ltr:mr-2 rtl:ml-2"></i> Other Details</h5>
									</div>
									<div className= "box-body">
										<div>
										<div className= "grid lg:grid-cols-2 gap-6">
                                        
                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">Country :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.country}</span>
									    </div>

                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">County :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.county}</span>
									    </div>

                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">Sub County :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.sub_county}</span>
									    </div>

                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">City :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.town}</span>
									    </div>

                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">Address :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.address}</span>
									    </div>

                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">Postal Code :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.postal_code}</span>
									    </div>

                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">KRA PIN :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.kra_pin}</span>
									    </div>

                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">NHIF Number :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.nhif_number}</span>
									    </div>

                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">NSSF Number :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.nssf_number}</span>
									    </div>

                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">ID Front :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.id_front}</span>
									    </div>

                                        <div className= "space-x-3">
										    <span className= "text-sm font-bold">ID Back :</span>
										    <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.id_back}</span>
									    </div>
                                        </div>
                                        </div>
                                    </div>
								</div>
							</div>

							
						</div>
						<div className= "box-footer text-end space-x-3 rtl:space-x-reverse" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
							
                            <Link to="#" className= "ti-btn m-0 ti-btn-soft-danger" onClick=""><i className="ri ri-refresh-line"></i> Deactivate</Link>
							<Link to="#" className= "ti-btn m-0 ti-btn-soft-secondary"><i className= "ri ri-close-circle-line"></i> Edit</Link>
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
    )
}

export default Activeusers;
