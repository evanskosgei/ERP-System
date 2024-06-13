import React from "react";
import PageHeader from "../../layout/layoutsection/pageHeader/pageHeader";

const CrmDashboard = () => {
	return (
		<div>
			<PageHeader currentpage="Customer Relationship Management" activepage="CRM" mainpage="Customer Relationship Management" />

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
export default CrmDashboard;
