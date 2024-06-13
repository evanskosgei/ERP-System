import React from "react";
import PageHeader from "../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";

const ProductManagement = () => {
	return (
		<div>
			<PageHeader currentpage="Product Management" activepage="Inventory" mainpage="Products Management" />

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 md:col-span-6 xxl:!col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Mobile Phones Models</h5>
						</div>
						<div>
							

									<ul className="flex flex-col">
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/inventory/active-phones-models" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Phone Models</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of active Phone models</p>
														</div>
													</div>
												</Link>
											</div>
										</li>

										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/inventory/active-tv-model" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List TV Models</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of active TV models</p>
														</div>
													</div>
												</Link>
											</div>
										</li>

										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/inventory/active-accessories-model" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Accessory Models</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List of active Accessory models</p>
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
	);
};
export default ProductManagement;
