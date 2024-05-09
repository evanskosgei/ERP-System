import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const InventoryReports = () => {
	return (
		<div>
			<PageHeader currentpage="Inventory Reports" activepage="Reports" mainpage="Inventory Reports" />

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
export default InventoryReports;
