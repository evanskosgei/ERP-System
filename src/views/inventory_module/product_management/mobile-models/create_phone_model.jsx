import React, { useState } from 'react'
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader'
import { useForm } from "react-hook-form"
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import mtaApi from '../../../../api/mtaApi'

const Createphonemodel = () => {
    const { register, handleSubmit, formState: { errors, isValid }, reset, setValue } = useForm();
    const [filePaths, setFilePaths] = useState([]);

    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    const handleChangeStatus = ({ meta, file }, status) => {
        console.log(status);
        if (status === 'done') {
            setFilePaths(prevFilePaths => [...prevFilePaths, meta.name]);
            setValue('image_path', [...filePaths, meta.name]);
        } else if (status === 'removed') {
            setFilePaths(prevFilePaths => prevFilePaths.filter(filePath => filePath !== meta.name));
            setValue('image_path', [...filePaths.filter(filePath => filePath !== meta.name)]);
        }
    };

    const onSubmit = async (values) => {
        const filePathsJSON = JSON.stringify(filePaths);
        try {
            const response = await mtaApi.product_models.createPhoneModel(values)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        reset()
        // setFilePaths([]);
    };
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
                                <input type="text" {...register("processor", { required: true })} id='processor' className="my-auto ti-form-input" placeholder="...Enter processor type" required />
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
                        <div className="box-body dropzone-file-upload">
                            <label className="ti-form-label mb-0">Upload Product Images</label>
                            <p>Please upload Max of 2 images with a maximum size of 1MB each.</p>
                            <Dropzone
                                maxFiles={2}
                                maxSizeBytes={1 * 1024 * 1024}
                                getUploadParams={getUploadParams}
                                onChangeStatus={handleChangeStatus}
                                instructions="upload max 1 mb"
                                accept="image/*"
                                required
                            />
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
