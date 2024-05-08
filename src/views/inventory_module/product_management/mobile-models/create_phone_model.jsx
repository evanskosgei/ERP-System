import React from 'react'
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader'
import { useForm } from "react-hook-form"
import Dropzone from 'react-dropzone-uploader'

const Createphonemodel = () => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();

    const onSubmit = async values => {
        console.log(values)
    }
    return (
        <div>
            <PageHeader currentpage="Create Phone Model" href="/inventory/product-management" activepage="Inventory" mainpage="Create Phone Model" />
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">Mobile Phone Model</h5>
                    </div>
                    <div className="box-body">
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Slect Phone's Category</label>
                                <select type="text" {...register("category")} id='category' className="my-auto ti-form-input" placeholder="...Enter phone's category" required>
                                    <option>Select phone category</option>
                                    <option>Android Phones</option>
                                    <option>iOS Phones</option>
                                    <option>Feature Phones</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Phone name</label>
                                <input type="text" {...register("name", { required: true })} id='name' className="my-auto ti-form-input" placeholder=" ... Enter Phone name" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Ram</label>
                                <input type="text" {...register("ram", { required: true })} id='ram' className="my-auto ti-form-input" placeholder=" ... Enter phone ram capacity" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Internal Storage</label>
                                <input type="text" {...register("internal_storage", { required: true })} id='internal_storage' className="my-auto ti-form-input" placeholder=" ...Enter Internal storage capacity" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Main Camera Pixels</label>
                                <input type="text" {...register("main_camera", { required: true })} id='main_camera' className="my-auto ti-form-input" placeholder=" ...Enter main camera pixels" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Front Camera Pixels</label>
                                <input type="text" {...register("front_camera", { required: true })} id='front_camera' className="my-auto ti-form-input" placeholder=" ...Enter front camera pixels" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Display</label>
                                <input type="text" {...register("display", { required: true })} id='display' className="my-auto ti-form-input" placeholder=" ...sample 6.66 inch AMOLED screen" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Processor</label>
                                <input type="number" {...register("processor", { required: true })} id='processor' className="my-auto ti-form-input" placeholder="...Enter processor type" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Slect Operating System</label>
                                <input type="text" {...register("operating_system")} id='operating_system' className="my-auto ti-form-input" placeholder="...Enter Operating system type" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">connectivity</label>
                                <input type="text" {...register("connectivity")} id='connectivity' className="my-auto ti-form-input" placeholder="Enter phone's connectivity" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Colors</label>
                                <input type="text" {...register("colors")} id='colors' className="my-auto ti-form-input" placeholder="Enter phone's colour" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Battery Capacity</label>
                                <input type="text" {...register("battery")} id='battery' className="my-auto ti-form-input" placeholder="Enter phone's battery capacity" required />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="ti-form-label mb-0">Upload Phone Model Images</label>
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

export default Createphonemodel;
