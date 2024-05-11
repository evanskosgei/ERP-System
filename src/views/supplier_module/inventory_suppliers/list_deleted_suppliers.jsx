import React, { useState, useEffect } from 'react';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import mtaApi from '../../../api/mtaApi';

const DeletedSuppliers = () => {
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    // const [selectedRowData, setSelectedRowData] = useState(null);
    // const [isModalOpen, setIsModalOpen] = useState(false);

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
        const DeletedSuppliers = async () => {
            try {
                const { data } = await mtaApi.suppliers.get_suppliers('2');
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
        DeletedSuppliers();
    }, []);

    // const onRowClicked = (event) => {
    //     const selectedData = event.data;
    //     setSelectedRowData(selectedData);
    //     setIsModalOpen(true);
    // };
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
            <PageHeader currentpage="Deleted Supplier" href="/supplier/dashboard/" activepage="Supplier" mainpage="Deleted Supplier" />

            <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '50%', boxSizing: 'border-box' }}
                />
                <CSVLink data={filteredData.length >0 ?filteredData : rowData.length >0 ?rowData : []} filename="deleted_suppliers" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
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
                    // onRowClicked={onRowClicked}
                />
            </div>
        </div>
    )
}

export default DeletedSuppliers;
