import React from 'react'
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form"

const CreatedistributionCenter = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();

    const onSubmit = async values => {
        console.log(values)
    }
    return (
        <div>
            <PageHeader currentpage="Create Distribution Center" href="/inventory/dashboard/" activepage="Inventory" mainpage="Create Distribution Center" />
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">Distribution Center Details</h5>
                    </div>
                    <div className="box-body">
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Shop name</label>
                                <input type="text" {...register("shop_name", { required: true })} id='shop_name' className="my-auto ti-form-input" placeholder=" ... Enter shop name" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Shop Contact</label>
                                <input type="number" {...register("shop_contact", { required: true })} id='shop_contact' className="my-auto ti-form-input" placeholder=" ... Enter shop contact" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Building Name</label>
                                <input type="text" {...register("building_name", { required: true })} id='building_name' className="my-auto ti-form-input" placeholder=" ...Enter building name" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Street Name/Number</label>
                                <input type="text" {...register("street_name", { required: true })} id='street_name' className="my-auto ti-form-input" placeholder=" ...Enter street name or number" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Address Number</label>
                                <input type="text" {...register("address_number", { required: true })} id='address_number' className="my-auto ti-form-input" placeholder=" ...sample po.Box 193" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Postal code</label>
                                <input type="number" {...register("postal_code", { required: true })} id='postal_code' className="my-auto ti-form-input" placeholder="...sample, 00100" required />
                                {errors.postal_code && <span className="text-red-500 text-xs">Postal Code is required</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">County/State Name</label>
                                <input type="text" {...register("county_name")} id='county_name' className="my-auto ti-form-input" placeholder="Nairobi" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">City</label>
                                <input type="text" {...register("city")} id='city' className="my-auto ti-form-input" placeholder="Enter city or town name" required />
                            </div>
                        </div>
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
