import React, { useState, useEffect, useCallback } from 'react';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import EditSupplier from './editSupplier';
import mtaApi from '../../../api/mtaApi';

const InactiveSuppliers = () => {
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const columnDefs = [
        // { headerName: "#", field: "id", sortable: true, editable: false, filter: true },
        { headerName: "athlete", field: "athlete", sortable: true, editable: false, filter: true },
        { headerName: "athlete", field: "athlete", sortable: true, editable: false, filter: true },
        { headerName: "year", field: "year", sortable: true, editable: false, filter: true },
        { headerName: "country", field: "country", sortable: true, editable: false, filter: true },
        { headerName: "date", field: "date", sortable: true, editable: false, filter: true },
        { headerName: "sport", field: "sport", sortable: true, editable: false, filter: true },
        { headerName: "gold", field: "gold", sortable: true, editable: false, filter: true },
        { headerName: "silver", field: "silver", sortable: false, filter: true, editable: false },
        { headerName: "bronze", field: "bronze", sortable: false, filter: true, editable: false },
        { headerName: "total", field: "total", sortable: false, filter: true, editable: false },
    ];

    const defaultColDef = {
        sortable: true,
        flex: 1,
        filter: true,
        floatingFilter: false
    };
    // useEffect(() => {
    //     mtaApi.supplier.getSuppliers
    //         .then(resp => {
    //             setRowData(resp.data.message);
    //             console.log(resp.data.message)
    //         })
    // }, []);

    const onGridReady = useCallback((params) => {
        fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
          .then((resp) => resp.json())
          .then((data) => setRowData(data));
      }, []);

    const onRowClicked = (event) => {
        const selectedData = event.data;
        setSelectedRowData(selectedData);
        setIsModalOpen(true);
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

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRowData(null);
    };
    return (
        <div>
            <PageHeader currentpage="Inactive Supplier" activepage="Supplier" mainpage="Inactive Supplier" />

            <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box' }}
                />
                <CSVLink data={rowData} filename="suppliers" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
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
            {isModalOpen && <EditSupplier data={selectedRowData} onClose={closeModal} />}
        </div>
  );
}

export default InactiveSuppliers;
