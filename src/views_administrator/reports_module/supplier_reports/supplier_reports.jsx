import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const SupplierReports = () => {
	return (
		<div>
			<PageHeader currentpage="Supplier Reports" href="/reports/dashboard" activepage="Reports" mainpage="Supplier Reports" />

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
export default SupplierReports;
