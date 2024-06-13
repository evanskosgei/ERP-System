import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { useAuth } from "./../../../providers/AuthProvider";

const Agent_dashboard = ({ local_varaiable }) => {
  const { user } = useAuth();
  return (
    <div>
      <PageHeader currentpage={`Welcome ${user.user_firstName}`} activepage="Home" mainpage="Dashboard"/>

      <div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 md:col-span-6 xxl:col-span-4">
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex">
								<div className="flex space-x-3 rtl:space-x-reverse">
									<div className="avatar p-2 rounded-sm bg-primary/10 dark:primary/10">
										<svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
											<path className="fill-primary" d="M9,10h2.5c0.276123,0,0.5-0.223877,0.5-0.5S11.776123,9,11.5,9H10V8c0-0.276123-0.223877-0.5-0.5-0.5S9,7.723877,9,8v1c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2h1c0.5523071,0,1,0.4476929,1,1s-0.4476929,1-1,1H7.5C7.223877,15,7,15.223877,7,15.5S7.223877,16,7.5,16H9v1.0005493C9.0001831,17.2765503,9.223999,17.5001831,9.5,17.5h0.0006104C9.7765503,17.4998169,10.0001831,17.276001,10,17v-1c1.1045532,0,2-0.8954468,2-2s-0.8954468-2-2-2H9c-0.5523071,0-1-0.4476929-1-1S8.4476929,10,9,10z M21.5,12H17V2.5c0.000061-0.0875244-0.0228882-0.1735229-0.0665283-0.2493896c-0.1375732-0.2393188-0.4431152-0.3217773-0.6824951-0.1842041l-3.2460327,1.8603516L9.7481079,2.0654297c-0.1536865-0.0878906-0.3424072-0.0878906-0.4960938,0l-3.256897,1.8613281L2.7490234,2.0664062C2.6731567,2.0227661,2.5871582,1.9998779,2.4996338,1.9998779C2.2235718,2.000061,1.9998779,2.223938,2,2.5v17c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5H19c1.6561279-0.0018311,2.9981689-1.3438721,3-3v-6.5006104C21.9998169,12.2234497,21.776001,11.9998169,21.5,12z M4.5,21c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5V3.3623047l2.7412109,1.5712891c0.1575928,0.0872192,0.348877,0.0875854,0.5068359,0.0009766L9.5,3.0761719l3.2519531,1.8583984c0.157959,0.0866089,0.3492432,0.0862427,0.5068359-0.0009766L16,3.3623047V19c0.0008545,0.7719116,0.3010864,1.4684448,0.7803345,2H4.5z M21,19c0,1.1045532-0.8954468,2-2,2s-2-0.8954468-2-2v-6h4V19z"></path>
										</svg>
									</div>
									<h6 className="text-lg font-medium text-gray-800 mb-2 dark:text-white my-auto">Available Products </h6>
								</div>
								{/* <span className="badge bg-primary/10 text-primary py-1 ltr:ml-auto rtl:mr-auto !my-auto">
									<i className="ti ti-trending-up"></i> 20%
								</span> */}
							</div>
							<div className="mt-2">
								<h2 className="text-2xl font-semibold text-gray-800 dark:text-white">1,900,506</h2>
								<p className="text-xs text-gray-400 ">Devices Available</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-4">
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex">
								<div className="flex space-x-3 rtl:space-x-reverse">
									<div className="avatar p-2 rounded-sm bg-secondary/10">
										<svg className="fill-secondary" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
											viewBox="0 0 24 24">
											<path className="fill-secondary"
												d="M9.5,7h7C16.776123,7,17,6.776123,17,6.5S16.776123,6,16.5,6h-7C9.223877,6,9,6.223877,9,6.5S9.223877,7,9.5,7z M7.5,11h9c0.276123,0,0.5-0.223877,0.5-0.5S16.776123,10,16.5,10h-9C7.223877,10,7,10.223877,7,10.5S7.223877,11,7.5,11z M20.5,2H3.4993896C3.2234497,2.0001831,2.9998169,2.223999,3,2.5v19c-0.000061,0.1124268,0.0378418,0.2216187,0.1074829,0.3098755c0.1710205,0.2167358,0.4853516,0.2537231,0.7020874,0.0827026l2.8652344-2.2617188l2.3583984,1.7695312c0.1777954,0.1328125,0.421814,0.1328125,0.5996094,0L12,19.625l2.3671875,1.7753906c0.1777954,0.1328125,0.421814,0.1328125,0.5996094,0l2.3583984-1.7695312l2.8652344,2.2617188C20.2785034,21.9623413,20.3876343,22.0002441,20.5,22h0.0006104C20.7766113,21.9998169,21.0001831,21.7759399,21,21.5V2.4993896C20.9998169,2.2234497,20.776001,1.9998169,20.5,2z M20,20.46875l-2.3574219-1.8613281c-0.0882568-0.069519-0.1972656-0.1072998-0.3095703-0.1074219c-0.1080933-0.000061-0.2132568,0.0349121-0.2998047,0.0996094L14.6669922,20.375l-2.3671875-1.7753906c-0.1777954-0.1328125-0.421814-0.1328125-0.5996094,0L9.3330078,20.375l-2.3662109-1.7753906c-0.1817017-0.1348877-0.4311523-0.1317139-0.609375,0.0078125L4,20.46875V3h16V20.46875z M7.5,15h9c0.276123,0,0.5-0.223877,0.5-0.5S16.776123,14,16.5,14h-9C7.223877,14,7,14.223877,7,14.5S7.223877,15,7.5,15z">
											</path>
										</svg>
									</div>
									<h6 className="text-lg font-medium text-gray-800 mb-2 dark:text-white my-auto">Monthly Sales Target</h6>
								</div>
								{/* <span className="badge bg-secondary/10 text-secondary py-1 ltr:ml-auto rtl:mr-auto !my-auto"><i
									className="ti ti-trending-up"></i> 1.8%</span> */}
							</div>
							<div className="mt-2">
								<h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Ksh 2,500,000</h2>
								<p className="text-xs text-gray-400 ">Target this month</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-4">
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex">
								<div className="flex space-x-3 rtl:space-x-reverse">
									<div className="avatar p-2 rounded-sm bg-warning/10">
										<svg className="fill-warning" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
											viewBox="0 0 24 24" id="shopping-bag">
											<path className="fill-warning" fill="#4B5563"
												d="M19.5,7H16V5.9169922c0-2.2091064-1.7908325-4-4-4s-4,1.7908936-4,4V7H4.5C4.4998169,7,4.4996338,7,4.4993896,7C4.2234497,7.0001831,3.9998169,7.223999,4,7.5V19c0.0018311,1.6561279,1.3438721,2.9981689,3,3h10c1.6561279-0.0018311,2.9981689-1.3438721,3-3V7.5c0-0.0001831,0-0.0003662,0-0.0006104C19.9998169,7.2234497,19.776001,6.9998169,19.5,7z M9,5.9169922c0-1.6568604,1.3431396-3,3-3s3,1.3431396,3,3V7H9V5.9169922z M19,19c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H7c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V8h3v2.5C8,10.776123,8.223877,11,8.5,11S9,10.776123,9,10.5V8h6v2.5c0,0.0001831,0,0.0003662,0,0.0005493C15.0001831,10.7765503,15.223999,11.0001831,15.5,11c0.0001831,0,0.0003662,0,0.0006104,0C15.7765503,10.9998169,16.0001831,10.776001,16,10.5V8h3V19z">
											</path>
										</svg>
									</div>
									<h6 className="text-lg font-medium text-gray-800 mb-2 dark:text-white my-auto">New Customers</h6>
								</div>
								{/* <span className="badge bg-warning/10 text-warning py-1 ltr:ml-auto rtl:mr-auto !my-auto"><i
									className="ti ti-trending-down"></i> 1.8%</span> */}
							</div>
							<div className="mt-2">
								<h2 className="text-2xl font-semibold text-gray-800 dark:text-white">58</h2>
								<p className="text-xs text-gray-400 ">This Month</p>
							</div>
						</div>
					</div>
				</div>
			
			</div>

      <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Stock Management</h5>
                        </div>
                        <div>

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

                <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Cash Sales</h5>
                        </div>
                        <div>
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
                                                            <p className="mb-0 text-sm">Approve Cash Sales Receipt</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">Approve cash sale transactions</p>
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
                                                            <p className="mb-0 text-sm">List Cash Sale Receipt</p>
                                                            <p className="mb-0 text-gray-500 dark:text-white/70 text-xs">List cash sale transactions</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                            </ul>
                            </div>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Agent Sales Targets</h5>
                        </div>
                        <div>
                          
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
  );
}

export default Agent_dashboard;
