import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";

const UsersDashboard = () => {
	return (
		<div>
			<PageHeader currentpage="Users Dashboard" activepage="Users" mainpage="Users Dashboard" />

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 md:col-span-6 xxl:!col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Users</h5>
						</div>
						<div className="box-body">
							<div className="border-b-2 border-gray-200 dark:border-white/10">
								<nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
										Manage Users
									</Link>
									{/* <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
										Deactivated Suppliers
									</Link> */}

								</nav>
							</div>

							<div className="mt-3">
								<div id="underline-1" role="tabpanel" aria-labelledby="underline-item-1">
									<ul className="flex flex-col">
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/users/create-user" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">

															<p className="mb-0 text-sm">Create a New User</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Add a new product supplier</p>

														</div>
													</div>
												</Link>
											</div>
										</li>
										{/* <li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/approve-suppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">Approve a New Supplier</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve a new product supplier</p>
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
															<p className="mb-0 text-sm">List Active Suppliers</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of active product suppliers</p>
														</div>
													</div>
												</Link>
											</div>
										</li> */}
									</ul>

								</div>
								<div id="underline-2" className="hidden" role="tabpanel" aria-labelledby="underline-item-2">
									<ul className="flex flex-col">
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/supplier/deactivated-suppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Deactivated Suppliers</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of a Deactivated Product Suppliers</p>
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
														<p className="mb-0 text-sm">Approve Reactivated Supplier</p>
														<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve a Reactivated Product supplier</p>
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
															<p className="mb-0 text-sm">List Deleted Suppliers</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of active product suppliers</p>
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
export default UsersDashboard;
