import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader'
import { useForm } from "react-hook-form"
import React, { useState, useEffect, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import { useNavigate } from 'react-router-dom';
import mtaApi from '../../../../api/mtaApi';
import Alert from '../../../../components/Alert';

const Receivestock = () => {
  const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
  const navigate = useNavigate();
  const [rowData, setRowData] = useState([]);
  const [distributions, setDistributions] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [divStack, setDivStack] = useState(["listpage"]);
  const [editMode, setEditMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const columnDefs = [
    { headerName: "#", field: "count", sortable: true, editable: false, filter: true, flex: 1, resizable: true, minWidth: 5 },
    { headerName: "Recepient Name", field: "recipient_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    { headerName: "Recepient Address", field: "recipient_address", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    { headerName: "Recepient Mobile", field: "recipient_mobile_number", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    { headerName: "Transporter name", field: "transporter_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    { headerName: "Transporter cost", field: "transporter_cost", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    { headerName: "delivery_address", field: "delivery_address", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    { headerName: " Contact name", field: "contact_name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
    { headerName: "contact number", field: "contact_number", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 10 },
  ];
  const defaultColDef = { sortable: true, flex: 1, filter: true, floatingFilter: false };

  const onGridReady = useCallback(() => {
    const newUnApproved = async () => {
      try {
        const { data } = await mtaApi.stock_in_transit.list_stock_in_transit('2')
        if (data.status === 200) {
          const modifiedData = data.response.map((item, index) => ({
            ...item,
            count: index + 1
          }));
          setRowData(modifiedData);
        }
      } catch (error) {
        const message = error.response?.data?.error ?? error.message;
        setAlert({ type: "error", message });
      }
    }
    newUnApproved();
  }, []);

  useEffect(() => {
    const get_distributions = async () => {
      try {
        const { data } = await mtaApi.distributions.list_distribution('1')
        if (data.status === 200) {
          setDistributions(data.response)
        }
      } catch (error) {
        const message = error.response?.data?.error ?? error.message;
        setAlert({ type: "error", message });
      }
    }
    get_distributions()
  }, [])
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
  const approve = async () => {
    try {
      const { data } = await mtaApi.stock_in_transit.approve_stock_in_transit(selectedRowData.id)
      if (data.status === 200) {
        navigate("/transport/active-products-in-transit")
      }
    } catch (error) {
      const message = error.response?.data?.error ?? error.message;
      setAlert({ type: "error", message });
    }
  }
  return (
    <div>
      {currentDiv === "listpage" && (
        <div>
          <PageHeader currentpage="Receive Stock" href="/inventory/dashboard/" activepage="Inventory" mainpage="Receive Stock in Transit" />
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div className="box">
                <div className="box-header">
                  <h5 className="box-title text-center">Receive Stock</h5>
                </div>

                <div className="box-body">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="ti-form-label mb-0">Purchase Type</label>
                      <select {...register("distribution_center_id", { required: true })} className="my-auto ti-form-input">
                        <option value="">...select purchase type</option>
                        {distributions.map((dist, index) => (
                          <option key={index} value={dist.id}>{dist.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '50%', boxSizing: 'border-box' }}
            />

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
          <PageHeader currentpage="Stock Purchased Details" href="/transport/transit/" activepage="Transport" mainpage="Stock Purchased Details" />
          <button className='className="flex left-0 text-blue-700 hover:bg-gray-100 p-3 font-bold'
            onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
            <h4>back</h4>
          </button>
          <div id="profile-1" className="ml-4" role="tabpanel">
            <h5 className="box-title my-3">Product Information</h5>
            <div className="overflow-auto">
              <table className="ti-custom-table border-0 whitespace-nowrap">
                <tbody>
                  {selectedRowData.product_details.map((product, index) => (
                    <tr key={index}>
                      <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Product Model ID</td>
                      <td className="!p-2">:</td>
                      <td className="!p-2 !text-gray-500 dark:!text-white/70">{product.model_id}</td>
                      <td className="!p-2 font-medium !text-gray-500 dark:!text-white/70 w-[252px]">Quantity</td>
                      <td className="!p-2">:</td>
                      <td className="!p-2 !text-gray-500 dark:!text-white/70">{product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div id="loader" style={{ display: 'none' }}>
            <span className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue rounded-full" role="status" aria-label="loading">
              <span className="sr-only">Loading...</span>
            </span>
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={""}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:text-white dark:hover:text-white"
            >
              Remove
            </button>
          </div>
          {alert && <Alert alert={alert} />}
        </div>
      )}

    </div >
  )
}

export default Receivestock
