import React, { useState, useEffect } from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form"
import mtaApi from '../../../api/mtaApi';
import { useNavigate } from 'react-router-dom';
import Alert from '../../../components/Alert';
import Success from '../../../components/Success';

const CreatedistributionCenter = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
    const navigate = useNavigate();
    const [alert, setAlert] = useState(null);
    const [success, setSuccess] = useState(null);
    const [distributionCenters, setDistributionCenters] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            await mtaApi.distributions.list_distribution_center_types('1')
                .then(data => {
                    if(data.status === 200){
                    setDistributionCenters(data.data.response)
                    }
                }).catch(error => {
                    const message = error.response?.data?.error ?? error.message;
                    setAlert({ type: "error", message });
                })
                
        }
        getDetails();
    }, [])

    const onSubmit = async values => {
        await mtaApi.distributions.create_distribution(values)
            .then(response => {
                const message = response.description;
                setSuccess({ type: "success", message })
                navigate("/inventory/approve-new-distribution-center")
            }).catch(error => {
                const message = error.response?.data?.error ?? error.message;
                setAlert({ type: "error", message });
            })
    }
    return (
        <div>
            <PageHeader currentpage="Create Distribution Center" href="/inventory/dashboard/" activepage="Inventory" mainpage="Create a Shop" />
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">Distribution Center Details</h5>
                    </div>
                    <div className="box-body">
                        <div className="grid lg:grid-cols-2 gap-6">

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Distribution Center Type</label>
                                
                                <select type="text" {...register("distribution_center_type_id", { required: true })} className="ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        {distributionCenters.map((type, index) => (
                                            <option key={index} value={type.account_number}>{type.name}</option>
                                        ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Distribution Center Name</label>
                                <input type="text" {...register("name", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter shop name" />
                            </div>

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Email Address</label>
                                <input type="email" {...register("email", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter shop Email" />
                            </div>

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Mobile Number</label>
                                <input type="number" {...register("mobile_number", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter shop mobile number" />
                            </div>

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Telephone Number</label>
                                <input type="number" {...register("telephone_number", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter shop telephone number" />
                            </div>

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Shop Number</label>
                                <input type="number" {...register("shop_number", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter shop contact" />
                            </div>

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Building Name</label>
                                <input type="text" {...register("building", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ...Enter building name" required />
                            </div>

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Physical Location</label>
                                <input type="text" {...register("physical_location", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ...Enter street name or number" required />
                            </div>

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Address Number</label>
                                <input type="text" {...register("address", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ...sample po.Box 193" required />
                            </div>

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Postal code</label>
                                <input type="number" {...register("postal_code", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="...sample, 00100" required />
                            </div>

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Country</label>
                                <input type="text" {...register("country")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter country located" required />
                            </div>

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">County Name</label>
                                <input type="text" {...register("county")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nairobi County" required />
                            </div>

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">City/Towm</label>
                                <input type="text" {...register("city")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter city or town name" required />
                            </div>

                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Region</label>
                                <input type="text" {...register("region")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter shop region" required />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Remarks</label>
                                <textarea type="text" {...register("notes")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter remarks" required />
                            </div>
                        </div>
                        {alert && <Alert alert={alert} />}
                        {success && <Success success={success} />}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12">
                    <div className="box !bg-transparent border-0 shadow-none">
                        <div className="box-footer text-center border-t-0 px-0">
                            <button type="submit" onClick={handleSubmit(onSubmit)} className={`ti-btn ti-btn-primary ti-custom-validate-btn ${!isValid && 'opacity-50 cursor-not-allowed'}`} disabled={!isValid}>Submit Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="loader" style={{ display: 'none' }}>
                <span className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue rounded-full" role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </span>
            </div>
        </div>
    )
}

export default CreatedistributionCenter;
