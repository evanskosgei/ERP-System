import React, { useState, useEffect } from 'react';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { useAuth } from "../../../providers/AuthProvider";
import mtaApi from '../../../api/mtaApi';
import Alert from '../../../components/Alert';
import { useNavigate } from 'react-router-dom';

const DispatchStock = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
    const [modalData, setModalData] = useState({});
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();
    const { user, setUser } = useAuth();

    const onSubmitModal = async (modalData) => {
        const payload = {
            mobilephone_stock_received_id: modalData.stock_id,
            distribution_center_id: modalData.center_id,
            manager_id: user.user_id,
            stockist_dispatch_date: modalData.dispatch_date,
            stockist_remarks: modalData.remarks,
        };
        try {
            // const { data } = await mtaApi.purchase.cashstockPurchase(payload);
            const { data } = await mtaApi.distribute_stock_stockist.distribute_stock_manager(payload)
            navigate("/distribution/manager/approve/");
        } catch (error) {

            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });

        }
    };

    return (
        <div>
            <PageHeader currentpage="Buy Using Cash" href="/inventory/dashboard/" activepage="Inventory" mainpage="Buy Using Prepayments" />
            {alert && <Alert alert={alert} />}
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">Purchase Stock</h5>
                    </div>
                    <div className="box-body">
                        <form onSubmit={handleSubmit(onSubmitModal)} className="grid grid-cols-2 gap-6">
                            <div className="mb-4">
                                <label htmlFor="stock_id" className="block text-gray-700">Mobile Phone Stock ID:</label>
                                <input id="stock_id" {...register("stock_id")} type='number' defaultValue={modalData.stock_id} className="my-auto ti-form-input" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="center_id" className="block text-gray-700">Distribution Center ID:</label>
                                <input id="center_id" {...register("center_id")} type='number' defaultValue={modalData.center_id} className="my-auto ti-form-input" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="remarks" className="block text-gray-700">Stockist Remarks:</label>
                                <textarea rows="1" id="remarks" {...register("remarks")} defaultValue={modalData.remarks} className="my-auto ti-form-input" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="dispatch_date" className="block text-gray-700">Stockist Dispatch Date:</label>
                                <input id="dispatch_date" type='date' {...register("dispatch_date")} defaultValue={modalData.dispatch_date} className="my-auto ti-form-input" />
                            </div>
                            <div className="col-span-2 flex justify-center">
                                <button type="submit" className={`ti-btn ti-btn-primary  ti-custom-validate-btn`}>Dispatch Stock</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DispatchStock;
