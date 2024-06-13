import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const CashPayments = () => {
	return (
		<div>
			<PageHeader currentpage="Cash Payments" activepage="Payaments" mainpage="Cash Payments" />

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
export default CashPayments;
