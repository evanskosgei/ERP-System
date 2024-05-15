import React, { useState, useEffect } from 'react';
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Alert from '../../../components/Alert';
import mtaApi from '../../../api/mtaApi';

const Team_leader_dispatch_phones = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();
    const [mobiles, setMobiles] = useState([])
    const [distributions, setDistributions] = useState([])
    const [leaders, setLeaders] = useState([])

    useEffect(() => {
        const get_data = async () => {
            try {
                const { data } = await mtaApi.distribute_stock_stockist.list_distribution('1')
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
                    const managersWithUserTypeThree = data.response.filter(user => user.user_category_id === 4);
                    setLeaders(managersWithUserTypeThree);
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
            const { data } = await mtaApi.team_leader_distribution.team_leader_dispatch_phones(values)
            if (data.status === 200) {
                navigate("/distribution/teamleader/new-dispatch");
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
                            <label className="block text-gray-700">Team Leader:</label>
                            <select {...register("teamleader_id", { required: true })} className="my-auto ti-form-input">
                                <option value="">...select team leader</option>
                                {leaders.map((leader, index) => (
                                    <option key={index} value={leader.id}>{leader.username}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Manager stock:</label>
                            <select {...register("mobilephone_managerstock_id", { required: true })} className="my-auto ti-form-input">
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
                            <label htmlFor="remarks" className="block text-gray-700">Manager Remarks:</label>
                            <textarea rows="1" {...register("manager_remarks")} className="my-auto ti-form-input" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dispatch_date" className="block text-gray-700">Manager Dispatch Date:</label>
                            <input type='date' {...register("manager_dispatch_date")} className="my-auto ti-form-input" />
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
    )
}

export default Team_leader_dispatch_phones;
