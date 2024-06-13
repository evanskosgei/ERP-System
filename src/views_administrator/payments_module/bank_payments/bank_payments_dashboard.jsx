import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const BankPayments = () => {
	return (
		<div>
			<PageHeader currentpage="Bank Payments" activepage="Payments" mainpage="Bank Payments" />

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
export default BankPayments;
