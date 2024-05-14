import React, { useEffect, useState } from 'react';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { CSVLink } from "react-csv";
import { useForm } from "react-hook-form";
import mtaApi from '../../../api/mtaApi';
import { useNavigate } from 'react-router-dom';

const ApprovephoneDispatch = () => {
    const navigate = useNavigate();
    const [rowData, setRowData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [divStack, setDivStack] = useState(["table"]);
    const [alert, setAlert] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const fetchDistributions = async () => {
            try {
                const { data } = await mtaApi.distribute_stock_stockist.list_distribution('1');
                if (data.status === 200) {
                    const modifiedData = data.response.map((phone_device, index) => ({
                        id: phone_device.id,
                        mobilephone_teamleaderstock_id: mobilephone_teamleaderstock_id,
                        global_id: phone_device.global_id,
                        distribution_center_id: distribution_center_id,
                        distribution_center_name: distribution_center_name,
                        model_id: phone_device.model_id,
                        imei_1: phone_device.imei_1,
                        imei_2: phone_device.imei_2,
                        agent_id: phone_device.agent_id,
                        agent_name: agent_name,
                        teamleader_remarks: teamleader_remarks,
                        agent_remarks: agent_remarks,
                        agent_received_date: agent_received_date,
                        teamleader_dispatch_date: teamleader_dispatch_date,
                        stock_state: stock_state,
                    }));
                    setRowData(modifiedData);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchDistributions();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = rowData.filter((row) => {
        return Object.values(row).some((value) =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const handleRowClicked = (event) => {
        setSelectedRowData(event.data);
        setDivStack([...divStack, 'distributioncenterDetails']);
    };

    const handleBack = () => {
        setDivStack(divStack.slice(0, divStack.length - 1));
    };

    const handleApprove = async () => {
        try {
            await mtaApi.distributions.distribute_stock_stockist.approve_distribution(selectedRowData.id);
            navigate("/inventory/active-distribution-centers");
        } catch (error) {
            console.error("Error approving distribution:", error);
            // Handle error
        }
    };

    return (
        <div>
            {divStack.includes("table") && (
                <div>
                    <PageHeader currentpage="Approve New Distribution Centers" href="/inventory/dashboard/" activepage="Inventory" mainpage="Approve New Distribution Centers" />
                    <div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                        />
                        <CSVLink
                            data={filteredData}
                            filename="New UnApproved Distribution Centers.csv"
                            separator={","}
                        >
                            Export
                        </CSVLink>
                    </div>
                    <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 130px)', width: '100%' }}>
                        <AgGridReact
                            rowData={filteredData}
                            pagination={true}
                            paginationPageSize={20}
                            onRowClicked={handleRowClicked}
                        />
                    </div>
                </div>
            )}

            {divStack.includes("distributioncenterDetails") && (
                <div>
                    <PageHeader currentpage="New Distribution Center" activepage="Inventory" mainpage="New Distribution Center" />
                    <button onClick={handleBack}>Back</button>
                    {selectedRowData && (
                        <div>
                            <h2>Distribution Center Details</h2>
                            <p>ID: {selectedRowData.id}</p>
                            <p>Global ID: {selectedRowData.global_id}</p>
                            <p>Distribution Center ID: {selectedRowData.distribution_center_id}</p>
                            <p>Distribution Center Name: {selectedRowData.distribution_center_name}</p>
                            <p>Model ID: {selectedRowData.model_id}</p>
                            <p>IMEI 1: {selectedRowData.imei_1}</p>
                            <p>IMEI 2: {selectedRowData.imei_2}</p>
                            <p>Agent ID: {selectedRowData.agent_id}</p>
                            <p>Agent Name: {selectedRowData.agent_name}</p>
                            <p>Teamleader Remarks: {selectedRowData.teamleader_remarks}</p>
                            <p>Agent Remarks: {selectedRowData.agent_remarks}</p>
                            <p>Agent Received Date: {selectedRowData.agent_received_date}</p>
                            <p>Teamleader Dispatch Date: {selectedRowData.teamleader_dispatch_date}</p>
                            <p>Stock State: {selectedRowData.stock_state}</p>
                        </div>
                    )}
                    <button onClick={handleApprove}>Approve</button>
                </div>
            )}
        </div>
    );
};

export default ApprovephoneDispatch;
