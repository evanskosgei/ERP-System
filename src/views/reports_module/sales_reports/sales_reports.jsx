import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const SalesReports = () => {
	return (
		<div>
			<PageHeader currentpage="Sales Reports" activepage="Reports" mainpage="Sales Reports" />

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
export default SalesReports;
