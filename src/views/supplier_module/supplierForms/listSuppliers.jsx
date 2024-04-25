import React, { useState } from 'react';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';

const ListSuppliers = () => {
    const [rowData, setRowData] = useState([]);
    const columnDefs = [
        { headerName: "ID", field: "id", sortable: true },
        { headerName: "Name", field: "name", sortable: true, editable: true },
        { headerName: "Email", field: "email", sortable: true, editable: true },
        { headerName: "Body", field: "body", sortable: true, editable: true },
        { 
            headerName: "Status", 
            field: "status", 
            sortable: true, 
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
            width: 150,
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
            width: 150,
            flex: 1
        }
    ];

    const defaultColDef = {
        sortable: true,
        flex: 1,
        filter: true,
        floatingFilter: true
    };

    const onGridReady = (params) => {
        console.log("grid is ready");
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp);
                setRowData(resp);
            });
    };

    const handleEdit = (data) => {
        console.log("Edit:", data);
    };

    const handleDelete = (data) => {
        console.log("Delete:", data);
    };

    const saveDataToDB = () => {
        fetch('https://example.com/api/suppliers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rowData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data saved successfully:', data);
        })
        .catch(error => {
            console.error('Error saving data:', error);
        });
    };

    return (
        <div className="App">
            <PageHeader currentpage="List Supplier" activepage="Supplier" mainpage="List Supplier" />
            <div className="ag-theme-alpine" style={{ height: '600px', width: '100%' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                    pagination={true}
                    paginationPageSize={10}
                    enableCellChangeFlash={true}
                />
            </div>
            <button onClick={saveDataToDB}>Save Data to DB</button>
        </div>
    );
};

export default ListSuppliers;
