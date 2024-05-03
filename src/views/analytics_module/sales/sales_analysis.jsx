import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const SalesAnalysis = () => {
	return (
		<div>
			<PageHeader currentpage="Sales Analysis" activepage="Analytics" mainpage="Sales Analysis" />

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
export default SalesAnalysis;
