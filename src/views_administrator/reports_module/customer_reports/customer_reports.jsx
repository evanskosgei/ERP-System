import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const CustomerReports = () => {
	return (
		<div>
			<PageHeader currentpage="Customer Reports" href="/reports/dashboard" activepage="Reports" mainpage="Customer Reports" />

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
export default CustomerReports;
