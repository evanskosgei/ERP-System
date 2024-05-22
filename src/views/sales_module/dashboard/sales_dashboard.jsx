import React from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { Link } from "react-router-dom";

const Sales_dashboard = () => {
    return (
        <div>
            <PageHeader currentpage="Sales Dashboard" activepage="Sales" mainpage="Sales Dashboard" />
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Stock Management</h5>
                        </div>
                        <div className="box-body">
                            <div className="border-b-2 border-gray-200 dark:border-white/10">
                                <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                    <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                                        Agent Stock 
                                    </Link>
                                </nav>
                            </div>

                            <div className="mt-3">
                                <div id="underline-1" role="tabpanel" aria-labelledby="underline-item-1">
                                    <ul className="flex flex-col">
                                    
                                    <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/distribution/agent-stock-to-receive" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">

                                                            <p className="mb-0 text-sm">Receive Stock</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Receive Stock from Team Leader</p>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>

                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/distribution/agent-stock-available" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">

                                                            <p className="mb-0 text-sm">List Stock Available</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List available stock for sale</p>

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
                            <h5 className="box-title">Sales Dashboard</h5>
                        </div>
                        <div className="box-body">
                            <div className="border-b-2 border-gray-200 dark:border-white/10">
                                <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                    <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                                        Manage Sales
                                    </Link>
                                </nav>
                            </div>

                            <div className="mt-3">
                                <div id="underline-2" role="tabpanel" aria-labelledby="underline-item-2">
                                    <ul className="flex flex-col">
                                    

                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/sales/generate-cash-sales-receipt" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">

                                                            <p className="mb-0 text-sm">Generate a Cash Sale Receipt</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Record cash sale transaction</p>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        
                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/sales/unapproved-cash-sales-receipts" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">Approve Cash Sales Record</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve cash sales transaction</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>

                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="/sales/approved-cash-sales-receipts" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">
                                                            <p className="mb-0 text-sm">List Cash Sale Records</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List cash sales record</p>
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
                            <h5 className="box-title">Agent Sales Targets</h5>
                        </div>
                        <div className="box-body">
                            <div className="border-b-2 border-gray-200 dark:border-white/10">
                                <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                    <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                                        Agent Sales Targets Reports
                                    </Link>
                                </nav>
                            </div>

                            <div className="mt-3">
                                <div id="underline-2" role="tabpanel" aria-labelledby="underline-item-2">
                                    <ul className="flex flex-col">
                                    

                                        <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                            <div className="sm:flex w-full space-y-2">
                                                <Link to="#" className="">
                                                    <div className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
                                                            <i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
                                                        </div>
                                                        <div className="">

                                                            <p className="mb-0 text-sm">Weekly Targets Report</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Monitor weekly targets</p>

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

export default Sales_dashboard;
