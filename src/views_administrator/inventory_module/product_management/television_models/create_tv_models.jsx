import React from 'react'
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader'
import { useForm } from "react-hook-form"
import Dropzone from 'react-dropzone-uploader'

const Createtvmodels = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();

    const onSubmit = async values => {
        console.log(values)
    }
  return (
    <div>
            <PageHeader currentpage="Create TV Model" href="/inventory/product-management" activepage="Inventory" mainpage="Create TV Model" />
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">Mobile Television Model</h5>
                    </div>
                    <div className="box-body">
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Select Television's Category</label>
                                <select type="text" {...register("category")} id='category' className="my-auto ti-form-input" placeholder="...Enter Television's category" required>
                                    <option>Select Television category</option>
                                    <option>Smart Televisions</option>
                                    <option>LED Televisions</option>
                                    <option>OLED Televisions</option>
                                    <option>Feature Televisions</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Television name</label>
                                <input type="text" {...register("name", { required: true })} id='name' className="my-auto ti-form-input" placeholder=" ... Enter Television name" />
                            </div>
                            
                            
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Display Size</label>
                                <input type="text" {...register("display", { required: true })} id='display' className="my-auto ti-form-input" placeholder=" ...Enter Tv display size" required />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="ti-form-label mb-0">Upload Television Model Images</label>
                            <Dropzone type="file" {...register("image_url")} />
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

export default Createtvmodels;
