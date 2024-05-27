import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";


const FinanceReports = () => {
	return (
		<div>
			<PageHeader currentpage="Finance Reports" href="/reports/dashboard" activepage="Reports" mainpage="Finance Reports" />

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-body">

						<div className="grid grid-cols-12 gap-6">
								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Balance Sheet</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">The balance sheet reports a corporation's assets, liabilities, and stockholders' equity as of the final moment of an accounting period.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Balance Sheet Standard</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Balance Sheet Summary. Assets = Liabilities + Equity</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Profit and Loss / Income Statement</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Profit and Loss statement reports a summary of a company's revenues, expenses, gains, losses, and the net income that occurred during a year, quarter etc </p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Profit and Loss / Income Statement Standard</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Profit and Loss Statement </p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Trial Balance</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">A trial balance is accounting report that lists the balances in each of an organization's general ledger accounts. The debit balance amounts are listed in a column with the heading "Debit balances" and the credit balance amounts are listed in another column with the heading "Credit balances." The total of each of these two columns should be identical.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Cash Flow</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Email reports include email scheduled, email send, email delivered.</p>

										</div>
									</div>
								</div>

								<div className="col-span-12 md:col-span-6 xxl:!col-span-3">
									<div className="box">
										<div className="box-header">
											<h5 className="box-title">Trial Balance</h5>
										</div>
										<div className="box-body">

											<p className="mb-0 text-sm">Trial Balance Report.</p>

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
export default FinanceReports;
