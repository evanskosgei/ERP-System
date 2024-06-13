import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";

const ListDispatch = () => {
	return (
		<div>
			<PageHeader currentpage="List Products Dispatch" activepage="Dispatch" mainpage="List Products Dispatch" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 md:col-span-6 xxl:!col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">List Products Dispatch</h5>
						</div>
						
					</div>
				</div>

				

			</div>
		</div>
	);
};
export default ListDispatch;
