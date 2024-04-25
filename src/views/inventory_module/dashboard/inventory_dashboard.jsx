import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const InventoryDashboard = () => {
	return (
		<div>
			<PageHeader currentpage="Inventory Dashboard" activepage="Inventory" mainpage="Inventory Dashboard" />

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
export default InventoryDashboard;
