import React, { useEffect, useState } from "react";
import mtaApi from "../../../api/mtaApi";
import { useNavigate } from "react-router-dom";

const Status = ({ data, onClose }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        await mtaApi.supplier.deleteSupplier(data.id)
            .then(response => {
                console.log(response.data.message)
                onClose();
            })
            .catch(error => {
                console.log(error)
            })
    }

    const approve = async () => {
        const activeValue = !data.active;
        await mtaApi.supplier.updateSupplier(data.id, {
            active: activeValue
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <div className="fixed z-50 inset-0 flex justify-center items-center overflow-x-hidden bg-gray-600 bg-opacity-60">
            <div className="w-full max-w-xl max-h-[90dvh] overflow-y-auto bg-white dark:bg-slate-800 rounded-lg">
                <div className="relative bg-white rounded-lg shadow dark:bg-slate-800">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Update Supplier Status</h3>
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
                </div>
                <div className="flex justify-center space-x-2 m-10">
                    <button onClick={approve} className={`bg-primary text-white p-2 rounded-md ${data.active ? 'hidden' : ''}`}>Activate</button>
                    <button onClick={approve} className={`bg-red-500 text-white p-2 rounded-md ${!data.active ? 'hidden' : ''}`}>Deactivate</button>
                    <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded-md">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Status;
