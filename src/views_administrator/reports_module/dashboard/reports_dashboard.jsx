import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link, useNavigate } from "react-router-dom";




const ReportsDashboard = () => {
	const navigate = useNavigate();
	return (
		<div>
			<PageHeader currentpage="Reports Dashboard" href="/reports/dashboard" activepage="Reports" mainpage="Reports Dashboard" />

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-body">

							<div className="grid grid-cols-12 gap-6">
								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box" onClick={() => navigate('/reports/finance-reports')} style={{ cursor: 'pointer' }}>
										<div className="box-header">
											<h5 className="box-title">Finance Reports</h5>
										</div>
										<div className="box-body">
											<p className="mb-0 text-sm">Financial reports contain balance sheet, cashflow. trial balance, income statement, journal reports, ledger reports, profit and loss and provisioning.</p>
										</div>
										
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Accounting Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Accounting reports track payables, receivables, budget variances, financial ratios, cost analysis, transaction history, for informed decision-making.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box" onClick={() => navigate('/reports/supplier-reports')} style={{ cursor: 'pointer' }}>
										<div className="box-header">
											<h5 className="box-title">Suppliers Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Supplier reports cover performance, finances, risks, compliance, and sustainability. They reveal trends, highlight top performers, and suggest cost savings.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box" onClick={() => navigate('/reports/inventory-reports')} style={{ cursor: 'pointer' }}>
										<div className="box-header">
											<h5 className="box-title">Inventory Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Inventory reports provide detailed information about a company's stock levels, movements, quantities, locations, and values of goods. They help optimize supply chains.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box" onClick={() => navigate('/reports/dashboard')} style={{ cursor: 'pointer' }}>
										<div className="box-header">
											<h5 className="box-title">Products Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Product reports provide detailed information about pricing, discounts and profitability, promotions, inventory stocking, supplier management, and marketing strategies.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box" onClick={() => navigate('/reports/dashboard')} style={{ cursor: 'pointer' }}>
										<div className="box-header">
											<h5 className="box-title">Distribution Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Distribution reports detail product shipment info (dates, carriers, tracking, quantities, status) and assess delivery performance (timelines, rates, costs).</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box" onClick={() => navigate('/reports/customer-reports')} style={{ cursor: 'pointer' }}>
										<div className="box-header">
											<h5 className="box-title">Customer Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Customer reports provides a summary of customer information, sales, service, feedback and communication history for improved customer engagement.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box" onClick={() => navigate('/reports/dashboard')} style={{ cursor: 'pointer' }}>
										<div className="box-header">
											<h5 className="box-title">User Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">User reports provide details on user roles, permissions, active status, log activities, ensuring security, compliance, and efficient user management.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box" onClick={() => navigate('/reports/sales-reports')} style={{ cursor: 'pointer' }}>
										<div className="box-header">
											<h5 className="box-title">Sales Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Sales reports track revenue, product performance, customer trends, territories and team metrics, order management and forecast accuracy for insights and decisions.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Payments Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Payments reports detail financial transactions, including incoming / outgoing payments, transaction types, payment methods, and financial analysis.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Human Resource Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">HR reports cover employee information, attendance, performance, training, recruitment, compensation, and diversity for informed workforce management.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Purchases Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Purchase reports track purchase orders and inventory turnover, costs variance, purchase budgets, invoicing and spend analysis for procurement management.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Transit Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">These reports are essential for supply chain visibility, logistics management, delivery status, cost, exception handling, and overall operational efficiency.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">SMS Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">SMS reports track message delivery status, response rates, campaign performance, cost analysis, Opt-out and optimal send times for effective communication.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Email Reports</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Email Reports track; emails Sent, Delivered, Bounce Rates; Open, Click-Through, Conversion Rates; Replies, Forwards, Unsubscribes; Recipient Analysis; Delivery Time.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Logs</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">System Logs.</p>

										</div>
									</div>
								</div>

							

							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ReportsDashboard;
