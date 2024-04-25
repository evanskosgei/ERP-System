import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const SmsDashboard = () => {
	return (
		<div>
			<PageHeader currentpage="SMS Dashboard" activepage="Supplier" mainpage="SMS Dashboard" />

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
export default SmsDashboard;
