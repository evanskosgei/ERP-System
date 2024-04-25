import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";

const SupplierDashboard = () => {
	return (
		<div>
			<PageHeader currentpage="Supplier Dashboard" activepage="Supplier" mainpage="Supplier Dashboard" />

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-body">


							<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
								<div>
									<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Suppliers:</h2>
									<ul className="space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400">
										<li>
											<Link to="/addsupplier" className="text-sky-400 font-bold">Add Supplier</Link>
										</li>
										<li>
											<Link to="/listsuppliers" className="text-sky-400 font-bold">List of active Suppliers</Link>
										</li>
										<li>
											<Link to="" className="text-sky-400 font-bold">List of active Suppliers</Link>
										</li>
									</ul>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SupplierDashboard;
