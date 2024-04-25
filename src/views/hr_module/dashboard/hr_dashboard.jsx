import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const HrDashboard = () => {
	return (
		<div>
			<PageHeader currentpage="HR Dashboard" activepage="HR" mainpage="HR Dashboard" />

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
export default HrDashboard;
