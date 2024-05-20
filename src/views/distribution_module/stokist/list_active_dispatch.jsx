import React, { useCallback, useEffect, useState } from 'react';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import { CSVLink } from "react-csv";
import mtaApi from '../../../api/mtaApi';
import { useNavigate } from 'react-router-dom';
import Alert from '../../../components/Alert';

const List_active_dispatch = () => {
    const navigate = useNavigate();
    const [allData, setAllData] = useState([]);
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [divStack, setDivStack] = useState(["table"]);
    const [alert, setAlert] = useState(null);

    const onGridReady = useCallback(() => {
        const fetchDistributions = async () => {
            try {
                const { data } = await mtaApi.distribute_stock_stockist.list_distribution('1');
                if (data.status === 200) {
                    setRowData(data.response);
                }
            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }
        };
        fetchDistributions();
    }, []);

    const generateColumnDefs = () => {
        if (rowData.length === 0) return [];
        const excludedColumns = ['created_by_id', 'distribution_center_id', 'id', 'manager_id', 'model_id', 'mobilephone_stock_received_id'];
        return Object.keys(rowData[0])
            .filter(key => !excludedColumns.includes(key))
            .map(key => ({
                headerName: key.toUpperCase(),
                field: key
            }));
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = rowData.filter((row) => {
        return generateColumnDefs().some((column) => {
            const fieldValue = row[column.field];
            if (fieldValue && typeof fieldValue === 'string') {
                return fieldValue.toLowerCase().includes(searchQuery.toLowerCase());
            } else if (fieldValue && typeof fieldValue !== 'string') {
                return fieldValue.toString().toLowerCase().includes(searchQuery.toLowerCase());
            }
            return false;
        });
    });

    const handleRowClicked = (event) => {
        setSelectedRowData(event.data);
        setDivStack([...divStack, 'distributioncenterDetails']);
    };

    // const handleClick = (divId) => {
    //     setDivStack(prevStack => {
    //         if (prevStack.includes(divId)) {
    //             return prevStack.slice(0, prevStack.indexOf(divId) + 1);
    //         } else {
    //             return [...prevStack, divId];
    //         }
    //     });
    // };

    const handleBack = () => {
        if (divStack.length > 1) {
            setDivStack(prevStack => prevStack.slice(0, -1));
        }
    };
    const currentDiv = divStack[divStack.length - 1];

    const getRowStyle = (params) => {
        if (params.node.rowIndex % 2 === 0) {
            return { background: 'lightgray' };
        } else {
            return { background: 'white' };
        }
    };

    // const handleApprove = async () => {
    //     try {
    //         const { data } = await mtaApi.distributions.distribute_stock_stockist.approve_distribution(selectedRowData.id);
    //         if (data.status === 200) {
    //             navigate("/distribution/manager/approve/dispatch/");
    //         }
    //     } catch (error) {
    //         console.error("Error approving distribution:", error);
    //         // Handle error
    //     }
    // };
    return (
        <div>
            {currentDiv === "table" && (
                <div>
                    <PageHeader currentpage="Active Distributions" href="/distribution/dashboard/" activepage="Distribution" mainpage="Active Distribution" />
                    {alert && <Alert alert={alert} />}
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '50%', boxSizing: 'border-box' }}
                        />
                        <CSVLink data={rowData.length > 0 ? rowData : []} filename="active_dispatched_phones.csv" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Export
                        </CSVLink>
                    </div>
                    <div>
                        <div className="ag-theme-quartz" style={{ height: 'calc(90vh - 130px)', background_color: 'grey' }}>
                            <AgGridReact
                                rowData={filteredData.length > 0 ? filteredData : rowData}
                                columnDefs={generateColumnDefs()}
                                pagination={true}
                                paginationPageSize={10}
                                paginationPageSizeSelector={[10, 25, 50]}
                                onGridReady={onGridReady}
                                overlayLoadingTemplate='Loading...'
                                cacheOverflowSize={20}
                                onRowClicked={handleRowClicked}
                                getRowStyle={getRowStyle}
                            />
                        </div>
                    </div>
                </div>
            )}

            {currentDiv === "distributioncenterDetails" && (
                <div>
                    <PageHeader currentpage="Active Distributions" activepage="Distribution" mainpage="Active Distribution" />
                    <button className='className="flex left-0 text-blue-700 hover:bg-gray-100 p-3 font-bold'
                        onClick={handleBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                        <h4>back</h4>
                    </button>
                    <div id="profile-1" className="ml-4" role="tabpanel">
                        <h5 className="box-title my-3">Distribution Center Details</h5>
                        <div className="overflow-auto">
                            <table className="ti-custom-table border-0 whitespace-nowrap">
                                <tbody>
                                    {Object.entries(selectedRowData).map(([key, value]) => (
                                        <tr key={key} className="!border-0">
                                            <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">{key}</td>
                                            <td className="!p-2">:</td>
                                            <td className="!p-2 !text-gray-500 dark:!text-white/70">{value}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default List_active_dispatch;
