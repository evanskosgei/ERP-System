import React, { useState, useEffect } from 'react';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import EditSupplier from './editSupplier';
import Modal from '../../../component/basicUi/modal/modal';

const ListSuppliers = () => {
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const columnDefs = [
        { headerName: "ID", field: "id", sortable: true, editable: false, filter: true },
        { headerName: "Name", field: "name", sortable: true, editable: false, filter: true },
        { headerName: "Email", field: "email", sortable: true, editable: false, filter: true },
        { headerName: "Body", field: "body", sortable: true, editable: false, filter: true },
        {
            headerName: "Status",
            field: "status",
            sortable: false,
            filter: 'agSetColumnFilter',
            filterParams: {
                values: ['active', 'inactive'],
                debounceMs: 500
            }
        },
        {
            headerName: "Actions",
            cellRenderer: (params) => {
                return (
                    <div>
                        <button onClick={() => handleEdit(params.data)}>Edit</button>
                    </div>
                );
            },
            sortable: false,
            filter: false,
            width: 50,
            flex: 1
        },
        {
            headerName: "",
            cellRenderer: (params) => {
                return (
                    <div>
                        <button onClick={() => handleDelete(params.data)}>Delete</button>
                    </div>
                );
            },
            sortable: false,
            filter: false,
            width: 50,
            flex: 1
        }
    ];

    const defaultColDef = {
        sortable: true,
        flex: 1,
        filter: true,
        floatingFilter: false
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(resp => resp.json())
            .then(resp => {
                setRowData(resp);
                // setFilteredRowData(resp);
            });
    }, []);

    // const handleDelete = (data) => {
    //     console.log("Delete:", data);
    // };

    const onRowClicked = (event) => {
        const selectedData = event.data;
        // console.log("Row clicked:", selectedData);
        setSelectedRowData(selectedData);
        setIsModalOpen(true);
    };


    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = rowData.filter((row) => {
        return (
            (row.name && row.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (row.email && row.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (row.body && row.body.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    });


    const onGridReady = (params) => {
        console.log("Grid is ready");
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRowData(null);
    };

    return (
        <div>

            <div>
                <PageHeader currentpage="List Supplier" activepage="Supplier" mainpage="List Supplier" />

                <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                        style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box' }}
                    />
                    <CSVLink data={rowData} fileName="suppliers" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Export
                    </CSVLink>
                </div>
                <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 130px)', width: '100%', position: 'absolute', zIndex: 1 }}>
                    <AgGridReact
                        rowData={filteredData.length > 0 ? filteredData : rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        onGridReady={onGridReady}
                        pagination={true}
                        paginationPageSize={20}
                        enableCellChangeFlash={true}
                        getRowNodeId={(data) => data.id}
                        onRowClicked={onRowClicked}
                    />
                </div>
                {isModalOpen && <EditSupplier data={selectedRowData} onClose={() => setIsModalOpen(false)} />}
            </div>
        </div>
    );
};

export default ListSuppliers;
