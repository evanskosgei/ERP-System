import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const AccountingDashboard = () => {
	return (
		<div>
			<PageHeader currentpage="Accounting Dashboard" activepage="Accounting" mainpage="Accounting Dashboard" />

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-body">
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AccountingDashboard;
