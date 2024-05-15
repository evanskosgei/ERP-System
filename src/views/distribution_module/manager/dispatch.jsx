import React, { useState, useEffect } from 'react';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form";
import mtaApi from '../../../api/mtaApi';
import Alert from '../../../components/Alert';
import { useNavigate } from 'react-router-dom';

const DispatchStock = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();
    const [mobiles, setMobiles] = useState([])
    const [distributions, setDistributions] = useState([])
    const [managers, setManagers] = useState([])

    useEffect(() => {
        const get_data = async () => {
            try {
                const { data } = await mtaApi.receive_stock.list_received_phone_models('1')
                if (data.status === 200) {
                    setMobiles(data.response)
                }
            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }

            try {
                const { data } = await mtaApi.distributions.list_distribution('1')
                if (data.status === 200) {
                    setDistributions(data.response)
                }
            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }

            try {
                const { data } = await mtaApi.users.list_users('1')
                if (data.status === 200) {
                    const managersWithUserTypeThree = data.response.filter(user => user.user_category_id === 3);
                    setManagers(managersWithUserTypeThree);
                }
            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }

        }
        get_data();
    }, [])

    const onSubmit = async (values) => {
        try {
            const { data } = await mtaApi.distribute_stock_stockist.distribute_stock_manager(values)
            if (data.status === 200) {
                navigate("/distribution/manager/approve/dispatch/");
            }
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        }
    }

    return (
        <div>
            <PageHeader currentpage="Dispatch Mobile Phones" href="/distribution/dashboard/" activepage="Distribution" mainpage="Dispatch Mobile Phones" />
            {alert && <Alert alert={alert} />}
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">Purchase Stock</h5>
                    </div>
                    <div className="box-body">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="mb-4">
                                <label className="block text-gray-700">Managers:</label>
                                <select {...register("manager_id", { required: true })} className="my-auto ti-form-input">
                                    <option value="">...select manager</option>
                                    {managers.map((manager, index) => (
                                        <option key={index} value={manager.id}>{manager.username}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Mobile Phone Stock:</label>
                                <select {...register("mobilephone_stock_received_id", { required: true })} className="my-auto ti-form-input">
                                    <option value="">...select Mobile Phones in stock</option>
                                    {mobiles.map((mobile, index) => (
                                        <option key={index} value={mobile.id}>{mobile.imei_1}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Select Distribution Center:</label>
                                <select {...register("distribution_center_id", { required: true })} className="my-auto ti-form-input">
                                    <option value="">...select distribution center</option>
                                    {distributions.map((distribution, index) => (
                                        <option key={index} value={distribution.id}>{distribution.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="remarks" className="block text-gray-700">Stockist Remarks:</label>
                                <textarea rows="1" {...register("stockist_remarks")} className="my-auto ti-form-input" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="dispatch_date" className="block text-gray-700">Stockist Dispatch Date:</label>
                                <input type='date' {...register("stockist_dispatch_date")} className="my-auto ti-form-input" />
                            </div>
                            <div className="col-span-2 flex justify-center">
                                <button
                                    onClick={handleSubmit(onSubmit)}
                                    type="submit" className={`ti-btn ti-btn-primary  ti-custom-validate-btn`}>Dispatch Stock</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DispatchStock;
