import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link, useNavigate } from "react-router-dom";




const ReportsDashboard = () => {
	const navigate = useNavigate();
	return (
		<div>
			<PageHeader currentpage="Reports Dashboard" href="/reports/dashboard" activepage="Reports" mainpage="Reports Dashboard" />

			<div className="grid grid-cols-12 gap-6">


			<div className= "col-span-12 xl:col-span-4">
					<div className= "box">
						<div className= "box-header">
							<h2 className= "text-gray-800 dark:text-white/70 my-3 font-semibold">Sales Reports</h2>
						</div>
						<div className= "box-body">
							<ul>
								<li>
									<Link to="#" className= "p-2 mb-1 flex items-center align-middle justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-success rounded-full my-auto"></span>
											<i className= "ri ri-mail-line"></i>
											<span className= "">Sales Performance Report</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-inbox-archive-line"></i>
											<span className= "">Daily/Weekly/Monthly Sales Report</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-success rounded-full my-auto"></span>
											<i className= "ri ri-star-line"></i>
											<span className= "">After Sales Report </span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-price-tag-3-line"></i>
											<span className= "">Sales Pipeline Report</span>
										</div>
									</Link>
								</li>
							</ul>
				    	</div>
					</div>
			</div>

			<div className= "col-span-12 xl:col-span-4">
					<div className= "box">
						<div className= "box-header">
							<h2 className= "text-gray-800 dark:text-white/70 my-3 font-semibold">Customer Reports</h2>
						</div>
						<div className= "box-body">
							<ul>
								<li>
									<Link to="#" className= "p-2 mb-1 flex items-center align-middle justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-mail-line"></i>
											<span className= "">Customer Interaction Report</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-inbox-archive-line"></i>
											<span className= "">Customer Feedback and Satisfaction Report</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-star-line"></i>
											<span className= "">Aggregate Customer Report </span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-price-tag-3-line"></i>
											<span className= "">Common Customer Issues Report</span>
										</div>
									</Link>
								</li>
							</ul>
				    	</div>
					</div>
			</div>

			<div className= "col-span-12 xl:col-span-4">
					<div className= "box">
						<div className= "box-header">
							<h2 className= "text-gray-800 dark:text-white/70 my-3 font-semibold">Product Report</h2>
						</div>
						<div className= "box-body">
							<ul>
								<li>
									<Link to="#" className= "p-2 mb-1 flex items-center align-middle justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-mail-line"></i>
											<span className= "">Product Performance Report</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-inbox-archive-line"></i>
											<span className= "">Pending Orders and Backorders Report</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-star-line"></i>
											<span className= ""> Top-Selling Products Report </span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-price-tag-3-line"></i>
											<span className= "">Product Stock Levels and Turnover Report</span>
										</div>
									</Link>
								</li>
							</ul>
				    	</div>
					</div>
			</div>

		



				
			</div>
		</div>
	);
};
export default ReportsDashboard;
