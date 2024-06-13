import React from 'react'
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader'
import { useForm } from "react-hook-form"
import Dropzone from 'react-dropzone-uploader'

const Createaccessory = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();

    const onSubmit = async values => {
        console.log(values)
    }
    return (
        <div>
            <PageHeader currentpage="Create Accessory Model" href="/inventory/product-management" activepage="Inventory" mainpage="Create Accessory Model" />
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">Mobile Accessory Model</h5>
                    </div>
                    <div className="box-body">
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Select product Category</label>
                                <select type="text" {...register("category")} id='category' className="my-auto ti-form-input" placeholder="...Enter Accessory's category" required>
                                    <option>Mobile Phones</option>
                                    <option>Television</option>
                                    <option>Accessories</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Select product Sub-Category</label>
                                <select type="text" {...register("sub_category")} id='sub_category' className="my-auto ti-form-input" placeholder="...Enter Accessory's sub category" required>
                                    <option>Jikokoa</option>
                                    <option>Speakers</option>
                                    <option>Chargers</option>
                                    <option>Modems</option>
                                    <option>Memory cards</option>
                                    <option>Oled tv's</option>
                                    <option>led tv's</option>
                                    <option>Smart tv's</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Accessory name</label>
                                <input type="text" {...register("name", { required: true })} id='name' className="my-auto ti-form-input" placeholder=" ... Enter Accessory name" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Description</label>
                                <textarea type="text" {...register("description")} id='description' className="my-auto ti-form-input" placeholder="Enter Accessory's description" required />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="ti-form-label mb-0">Upload Accessory Model Images</label>
                            <Dropzone />
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

export default Createaccessory;
