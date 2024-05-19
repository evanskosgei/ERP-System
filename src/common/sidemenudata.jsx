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



export const MenuItems = [
	{
		id: 1, menutitle: "MAIN", Items: [

			{
				id: 2, icon: Dashboardsvg, title: "Dashboards", type: "sub", active: false, selected: false, children: [

					{ id: 2.1, path: `${import.meta.env.BASE_URL}dashboards/main`, type: "link", active: false, selected: false, title: "Home" },
					{ id: 2.2, path: `${import.meta.env.BASE_URL}activities`, type: "link", active: false, selected: false, title: "Activities" },
					{ id: 2.3, path: `${import.meta.env.BASE_URL}notifications`, type: "link", active: false, selected: false, title: "Notification" },
					{ id: 2.4, path: `${import.meta.env.BASE_URL}my_profile`, type: "link", active: false, selected: false, title: "My Profile" },
				],
			},

			{ id: 3, path: `${import.meta.env.BASE_URL}widgets`, icon: WidgetsSvg, title: "Widgets", type: "link", active: false, selected: false },

			{ id: 4, path: `${import.meta.env.BASE_URL}users/dashboard`, icon: NestedSvg, title: "Users", type: "link", active: false, selected: false },

			{
				id: 5, icon: ComponentsSvg, title: "Supplier Module", type: "sub", active: false, selected: false, children: [
					{ id: 5.1, path: `${import.meta.env.BASE_URL}supplier/dashboard`, type: "link", active: false, selected: false, title: "Supplier Dashboard" },
					{ id: 5.2, path: `${import.meta.env.BASE_URL}supplier/supply-chain`, type: "link", active: false, selected: false, title: "Supply Chain Management" },
					{ id: 5.3, path: `${import.meta.env.BASE_URL}supplier/sms-management`, type: "link", active: false, selected: false, title: "SMS Management" },

				]
			},

			{
				id: 6, icon: MapsSvg, title: "Inventory Module", type: "sub", active: false, selected: false, children: [
					{ id: 6.1, path: `${import.meta.env.BASE_URL}inventory/dashboard`, type: "link", active: false, selected: false, title: "Inventory Dashboard" },
					{ id: 6.2, path: `${import.meta.env.BASE_URL}inventory/product-management`, type: "link", active: false, selected: false, title: "Product Management" },
					{ id: 6.3, path: `${import.meta.env.BASE_URL}inventory/inventory-management`, type: "link", active: false, selected: false, title: "Inventory Management" },
					{ id: 6.4, path: `${import.meta.env.BASE_URL}inventory/quality-control`, type: "link", active: false, selected: false, title: "Quality Control" },

				]
			},
			{
				id: 6, icon: MapsSvg, title: "Distribution Module", type: "sub", active: false, selected: false, children: [
					{ id: 6.1, path: `${import.meta.env.BASE_URL}distribution/dashboard`, type: "link", active: false, selected: false, title: "Distribution Dashboard" },
					// { id: 6.2, path: `${import.meta.env.BASE_URL}inventory/product-management`, type: "link", active: false, selected: false, title: "Product Management" },
					// { id: 6.3, path: `${import.meta.env.BASE_URL}inventory/inventory-management`, type: "link", active: false, selected: false, title: "Inventory Management" },
					// { id: 6.4, path: `${import.meta.env.BASE_URL}inventory/quality-control`, type: "link", active: false, selected: false, title: "Quality Control" },

				]
			},

			{
				id: 7, icon: PagesSvg, title: "Transport Module", type: "sub", active: false, selected: false, children: [
					{ id: 7.1, path: `${import.meta.env.BASE_URL}transport/dashboard`, type: "link", active: false, selected: false, title: "Transport Dashboard" },
					{ id: 7.2, path: `${import.meta.env.BASE_URL}transport/delivery`, type: "link", active: false, selected: false, title: "Stock In Transit" },
					{ id: 7.3, path: `${import.meta.env.BASE_URL}transport/dispatch`, type: "link", active: false, selected: false, title: "Products Dispatched" },

				]
			},

			{
				id: 8, icon: AuthenticationSvg, title: "CRM Dashboard", type: "sub", active: false, selected: false, children: [
					{ id: 8.1, path: `${import.meta.env.BASE_URL}customer/dashboard`, type: "link", active: false, selected: false, title: "Customer Dashboard" },
					{ id: 8.2, path: `${import.meta.env.BASE_URL}customer/ticket-management`, type: "link", active: false, selected: false, title: "Ticket Management" },

				]
			},

			{
				id: 9, icon: ChartsSvg, title: "Sales Management", type: "sub", active: false, selected: false, children: [


					{ id: 9.1, path: `${import.meta.env.BASE_URL}sales/dashboard`, type: "link", active: false, selected: false, title: "Sales Dashboard" },

				]
			},

			{
				id: 10, icon: ElementsSvg, title: "Payments Module", type: "sub", active: false, selected: false, children: [

					{ id: 10.1, path: `${import.meta.env.BASE_URL}payments/dashboard`, type: "link", active: false, selected: false, title: "Payments Dashboard" },
					{ id: 10.1, path: `${import.meta.env.BASE_URL}payments/mobilemoney`, type: "link", active: false, selected: false, title: "Mobile Money" },
					{ id: 10.2, path: `${import.meta.env.BASE_URL}payments/bank`, type: "link", active: false, selected: false, title: "Bank Payments" },
					{ id: 10.3, path: `${import.meta.env.BASE_URL}payments/cash`, type: "link", active: false, selected: false, title: "Cash Payments" },
				]
			},
			{
				id: 11, icon: PagesSvg, title: "Finance Module", type: "sub", active: false, selected: false, children: [

					{ id: 11.1, path: `${import.meta.env.BASE_URL}finance/accouting`, type: "link", active: false, selected: false, title: "Accounting Center" },
					{ id: 11.1, path: `${import.meta.env.BASE_URL}finance/expenses`, type: "link", active: false, selected: false, title: "Expenses Management" },
				]
			},
			{
				id: 12, icon: FormsSvg, title: "Email and SMS", type: "sub", active: false, selected: false, children: [
					{ id: 12.1, path: `${import.meta.env.BASE_URL}email/dashboard`, type: "link", active: false, selected: false, title: "Email" },
					{ id: 12.2, path: `${import.meta.env.BASE_URL}sms/dashboard`, type: "link", active: false, selected: false, title: "SMS" },
				]
			},
			{
				id: 13, icon: ComponentsSvg, title: "HR Module", type: "sub", active: false, selected: false, children: [
					{ id: 13.1, path: `${import.meta.env.BASE_URL}hr/dashboard`, type: "link", active: false, selected: false, title: "Hr Dashboard" },
					{ id: 13.1, path: `${import.meta.env.BASE_URL}hr/employee-profile`, type: "link", active: false, selected: false, title: "Employee Information" },
					{ id: 13.3, path: `${import.meta.env.BASE_URL}hr/performance-management`, type: "link", active: false, selected: false, title: "Performance Management" },
					{ id: 13.4, path: `${import.meta.env.BASE_URL}hr/payroll-management`, type: "link", active: false, selected: false, title: "Manage payroll" },

				]
			},
			{
				id: 14, icon: AdvancedUISvg, title: "Analytics Module", type: "sub", active: false, selected: false, children: [

					{ id: 14.1, path: `${import.meta.env.BASE_URL}analytics/dashboard`, type: "link", active: false, selected: false, title: "Analytics" },
					{ id: 14.2, path: `${import.meta.env.BASE_URL}analytics/sales-analysis`, type: "link", active: false, selected: false, title: "Sales Trends" },
					{ id: 14.3, path: `${import.meta.env.BASE_URL}analytics/inventory-analysis`, type: "link", active: false, selected: false, title: "Inventory Analysis" },
					{ id: 14.4, path: `${import.meta.env.BASE_URL}analytics/supplier-analysis`, type: "link", active: false, selected: false, title: "Supplier Analysis" },

				]
			},
			{
				id: 15, icon: AdvancedUISvg, title: "Reports Module", type: "sub", active: false, selected: false, children: [

					{ id: 15.1, path: `${import.meta.env.BASE_URL}reports/dashboard`, type: "link", active: false, selected: false, title: "Reports Dashboard" },
					{ id: 15.1, path: `${import.meta.env.BASE_URL}reports/finance-reports`, type: "link", active: false, selected: false, title: "Finance Reports" },
					{ id: 15.2, path: `${import.meta.env.BASE_URL}reports/inventory-reports`, type: "link", active: false, selected: false, title: "Inventory Reports" },
					{ id: 15.3, path: `${import.meta.env.BASE_URL}reports/sales-reports`, type: "link", active: false, selected: false, title: "Sales Reports" },
					{ id: 15.4, path: `${import.meta.env.BASE_URL}reports/supplier-reports`, type: "link", active: false, selected: false, title: "Supplier Reports" },
					{ id: 15.5, path: `${import.meta.env.BASE_URL}reports/transporter-reports`, type: "link", active: false, selected: false, title: "Transporter Reports" },
					{ id: 15.7, path: `${import.meta.env.BASE_URL}reports/hr-reports`, type: "link", active: false, selected: false, title: "HR Reports" },
					{ id: 15.8, path: `${import.meta.env.BASE_URL}reports/payments-reports`, type: "link", active: false, selected: false, title: "Payments Reports" },
					{ id: 15.9, path: `${import.meta.env.BASE_URL}reports/customer-reports`, type: "link", active: false, selected: false, title: "Customer Reports" },

				]
			},
			{
				id: 16, icon: BasicUISvg, title: "Administration", type: "sub", active: false, selected: false, children: [

					{ id: 16.1, path: `${import.meta.env.BASE_URL}settings/dashboard`, type: "link", active: false, selected: false, title: "Settings" },
					{ id: 16.2, path: `${import.meta.env.BASE_URL}settings/roles-and-permissions`, type: "link", active: false, selected: false, title: "Roles and Permissions" },
					{ id: 16.3, path: `${import.meta.env.BASE_URL}settings/sms-settings`, type: "link", active: false, selected: false, title: "SMS Setup" },
					{ id: 16.4, path: `${import.meta.env.BASE_URL}settings/email-settings`, type: "link", active: false, selected: false, title: "Email Setup" },
					{ id: 16.5, path: `${import.meta.env.BASE_URL}settings/general-settings`, type: "link", active: false, selected: false, title: "General Setup" },
					{ id: 16.6, path: `${import.meta.env.BASE_URL}settings/logs-settings`, type: "link", active: false, selected: false, title: "Logs" },

				]
			},
		]
	},

];
export default MenuItems
