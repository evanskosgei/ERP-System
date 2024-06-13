import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const GeneralSettings = () => {
	return (
		<div>
			<PageHeader currentpage="General Settings" activepage="Settings" mainpage="General Settings" />

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
export default GeneralSettings;
