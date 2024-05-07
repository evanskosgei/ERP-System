import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";

const ProductManagement = () => {
	return (
		<div>
			<PageHeader currentpage="Product Management" href="/inventory/dashboard" activepage="Inventory" mainpage="Products Management" />

			<div className="grid grid-cols-12 gap-6">
			<div className="col-span-12 md:col-span-6 xxl:!col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Mobile Phones Models</h5>
						</div>
						<div className="box-body">
							<div className="border-b-2 border-gray-200 dark:border-white/10">
								<nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-3" data-hs-tab="#underline-3" aria-controls="underline-1">
										Manage Models
									</Link>
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-4" data-hs-tab="#underline-4" aria-controls="underline-2">
										Deactivated Models
									</Link>

								</nav>
							</div>

							<div className="mt-3">
								<div id="underline-3" role="tabpanel" aria-labelledby="underline-item-3">
									<ul className="flex flex-col">
									<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/active-suppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Active Phone Models</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of active Phone models</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/create-supplier" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">

															<p className="mb-0 text-sm">Create a New Phone Model</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Add a new Phone model</p>

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
															<p className="mb-0 text-sm">Approve New Phone Model</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve a new Phone model</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										
									</ul>

								</div>
								<div id="underline-4" className="hidden" role="tabpanel" aria-labelledby="underline-item-4">
									<ul className="flex flex-col">
									<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/deleted-suppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Deleted Phone Models</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of deleted Phone models</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/deactivated-suppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Deactivated Phone Models</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of a deactivated Phone models</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<div className="flex space-x-3 rtl:space-x-reverse">
													<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
														<i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
													</div>
													<div className="">
														<p className="mb-0 text-sm">Approve Reactivated Phone Models</p>
														<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve a Phone models</p>
													</div>
												</div>
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
							<h5 className="box-title">Television Models</h5>
						</div>
						<div className="box-body">
							<div className="border-b-2 border-gray-200 dark:border-white/10">
								<nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-3" data-hs-tab="#underline-3" aria-controls="underline-1">
										Manage Models
									</Link>
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-4" data-hs-tab="#underline-4" aria-controls="underline-2">
										Deactivated Models
									</Link>

								</nav>
							</div>

							<div className="mt-3">
								<div id="underline-3" role="tabpanel" aria-labelledby="underline-item-3">
									<ul className="flex flex-col">
									<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/active-suppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Active TV Models</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of active TV models</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/create-supplier" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">

															<p className="mb-0 text-sm">Create a New TV Model</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Add a new TV model</p>

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
															<p className="mb-0 text-sm">Approve New TV Model</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve a new TV model</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										
									</ul>

								</div>
								<div id="underline-4" className="hidden" role="tabpanel" aria-labelledby="underline-item-4">
									<ul className="flex flex-col">
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/deactivated-suppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Deactivated TV Models</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of a deactivated TV models</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<div className="flex space-x-3 rtl:space-x-reverse">
													<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
														<i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
													</div>
													<div className="">
														<p className="mb-0 text-sm">Approve Reactivated TV Models</p>
														<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve a TV models</p>
													</div>
												</div>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/deleted-suppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Deleted TV Models</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of deleted TV models</p>
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
							<h5 className="box-title">Accessories Models</h5>
						</div>
						<div className="box-body">
							<div className="border-b-2 border-gray-200 dark:border-white/10">
								<nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-3" data-hs-tab="#underline-3" aria-controls="underline-1">
										Manage Models
									</Link>
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-4" data-hs-tab="#underline-4" aria-controls="underline-2">
										Deactivated Models
									</Link>

								</nav>
							</div>

							<div className="mt-3">
								<div id="underline-3" role="tabpanel" aria-labelledby="underline-item-3">
									<ul className="flex flex-col">
									<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/active-suppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Active Accessory Models</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of active Accessory models</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/create-supplier" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">

															<p className="mb-0 text-sm">Create a New Accessory Model</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Add a new Accessory model</p>

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
															<p className="mb-0 text-sm">Approve New Accessory Model</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve a new Accessory model</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										
									</ul>

								</div>
								<div id="underline-4" className="hidden" role="tabpanel" aria-labelledby="underline-item-4">
									<ul className="flex flex-col">
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/deactivated-suppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Deactivated Accessory Models</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of a deactivated Accessory models</p>
														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<div className="flex space-x-3 rtl:space-x-reverse">
													<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
														<i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
													</div>
													<div className="">
														<p className="mb-0 text-sm">Approve Reactivated Accessory Models</p>
														<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve a Accessory models</p>
													</div>
												</div>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/deleted-suppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Deleted Accessory Models</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of deleted Accessory models</p>
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
							<h5 className="box-title">Products Categories</h5>
						</div>
						<div className="box-body">
							

							<div className="mt-3">
								<div id="underline-3" role="tabpanel" aria-labelledby="underline-item-3">
									<ul className="flex flex-col">
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/create-supplier" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">

															<p className="mb-0 text-sm">List Product Categories</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of active Categories</p>

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
															<p className="mb-0 text-sm">List Product Sub Categories</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of active Sub Categories</p>
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
export default ProductManagement;
