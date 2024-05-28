import React, { useState } from 'react'
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import { AgGridReact } from "ag-grid-react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { CSVLink } from "react-csv";

const sampleRowData = [
    {
        id: 1,
        category: "Mobile Phones",
        status: "1",
    },
    {
        id: 2,
        category: "TVs",
        status: "2",
    },
    {
        id: 3,
        category: "Accessories",
        status: "3",
    },
];

const ProductCategories = () => {

    const [rowData, setRowData] = useState(sampleRowData);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);

    const columnDefs = Object.keys(sampleRowData[0]).map(key => ({
        headerName: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
        field: key,
        sortable: true,
        editable: false,
        filter: true,
    }));

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

    return (
        <div>
            <PageHeader currentpage="Product Categories" href="/inventory/product-management" activepage="Inventory" mainpage="Product Categories" />

            <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box' }}
                />
                <CSVLink data={filteredData.length > 0 ? filteredData : rowData} filename="Product Categories.csv" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
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
                    // onGridReady={onGridReady}
                    getRowNodeId={(data) => data.id}
                    // onRowClicked={onRowClicked}
                />
            </div>
        </div>
    )
}

export default ProductCategories;
