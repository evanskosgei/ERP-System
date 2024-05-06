import React from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { useForm } from "react-hook-form";
import { useState } from 'react';


const CreateUser = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();

    const onSubmit = async values => {
        console.log(values)
    }
    return (
        <div>
            <PageHeader currentpage="Create Users" href="/users/dashboard" activepage="Users" mainpage="create Users" />
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title  text-center">Contact Person Details</h5>
                        </div>
                        <div className="box-body">

                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">First Name</label>
                                    <input type="text" {...register("first_name", { required: true })} id='first_name' className="ti-form-input" placeholder=" ... first name" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Last Name</label>
                                    <input type="text" {...register("last_name", { required: true })} id='last_name' className="ti-form-input" placeholder=" ... last name" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Other Names</label>
                                    <input type="text" {...register("other_names", { required: true })} id='other_names' className="ti-form-input" placeholder=" ... other names" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Mobile Number</label>
                                    <input type="text" {...register("contact_mobile_number", { required: true })} id='contact_mobile_number' className="ti-form-input" placeholder=" ... Enter user phone number" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Email Address</label>
                                    <input type="email" {...register("contact_email_address", { required: true })} id='contact_email_address' className="ti-form-input" placeholder=" ... Enter user Email Address" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Alternative Mobile Number</label>
                                    <input type="text" {...register("company_alternative_mobile_number", { required: true })} id='company_alternative_mobile_number' className="my-auto ti-form-input" placeholder=" ... Enter alternative mobile number" required />
                                    {errors.company_alternative_mobile_number && <span className="text-red-500 text-xs">Trade Name is required</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">Other Details</h5>
                    </div>
                    <div className="box-body">
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">ID/Passport Number</label>
                                <input type="number" {...register("id_number", { required: true })} id='id_number' className="my-auto ti-form-input" placeholder=" ... Enter id number" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Address Number</label>
                                <input type="text" {...register("address", { required: true })} id='address' className="my-auto ti-form-input" placeholder=" ... sample, P O Box 00000" required />
                                {errors.address && <span className="text-red-500 text-xs">Address Number is required</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Postal code</label>
                                <input type="number" {...register("postal_code", { required: true })} id='postal_code' className="my-auto ti-form-input" placeholder="00100" required />
                                {errors.postal_code && <span className="text-red-500 text-xs">Postal Code is required</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Country</label>
                                <input type="text" {...register("country")} id='country' className="my-auto ti-form-input" placeholder="Kenya" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">City</label>
                                <input type="text" {...register("city")} id='city' className="my-auto ti-form-input" placeholder="Enter city or town name" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">KRA PIN Number</label>
                                <input type="text" {...register("kra_pin", { required: false })} id='kra_pin' className="ti-form-input" placeholder=" ... Enter user kra pin"/>
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">NHIF PIN</label>
                                <input type="text" {...register("nhif_pin", { required: false })} id='tax_id' className="ti-form-input" placeholder=" ... Enter user nhif pin number" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">NSSF PIN</label>
                                <input type="email" {...register("nssf_pin", { required: false })} id='nssf_pin' className="ti-form-input" placeholder=" ... Enter nssf pin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">ID and Profile Image</h5>
                    </div>
                    <div className="box-body">
                        {/* <div className="grid lg:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">ID/Passport Number</label>
                                <input type="number" {...register("id_number", { required: true })} id='id_number' className="my-auto ti-form-input" placeholder=" ... Enter id number" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Address Number</label>
                                <input type="text" {...register("address", { required: true })} id='address' className="my-auto ti-form-input" placeholder=" ... sample, P O Box 00000" required />
                                {errors.address && <span className="text-red-500 text-xs">Address Number is required</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Postal code</label>
                                <input type="number" {...register("postal_code", { required: true })} id='postal_code' className="my-auto ti-form-input" placeholder="00100" required />
                                {errors.postal_code && <span className="text-red-500 text-xs">Postal Code is required</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Country</label>
                                <input type="text" {...register("country")} id='country' className="my-auto ti-form-input" placeholder="Kenya" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">City</label>
                                <input type="text" {...register("city")} id='city' className="my-auto ti-form-input" placeholder="Enter city or town name" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">KRA PIN Number</label>
                                <input type="text" {...register("kra_pin", { required: false })} id='kra_pin' className="ti-form-input" placeholder=" ... Enter user kra pin"/>
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">NHIF PIN</label>
                                <input type="text" {...register("nhif_pin", { required: false })} id='tax_id' className="ti-form-input" placeholder=" ... Enter user nhif pin number" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">NSSF PIN</label>
                                <input type="email" {...register("nssf_pin", { required: false })} id='nssf_pin' className="ti-form-input" placeholder=" ... Enter nssf pin" />
                            </div>
                        </div> */}
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

export default CreateUser;
