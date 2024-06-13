import React, { useState } from 'react'
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader'
import { useForm } from "react-hook-form"
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import mtaApi from '../../../../api/mtaApi'
import { useNavigate } from 'react-router-dom'
import Alert from '../../../../components/Alert'

const Createphonemodel = () => {
    const { register, handleSubmit, formState: { errors, isValid }, reset, setValue } = useForm();
    const [filePaths, setFilePaths] = useState([]);
    const navigate = useNavigate();
    const [alert, setAlert] = useState(null);

    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    const handleChangeStatus = ({ meta, file }, status) => {
        if (status === 'done') {
            setFilePaths(prevFilePaths => [...prevFilePaths, meta.name]);
            setValue('image_path', [...filePaths, meta.name]);
        } else if (status === 'removed') {
            setFilePaths(prevFilePaths => prevFilePaths.filter(filePath => filePath !== meta.name));
            setValue('image_path', [...filePaths.filter(filePath => filePath !== meta.name)]);
        }
    };

    const onSubmit = async (values) => {
        // console.log(values)
        // console.log(filePaths)

        // const filePathsJSON = JSON.stringify(filePaths);
        try {
            const { data } = await mtaApi.product_models.createPhoneModel(values)
            if (data.status === 200) {
                navigate("/inventory/approve-new-phone-model")
            }
        } catch (error) {
            console.log(error)
            const message = error.response?.data?.error ?? error.message;
            setAlert({ type: "error", message });
        }
        reset()
        // setFilePaths([]);
    };

    // const formatAmount = (value) => {
    //     const parts = value.toString().split('.');
    //     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    //     return parts.join('.');
    // };

    // const handleAmountChange = (event) => {
    //     const inputValue = event.target.value.replace(/,/g, '');
    //     const formattedValue = formatAmount(inputValue);
    //     setValue("amount", formattedValue);
    // };

    return (
        <div>
            <PageHeader currentpage="Create Mobile Phone Model" href="/inventory/product-management" activepage="Inventory" mainpage="Add Mobile Phone Model" />
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title text-center">Mobile Phone Model</h5>
                    </div>
                    <div className="box-body">
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Select product sub-category</label>
                                <select type="text" {...register("product_sub_category_id", { required: true })} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                    <option value="">Select phone category</option>
                                    <option value="1">Android Phones</option>
                                    <option value="2">iOS Phones</option>
                                    <option value="3">Feature Phones</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Phone name</label>
                                <input type="text" {...register("phone_name", { required: true })} id='name' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter Phone name" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">RAM</label>
                                <input type="text" {...register("ram", { required: true })} id='ram' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ... Enter phone ram capacity i.e 8 GB" />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Internal Storage</label>
                                <input type="text" {...register("internal_storage", { required: true })} id='internal_storage' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ...Enter Internal storage capacity i.e 256 GB" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Main Camera Pixels</label>
                                <input type="text" {...register("main_camera", { required: true })} id='main_camera' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ...Enter main camera pixels i.e 30 MP" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Front Camera Pixels</label>
                                <input type="text" {...register("front_camera", { required: true })} id='front_camera' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ...Enter front camera pixels i.e 30 MP" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Display Size</label>
                                <input type="text" {...register("display", { required: true })} id='display' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder=" ...Enter screen size 6.66 inch AMOLED screen" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Processor</label>
                                <input type="text" {...register("processor", { required: true })} id='processor' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="...Enter processor type" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Operating System</label>
                                <input type="text" {...register("operating_system")} id='operating_system' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="...Enter Operating system type" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Connectivity</label>
                                <input type="text" {...register("connectivity")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter phone's connectivity" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Colors</label>
                                <input type="text" {...register("colors")} id='colors' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter phone's colour" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">Battery Capacity</label>
                                <input type="text" {...register("battery")} id='battery' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter phone's battery capacity" required />
                            </div>
                            <div className="space-y-2">
                                <label className="ti-form-label mb-0">VAT Tax Amount</label>
                                <input type="number" {...register("vat_percent_amount")} className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter vat percentage amount. i.e 16" required />
                            </div>
                            <div className="space-y-2 hidden">
                                <label className="ti-form-label mb-0">Image path</label>
                                <input type="text" {...register("image_path")} id='image_path' className="my-auto ti-form-input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter phone's battery capacity" required />
                            </div>
                        </div>
                        {/* <div className="box-body dropzone-file-upload">
                            <label className="ti-form-label mb-0">Upload Product Images</label>
                            <p>Please upload Max of 2 images with a maximum size of 1MB each.</p>
                            <Dropzone
                            {...register("image_path")}
                                maxFiles={2}
                                maxSizeBytes={1 * 1024 * 1024}
                                getUploadParams={getUploadParams}
                                onChangeStatus={handleChangeStatus}
                                instructions="upload max 1 mb"
                                accept="image/*"
                                required
                            />
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
            {alert && <Alert alert={alert} />}
        </div>
    )
}

export default Createphonemodel;
