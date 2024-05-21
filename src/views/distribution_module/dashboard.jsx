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
                            <h5 className="box-title">Stockist Distributions</h5>
                        </div>
                        <div className="box-body">
                            <div className="border-b-2 border-gray-200 dark:border-white/10">
                                <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                    <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                                        Stockist Dispatch Management
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
                                                <Link to="/distribution/create-dispatch-to-manager/" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Stockist Dispatch a Device</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Dispatch a mobile phone to manager</p>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="#" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Stockist Dispatch Multiple Devices</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Dispatch multiple mobile phones to manager</p>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/distribution/approve-dispatch-to-manager" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Stockist Approve Dispatch</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve Manager Dispatched Stock</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/distribution/list-dispatch-to-manager" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Stock Dispatched to Managers</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List Devices Dispatched to Managers</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        
                                    </ul>

                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Manager Distributions</h5>
                        </div>
                        <div className="box-body">
                            <div className="border-b-2 border-gray-200 dark:border-white/10">
                                <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                    <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                                    Manager Dispatch Management
                                    </Link>
                                    {/* <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                        Deactivated Distributions
                                    </Link> */}

                                </nav>
                            </div>

                            <div className="mt-3">
                                <div id="underline-2" role="tabpanel" aria-labelledby="underline-item-2">
                                    <ul className="flex flex-col">
                                    <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/distribution/manager-stock-to-receive" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Manager Receive Dispatch</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Receive dispatched stock from stockist</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>

                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/distribution/manager-stock-available" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Manager Stock Available</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List manager's stock available</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>

                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/distribution/manager-create-dispatch-to-team-leader" className=""> 
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">

                                                            <p className="mb-0 text-sm">Manager Dispatch Devices</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Dispatch mobile phones to managers</p>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/distribution/manager-approve-dispatch-to-team-leader" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Manager Approve Dispatch</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve Dispatched Stock</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/distribution/manager-list-dispatch-to-team-leader" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Manager List Dispatched Devices</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List Active Dispatched mobile Phones</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        
                                    </ul>

                                </div>

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
                                    Team Leader Distributions
                                    </Link>
                                    {/* <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-6" data-hs-tab="#underline-6" aria-controls="underline-6">
                                        Manage Stock In Transit
                                    </Link> */}

                                </nav>
                            </div>

                            <div className="mt-3">
                                <div id="underline-3" role="tabpanel" aria-labelledby="underline-item-3">
                                    <ul className="flex flex-col">

                                    <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/distribution/teamleader/receive-dispatch" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Receive Dispatched Phones</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Receive Dispatched Mobile Phones</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>

                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/distribution/teamleader/dispatch" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">

                                                            <p className="mb-0 text-sm">Team Leader Dispatch Phones</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Dispatch Mobile Phones</p>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/distribution/teamleader/new-dispatch" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Team Leader Approve Dispatch</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve dispatched mobile phones</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/distribution/teamleader/active-dispatch" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Team Leader List Dispatched Devices</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of Active Dispatched Mobile Phones</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        
                                    </ul>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Distribution_dashboard;
