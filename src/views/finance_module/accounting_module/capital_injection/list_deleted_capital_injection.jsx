import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import mtaApi from '../../../../api/mtaApi';

const Deleted_capital_injection = () => {

  const navigate = useNavigate();
  const [rowData, setRowData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [divStack, setDivStack] = useState(["listpage"]);
  const [alert, setAlert] = useState(null);

  const columnDefs = [
    { headerName: "No", field: "no", sortable: true, editable: false, filter: true, flex: 1, resizable: false, minWidth: 10 },
    { headerName: "Transaction ID", field: "transaction_id", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
    { headerName: "Bank Account", field: "bank_account", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
    { headerName: "Shareholder Account", field: "shareholder_account", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
    { headerName: "Amount", field: "amount", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
    { headerName: "Settlement Date", field: "settlement_date", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
    { headerName: "Reference", field: "reference", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
    { headerName: "Narrative", field: "narrative", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
    { headerName: "Created By", field: "createdby", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
    { headerName: "Created By ID", field: "created_by_id", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
    { headerName: "Date Created", field: "datecreated", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
    { headerName: "Global ID", field: "globalId", sortable: true, editable: false, filter: true, flex: 2, resizable: false, minWidth: 10 },
  ];

  const defaultColDef = { sortable: true, flex: 1, filter: true, floatingFilter: false };

  const onGridReady = useEffect(() => {
    const newUnApproved = async () => {
      try {
        const { data } = await mtaApi.capital_injection.list_capital_injection_entries("5")
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

  return (
    <div>
      {currentDiv === "listpage" && (
        <div>
          <PageHeader currentpage="Deleted Capital Injections" href="/finance/expenses/" activepage="Dashboard" mainpage="Deleted Capital Injections approval" />
          <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '50%', boxSizing: 'border-box' }}
            />
            <CSVLink data={filteredData.length > 0 ? filteredData : rowData.length > 0 ? rowData : []} filename="Deleted_capital_injections" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
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
          <PageHeader currentpage="Deleted capital injection Details" activepage="finance" mainpage="Deleted Capital Injection Details" />
          <button className='className="flex left-0 text-blue-700 hover:bg-gray-100 p-3 font-bold'
            onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
            <h4>back</h4>
          </button>
          <div id="profile-1" className="ml-4" role="tabpanel">
            <h5 className="box-title my-3">Account Information</h5>
            <div className="overflow-auto">
              <table className="ti-custom-table border-0 whitespace-nowrap">
                <tbody>
                  <tr className="">
                    <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Bank Account</td>
                    <td className="!p-2">:</td>
                    <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.bank_account}</td>
                  </tr>
                  <tr className="!border-0">
                    <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Amount</td>
                    <td className="!p-2">:</td>
                    <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.amount}</td>
                  </tr>
                  <tr className="!border-0">
                    <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Created By ID</td>
                    <td className="!p-2">:</td>
                    <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.created_by_id}</td>
                  </tr>
                  <tr className="!border-0">
                    <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Created By</td>
                    <td className="!p-2">:</td>
                    <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.createdby}</td>
                  </tr>
                  <tr className="!border-0">
                    <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Date Created</td>
                    <td className="!p-2">:</td>
                    <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.datecreated}</td>
                  </tr>
                  <tr className="!border-0">
                    <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Global ID</td>
                    <td className="!p-2">:</td>
                    <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.globalId}</td>
                  </tr>
                  <tr className="!border-0">
                    <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">ID</td>
                    <td className="!p-2">:</td>
                    <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.id}</td>
                  </tr>
                  <tr className="!border-0">
                    <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Narrative</td>
                    <td className="!p-2">:</td>
                    <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.narrative}</td>
                  </tr>
                  <tr className="!border-0">
                    <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">No</td>
                    <td className="!p-2">:</td>
                    <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.no}</td>
                  </tr>
                  <tr className="!border-0">
                    <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Reference</td>
                    <td className="!p-2">:</td>
                    <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.reference}</td>
                  </tr>
                  <tr className="!border-0">
                    <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Settlement Date</td>
                    <td className="!p-2">:</td>
                    <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.settlement_date}</td>
                  </tr>
                  <tr className="!border-0">
                    <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Shareholder Account</td>
                    <td className="!p-2">:</td>
                    <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.shareholder_account}</td>
                  </tr>
                  <tr className="!border-0">
                    <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Transaction ID</td>
                    <td className="!p-2">:</td>
                    <td className="!p-2 !text-gray-500 dark:!text-white/70">{selectedRowData.transaction_id}</td>
                  </tr>
                </tbody>
              </table>
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
};

export default Deleted_capital_injection;
