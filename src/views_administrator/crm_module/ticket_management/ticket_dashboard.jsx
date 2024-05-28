import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const TicketsDashboard = () => {
	return (
		<div>
			<PageHeader currentpage="Tickets Dashboard" activepage="CRM" mainpage="Tickets Dashboard" />

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
export default TicketsDashboard;
