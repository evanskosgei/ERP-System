import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";

const SupplierDashboard = () => {
	return (
		<div>
			<PageHeader currentpage="Supplier Dashboard" activepage="Supplier" mainpage="Supplier Dashboard" />


			<div className="grid grid-cols-12 gap-6">


				<div className="col-span-12 md:col-span-6 xxl:!col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Product Suppliers</h5>
						</div>
						<div className="box-body">
							<div className="border-b-2 border-gray-200 dark:border-white/10">
								<nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
										Manage Suppliers
									</Link>
									<Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
										Deactivated Suppliers
									</Link>

								</nav>
							</div>

							<div className="mt-3">
								<div id="underline-1" role="tabpanel" aria-labelledby="underline-item-1">
									<ul className="flex flex-col">
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/addsupplier" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">

															<p className="mb-0 text-sm">Create a New Supplier</p>
															<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Add a new product supplier</p>

														</div>
													</div>
												</Link>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/approvesuppliers" className="">
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
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/activesuppliers" className="">
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
										</li>
									</ul>

								</div>
								<div id="underline-2" className="hidden" role="tabpanel" aria-labelledby="underline-item-2">
									<ul className="flex flex-col">
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/deactivesuppliers" className="">
													<div className="flex space-x-3 rtl:space-x-reverse">
														<div className="avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
															<i className="ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
														</div>
														<div className="">
															<p className="mb-0 text-sm">List Deactivated Product Suppliers</p>
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
														<p className="mb-0 text-sm">Approve Reactivated Product Supplier</p>
														<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve a Reactivated Product supplier</p>
													</div>
												</div>
											</div>
										</li>
										<li className="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
											<div className="sm:flex w-full space-y-2">
												<Link to="/deletedsuppliers" className="">
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

				{/* <div className= "col-span-12 md:col-span-6 xxl:!col-span-4">
                      <div className= "box">
                          <div className= "box-header">
                              <h5 className= "box-title">Tabs With Underline</h5>
                          </div>
                          <div className= "box-body">
                            <div className= "border-b-2 border-gray-200 dark:border-white/10">
                              <nav className= "-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                <Link className= "hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                                  Tab 1
                                </Link>
                                <Link className= "hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                  Tab 2
                                </Link>
                                <Link className= "hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-3" data-hs-tab="#underline-3" aria-controls="underline-3">
                                  Tab 3
                                </Link>
                              </nav>
                            </div>

                            <div className= "mt-3">
                              <div id="underline-1" role="tabpanel" aria-labelledby="underline-item-1">
                                <p className= "text-gray-500 dark:text-white/70 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                                  How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                                </p>
                              </div>
                              <div id="underline-2" className= "hidden" role="tabpanel" aria-labelledby="underline-item-2">
                                <p className= "text-gray-500 dark:text-white/70 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                                  How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                                </p>
                              </div>
                              <div id="underline-3" className= "hidden" role="tabpanel" aria-labelledby="underline-item-3">
                                <p className= "text-gray-500 dark:text-white/70 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                                  Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                                </p>
                              </div>
                            </div>
                          </div>
                      </div>
            </div>

			<div className= "col-span-12 md:col-span-6 xxl:!col-span-4">
                      <div className= "box">
                          <div className= "box-header">
                              <h5 className= "box-title">Tabs With Underline</h5>
                          </div>
                          <div className= "box-body">
                            <div className= "border-b-2 border-gray-200 dark:border-white/10">
                              <nav className= "-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                <Link className= "hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary active" to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                                  Tab 1
                                </Link>
                                <Link className= "hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                  Tab 2
                                </Link>
                                <Link className= "hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500  dark:text-white/70 hover:text-primary" to="#" id="underline-item-3" data-hs-tab="#underline-3" aria-controls="underline-3">
                                  Tab 3
                                </Link>
                              </nav>
                            </div>

                            <div className= "mt-3">
                              <div id="underline-1" role="tabpanel" aria-labelledby="underline-item-1">
                                <p className= "text-gray-500 dark:text-white/70 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                                  How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                                </p>
                              </div>
                              <div id="underline-2" className= "hidden" role="tabpanel" aria-labelledby="underline-item-2">
                                <p className= "text-gray-500 dark:text-white/70 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                                  How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                                </p>
                              </div>
                              <div id="underline-3" className= "hidden" role="tabpanel" aria-labelledby="underline-item-3">
                                <p className= "text-gray-500 dark:text-white/70 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                                  Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                                </p>
                              </div>
                            </div>
                          </div>
                      </div>
            </div> */}



				{/* <div className="col-span-12">
					<div className="box">
						<div className="box-body">





							<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
								<div>
									<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Suppliers:</h2>
									<ul className="space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400">
										<li>
											<Link to="/addsupplier" className="text-sky-400 font-bold">Add Supplier</Link>
										</li>
										<li>
											<Link to="/activesuppliers" className="text-sky-400 font-bold">List of active Suppliers</Link>
										</li>
										<li>
											<Link to="/inactivesuppliers" className="text-sky-400 font-bold">List of Inactive Suppliers</Link>
										</li>
									</ul>
								</div>

							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};
export default SupplierDashboard;
