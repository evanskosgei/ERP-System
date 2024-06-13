import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";


const FinanceReports = () => {
	return (
		<div>
			<PageHeader currentpage="Finance Reports" href="/reports/dashboard" activepage="Reports" mainpage="Finance Reports" />

			<div className="grid grid-cols-12 gap-6">


			<div className= "col-span-12 xl:col-span-3">
					<div className= "box">
						<div className= "box-header">
							<h2 className= "text-gray-800 dark:text-white/70 my-3 font-semibold">Balance Sheet and Profit and Loss</h2>
						</div>
						<div className= "box-body">
							<ul>
								<li>
									<Link to="/reports/finance-reports/balance-sheet" className= "p-2 mb-1 flex items-center align-middle justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-success rounded-full my-auto"></span>
											<i className= "ri ri-mail-line"></i>
											<span className= "">Balance Sheet</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-inbox-archive-line"></i>
											<span className= "">Balance Sheet Standard</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="/reports/finance-reports/income-statement" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-success rounded-full my-auto"></span>
											<i className= "ri ri-star-line"></i>
											<span className= "">Profit and Loss </span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-price-tag-3-line"></i>
											<span className= "">Profit and Loss Standard</span>
										</div>
									</Link>
								</li>
							</ul>
				    	</div>
					</div>
			</div>

			<div className= "col-span-12 xl:col-span-3">
					<div className= "box">
						<div className= "box-header">
							<h2 className= "text-gray-800 dark:text-white/70 my-3 font-semibold">Trial Balance and Cash Flow</h2>
						</div>
						<div className= "box-body">
							<ul>
								<li>
									<Link to="#" className= "p-2 mb-1 flex items-center align-middle justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-mail-line"></i>
											<span className= "">Trial Balance</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-inbox-archive-line"></i>
											<span className= "">Trial Balance Standard</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-star-line"></i>
											<span className= "">Cash Flow </span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-price-tag-3-line"></i>
											<span className= "">Cash Flow Standard</span>
										</div>
									</Link>
								</li>
							</ul>
				    	</div>
					</div>
			</div>

			<div className= "col-span-12 xl:col-span-3">
					<div className= "box">
						<div className= "box-header">
							<h2 className= "text-gray-800 dark:text-white/70 my-3 font-semibold">General Ledger Report</h2>
						</div>
						<div className= "box-body">
							<ul>
								<li>
									<Link to="#" className= "p-2 mb-1 flex items-center align-middle justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-mail-line"></i>
											<span className= "">General Ledger Report</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-inbox-archive-line"></i>
											<span className= "">Standard General Ledger Report</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-star-line"></i>
											<span className= "">Detailed General Ledger Report </span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-price-tag-3-line"></i>
											<span className= "">Account Activity Report</span>
										</div>
									</Link>
								</li>
							</ul>
				    	</div>
					</div>
			</div>

			<div className= "col-span-12 xl:col-span-3">
					<div className= "box">
						<div className= "box-header">
							<h2 className= "text-gray-800 dark:text-white/70 my-3 font-semibold">Chart of Accounts</h2>
						</div>
						<div className= "box-body">
							<ul>
								<li>
									<Link to="#" className= "p-2 mb-1 flex items-center align-middle justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-mail-line"></i>
											<span className= "">Assets Accounts</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-inbox-archive-line"></i>
											<span className= "">Liability Accounts</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-star-line"></i>
											<span className= "">Equity Accounts </span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-price-tag-3-line"></i>
											<span className= "">Revenue Accounts</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-price-tag-3-line"></i>
											<span className= "">Cost of Goods Sold (COGS)</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-price-tag-3-line"></i>
											<span className= "">Operating Expenses</span>
										</div>
									</Link>
								</li>

								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
										<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<i className= "ri ri-price-tag-3-line"></i>
											<span className= "">Other Income and Expenses</span>
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
export default FinanceReports;
