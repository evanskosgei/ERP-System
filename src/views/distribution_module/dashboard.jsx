import React from 'react'
import PageHeader from '../../layout/layoutsection/pageHeader/pageHeader';
import { Link } from "react-router-dom";

const Distribution_dashboard = () => {
    return (
        <div>
            <PageHeader currentpage="Distribution Dashboard" activepage="Distribution" mainpage="Distributions Dashboard" />
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Manager Distributions</h5>
                        </div>
                        <div className="box-body">
                            <div className="border-b-2 border-gray-200 dark:border-white/10">
                                <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                    <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                                        Manage Distributions
                                    </Link>
                                    {/* <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                        Deactivated Distributions
                                    </Link> */}

                                </nav>
                            </div>

                            <div className="mt-3">
                                <div id="underline-1" role="tabpanel" aria-labelledby="underline-item-1">
                                    <ul className="flex flex-col">
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">

                                                            <p className="mb-0 text-sm">Dispatch Mobiles Phones</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Dispatch mobile phones</p>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Approve Dispached Phones</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve Dispached mobile Phones</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">List Active Dispatched Phones</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List Active Dispatched mobile Phones</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                                {/* <div id="underline-2" className="hidden" role="tabpanel" aria-labelledby="underline-item-2">
                                    <ul className="flex flex-col">
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/inventory/deactivated-distribution-centers" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">List Deactivated Distribution Centers</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of a deactivated distribution centers</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/inventory/reactivated-distribution-centers" className="flex space-x-3 rtl:space-x-reverse">
                                                    <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                        <i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                    </div>
                                                    <div className="">
                                                        <p className="mb-0 text-sm">Approve Reactivated Distribution Centers</p>
                                                        <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve a distribution center</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/inventory/deleted-distribution-centers" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">List Deleted Distribution Centers</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of deleted distribution center</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Team Leader Distribution</h5>
                        </div>
                        <div className="box-body">
                            <div className="border-b-2 border-gray-200 dark:border-white/10">
                                <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                    <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-5" data-hs-tab="#underline-5" aria-controls="underline-5">
                                        Manage Distributios
                                    </Link>
                                    {/* <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-6" data-hs-tab="#underline-6" aria-controls="underline-6">
                                        Manage Stock In Transit
                                    </Link> */}

                                </nav>
                            </div>

                            <div className="mt-3">
                                <div id="underline-5" role="tabpanel" aria-labelledby="underline-item-5">
                                    <ul className="flex flex-col">
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/inventory/receive-stock" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">

                                                            <p className="mb-0 text-sm">Dispatch Phones</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Dispatch Mobile Phones</p>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/inventory/approve-receive-stock" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Approve Dispatched Phones</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve dispatched mobile phones</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/inventory/available-stock" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">List Active Dispatched Phones</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of Active Dispatched Mobile Phones</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                                {/* <div id="underline-6" className="hidden" role="tabpanel" aria-labelledby="underline-item-6">
                                    <ul className="flex flex-col">
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/supplier/create-supplier" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">

                                                            <p className="mb-0 text-sm">Update Stock In Transit</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Update stock in transit details</p>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/supplier/approve-suppliers" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Approve Updated Stock Details</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve updated transit stock details</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li> */}
                                        {/* <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/active-suppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Available Products</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of available products</p>
														</div>
													</div>
												</Link>
											</div>
										</li> */}
                                    {/* </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Distribution_dashboard;
