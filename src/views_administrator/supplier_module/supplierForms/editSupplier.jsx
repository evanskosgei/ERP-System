import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import mtaApi from "../../../api/mtaApi";

const EditSupplier = ({ onClose, data }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        formState,
        setValue,
    } = useForm();
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (data) {
            const mappedData = {
                business_name: data.business_name,
            };
            Object.keys(mappedData).forEach((key) => {
                setValue(key, mappedData[key]);
            });
        }
    }, [data, setValue]);

    const onSubmit = async (values) => { 
        console.log(data.id)
        await mtaApi.supplier.updateSupplier(data.id, values)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    };

    const handleApprove = () => {
        console.log("Approve")
    }

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };
    return (
        <div className="fixed z-50 inset-0 flex justify-center items-center overflow-x-hidden bg-gray-600 bg-opacity-60">
            <div className="w-full max-w-xl max-h-[90dvh] overflow-y-auto bg-white dark:bg-slate-800 rounded-lg">
                <div className="relative bg-white rounded-lg shadow dark:bg-slate-800">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Update Supplier Details</h3>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="p-4 md:p-5 space-y-4 overflow-y-auto">
                        <div className="box-header">
                            <h5 className="box-title">Business Details</h5>
                        </div>
                        <div className="ti-modal-body ">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Business Name:</label>
                                    <input
                                        type="text"
                                        {...register("business_name", { required: true })}
                                        id="businessname"
                                        className={`my-auto ti-form-input ${editMode ? "" : "bg-gray-100"}`}
                                        readOnly={!editMode}
                                    />
                                    {errors.businessname && <span className="text-red-500 text-xs">Business Name is required</span>}
                                </div>

                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Trade Name:</label>
                                    <input
                                        type="text"
                                        {...register("trading_name", { required: true })}
                                        id="trading_name"
                                        className={`my-auto ti-form-input ${editMode ? "" : "bg-gray-100"}`}
                                        readOnly={!editMode}
                                    />
                                    {errors.trading_name && <span className="text-red-500 text-xs">Trade Name is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Address:</label>
                                    <input
                                        type="text"
                                        {...register("address", { required: true })}
                                        id="address"
                                        className={`my-auto ti-form-input ${editMode ? "" : "bg-gray-100"}`}
                                        readOnly={!editMode}
                                    />
                                    {errors.address && <span className="text-red-500 text-xs">Address Number is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Postal code:</label>
                                    <input
                                        type="number"
                                        {...register("postal_code", { required: true })}
                                        id="postal_code"
                                        className={`my-auto ti-form-input ${editMode ? "" : "bg-gray-100"}`}
                                        readOnly={!editMode}
                                    />
                                    {errors.postal_code && <span className="text-red-500 text-xs">Postal Code is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Country:</label>
                                    <input type="text" {...register("country")} id="country" className={`my-auto ti-form-input ${editMode ? "" : "bg-gray-100"}`}
                                        readOnly={!editMode}/>
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Business Number:</label>
                                    <input
                                        type="number"
                                        {...register("contact", { required: true })}
                                        id="contact"
                                        className={`my-auto ti-form-input ${editMode ? "" : "bg-gray-100"}`}
                                        readOnly={!editMode}
                                    />
                                    {errors.contact && <span className="text-red-500 text-xs">Business Number is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Company Email:</label>
                                    <input
                                        type="email"
                                        {...register("company_email", { required: true })}
                                        id="company_email"
                                        className={`my-auto ti-form-input ${editMode ? "" : "bg-gray-100"}`}
                                        readOnly={!editMode}
                                    />
                                    {errors.company_email && <span className="text-red-500 text-xs">Company Email is required</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Personal Details</h5>
                        </div>
                        <div className="box-body">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">First Name:</label>
                                    <input
                                        type="text"
                                        {...register("first_name", { required: true })}
                                        className={`my-auto ti-form-input ${editMode ? "" : "bg-gray-100"}`}
                                        readOnly={!editMode}
                                    />
                                    {errors.first_name && <span className="text-red-500 text-xs">First Name is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Middle Name:</label>
                                    <input type="text" {...register("middle_name")} className={`my-auto ti-form-input ${editMode ? "" : "bg-gray-100"}`}
                                        readOnly={!editMode} />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Last Name:</label>
                                    <input
                                        type="text"
                                        {...register("last_name", { required: true })}
                                        className={`my-auto ti-form-input ${editMode ? "" : "bg-gray-100"}`}
                                        readOnly={!editMode}
                                    />
                                    {errors.last_name && <span className="text-red-500 text-xs">Last Name is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Mobile Number:</label>
                                    <input
                                        type="number"
                                        {...register("contact", { required: true })}
                                        className={`my-auto ti-form-input ${editMode ? "" : "bg-gray-100"}`}
                                        readOnly={!editMode}
                                    />
                                    {errors.contact && <span className="text-red-500 text-xs">Mobile Number is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Alternative Mobile Number:</label>
                                    <input
                                        type="number"
                                        {...register("alternate_contact")}
                                        className={`my-auto ti-form-input ${editMode ? "" : "bg-gray-100"}`}
                                        readOnly={!editMode}
                                    />
                                    <span className="phoneError text-red-500 text-xs hidden">error</span>
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Email Address:</label>
                                    <input type="email" {...register("email")} className={`my-auto ti-form-input ${editMode ? "" : "bg-gray-100 text-black"}`}
                                        readOnly={!editMode} />
                                    <span className="emailError text-red-500 text-xs hidden ">error</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            onClick={editMode ? handleSubmit(onSubmit) : toggleEditMode}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:text-white dark:hover:text-white"
                        >
                            {editMode ? "Save" : "Edit"}
                        </button>
                        <button
                            onClick={handleApprove}
                            className="py-2.5 px-5 ms-3 text-sm font-medium focus:outline-none rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                            Approve
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditSupplier;
