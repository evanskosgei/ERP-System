import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const InventoryAnalysis = () => {
	return (
		<div>
			<PageHeader currentpage="Inventory Analysis" activepage="Analytics" mainpage="Inventory Analysis" />

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
export default InventoryAnalysis;
