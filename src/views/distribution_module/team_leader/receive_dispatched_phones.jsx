import React, { useEffect, useState } from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import mtaApi from '../../../api/mtaApi';
import Alert from '../../../components/Alert';
import { useForm } from "react-hook-form";

const Receive_Team_leader_dispatched = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState, reset } = useForm();
    const [stockDispatched, setStockDispached] = useState([]);
    const [alert, setAlert] = useState(null)

    useEffect(() => {
        const get_distributions = async () => {
            try {
                const { data } = await mtaApi.team_leader_distribution.team_leader_dispatches('1')
                if (data.status === 200) {
                    setStockDispached(data.response)
                }
            } catch (error) {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            }
        }
        get_distributions()
    }, []);

    const onSubmit = async (values) => {
        try {
            const { data } = await mtaApi.team_leader_distribution.team_leader_receive_stock(values)
            if (data.status === 200) {
                navigate("/distribution/teamleader/active-dispatch");
            }
            reset()
        } catch (error) {
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        }
    }
    return (
        <div>
            <PageHeader currentpage="Receive Distributions" href="/inventory/distribution-dashboard" activepage="Distribution" mainpage="Receive Distribution Centers" />
            {alert && <Alert alert={alert} />}
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">Purchase Stock</h5>
                    </div>
                    <div className="box-body">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="mb-4">
                                <label className="block text-gray-700">Distributions:</label>
                                <select {...register("id", { required: true })} className="my-auto ti-form-input">
                                    <option value="">...select distributions</option>
                                    {stockDispatched.map((dist, index) => (
                                        <option key={index} value={dist.id}>{dist.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="remarks" className="block text-gray-700">Team Leader Remarks:</label>
                                <textarea rows="1" {...register("teamleader_remarks")} className="my-auto ti-form-input" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="dispatch_date" className="block text-gray-700">Received Date:</label>
                                <input type='date' {...register("teamleader_received_date", { required: true })} className="my-auto ti-form-input" />
                            </div>

                            <div className="col-span-2 flex justify-center">
                                <button type="submit" onClick={handleSubmit(onSubmit)} className={`ti-btn ti-btn-primary ti-custom-validate-btn ${!isValid && 'opacity-50 cursor-not-allowed'}`} disabled={!isValid}>Submit Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Receive_Team_leader_dispatched;
