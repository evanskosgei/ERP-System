import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";

const InventoryDashboard = () => {
	return (
		<div>
			<PageHeader currentpage="Inventory Dashboard" activepage="Inventory" mainpage="Inventory Dashboard" />

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 md:col-span-6 xxl:!col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Distribution Centers</h5>
						</div>
						<div className="box-body">
							<div className="border-b-2 border-gray-200 dark:border-white/10">
								<nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
										Manage Centers
									</Link>
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
										Deactivated Centers
									</Link>

								</nav>
							</div>

							<div className="mt-3">
								<div id="underline-1" role="tabpanel" aria-labelledby="underline-item-1">
									<ul className="flex flex-col">
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/inventory/create-distribution-center" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">

															<p className="mb-0 text-sm">Create a New Distribution Center</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Add a new distribution center</p>

														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/inventory/approve-new-distribution-center" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">Approve New Distribution Center</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve a new distribution center</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/inventory/active-distribution-centers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Active Distribution Centers</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of active distribution centers</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
									</ul>

								</div>
								<div id="underline-2" className="hidden" role="tabpanel" aria-labelledby="underline-item-2">
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

								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-span-12 md:col-span-6 xxl:!col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Stock In Transit</h5>
						</div>
						<div className="box-body">
							<div className="border-b-2 border-gray-200 dark:border-white/10">
								<nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-5" data-hs-tab="#underline-5" aria-controls="underline-5">
										Receive Stock
									</Link>
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-6" data-hs-tab="#underline-6" aria-controls="underline-6">
									   Manage Stock In Transit
									</Link>

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

															<p className="mb-0 text-sm">Receive Stock</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List stock in transit to receive</p>

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
															<p className="mb-0 text-sm">Approve Stock Received</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve stock received from transit</p>
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
															<p className="mb-0 text-sm">List Available Products</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of available products</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
									</ul>

								</div>
								<div id="underline-6" className="hidden" role="tabpanel" aria-labelledby="underline-item-6">
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
										</li>
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
									</ul>

								</div>
								
							</div>
						</div>
					</div>
				</div>

				<div className="col-span-12 md:col-span-6 xxl:!col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Cash Stock Purchase </h5>
						</div>
						<div className="box-body">
							<div className="border-b-2 border-gray-200 dark:border-white/10">
								<nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-7" data-hs-tab="#underline-7" aria-controls="underline-7">
										Buy Products Using Cash
									</Link>
									

								</nav>
							</div>

							<div className="mt-3">
								<div id="underline-7" role="tabpanel" aria-labelledby="underline-item-7">
									<ul className="flex flex-col">
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/inventory/buy-using-cash" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">Buy Stock with Cash</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Cash stock purchase transaction</p>

														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/inventory/new-stock-purchased-using-cash" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">Approve Cash Stock Purchases</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve cash stock purchases</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/inventory/active-stock-purchased-using-cash" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Stock Purchased with Cash</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of previous cash stock purchases</p>
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
							<h5 className="box-title">Purchase Stock using Trade Financing</h5>
						</div>
						<div className="box-body">
							<div className="border-b-2 border-gray-200 dark:border-white/10">
								<nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-8" data-hs-tab="#underline-8" aria-controls="underline-8">
										Use Prepayments
									</Link>
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-9" data-hs-tab="#underline-9" aria-controls="underline-9">
									 Use Credit Notes
									</Link>

								</nav>
							</div>

							<div className="mt-3">
								<div id="underline-8" role="tabpanel" aria-labelledby="underline-item-8">
									<ul className="flex flex-col">
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">

															<p className="mb-0 text-sm">Buy Stock Using Prepayments</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List stock in transit to receive</p>

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
															<p className="mb-0 text-sm">Approve Stock purchased</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve purchase using prepayment</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/active-suppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Purchases using Prepayment</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of purchases using prepayments</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
									</ul>

								</div>
								<div id="underline-9" className="hidden" role="tabpanel" aria-labelledby="underline-item-9">
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
										</li>
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
export default InventoryDashboard;
