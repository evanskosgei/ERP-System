import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";

const ExpensesDashboard = () => {
	return (
		<div>
			<PageHeader currentpage="Expenses Dashboard" activepage="Expenses" mainpage="Expenses Dashboard" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 md:col-span-6 xxl:!col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Finance</h5>
						</div>
						<div className="box-body">
							<div className="border-b-2 border-gray-200 dark:border-white/10">
								<nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#finance-1" aria-controls="underline-1">
										Manage Injections
									</Link>
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-2" data-hs-tab="#finance-2" aria-controls="underline-2">
										Deactivated Injections
									</Link>
								</nav>
							</div>

							<div className="mt-3">
								<div id="finance-1" role="tabpanel" aria-labelledby="underline-item-1">
									<ul className="flex flex-col">
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/finance/create-capital-injection" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">

															<p className="mb-0 text-sm">Create Capital Injections</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Add a new Capital Injection</p>

														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/finance/new-unapproved-capital-injection" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">Approve a New Capital Injection</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve new Capital Injections</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/finance/active-capital-injection" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Active Capital Injections</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of active capital Injections</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
									</ul>
								</div>
								<div id="finance-2" className="hidden" role="tabpanel" aria-labelledby="underline-item-2">
									<ul className="flex flex-col">
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/finance/deactivated-capital-injection" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Deactivated Capital Injections</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of deactivated Capital Injections</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/finance/reactivated-capital-injection" className="flex space-x-3 rtl:space-x-reverse">
													<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
														<i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
													</div>
													<div className="">
														<p className="mb-0 text-sm">Approve Reactivated Capital Injections</p>
														<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve a reactivated Capital Injections</p>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/finance/deleted-capital-injection" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Deleted Capital Injections</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of deleted Capital Injections</p>
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
	);
};
export default ExpensesDashboard;
