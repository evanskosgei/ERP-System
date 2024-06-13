import React from "react";

//Svg icons of Dashboard

const Dashboardsvg = <i className="ri-home-8-line side-menu__icon"></i>

const WidgetsSvg = <i className="ri-apps-2-line side-menu__icon"></i>

const ComponentsSvg = <i className="ri-inbox-line side-menu__icon"></i>

const ElementsSvg = <i className="ri-cpu-line side-menu__icon"></i>

const FormsSvg = <i className="ri-file-text-line side-menu__icon"></i>

const AdvancedUISvg = <i className="ri-stack-line side-menu__icon"></i>

const BasicUISvg = <i className="ri-file-list-3-line side-menu__icon"></i>

const NestedSvg = <i className="ri-node-tree side-menu__icon"></i>

const MapsSvg = <i className="ri-map-pin-user-line side-menu__icon"></i>

const ChartsSvg = <i className="ri-pie-chart-2-line side-menu__icon"></i>

const PagesSvg = <i className="ri-book-open-line side-menu__icon"></i>

const IconsSvg = <i className="ri-camera-lens-line side-menu__icon"></i>

const AuthenticationSvg = <i className="ri-error-warning-line side-menu__icon"></i>



export const MenuItems_agents = [
	{ id: 1, menutitle: "MAIN", Items: [

			{ id: 2,icon: Dashboardsvg, title: "Dashboard", type: "sub", active: false, selected: false, children: [

					{ id: 2.1, path: `${import.meta.env.BASE_URL}agent/dashboard`, type: "link", active: false, selected: false, title: "Home" },
					{ id: 2.2, path: `${import.meta.env.BASE_URL}agent/activities`, type: "link", active: false, selected: false, title: "Activities" },
					{ id: 2.3, path: `${import.meta.env.BASE_URL}agent/notifications`, type: "link", active: false, selected: false, title: "Notification" },
					{ id: 2.4, path: `${import.meta.env.BASE_URL}agent/profile`, type: "link", active: false, selected: false, title: "My Profile" },
				],
			},

			{ id: 3, path: `${import.meta.env.BASE_URL}agent/widgets`, icon: WidgetsSvg, title: "Widgets", type: "link", active: false, selected: false },
			{ id: 4, path: `${import.meta.env.BASE_URL}agent/products`, icon: MapsSvg, title: "Products", type: "link", active: false, selected: false },
			{ id: 5, path: `${import.meta.env.BASE_URL}agent/customers`, icon: AuthenticationSvg, title: "Customers", type: "link", active: false, selected: false },

	    { id: 14, icon: AdvancedUISvg, title: "Reports and Analytics", type: "sub", active: false, selected: false, children: [

		{ id: 14.1, path: `${import.meta.env.BASE_URL}agent/analytics-dashboard`, type: "link", active: false, selected: false, title: "Analytics" },
		{ id: 14.2, path: `${import.meta.env.BASE_URL}agent/reports-dashboard`, type: "link", active: false, selected: false, title: "Reports" },
		
	]
},

		]
	},

];
export default MenuItems_agents;
