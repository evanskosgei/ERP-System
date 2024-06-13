import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const AnalyticsDashboard = () => {
	return (
		<div>
			<PageHeader currentpage="Analytics Dashboard" activepage="Analytics" mainpage="Analytics Dashboard" />

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
export default AnalyticsDashboard;
