import React from 'react';
import { useForm } from "react-hook-form";

const EditSupplier = ({ onClose, data }) => {
    const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
    return (
        <div className="fixed z-50 inset-0 flex justify-center items-center overflow-x-hidden bg-gray-200 bg-opacity-60">
            <div className="w-full max-w-xl max-h-[90dvh] overflow-y-auto bg-white rounded-lg">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Update Supplier Details</h3>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>

                    <div className="p-4 md:p-5 space-y-4 overflow-y-auto">
                        <div className="ti-modal-body ">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Business Name</label>
                                    <input type="text" {...register("businessname", { required: true })} id='businessname' className="my-auto ti-form-input" placeholder="Businessname" />
                                    {errors.businessname && <span className="text-red-500 text-xs">Business Name is required</span>}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be bold</h3>
                                    <p className="mt-1 text-gray-800 dark:text-white/70">
                                        Motivate teams to do their best work. Offer best practices to get users going in the right
                                        direction. Be bold and offer just enough help to get the work started, and then get out of
                                        the way. Give accurate information so users can make educated decisions. Know your user's
                                        struggles and desired outcomes and give just enough information to let them get where they
                                        need to go.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be optimistic</h3>
                                    <p className="mt-1 text-gray-800 dark:text-white/70">
                                        Focusing on the details gives people confidence in our products. Weave a consistent story
                                        across our fabric and be diligent about vocabulary across all messaging by being brand
                                        conscious across products to create a seamless flow across all the things. Let people know
                                        that they can jump in and start working expecting to find a dependable experience across
                                        all the things. Keep teams in the loop about what is happening by informing them of
                                        relevant features, products and opportunities for success. Be on the journey with them and
                                        highlight the key points that will help them the most - right now. Be in the moment by
                                        focusing attention on the important bits first.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Be practical, with a wink
                                    </h3>
                                    <p className="mt-1 text-gray-800 dark:text-white/70">
                                        Keep our own story short and give teams just enough to get moving. Get to the point and be
                                        direct. Be concise - we tell the story of how we can help, but we do it directly and with
                                        purpose. Be on the lookout for opportunities and be quick to offer a helping hand. At the
                                        same time realize that novbody likes a nosy neighbor. Give the user just enough to know
                                        that something awesome is around the corner and then get out of the way. Write clear,
                                        accurate, and concise text that makes interusers more usable and consistent - and builds
                                        trust. We strive to write text that is understandable by anyone, anywhere, regardless of
                                        their culture or language so that everyone feels they are part of the team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            onClick={onClose}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            I Accept
                        </button>
                        <button
                            onClick={onClose}
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditSupplier;

