import React from "react";
import ALLImages from "../../../common/imagesdata";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { connect } from "react-redux"
import { Link } from 'react-router-dom';

const MainDashboard = ({local_varaiable}) => {
	return (
		<div>
			<PageHeader currentpage="Dashboard" activepage="Home" mainpage="Dashboard"/>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex">
								<div className="flex space-x-3 rtl:space-x-reverse">
									<div className="avatar p-2 rounded-sm bg-primary/10 dark:primary/10">
										<svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
											<path className="fill-primary" d="M9,10h2.5c0.276123,0,0.5-0.223877,0.5-0.5S11.776123,9,11.5,9H10V8c0-0.276123-0.223877-0.5-0.5-0.5S9,7.723877,9,8v1c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2h1c0.5523071,0,1,0.4476929,1,1s-0.4476929,1-1,1H7.5C7.223877,15,7,15.223877,7,15.5S7.223877,16,7.5,16H9v1.0005493C9.0001831,17.2765503,9.223999,17.5001831,9.5,17.5h0.0006104C9.7765503,17.4998169,10.0001831,17.276001,10,17v-1c1.1045532,0,2-0.8954468,2-2s-0.8954468-2-2-2H9c-0.5523071,0-1-0.4476929-1-1S8.4476929,10,9,10z M21.5,12H17V2.5c0.000061-0.0875244-0.0228882-0.1735229-0.0665283-0.2493896c-0.1375732-0.2393188-0.4431152-0.3217773-0.6824951-0.1842041l-3.2460327,1.8603516L9.7481079,2.0654297c-0.1536865-0.0878906-0.3424072-0.0878906-0.4960938,0l-3.256897,1.8613281L2.7490234,2.0664062C2.6731567,2.0227661,2.5871582,1.9998779,2.4996338,1.9998779C2.2235718,2.000061,1.9998779,2.223938,2,2.5v17c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5H19c1.6561279-0.0018311,2.9981689-1.3438721,3-3v-6.5006104C21.9998169,12.2234497,21.776001,11.9998169,21.5,12z M4.5,21c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5V3.3623047l2.7412109,1.5712891c0.1575928,0.0872192,0.348877,0.0875854,0.5068359,0.0009766L9.5,3.0761719l3.2519531,1.8583984c0.157959,0.0866089,0.3492432,0.0862427,0.5068359-0.0009766L16,3.3623047V19c0.0008545,0.7719116,0.3010864,1.4684448,0.7803345,2H4.5z M21,19c0,1.1045532-0.8954468,2-2,2s-2-0.8954468-2-2v-6h4V19z"></path>
										</svg>
									</div>
									<h6 className="text-lg font-medium text-gray-800 mb-2 dark:text-white my-auto">Total Revenue </h6>
								</div>
								{/* <span className="badge bg-primary/10 text-primary py-1 ltr:ml-auto rtl:mr-auto !my-auto">
									<i className="ti ti-trending-up"></i> 20%
								</span> */}
							</div>
							<div className="mt-2">
								<h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Ksh 26,35,262</h2>
								<p className="text-xs text-gray-400 ">in last week</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
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
									<h6 className="text-lg font-medium text-gray-800 mb-2 dark:text-white my-auto">Total Sales</h6>
								</div>
								{/* <span className="badge bg-secondary/10 text-secondary py-1 ltr:ml-auto rtl:mr-auto !my-auto"><i
									className="ti ti-trending-up"></i> 1.8%</span> */}
							</div>
							<div className="mt-2">
								<h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Ksh 56,35,262</h2>
								<p className="text-xs text-gray-400 ">in last week</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
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
									<h6 className="text-lg font-medium text-gray-800 mb-2 dark:text-white my-auto">Total Products</h6>
								</div>
								{/* <span className="badge bg-warning/10 text-warning py-1 ltr:ml-auto rtl:mr-auto !my-auto"><i
									className="ti ti-trending-down"></i> 1.8%</span> */}
							</div>
							<div className="mt-2">
								<h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Ksh 4,262</h2>
								<p className="text-xs text-gray-400 ">in last week</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box overflow-hidden">
						<div className="box-body">
							<div className="flex">
								<div className="flex space-x-3 rtl:space-x-reverse">
									<div className="avatar p-2 rounded-sm bg-success/10">
										<svg className="fill-success" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
											viewBox="0 0 24 24">
											<path className="fill-success"
												d="M10.75,8H12h0.0006104H15.5C15.776123,8,16,7.776123,16,7.5S15.776123,7,15.5,7h-3V5.5C12.5,5.223877,12.276123,5,12,5s-0.5,0.223877-0.5,0.5V7h-0.75C9.2312012,7,8,8.2312012,8,9.75s1.2312012,2.75,2.75,2.75h2.5c0.9664917,0,1.75,0.7835083,1.75,1.75S14.2164917,16,13.25,16H8.5C8.223877,16,8,16.223877,8,16.5S8.223877,17,8.5,17h3v1.5c0,0.0001831,0,0.0003662,0,0.0005493C11.5001831,18.7765503,11.723999,19.0001831,12,19c0.0001831,0,0.0003662,0,0.0006104,0c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5V17h0.75c1.5187988,0,2.75-1.2312012,2.75-2.75s-1.2312012-2.75-2.75-2.75h-2.5C9.7835083,11.5,9,10.7164917,9,9.75S9.7835083,8,10.75,8z M12,1C5.9248657,1,1,5.9248657,1,12s4.9248657,11,11,11c6.0722656-0.0068359,10.9931641-4.9277344,11-11C23,5.9248657,18.0751343,1,12,1z M12,22C6.4771729,22,2,17.5228271,2,12S6.4771729,2,12,2c5.5201416,0.0064697,9.9935303,4.4798584,10,10C22,17.5228271,17.5228271,22,12,22z">
											</path>
										</svg>
									</div>
									<h6 className="text-lg font-medium text-gray-800 mb-2 dark:text-white my-auto">Total Expenses</h6>
								</div>
								{/* <span className="badge bg-success/10 text-success py-1 ltr:ml-auto rtl:mr-auto !my-auto"><i
									className="ti ti-trending-up"></i> 1.2%</span> */}
							</div>
							<div className="mt-2">
								<h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Ksh 35,262</h2>
								<p className="text-xs text-gray-400 ">in last week</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			

			<div className="grid grid-cols-12 gap-x-5">
			
				

				<div className="col-span-12 lg:col-span-6 xxl:col-span-4">
					<div className="box">
						<div className="box-header flex justify-between">
							<div className="box-title my-auto">
                 Recent Activities
							</div>
							<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
								<button type="button"
									className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                    View All</button>
							</div>
						</div>
						<div className="box-body">
							<ul className="list-unstyled mb-0 crm-recent-activity">
								
								
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-info rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span>Neon Tarly added <span className="text-info font-semibold">Robert Bright</span> to AI summit project.</span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">12 hrs</span>
										</div>
									</div>
								</li>
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-pink-500 rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span>Replied to new support request <i className="ri-checkbox-circle-line text-success fs-16 align-middle"></i></span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">4 hrs</span>
										</div>
									</div>
								</li>
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-primary rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span className="font-semibold">Update of calendar events &amp;</span><span><Link to="#" className="text-primary font-semibold"> Added new events in next week.</Link></span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">4:45PM</span>
										</div>
									</div>
								</li>
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-secondary rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span>New theme for <span className="font-semibold">Spruko Website</span> completed</span>
											<span className="block fs-12 text-muted">Lorem ipsum, dolor sit amet.</span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">3 hrs</span>
										</div>
									</div>
								</li>
								<li className="crm-recent-activity-content">
									<div className="flex items-top">
										<div className="ltr:mr-3 rtl:ml-3">
											<span className="avatar w-5 h-5 text-success rounded-full inline-flex">
												<i className="ri-checkbox-blank-circle-fill leading-none text-xs opacity-50 mx-auto my-auto"></i>
											</span>
										</div>
										<div className="crm-timeline-content">
											<span>Created a <span className="text-success font-semibold">New Task</span> today <span className="avatar w-5 h-5 bg-purple-transparent rounded-full inline-flex ms-1"><i className="ri-add-fill text-purple fs-12"></i></span></span>
										</div>
										<div className="flex-auto text-end">
											<span className="block text-gray-500 dark:text-white/70 text-xs opacity-70">22 hrs</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="col-span-12 lg:col-span-6 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Top Agents</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
										<Link className="ti-dropdown-item" to="#">Download</Link>
										<Link className="ti-dropdown-item" to="#">Import</Link>
										<Link className="ti-dropdown-item" to="#">Export</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<ul className="flex flex-col">
								<li className="px-0 pt-0 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="flex  justify-between items-center w-full">
										<div className="flex space-x-3 rtl:space-x-reverse w-full">
											<img className="avatar avatar-sm rounded-sm" src={ALLImages('jpg58')}
												alt="Image Description"/>
											<div className="flex w-full">
												<div className="block my-auto">
													<p className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                              Socrates Itumay</p>
													<p
														className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                              15 Purchases</p>
												</div>
											</div>
										</div>
										<div className=""><span className="text-sm font-bold">1,835</span></div>
									</Link>
								</li>
								<li className="px-0 pt-3 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="flex  justify-between items-center w-full">
										<div className="flex space-x-3 rtl:space-x-reverse w-full">
											<img className="avatar avatar-sm rounded-sm" src={ALLImages('jpg59')}
												alt="Image Description"/>
											<div className="flex w-full">
												<div className="block my-auto">
													<p
														className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                              Json Taylor</p>
													<p
														className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                              18 Purchases</p>
												</div>
											</div>
										</div>
										<div className=""><span className="text-sm font-bold">2,415</span></div>
									</Link>
								</li>
								<li className="px-0 pt-3 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="flex  justify-between items-center w-full">
										<div className="flex space-x-3 rtl:space-x-reverse w-full">
											<img className="avatar avatar-sm rounded-sm" src={ALLImages('jpg60')}
												alt="Image Description"/>
											<div className="flex w-full">
												<div className="block my-auto">
													<p
														className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                              Suzika Stallone</p>
													<p
														className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                              21 Purchases</p>
												</div>
											</div>
										</div>
										<div className=""><span className="text-sm font-bold">2,341</span></div>
									</Link>
								</li>
								<li className="px-0 pt-3 ti-list-group border-0 text-gray-800 dark:text-white">
									<Link to="#" className="flex  justify-between items-center w-full">
										<div className="flex space-x-3 rtl:space-x-reverse w-full">
											<img className="avatar avatar-sm rounded-sm" src={ALLImages('jpg61')}
												alt="Image Description"/>
											<div className="flex w-full">
												<div className="block my-auto">
													<p
														className="block text-sm font-semibold text-gray-800 hover:text-gray-900 my-auto  dark:text-white dark:hover:text-gray-200">
                              Angelina Hose</p>
													<p
														className="text-xs text-gray-400 dark:text-white/80 truncate sm:max-w-max max-w-[100px] font-normal">
                              24 Purchases</p>
												</div>
											</div>
										</div>
										<div className=""><span className="text-sm font-bold">2,624</span></div>
									</Link>
								</li>
								
							</ul>
						</div>
					</div>
				</div>

				<div className="col-span-12 lg:col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header flex">
							<h5 className="box-title my-auto">Top Selling Products</h5>
							<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
								<button type="button" aria-label="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
									<i className="text-sm leading-none ti ti-dots-vertical"></i>
								</button>
								<div className="hs-dropdown-menu ti-dropdown-menu">
									<Link className="ti-dropdown-item" to="#">Action</Link>
									<Link className="ti-dropdown-item" to="#">Another Action</Link>
									<Link className="ti-dropdown-item" to="#">Something else
                      here</Link>
								</div>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col" className="text-center !p-[0.65rem]">Product</th>
											
											<th scope="col" className="!p-[0.65rem]">Stock</th>
											<th scope="col" className="!p-[0.65rem]">TotalSales</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem]">
												<img src={ALLImages('png37')}  
													className="avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20 ltr:mr-2 rtl:ml-2"
													alt="Image Description"/>Tecno Spark 20 Pro
											</td>
											<td className="!p-[0.65rem] text-sm"><span
												className="badge leading-none bg-success/10 text-success rounded-sm">In
                            Stock</span></td>
											<td className="!p-[0.65rem]">
												<span className="text-sm font-semibold">25,699</span>
											</td>
										</tr>

										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem]">
												<img src={ALLImages('png38')}  
													className="avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20 ltr:mr-2 rtl:ml-2"
													alt="Image Description"/>Huawei P30 Pro
											</td>
											<td className="!p-[0.65rem] text-sm"><span
												className="badge leading-none bg-success/10 text-success rounded-sm">In
                            Stock</span></td>
											<td className="!p-[0.65rem]">
												<span className="text-sm font-semibold">12,299</span>
											</td>
										</tr>

										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem]">
												<img src={ALLImages('png39')}  
													className="avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20 ltr:mr-2 rtl:ml-2"
													alt="Image Description"/>Samsung Galaxy A35 5G
											</td>
											<td className="!p-[0.65rem] text-sm"><span
												className="badge leading-none bg-danger/10 text-danger rounded-sm">Out Of
                            Stock</span></td>
											<td className="!p-[0.65rem]">
												<span className="text-sm font-semibold">32,993</span>
											</td>
										</tr>
										
										<tr>
											<td className="leading-none !text-gray-800 dark:!text-white !p-[0.65rem]">
												<img src={ALLImages('png40')} 
													className="avatar avatar-sm p-2 rounded-full bg-gray-100 dark:bg-black/20 ltr:mr-2 rtl:ml-2"
													alt="Image Description"/>Redmi Note 12 Dual Sim
											</td>
											<td className="!p-[0.65rem] text-sm"><span
												className="badge leading-none bg-danger/10 text-danger rounded-sm">Out Of
                            Stock</span></td>
											<td className="!p-[0.65rem]">
												<span className="text-sm font-semibold">32,929</span>
											</td>
										</tr>
										
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>


			

			<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Available Stock Per Product</h5>
								<button type="button" className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                        View All</button>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="grid md:grid-cols-3  xxl:grid-cols-5">
								<div className="p-4 ltr:md:border-r rtl:md:border-l xxl:border-b-0 border-b border-gray-200 dark:border-white/10">
									<div className="flex items-start mb-6">
										<img src= {ALLImages('jpg60')} alt=""
											className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 leading-none"/>
										<div className="flex-auto">
											<div className="recent-recruiter">
												<p className="text-sm font-semibold mb-0 truncate">Tecno Spark 20 Pro</p>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70 truncate">
                                                        4GB 128GB </p>
											</div>
										</div>
										<div>
											<button type="button" aria-label="button"
												className="ti-btn bg-gray-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-white/10">
												<i className="ri-arrow-right-s-line rtl:rotate-180"></i>
											</button>
										</div>
									</div>
									<div className="flex  justify-between mb-2">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Items
										</div>
										<div className="font-semibold text-sm">
                                            254
										</div>
									</div>
									<div className="flex  justify-between mb-0">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Location
										</div>
										<div>
											<span
												className="badge bg-info/10 text-info leading-none rounded-sm text-xs py-1">HQ Warehouse</span>
										</div>
									</div>
								</div>
								<div className="p-4 ltr:md:border-r rtl:md:border-l xxl:border-b-0 border-b border-gray-200 dark:border-white/10">
									<div className="flex items-start mb-6">
										<img src= {ALLImages('jpg77')} alt=""
											className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 leading-none"/>
										<div className="flex-auto">
											<div className="recent-recruiter">
												<p className="text-sm font-semibold mb-0 truncate">Huawei Mate 30 Pro</p>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70 truncate">
                                                        8GB 256GB</p>
											</div>
										</div>
										<div>
											<button type="button" aria-label="button"
												className="ti-btn bg-gray-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white/70 dark:focus:ring-offset-white/10">
												<i className="ri-arrow-right-s-line rtl:rotate-180"></i>
											</button>
										</div>
									</div>
									<div className="flex  justify-between mb-2">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Items
										</div>
										<div className="font-semibold text-sm">
                                                168
										</div>
									</div>
									<div className="flex  justify-between mb-0">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Location
										</div>
										<div>
											<span
												className="badge bg-warning/10 text-warning leading-none rounded-sm text-xs py-1">Moi Avenue</span>
										</div>
									</div>
								</div>
								<div className="p-4 ltr:md:border-r rtl:md:border-l xxl:border-b-0 border-b border-gray-200 dark:border-white/10">
									<div className="flex items-start mb-6">
										<img src= {ALLImages('jpg68')} alt=""
											className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 leading-none"/>
										<div className="flex-auto">
											<div className="recent-recruiter">
												<p className="text-sm font-semibold mb-0 truncate">Samsung Galaxy A35 5G</p>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70 truncate">
                                                        8GB 256GB</p>
											</div>
										</div>
										<div>
											<button type="button" aria-label="button"
												className="ti-btn bg-gray-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white/70 dark:focus:ring-offset-white/10">
												<i className="ri-arrow-right-s-line rtl:rotate-180"></i>
											</button>
										</div>
									</div>
									<div className="flex  justify-between mb-2">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Items
										</div>
										<div className="font-semibold text-sm">
                                                89
										</div>
									</div>
									<div className="flex  justify-between mb-0">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Location
										</div>
										<div>
											<span
												className="badge bg-secondary/10 text-secondary leading-none rounded-sm text-xs py-1">Thika Town</span>
										</div>
									</div>
								</div>
								<div className="p-4 ltr:md:border-r rtl:md:border-l md:border-b-0 border-b border-gray-200 dark:border-white/10">
									<div className="flex items-start mb-6">
										<img src= {ALLImages('jpg71')} alt=""
											className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 leading-none"/>
										<div className="flex-auto">
											<div className="recent-recruiter">
												<p className="text-sm font-semibold mb-0 truncate">Redmi A3 Dual Sim 4GB/128GB</p>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70 truncate">
                                                        12GB 512GB</p>
											</div>
										</div>
										<div>
											<button type="button" aria-label="button"
												className="ti-btn bg-gray-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white/70 dark:focus:ring-offset-white/10">
												<i className="ri-arrow-right-s-line rtl:rotate-180"></i>
											</button>
										</div>
									</div>
									<div className="flex  justify-between mb-2">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Items
										</div>
										<div className="font-semibold text-sm">
                                                32
										</div>
									</div>
									<div className="flex  justify-between mb-0">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Location
										</div>
										<div>
											<span
												className="badge bg-primary/10 text-primary leading-none rounded-sm text-xs py-1">Kitengela</span>
										</div>
									</div>
								</div>
								<div className="p-4">
									<div className="flex items-start mb-6">
										<img src= {ALLImages('jpg59')} alt=""
											className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2 leading-none"/>
										<div className="flex-auto">
											<div className="recent-recruiter">
												<p className="text-sm font-semibold mb-0 truncate">Oppo A18 Dual Sim</p>
												<p className="mb-0 text-xs text-gray-500 dark:text-white/70 truncate">
                                                        6GB 128GB</p>
											</div>
										</div>
										<div>
											<button type="button" aria-label="button"
												className="ti-btn bg-gray-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white/70 dark:focus:ring-offset-white/10">
												<i className="ri-arrow-right-s-line rtl:rotate-180"></i>
											</button>
										</div>
									</div>
									<div className="flex  justify-between mb-2">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Items
										</div>
										<div className="font-semibold text-sm">
                                                12
										</div>
									</div>
									<div className="flex  justify-between mb-0">
										<div className="text-gray-500 dark:text-white/70 text-xs">
                                                Location
										</div>
										<div>
											<span
												className="badge bg-primary/10 text-primary leading-none rounded-sm text-xs py-1">Junction Mall</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Recent Sales Details</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">View All <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
										<Link className="ti-dropdown-item" to="#">Download</Link>
										<Link className="ti-dropdown-item" to="#">Import</Link>
										<Link className="ti-dropdown-item" to="#">Export</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-sm ti-custom-table-head overflow-auto">
								<table className="ti-custom-table ti-custom-table-head whitespace-nowrap">
									<thead className="bg-gray-50 dark:bg-black/20">
										<tr className="">
											<th scope="col" className="dark:text-white/80">S.no</th>
											<th scope="col" className="dark:text-white/80">Item Details</th>
											<th scope="col" className="dark:text-white/80">Customer No.</th>
											<th scope="col" className="dark:text-white/80 min-w-[300px]">Agent Name</th>
											<th scope="col" className="dark:text-white/80">Sale Date</th>
											<th scope="col" className="dark:text-white/80">Status</th>
											<th scope="col" className="dark:text-white/80">Price</th>
											<th scope="col" className="dark:text-white/80">Action</th>
										</tr>
									</thead>
									<tbody className="">
										<tr className="">
											<td>1</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
														src={ALLImages('png25')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span
															className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">Tecno Spark 20 Pro</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">#2343</span>
													</div>
												</div>
											</td>
											<td className="!text-success font-semibold text-base">+254 721 928 038</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm" src={ALLImages('jpg58')}
														alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Socrates
                                Itumay</p>
														<span
															className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">+254 110 928 038</span>
													</div>
												</div>
											</td>
											<td>10-03-2024</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-success/10 text-success/80">Success</span>
											</td>
											<td>Ksh 10,999</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												
											</td>
										</tr>
										<tr className="">
											<td>2</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
													 	src= {ALLImages('png26')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span
															className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">Huawei P30 Pro</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">#5655</span>
													</div>
												</div>
											</td>
											<td className="!text-success font-semibold text-base">+254 721 000 038</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm"  src= {ALLImages('jpg59')}
														alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                                Json Taylor</p>
														<span
															className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">+254 701 118 038</span>
													</div>
												</div>
											</td>
											<td>11-03-2024</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-info/10 text-info/80">Ordered</span>
											</td>
											<td>Ksh 25,699</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												
											</td>
										</tr>
										<tr className="">
											<td>3</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
													 	src= {ALLImages('png27')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span
															className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">Samsung Galaxy A35 5G</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">#15245</span>
													</div>
												</div>
											</td>
											<td className="!text-success font-semibold text-base">+254 701 928 038</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm"  src= {ALLImages('jpg60')}
														alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                                Suzika Stallone</p>
														<span
															className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">+254 735 948 075</span>
													</div>
												</div>
											</td>
											<td>12-03-2024</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-warning/10 text-warning/80">Out
                            For Delivery</span>
											</td>
											<td>Ksh 8,599</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												
											</td>
										</tr>
										<tr className="">
											<td>4</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
													 	src= {ALLImages('png28')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span
															className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">Redmi Note 12 Dual Sim</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">#45415</span>
													</div>
												</div>
											</td>
											<td className="!text-success font-semibold text-base">+254 723 118 031</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm"  src= {ALLImages('jpg61')}
														alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                                Selena Deoyl</p>
														<span
															className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">+254 701 118 042</span>
													</div>
												</div>
											</td>
											<td>12-03-2024</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-danger/10 text-danger/80">Cancelled</span>
											</td>
											<td>Ksh 12,299</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												
											</td>
										</tr>
										<tr className="">
											<td>5</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
													 	src= {ALLImages('png29')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span
															className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">Infinix smart 8 X6525 Dual sim 3GB/64GB</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">#35656</span>
													</div>
												</div>
											</td>
											<td className="!text-success font-semibold text-base">+254 711 920 011</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm"  src= {ALLImages('jpg65')}
														alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                                Roman Killon</p>
														<span
															className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">+254 792 438 044</span>
													</div>
												</div>
											</td>
											<td>13-03-2024</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">Shipping</span>
											</td>
											<td>Ksh 32,993</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												
											</td>
										</tr>
										<tr className="">
											<td>6</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse w-full">
													<img className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
													 	src= {ALLImages('png30')} alt="Image Description"/>
													<div className="block w-full my-auto">
														<span
															className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">Realme C53 Dual Sim 6GB/128GB</span>
														<span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">#622545</span>
													</div>
												</div>
											</td>
											<td className="!text-success font-semibold text-base">+254 721 922 041</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start">
													<img className="avatar avatar-sm rounded-sm"  src= {ALLImages('jpg66')}
														alt="Image Description"/>
													<div className="block my-auto">
														<p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                                Charlie Davieson</p>
														<span
															className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">+254 711 933 099</span>
													</div>
												</div>
											</td>
											<td>13-03-2024</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-secondary/10 text-secondary/80">Packed</span>
											</td>
											<td>Ksh 32,929</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
  })

export default connect(mapStateToProps,{})(MainDashboard)
