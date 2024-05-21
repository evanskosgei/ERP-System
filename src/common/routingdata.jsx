//Dashboards 
import MainDashboard from "../views/general/main_dashboard/main_dashboard";
// agents
import Agents_dashboard from "../views/Agents_portal/dashboard";


//Other Pages
import Activities from "../views/general/activities/activities";
import Notifications from "../views/general/notifications/notifications";
import Widgets from "../views/widgets/dashboard/widgets";

//User Pages
import Profile from "../views/user_module/profile/home/home";
import UserDashboard from "../views/user_module/dashboard/user_dashboard";
import CreateUser from "../views/user_module/users/create_new_user";
import Activeusers from "../views/user_module/users/list_active_users";
import Deletedusers from "../views/user_module/users/list_deleted_users";
import Deactivatedusers from "../views/user_module/users/list_deactivated_users";
import Newusers from "../views/user_module/users/list_newUnapproved_users";
import Reactivatedusers from "../views/user_module/users/list_reactivated_users";

//Supplier Pages
import SupplierDashboard from "../views/supplier_module/dashboard/supplier_dashboard";
import SupplyChain from "../views/supplier_module/supply_chain/supply_chain";
import SmsManagement from "../views/supplier_module/sms_management/sms_management";
import CreateSupplier from "../views/supplier_module/inventory_suppliers/create_supplier";
import ActiveSuppliers from "../views/supplier_module/inventory_suppliers/list_active_suppliers";
import InactiveSuppliers from "../views/supplier_module/inventory_suppliers/list_deactived_suppliers";
import ApproveSupplier from "../views/supplier_module/inventory_suppliers/list_unapproved_suppliers";
import DeletedSuppliers from "../views/supplier_module/inventory_suppliers/list_deleted_suppliers";
import ReactivatedSuppliers from "../views/supplier_module/inventory_suppliers/list_reactivated_suppliers";

//Inventory Pages
import InventoryDashboard from "../views/inventory_module/dashboard/inventory_dashboard";
import ProductManagement from "../views/inventory_module/product_management/product_management";
import QualityControl from "../views/inventory_module/quality_control/quality_control";
import InventoryManagement from "../views/inventory_module/inventory_management/inventory_management";
import CreatedistributionCenter from "../views/inventory_module/distribution_centers/create_distribution";
import Approvenewdistribution from "../views/inventory_module/distribution_centers/list_newunapproved_distribution";
import Activedistributioncenters from "../views/inventory_module/distribution_centers/list_active_distribution-centers";
import Deleteddistributions from "../views/inventory_module/distribution_centers/list_deleted_distributions";
import Deactivateddistributions from "../views/inventory_module/distribution_centers/list_deactivated_distributions";
import Reactivateddistributions from "../views/inventory_module/distribution_centers/list_reactivated_distributions";

// distributions
import Distribution_dashboard from "../views/distribution_module/dashboard";

//Stockist Distribution / Dispatch Management Pages
import StockistCreateManagerDispatch from "../views/distribution_module/stockist/create_manager_dispatch";
import StockistListManagerDispatch from "../views/distribution_module/stockist/list_manager_dispatch";
import StockistApproveManagerDispatch from "../views/distribution_module/stockist/approve_manager_dispatch";

//Manager Distribution / Dispatch Management Pages
import ManagerStockToReceive from "../views/distribution_module/manager/receive_dispatch";
import ManagerStockAvailable from "../views/distribution_module/manager/list_available_stock";
import ManagerCreateTeamLeaderDispatch from "../views/distribution_module/manager/create_teamleader_dispatch";
import ManagerListTeamLeaderDispatch from "../views/distribution_module/manager/list_teamleader_dispatch";
import ManagerApproveTeamLeaderDispatch from "../views/distribution_module/manager/approve_teamleader_dispatch";


//Team Leader Distribution / Dispatch Management Pages
import TeamLeaderStockToReceive from "../views/inventory_module/stock_in_transit/list_available_stock";
import TeamLeaderCreateAgentDispatch from "../views/distribution_module/stockist/create_manager_dispatch";
import TeamLeaderListAgentDispatch from "../views/distribution_module/stockist/list_manager_dispatch";
import TeamLeaderApproveAgentDispatch from "../views/distribution_module/stockist/approve_manager_dispatch";

//Agents Management Pages
import AgentStockToReceive from "../views/distribution_module/stockist/create_manager_dispatch";

// purchased with cash
import BuyStockUsingCash from "../views/inventory_module/purchase_stock_using_cash/buy_stock_using_cash";
import Unapproved_cash_stock_purchase from "../views/inventory_module/purchase_stock_using_cash/list_unapproved_cash_stock_purchase";
import Active_cash_stock_purchase from "../views/inventory_module/purchase_stock_using_cash/list_active_cash_stock_purchase";

// Receive in transit
import Receivestock from "../views/inventory_module/stock_in_transit/receive_stock";
import Approve_received_stock from "../views/inventory_module/stock_in_transit/list_unapproved_received_stock";
import Available_stock from "../views/inventory_module/stock_in_transit/list_available_stock";

// product Managment
import Activephones from "../views/inventory_module/product_management/mobile-models/list_active_phone_models";
import Createphonemodel from "../views/inventory_module/product_management/mobile-models/create_phone_model";
import ApprovenewPhone from "../views/inventory_module/product_management/mobile-models/list_unapproved_new_phone_model";
import Deactivatedphones from "../views/inventory_module/product_management/mobile-models/list_deactivated_phone_models";
import Deletedphonedmodels from "../views/inventory_module/product_management/mobile-models/list_deleted_phone_models";
import ReactivatedPhonemodels from "../views/inventory_module/product_management/mobile-models/list_reactivated_phone_models";
import Createtvmodels from "../views/inventory_module/product_management/television_models/create_tv_models";
import Activetvmodels from "../views/inventory_module/product_management/television_models/list_active_tv_models";
import NewUnapprovedtv from "../views/inventory_module/product_management/television_models/list_new_unapproved_tv_models";
import Deactivatedtv from "../views/inventory_module/product_management/television_models/list_deactivated_tv_models";
import DeletedtvModels from "../views/inventory_module/product_management/television_models/list_deleted_tv_models";
import Reactivatedtvmodels from "../views/inventory_module/product_management/television_models/list_reactivated_tv_models";
import Activeaccessories from "../views/inventory_module/product_management/accessories_models/list_active_accessories";
import Createaccessory from "../views/inventory_module/product_management/accessories_models/create_accessory_model";
import Newunapprovedaccessories from "../views/inventory_module/product_management/accessories_models/list_new_unapproved_accessories_model";
import Deactivatedaccessory from "../views/inventory_module/product_management/accessories_models/list_deactivated_accessory_models";
import Deletedaccessory from "../views/inventory_module/product_management/accessories_models/list_deleted_accessory_models";
import Reactivatedaccessory from "../views/inventory_module/product_management/accessories_models/list_reactivated_accessory_models";
import ProductCategories from "../views/inventory_module/product_management/product_categories/list_product_categories";
import ProductsubCategories from "../views/inventory_module/product_management/product_categories/list_product_subCategories";

// accounting pages
import Create_accounts from "../views/finance_module/accounting_module/accounts/create_accounts";
import Unapproved_accounts from "../views/finance_module/accounting_module/accounts/list_unapproved_account";
import Active_accounts from "../views/finance_module/accounting_module/accounts/list_active_accounts";
import Deactivated_accounts from "../views/finance_module/accounting_module/accounts/list_deactivated_accounts";
import Reactivated_accounts from "../views/finance_module/accounting_module/accounts/list_reactivated_accounts";
import Deleted_accounts from "../views/finance_module/accounting_module/accounts/list_deleted_accounts";

// finance module
import Create_capital_injection from "../views/finance_module/accounting_module/capital_injection/create_capital_injection";
import Unapproved_capital_injection from "../views/finance_module/accounting_module/capital_injection/list_unapproved_capital_injection";
import Active_capital_injection from "../views/finance_module/accounting_module/capital_injection/list_active_capital_injection";
import Deactivated_capital_injections from "../views/finance_module/accounting_module/capital_injection/list_deactivated_capital_injections";
import Reactivated_capital_injection from "../views/finance_module/accounting_module/capital_injection/list_deactivated_capital_injections";
import Deleted_capital_injection from "../views/finance_module/accounting_module/capital_injection/list_deleted_capital_injection";


//Transport Pages
import TransportDashboard from "../views/transport_module/dashboard/transport_dashboard";

// stock in transit
import StockDelivery from "../views/transport_module/deliveries/list_stock_deliveries";
import ProductDispatch from "../views/transport_module/deliveries/list_products_dispatch";
import CreateStockDelivery from "../views/transport_module/deliveries/create_stock_deliveries";
import ActiveStockDelivery from "../views/transport_module/deliveries/list_active_stock_deliveries";
import NewUnapprovedStockDelivery from "../views/transport_module/deliveries/list_unapproved_stock_deliveries";

//Customer Pages
import CustomerDashboard from "../views/crm_module/dashboard/crm_dashboard";
import TicketManagement from "../views/crm_module/ticket_management/ticket_dashboard";


//Sales Pages
import SalesDashboard from "../views/sales_module/dashboard/sales_dashboard";
import Sale from "../views/sales_module/sale/sale";

//Payments Pages
import PaymentsDashboard from "../views/payments_module/dashboard/payments_dashboard";
import MobileMoney from "../views/payments_module/mobile_money/mobile_money_dashboard";
import BankPayments from "../views/payments_module/bank_payments/bank_payments_dashboard";
import CashPayments from "../views/payments_module/cash_payments/cash_payments_dashboard";

//Finance Accounting Pages
import AccountingDashboard from "../views/finance_module/dashboard/accouting_dashboard";

//Finance Expenses Pages
import ExpensesDashboard from "../views/finance_module/dashboard/expenses_dashboard";

//Email-SMS SMS Pages
import SmsDashboard from "../views/email_sms_module/dashboard/sms_dashboard";

//Email-SMS Email Pages
import EmailDashboard from "../views/email_sms_module/dashboard/email_dashboard";

//HR Pages
import HrDashboard from "../views/hr_module/dashboard/hr_dashboard";
import EmployeeProfile from "../views/hr_module/profile/employee_profile";
import PerformanceManagement from "../views/hr_module/performance/performance_management";
import PayrollManagement from "../views/hr_module/payroll/payroll_management";

//Analytics Pages
import AnalyticsDashboard from "../views/analytics_module/dashboard/analytics_dashboard";
import SalesAnalysis from "../views/analytics_module/sales/sales_analysis";
import InventoryAnalysis from "../views/analytics_module/inventory/inventory_analysis";
import SupplierAnalysis from "../views/analytics_module/supplier/supplier_analysis";


//Reports Module
import ReportsDashboard from "../views/reports_module/dashboard/reports_dashboard";
import FinanceReports from "../views/reports_module/finance_reports/finance_reports";
import InventoryReports from "../views/reports_module/inventory_reports/inventory_reports";
import SalesReports from "../views/reports_module/sales_reports/sales_reports";
import SupplierReports from "../views/reports_module/supplier_reports/supplier_reports";
import TransporterReports from "../views/reports_module/transporter_reports/transporter_reports";
import PaymentsReports from "../views/reports_module/payments_reports/payments_reports";
import CustomerReports from "../views/reports_module/customer_reports/customer_reports";
import HrReports from "../views/reports_module/hr_reports/hr_reports";


//Settings Module
import SettingsDashboard from "../views/settings_module/dashboard/settings_dashboard";
import RolesAndPermissions from "../views/settings_module/roles_and_permissions/roles_and_permissions";
import SmsSettings from "../views/settings_module/sms_settings/sms_settings";
import EmailSettings from "../views/settings_module/email_settings/email_settings";
import GeneralSettings from "../views/settings_module/general_settings/general_settings";
import LogsSettings from "../views/settings_module/logs_settings/logs_settings";


import Calender from "../component/advancedUi/calender/calender";
import Carousel from "../component/advancedUi/carousel/carousel";
import Filedetails from "../component/advancedUi/filemanager/filedetails/filedetails";
import Filemanagerlist from "../component/advancedUi/filemanager/filemanagerlist/filemanagerlist";
import Filemanagermain from "../component/advancedUi/filemanager/filemanagermain/filemanagermain";
import Gallery from "../component/advancedUi/gallery/gallery";
import Notification from "../component/advancedUi/notification/notification";
import Rangeslider from "../component/advancedUi/rangeslider/rangeslider";
import Rating from "../component/advancedUi/rating/rating";
import Sweetalert from "../component/advancedUi/sweetalert/sweetalert";
import Treeview from "../component/advancedUi/treeview/treeview";
import Dropdowns from "../component/basicUi/dropdowns/dropdowns";
import Modal from "../component/basicUi/modal/modal";
import Offcanvas from "../component/basicUi/offcanvas/offcanvas";
import Basictable from "../component/basicUi/tables/basictable/basictable";
import Datatable from "../component/basicUi/tables/datatable/datatable";
import TableEdit from "../component/basicUi/tables/tableEdit/tableEdit";
import TooltipPopover from "../component/basicUi/tooltip&popover/tooltip&popover";
import Apexchart from "../component/charts/apexchart/apexchart";
import Chartjs from "../component/charts/chartjs/chartjs";
import Echart from "../component/charts/echart/echart";
import Accordion from "../component/components/accordion/accordion";
import Alerts from "../component/components/alerts/alerts";
import Avatars from "../component/components/avatars/avatars";
import Badges from "../component/components/badges/badges";
import Blockquotes from "../component/components/blockquotes/blockquotes";
import Buttons from "../component/components/buttons/buttons";
import Cards from "../component/components/cards/cards";
import Collapse from "../component/components/collapse/collapse";
import Indicators from "../component/components/indicators/indicators";
import List from "../component/components/list/list";
import Listgroup from "../component/components/listgroup/listgroup";
import Progress from "../component/components/progress/progress";
import Skeletons from "../component/components/skeletons/skeletons";
import Spinners from "../component/components/spinners/spinners";
import Toasts from "../component/components/toasts/toasts";
import Analytics from "../component/dashboards/analytics/analytics";
import Course from "../component/dashboards/course/course";
import Crm from "../component/dashboards/crm/crm";
import Crypto from "../component/dashboards/crypto/crypto";
import Ecommerce from "../component/dashboards/ecommerce/ecommerce";
import Hrm from "../component/dashboards/hrm/hrm";
import Jobs from "../component/dashboards/jobs/jobs";
import Nft from "../component/dashboards/nft/nft";
import Personal from "../component/dashboards/personal/personal";
import Projects from "../component/dashboards/projects/projects";
import Sales from "../component/dashboards/sales/sales";
import Stocks from "../component/dashboards/stocks/stocks";
import Breadcrumbs from "../component/elements/breadcrumbs/breadcrumbs";
import Columns from "../component/elements/columns/columns";
import Grids from "../component/elements/grids/grids";
import MegaMenu from "../component/elements/megaMenu/megaMenu";
import NavTabs from "../component/elements/nav&tabs/nav&tabs";
import Navbar from "../component/elements/navbar/navbar";
import Paginations from "../component/elements/paginations/paginations";
import Advancedforms from "../component/forms/advancedforms/advancedforms";
import Fileuploads from "../component/forms/fileuploads/fileuploads";
import Formcheckbox from "../component/forms/formcheckbox/formcheckbox";
import Formeditors from "../component/forms/formeditors/formeditors";
import Formelements from "../component/forms/formelements/formelements";
import Forminputgroup from "../component/forms/forminputgroup/forminputgroup";
import Formlayout from "../component/forms/formlayout/formlayout";
import Formradio from "../component/forms/formradio/formradio";
import Formselect from "../component/forms/formselect/formselect";
import Formswitch from "../component/forms/formswitch/formswitch";
import Formvalidation from "../component/forms/formvalidation/formvalidation";
import Leafletmap from "../component/maps/leafletmap/leafletmap";
import Simplemap from "../component/maps/simplemap/simplemap";
import Blogdetails from "../component/pagecomponent/blog/blogdetails/blogdetails";
import Blogedit from "../component/pagecomponent/blog/blogedit/blogedit";
import Blogmain from "../component/pagecomponent/blog/blogmain/blogmain";
import Contacts from "../component/pagecomponent/contacts/contacts";
import Addproduct from "../component/pagecomponent/Ecommerce/addproduct/addproduct";
import Cart from "../component/pagecomponent/Ecommerce/cart/cart";
import Checkout from "../component/pagecomponent/Ecommerce/checkout/checkout";
import Editproduct from "../component/pagecomponent/Ecommerce/editproduct/editproduct";
import Orderdetails from "../component/pagecomponent/Ecommerce/orderdetails/orderdetails";
import Orders from "../component/pagecomponent/Ecommerce/orders/orders";
import Product from "../component/pagecomponent/Ecommerce/product/product";
import Productdetails from "../component/pagecomponent/Ecommerce/productdetails/productdetails";
import Productlist from "../component/pagecomponent/Ecommerce/productlist/productlist";
import Wishlist from "../component/pagecomponent/Ecommerce/wishlist/wishlist";
import Emptypages from "../component/pagecomponent/emptypages/emptypages";
import Invoicedetails from "../component/pagecomponent/invoice/invoicedetails/invoicedetails";
import Invoicelist from "../component/pagecomponent/invoice/invoicelist/invoicelist";
import Chat from "../component/pagecomponent/mail/chat/chat";
import Mailsettings from "../component/pagecomponent/mail/mailsettings/mailsettings";
import MainMail from "../component/pagecomponent/mail/mainMail/mainMail";
import Pricingtables from "../component/pagecomponent/pricingtables/pricingtables";
import Profilesetting from "../component/pagecomponent/profile/profilesetting/profilesetting";
import Reviews from "../component/pagecomponent/reviews/reviews";
import Tasks from "../component/pagecomponent/tasks/tasks";
import Team from "../component/pagecomponent/team/team";
import Timeline from "../component/pagecomponent/timeline/timeline";
import Todolist from "../component/pagecomponent/todolist/todolist";

import Remixicons from "../component/icon/remixicons/remixicons";
import Tablericons from "../component/icon/tablericons/tablericons";



//component path END

export const RouteData = [

    // {/* Dashboard content */}

    { path: `${import.meta.env.BASE_URL}dashboards/sales`, element: <Sales />, title: '' },
    { path: `${import.meta.env.BASE_URL}dashboards/main`, element: <MainDashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}dashboards/agents`, element: <Agents_dashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}dashboards/ecommerce`, element: <Ecommerce />, title: '' },
    { path: `${import.meta.env.BASE_URL}dashboards/crypto`, element: <Crypto />, title: '' },
    { path: `${import.meta.env.BASE_URL}dashboards/jobs`, element: <Jobs />, title: '' },
    { path: `${import.meta.env.BASE_URL}dashboards/nft`, element: <Nft />, title: '' },
    { path: `${import.meta.env.BASE_URL}dashboards/analytics`, element: <Analytics />, title: '' },
    { path: `${import.meta.env.BASE_URL}dashboards/projects`, element: <Projects />, title: '' },
    { path: `${import.meta.env.BASE_URL}dashboards/hrm`, element: <Hrm />, title: '' },
    { path: `${import.meta.env.BASE_URL}dashboards/crm`, element: <Crm />, title: '' },
    { path: `${import.meta.env.BASE_URL}dashboards/personal`, element: <Personal />, title: '' },
    { path: `${import.meta.env.BASE_URL}dashboards/stocks`, element: <Stocks />, title: '' },
    { path: `${import.meta.env.BASE_URL}dashboards/course`, element: <Course />, title: '' },


    // {/* Activities content */}
    { path: `${import.meta.env.BASE_URL}activities`, element: <Activities />, title: '' },
    { path: `${import.meta.env.BASE_URL}notifications`, element: <Notifications />, title: '' },

    // {/* User content */} 
    { path: `${import.meta.env.BASE_URL}my_profile`, element: <Profile />, title: '' },
    { path: `${import.meta.env.BASE_URL}users/dashboard`, element: <UserDashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}users/create-user`, element: <CreateUser />, title: '' },
    { path: `${import.meta.env.BASE_URL}users/new-user`, element: <Newusers />, title: '' },
    { path: `${import.meta.env.BASE_URL}users/active-users`, element: <Activeusers />, title: '' },
    { path: `${import.meta.env.BASE_URL}users/deleted-users`, element: <Deletedusers />, title: '' },
    { path: `${import.meta.env.BASE_URL}users/deactivated-users`, element: <Deactivatedusers />, title: '' },
    { path: `${import.meta.env.BASE_URL}users/reactivated-users`, element: <Reactivatedusers />, title: '' },

    // {/* Widgets content */}

    { path: `${import.meta.env.BASE_URL}widgets`, element: <Widgets />, title: '' },

    // {/* Supplier content */}
    { path: `${import.meta.env.BASE_URL}supplier/dashboard`, element: <SupplierDashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}supplier/create-supplier`, element: <CreateSupplier />, title: '' },
    { path: `${import.meta.env.BASE_URL}supplier/active-suppliers`, element: <ActiveSuppliers />, title: '' },
    { path: `${import.meta.env.BASE_URL}supplier/approve-suppliers`, element: <ApproveSupplier />, title: '' },
    { path: `${import.meta.env.BASE_URL}supplier/deactivated-suppliers`, element: <InactiveSuppliers />, title: '' },
    { path: `${import.meta.env.BASE_URL}supplier/reactivated-suppliers`, element: <ReactivatedSuppliers />, title: '' },
    { path: `${import.meta.env.BASE_URL}supplier/deleted-suppliers`, element: <DeletedSuppliers />, title: '' },
    { path: `${import.meta.env.BASE_URL}supplier/supply-chain`, element: <SupplyChain />, title: '' },
    { path: `${import.meta.env.BASE_URL}supplier/sms-management`, element: <SmsManagement />, title: '' },


    // {/* Inventory content */}
    { path: `${import.meta.env.BASE_URL}inventory/dashboard`, element: <InventoryDashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/product-management`, element: <ProductManagement />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/inventory-management`, element: <InventoryManagement />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/quality-control`, element: <QualityControl />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/create-distribution-center`, element: <CreatedistributionCenter />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/approve-new-distribution-center`, element: <Approvenewdistribution />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/active-distribution-centers`, element: <Activedistributioncenters />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/deleted-distribution-centers`, element: <Deleteddistributions />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/deactivated-distribution-centers`, element: <Deactivateddistributions />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/reactivated-distribution-centers`, element: <Reactivateddistributions />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/reactivated-distribution-centers`, element: <Reactivateddistributions />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/distribution-dashboard`, element: <Distribution_dashboard />, title: '' },

    // Stockist Distribution
    { path: `${import.meta.env.BASE_URL}distribution/create-dispatch-to-manager/`, element: <StockistCreateManagerDispatch />, title: '' },
    { path: `${import.meta.env.BASE_URL}distribution/list-dispatch-to-manager/`, element: <StockistListManagerDispatch />, title: '' },
    { path: `${import.meta.env.BASE_URL}distribution/approve-dispatch-to-manager/`, element: <StockistApproveManagerDispatch />, title: '' },
    
    // Manager Distribution
    { path: `${import.meta.env.BASE_URL}distribution/manager-stock-to-receive/`, element: <ManagerStockToReceive />, title: '' },
    { path: `${import.meta.env.BASE_URL}distribution/manager-stock-available/`, element: <ManagerStockAvailable />, title: '' },
    { path: `${import.meta.env.BASE_URL}distribution/manager-create-dispatch-to-team-leader/`, element: <ManagerCreateTeamLeaderDispatch />, title: '' },
    { path: `${import.meta.env.BASE_URL}distribution/manager-list-dispatch-to-team-leader/`, element: <ManagerListTeamLeaderDispatch />, title: '' },
    { path: `${import.meta.env.BASE_URL}distribution/manager-approve-dispatch-to-team-leader/`, element: <ManagerApproveTeamLeaderDispatch />, title: '' },

    // Team Leaders Distribution
    { path: `${import.meta.env.BASE_URL}distribution/team-leader-stock-to-receive/`, element: <TeamLeaderStockToReceive />, title: '' },
    { path: `${import.meta.env.BASE_URL}distribution/team-leader-create-dispatch-to-agents/`, element: <TeamLeaderCreateAgentDispatch />, title: '' },
    { path: `${import.meta.env.BASE_URL}distribution/team-leader-list-dispatch-to-agents/`, element: <TeamLeaderListAgentDispatch />, title: '' },
    { path: `${import.meta.env.BASE_URL}distribution/team-leader-approve-dispatch-to-agents/`, element: <TeamLeaderApproveAgentDispatch />, title: '' },

    // Agents Distribution
    { path: `${import.meta.env.BASE_URL}distribution/agent-stock-to-receive/`, element: <AgentStockToReceive />, title: '' },


    // { path: `${import.meta.env.BASE_URL}distribution/manager/approve/dispatch/`, element: <ApproveDispatch />, title: '' },
    // { path: `${import.meta.env.BASE_URL}distribution/manager/active-dispatch`, element: <List_active_dispatch />, title: '' },
    // { path: `${import.meta.env.BASE_URL}distribution/manager/receive-dispatch`, element: <Receive_stock />, title: '' },
    
    // { path: `${import.meta.env.BASE_URL}distribution/teamleader/dispatch`, element: <Team_leader_dispatch_phones />, title: '' },
    // { path: `${import.meta.env.BASE_URL}distribution/teamleader/new-dispatch`, element: <List_new_Team_leader_dispatch />, title: '' },
    // { path: `${import.meta.env.BASE_URL}distribution/teamleader/active-dispatch`, element: <Active_team_leader_distributions />, title: '' },
    // { path: `${import.meta.env.BASE_URL}distribution/teamleader/receive-dispatch`, element: <Receive_Team_leader_dispatched />, title: '' },

    // receive stock
    { path: `${import.meta.env.BASE_URL}inventory/receive-stock`, element: <Receivestock />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/approve-receive-stock`, element: <Approve_received_stock />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/available-stock`, element: <Available_stock />, title: '' },

    // purchase stock with cash
    { path: `${import.meta.env.BASE_URL}inventory/buy-using-cash`, element: <BuyStockUsingCash />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/new-stock-purchased-using-cash`, element: <Unapproved_cash_stock_purchase />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/active-stock-purchased-using-cash`, element: <Active_cash_stock_purchase />, title: '' },
    // { path: `${import.meta.env.BASE_URL}inventory/active-stock-purchased-using-cash`, element: <NewUnapprovedStockDelivery /> , title: ''},

    // product managment
    { path: `${import.meta.env.BASE_URL}inventory/active-phones-models`, element: <Activephones />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/create-phone-model`, element: <Createphonemodel />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/approve-new-phone-model`, element: <ApprovenewPhone />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/deactivated-phone-model`, element: <Deactivatedphones />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/deleted-phone-model`, element: <Deletedphonedmodels />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/reactivated-phone-model`, element: <ReactivatedPhonemodels />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/create-tv-model`, element: <Createtvmodels />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/active-tv-model`, element: <Activetvmodels />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/approve-new-tv-model`, element: <NewUnapprovedtv />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/deactivated-tv-model`, element: <Deactivatedtv />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/deleted-tv-model`, element: <DeletedtvModels />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/reactivated-tv-model`, element: <Reactivatedtvmodels />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/active-accessories-model`, element: <Activeaccessories />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/create-accessories-model`, element: <Createaccessory />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/new-unapproved-accessories-model`, element: <Newunapprovedaccessories />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/deactivated-accessories-model`, element: <Deactivatedaccessory />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/deleted-accessories-model`, element: <Deletedaccessory />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/reactivated-accessories-model`, element: <Reactivatedaccessory />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/product-categories`, element: <ProductCategories />, title: '' },
    { path: `${import.meta.env.BASE_URL}inventory/product-subcategories`, element: <ProductsubCategories />, title: '' },


    // {/* Transport content */}
    { path: `${import.meta.env.BASE_URL}transport/dashboard`, element: <TransportDashboard />, title: '' },

    //  products in transit
    { path: `${import.meta.env.BASE_URL}transport/delivery`, element: <StockDelivery />, title: '' },
    { path: `${import.meta.env.BASE_URL}transport/dispatch`, element: <ProductDispatch />, title: '' },
    { path: `${import.meta.env.BASE_URL}transport/create-delivery`, element: <CreateStockDelivery />, title: '' },
    { path: `${import.meta.env.BASE_URL}transport/active-stock-delivery`, element: <ActiveStockDelivery />, title: '' },
    { path: `${import.meta.env.BASE_URL}transport/new-unapproved-stock-delivery`, element: <NewUnapprovedStockDelivery />, title: '' },

    // {/* CRM content */}
    { path: `${import.meta.env.BASE_URL}customer/dashboard`, element: <CustomerDashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}customer/ticket-management`, element: <TicketManagement />, title: '' },

    // {/* Sales content */}
    { path: `${import.meta.env.BASE_URL}sales/dashboard`, element: <SalesDashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}sales/sell`, element: <Sale />, title: '' },


    // {/* Payments content */}
    { path: `${import.meta.env.BASE_URL}payments/dashboard`, element: <PaymentsDashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}payments/mobilemoney`, element: <MobileMoney />, title: '' },
    { path: `${import.meta.env.BASE_URL}payments/bank`, element: <BankPayments />, title: '' },
    { path: `${import.meta.env.BASE_URL}payments/cash`, element: <CashPayments />, title: '' },


    // {/* Accounts content */}
    { path: `${import.meta.env.BASE_URL}finance/accouting`, element: <AccountingDashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}finance/create-accounts`, element: <Create_accounts />, title: '' },
    { path: `${import.meta.env.BASE_URL}finance/unapproved-accounts`, element: <Unapproved_accounts />, title: '' },
    { path: `${import.meta.env.BASE_URL}finance/active-accounts`, element: <Active_accounts />, title: '' },
    { path: `${import.meta.env.BASE_URL}finance/deactivated-accounts`, element: <Deactivated_accounts />, title: '' },
    { path: `${import.meta.env.BASE_URL}finance/reactivated-accounts`, element: <Reactivated_accounts />, title: '' },
    { path: `${import.meta.env.BASE_URL}finance/deleted-accounts`, element: <Deleted_accounts />, title: '' },

    // finance 
    { path: `${import.meta.env.BASE_URL}finance/expenses`, element: <ExpensesDashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}finance/create-capital-injection`, element: <Create_capital_injection />, title: '' },
    { path: `${import.meta.env.BASE_URL}finance/new-unapproved-capital-injection`, element: <Unapproved_capital_injection />, title: '' },
    { path: `${import.meta.env.BASE_URL}finance/active-capital-injection`, element: <Active_capital_injection />, title: '' },
    { path: `${import.meta.env.BASE_URL}finance/deactivated-capital-injection`, element: <Deactivated_capital_injections />, title: '' },
    { path: `${import.meta.env.BASE_URL}finance/reactivated-capital-injection`, element: <Reactivated_capital_injection />, title: '' },
    { path: `${import.meta.env.BASE_URL}finance/deleted-capital-injection`, element: <Deleted_capital_injection />, title: '' },

    // {/* Email content */}
    { path: `${import.meta.env.BASE_URL}email/dashboard`, element: <EmailDashboard />, title: '' },

    // {/* SMS content */}
    { path: `${import.meta.env.BASE_URL}sms/dashboard`, element: <SmsDashboard />, title: '' },


    // {/* Hr content */}
    { path: `${import.meta.env.BASE_URL}hr/dashboard`, element: <HrDashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}hr/employee-profile`, element: <EmployeeProfile />, title: '' },
    { path: `${import.meta.env.BASE_URL}hr/performance-management`, element: <PerformanceManagement />, title: '' },
    { path: `${import.meta.env.BASE_URL}hr/payroll-management`, element: <PayrollManagement />, title: '' },

    // {/* Analytics content */}
    { path: `${import.meta.env.BASE_URL}analytics/dashboard`, element: <AnalyticsDashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}analytics/sales-analysis`, element: <SalesAnalysis />, title: '' },
    { path: `${import.meta.env.BASE_URL}analytics/inventory-analysis`, element: <InventoryAnalysis />, title: '' },
    { path: `${import.meta.env.BASE_URL}analytics/supplier-analysis`, element: <SupplierAnalysis />, title: '' },


    // {/* Reports content */}
    { path: `${import.meta.env.BASE_URL}reports/dashboard`, element: <ReportsDashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}reports/finance-reports`, element: <FinanceReports />, title: '' },
    { path: `${import.meta.env.BASE_URL}reports/inventory-reports`, element: <InventoryReports />, title: '' },
    { path: `${import.meta.env.BASE_URL}reports/sales-reports`, element: <SalesReports />, title: '' },
    { path: `${import.meta.env.BASE_URL}reports/supplier-reports`, element: <SupplierReports />, title: '' },
    { path: `${import.meta.env.BASE_URL}reports/transporter-reports`, element: <TransporterReports />, title: '' },
    { path: `${import.meta.env.BASE_URL}reports/hr-reports`, element: <HrReports />, title: '' },
    { path: `${import.meta.env.BASE_URL}reports/payments-reports`, element: <PaymentsReports />, title: '' },
    { path: `${import.meta.env.BASE_URL}reports/customer-reports`, element: <CustomerReports />, title: '' },


    // {/* Settings content */}
    { path: `${import.meta.env.BASE_URL}settings/dashboard`, element: <SettingsDashboard />, title: '' },
    { path: `${import.meta.env.BASE_URL}settings/roles-and-permissions`, element: <RolesAndPermissions />, title: '' },
    { path: `${import.meta.env.BASE_URL}settings/sms-settings`, element: <SmsSettings />, title: '' },
    { path: `${import.meta.env.BASE_URL}settings/email-settings`, element: <EmailSettings />, title: '' },
    { path: `${import.meta.env.BASE_URL}settings/general-settings`, element: <GeneralSettings />, title: '' },
    { path: `${import.meta.env.BASE_URL}settings/logs-settings`, element: <LogsSettings />, title: '' },

    // {/* Component content */}

    { path: `${import.meta.env.BASE_URL}components/accordion`, element: <Accordion />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/alerts`, element: <Alerts />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/avatars`, element: <Avatars />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/badges`, element: <Badges />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/blockquotes`, element: <Blockquotes />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/buttons`, element: <Buttons />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/cards`, element: <Cards />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/collapse`, element: <Collapse />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/indicators`, element: <Indicators />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/list`, element: <List />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/listgroup`, element: <Listgroup />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/progress`, element: <Progress />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/skeletons`, element: <Skeletons />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/spinners`, element: <Spinners />, title: '' },
    { path: `${import.meta.env.BASE_URL}components/toasts`, element: <Toasts />, title: '' },

    // {/* Component content */}

    { path: `${import.meta.env.BASE_URL}elements/breadcrumbs`, element: <Breadcrumbs />, title: '' },
    { path: `${import.meta.env.BASE_URL}elements/columns`, element: <Columns />, title: '' },
    { path: `${import.meta.env.BASE_URL}elements/grids`, element: <Grids />, title: '' },
    { path: `${import.meta.env.BASE_URL}elements/megaMenu`, element: <MegaMenu />, title: '' },
    { path: `${import.meta.env.BASE_URL}elements/nav&tabs`, element: <NavTabs />, title: '' },
    { path: `${import.meta.env.BASE_URL}elements/navbar`, element: <Navbar />, title: '' },
    { path: `${import.meta.env.BASE_URL}elements/paginations`, element: <Paginations />, title: '' },

    // {/* Forms content */ }

    { path: `${import.meta.env.BASE_URL}forms/advancedforms`, element: <Advancedforms />, title: '' },
    { path: `${import.meta.env.BASE_URL}forms/fileuploads`, element: <Fileuploads />, title: '' },
    { path: `${import.meta.env.BASE_URL}forms/formcheckbox`, element: <Formcheckbox />, title: '' },
    { path: `${import.meta.env.BASE_URL}forms/formeditors`, element: <Formeditors />, title: '' },
    { path: `${import.meta.env.BASE_URL}forms/formelements`, element: <Formelements /> },
    { path: `${import.meta.env.BASE_URL}forms/forminputgroup`, element: <Forminputgroup /> },
    { path: `${import.meta.env.BASE_URL}forms/formlayout`, element: <Formlayout /> },
    { path: `${import.meta.env.BASE_URL}forms/formradio`, element: <Formradio /> },
    { path: `${import.meta.env.BASE_URL}forms/formselect`, element: <Formselect /> },
    { path: `${import.meta.env.BASE_URL}forms/formswitch`, element: <Formswitch /> },
    { path: `${import.meta.env.BASE_URL}forms/formvalidation`, element: <Formvalidation /> },

    // {/* Advanced UI content */ }

    { path: `${import.meta.env.BASE_URL}advancedUi/calender`, element: <Calender /> },
    { path: `${import.meta.env.BASE_URL}advancedUi/carousel`, element: <Carousel /> },
    { path: `${import.meta.env.BASE_URL}advancedUi/gallery`, element: <Gallery /> },
    { path: `${import.meta.env.BASE_URL}advancedUi/notification`, element: <Notification /> },
    { path: `${import.meta.env.BASE_URL}advancedUi/rangeslider`, element: <Rangeslider /> },
    { path: `${import.meta.env.BASE_URL}advancedUi/rating`, element: <Rating /> },
    { path: `${import.meta.env.BASE_URL}advancedUi/sweetalert`, element: <Sweetalert /> },
    { path: `${import.meta.env.BASE_URL}advancedUi/treeview`, element: <Treeview /> },

    // {/* File Manager content */ }

    { path: `${import.meta.env.BASE_URL}advancedUi/filemanager/filedetails`, element: <Filedetails /> },
    { path: `${import.meta.env.BASE_URL}advancedUi/filemanager/filemanagerlist`, element: <Filemanagerlist /> },
    { path: `${import.meta.env.BASE_URL}advancedUi/filemanager/filemanagermain`, element: <Filemanagermain /> },

    // {/* Basic UI content */ }

    { path: `${import.meta.env.BASE_URL}basicUi/dropdowns`, element: <Dropdowns /> },
    { path: `${import.meta.env.BASE_URL}basicUi/modal`, element: <Modal /> },
    { path: `${import.meta.env.BASE_URL}basicUi/offcanvas`, element: <Offcanvas /> },
    { path: `${import.meta.env.BASE_URL}basicUi/tooltip&popover`, element: <TooltipPopover /> },

    // {/* Table content */ }
    { path: `${import.meta.env.BASE_URL}basicUi/tables/basictable`, element: <Basictable /> },
    { path: `${import.meta.env.BASE_URL}basicUi/tables/datatable`, element: <Datatable /> },
    { path: `${import.meta.env.BASE_URL}basicUi/tables/tableEdit`, element: <TableEdit /> },

    // {/* Maps content */ }

    { path: `${import.meta.env.BASE_URL}maps/leafletmap`, element: <Leafletmap /> },
    { path: `${import.meta.env.BASE_URL}maps/simplemap`, element: <Simplemap /> },

    // {/* Charts content */ }

    { path: `${import.meta.env.BASE_URL}charts/apexchart`, element: <Apexchart /> },
    { path: `${import.meta.env.BASE_URL}charts/chartjs`, element: <Chartjs /> },
    { path: `${import.meta.env.BASE_URL}charts/echart`, element: <Echart /> },

    // {/* Pages content */ }

    { path: `${import.meta.env.BASE_URL}pagecomponent/contacts`, element: <Contacts /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/pricingtables`, element: <Pricingtables /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/timeline`, element: <Timeline /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/team`, element: <Team /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/todolist`, element: <Todolist /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/tasks`, element: <Tasks /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/reviews`, element: <Reviews /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/emptypages`, element: <Emptypages /> },

    // {/* Profile content */ }

    { path: `${import.meta.env.BASE_URL}pagecomponent/profile/profilesetting`, element: <Profilesetting /> },

    // {/* Invoice content */ }

    { path: `${import.meta.env.BASE_URL}pagecomponent/invoice/invoicedetails`, element: <Invoicedetails /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/invoice/invoicelist`, element: <Invoicelist /> },

    // {/* Blog content */ }

    { path: `${import.meta.env.BASE_URL}pagecomponent/blog/blogdetails`, element: <Blogdetails /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/blog/blogedit`, element: <Blogedit /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/blog/blogmain`, element: <Blogmain /> },

    // {/* Mail content */ }

    { path: `${import.meta.env.BASE_URL}pagecomponent/mail/chat`, element: <Chat /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/mail/mailsettings`, element: <Mailsettings /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/mail/mainMail`, element: <MainMail /> },

    // {/* Ecommerce-content content */ }

    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/addproduct`, element: <Addproduct /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/cart`, element: <Cart /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/checkout`, element: <Checkout /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/editproduct`, element: <Editproduct /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails`, element: <Orderdetails /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orders`, element: <Orders /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/product`, element: <Product /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/productdetails`, element: <Productdetails /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/productlist`, element: <Productlist /> },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/wishlist`, element: <Wishlist /> },

    // {/* Icons content */ }

    { path: `${import.meta.env.BASE_URL}icon/remixicons`, element: <Remixicons /> },
    { path: `${import.meta.env.BASE_URL}icon/tablericons`, element: <Tablericons /> },

]


export const SearchData = [

    // {/* Dashboard content */}


    { path: `${import.meta.env.BASE_URL}dashboards/main`, element: <MainDashboard />, title: 'main' },
    { path: `${import.meta.env.BASE_URL}dashboards/sales`, element: <Sales />, title: 'sales' },
    { path: `${import.meta.env.BASE_URL}dashboards/ecommerce`, element: <Ecommerce />, title: 'ecommerce' },
    { path: `${import.meta.env.BASE_URL}dashboards/crypto`, element: <Crypto />, title: 'crypto' },
    { path: `${import.meta.env.BASE_URL}dashboards/jobs`, element: <Jobs />, title: 'jobs' },
    { path: `${import.meta.env.BASE_URL}dashboards/nft`, element: <Nft />, title: 'nft' },
    { path: `${import.meta.env.BASE_URL}dashboards/analytics`, element: <Analytics />, title: 'analytics' },
    { path: `${import.meta.env.BASE_URL}dashboards/projects`, element: <Projects />, title: 'projects' },
    { path: `${import.meta.env.BASE_URL}dashboards/hrm`, element: <Hrm />, title: 'hrm' },
    { path: `${import.meta.env.BASE_URL}dashboards/crm`, element: <Crm />, title: 'crm' },
    { path: `${import.meta.env.BASE_URL}dashboards/personal`, element: <Personal />, title: 'personal' },
    { path: `${import.meta.env.BASE_URL}dashboards/stocks`, element: <Stocks />, title: 'stocks' },
    { path: `${import.meta.env.BASE_URL}dashboards/course`, element: <Course />, title: 'course' },


    // {/* Component content */}

    { path: `${import.meta.env.BASE_URL}components/accordion`, element: <Accordion />, title: 'accordion' },
    { path: `${import.meta.env.BASE_URL}components/alerts`, element: <Alerts />, title: 'alerts' },
    { path: `${import.meta.env.BASE_URL}components/avatars`, element: <Avatars />, title: 'avatars' },
    { path: `${import.meta.env.BASE_URL}components/badges`, element: <Badges />, title: 'badges' },
    { path: `${import.meta.env.BASE_URL}components/blockquotes`, element: <Blockquotes />, title: 'blockquotes' },
    { path: `${import.meta.env.BASE_URL}components/buttons`, element: <Buttons />, title: 'buttons' },
    { path: `${import.meta.env.BASE_URL}components/cards`, element: <Cards />, title: 'cards' },
    { path: `${import.meta.env.BASE_URL}components/collapse`, element: <Collapse />, title: 'collapse' },
    { path: `${import.meta.env.BASE_URL}components/indicators`, element: <Indicators />, title: 'indicators' },
    { path: `${import.meta.env.BASE_URL}components/list`, element: <List />, title: 'list' },
    { path: `${import.meta.env.BASE_URL}components/listgroup`, element: <Listgroup />, title: 'listgroup' },
    { path: `${import.meta.env.BASE_URL}components/progress`, element: <Progress />, title: 'progress' },
    { path: `${import.meta.env.BASE_URL}components/skeletons`, element: <Skeletons />, title: 'skeletons' },
    { path: `${import.meta.env.BASE_URL}components/spinners`, element: <Spinners />, title: 'spinners' },
    { path: `${import.meta.env.BASE_URL}components/toasts`, element: <Toasts />, title: 'toasts' },

    // {/* Component content */}

    { path: `${import.meta.env.BASE_URL}elements/breadcrumbs`, element: <Breadcrumbs />, title: 'breadcrumbs' },
    { path: `${import.meta.env.BASE_URL}elements/columns`, element: <Columns />, title: 'columns' },
    { path: `${import.meta.env.BASE_URL}elements/grids`, element: <Grids />, title: 'grids' },
    { path: `${import.meta.env.BASE_URL}elements/megaMenu`, element: <MegaMenu />, title: 'megaMenu' },
    { path: `${import.meta.env.BASE_URL}elements/nav&tabs`, element: <NavTabs />, title: 'nav&tabs' },
    { path: `${import.meta.env.BASE_URL}elements/navbar`, element: <Navbar />, title: 'navbar' },
    { path: `${import.meta.env.BASE_URL}elements/paginations`, element: <Paginations />, title: 'paginations' },

    // {/* Forms content */ }

    { path: `${import.meta.env.BASE_URL}forms/advancedforms`, element: <Advancedforms />, title: 'advancedforms' },
    { path: `${import.meta.env.BASE_URL}forms/fileuploads`, element: <Fileuploads />, title: 'fileuploads' },
    { path: `${import.meta.env.BASE_URL}forms/formcheckbox`, element: <Formcheckbox />, title: 'formcheckbox' },
    { path: `${import.meta.env.BASE_URL}forms/formeditors`, element: <Formeditors />, title: 'formeditors' },
    { path: `${import.meta.env.BASE_URL}forms/formelements`, element: <Formelements />, title: 'formelements' },
    { path: `${import.meta.env.BASE_URL}forms/forminputgroup`, element: <Forminputgroup />, title: 'forminputgroup' },
    { path: `${import.meta.env.BASE_URL}forms/formlayout`, element: <Formlayout />, title: 'formlayout' },
    { path: `${import.meta.env.BASE_URL}forms/formradio`, element: <Formradio />, title: 'formradio' },
    { path: `${import.meta.env.BASE_URL}forms/formselect`, element: <Formselect />, title: 'formselect' },
    { path: `${import.meta.env.BASE_URL}forms/formswitch`, element: <Formswitch />, title: 'formswitch' },
    { path: `${import.meta.env.BASE_URL}forms/formvalidation`, element: <Formvalidation />, title: 'formvalidation' },

    // {/* Advanced UI content */ }

    { path: `${import.meta.env.BASE_URL}advancedUi/calender`, element: <Calender />, title: 'calender' },
    { path: `${import.meta.env.BASE_URL}advancedUi/carousel`, element: <Carousel />, title: 'carousel' },
    { path: `${import.meta.env.BASE_URL}advancedUi/gallery`, element: <Gallery />, title: 'gallery' },
    { path: `${import.meta.env.BASE_URL}advancedUi/notification`, element: <Notification />, title: 'notification' },
    { path: `${import.meta.env.BASE_URL}advancedUi/rangeslider`, element: <Rangeslider />, title: 'rangeslider' },
    { path: `${import.meta.env.BASE_URL}advancedUi/rating`, element: <Rating />, title: 'rating' },
    { path: `${import.meta.env.BASE_URL}advancedUi/sweetalert`, element: <Sweetalert />, title: 'sweetalert' },
    { path: `${import.meta.env.BASE_URL}advancedUi/treeview`, element: <Treeview />, title: 'treeview' },

    // {/* File Manager content */ }

    { path: `${import.meta.env.BASE_URL}advancedUi/filemanager/filedetails`, element: <Filedetails />, title: 'filedetails' },
    { path: `${import.meta.env.BASE_URL}advancedUi/filemanager/filemanagerlist`, element: <Filemanagerlist />, title: 'filemanagerlist' },
    { path: `${import.meta.env.BASE_URL}advancedUi/filemanager/filemanagermain`, element: <Filemanagermain />, title: 'filemanagermain' },

    // {/* Basic UI content */ }

    { path: `${import.meta.env.BASE_URL}basicUi/dropdowns`, element: <Dropdowns />, title: 'dropdowns' },
    { path: `${import.meta.env.BASE_URL}basicUi/modal`, element: <Modal />, title: 'modal' },
    { path: `${import.meta.env.BASE_URL}basicUi/offcanvas`, element: <Offcanvas />, title: 'offcanvas' },
    { path: `${import.meta.env.BASE_URL}basicUi/tooltip&popover`, element: <TooltipPopover />, title: 'tooltip&popover' },

    // {/* Table content */ }
    { path: `${import.meta.env.BASE_URL}basicUi/tables/basictable`, element: <Basictable />, title: 'basictable' },
    { path: `${import.meta.env.BASE_URL}basicUi/tables/datatable`, element: <Datatable />, title: 'datatable' },
    { path: `${import.meta.env.BASE_URL}basicUi/tables/tableEdit`, element: <TableEdit />, title: 'tableEdit' },

    // {/* Maps content */ }

    { path: `${import.meta.env.BASE_URL}maps/leafletmap`, element: <Leafletmap />, title: 'leafletmap' },
    { path: `${import.meta.env.BASE_URL}maps/vectormap`, element: <Simplemap />, title: 'vectormap' },

    // {/* Charts content */ }

    { path: `${import.meta.env.BASE_URL}charts/apexchart`, element: <Apexchart />, title: 'apexchart' },
    { path: `${import.meta.env.BASE_URL}charts/chartjs`, element: <Chartjs />, title: 'chartjs' },
    { path: `${import.meta.env.BASE_URL}charts/echart`, element: <Echart />, title: 'echart' },

    // {/* Pages content */ }

    { path: `${import.meta.env.BASE_URL}pagecomponent/contacts`, element: <Contacts />, title: 'contacts' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/pricingtables`, element: <Pricingtables />, title: 'pricingtables' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/timeline`, element: <Timeline />, title: 'timeline' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/team`, element: <Team />, title: 'team' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/todolist`, element: <Todolist />, title: 'todolist' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/tasks`, element: <Tasks />, title: 'tasks' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/reviews`, element: <Reviews />, title: 'reviews' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/emptypages`, element: <Emptypages />, title: 'emptypages' },

    // {/* Profile content */ }

    { path: `${import.meta.env.BASE_URL}pagecomponent/profile/profilesetting`, element: <Profilesetting />, title: 'profilesetting' },

    // {/* Invoice content */ }

    { path: `${import.meta.env.BASE_URL}pagecomponent/invoice/invoicedetails`, element: <Invoicedetails />, title: 'invoicedetails' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/invoice/invoicelist`, element: <Invoicelist />, title: 'invoicelist' },

    // {/* Blog content */ }

    { path: `${import.meta.env.BASE_URL}pagecomponent/blog/blogdetails`, element: <Blogdetails />, title: 'blogdetails' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/blog/blogedit`, element: <Blogedit />, title: 'blogedit' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/blog/blogmain`, element: <Blogmain />, title: 'blogmain' },

    // {/* Mail content */ }

    { path: `${import.meta.env.BASE_URL}pagecomponent/mail/chat`, element: <Chat />, title: 'chat' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/mail/mailsettings`, element: <Mailsettings />, title: 'mailsettings' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/mail/mainMail`, element: <MainMail />, title: 'mainMail' },

    // {/* Ecommerce-content content */ }

    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/addproduct`, element: <Addproduct />, title: 'addproduct' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/cart`, element: <Cart />, title: 'cart' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/checkout`, element: <Checkout />, title: 'checkout' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/editproduct`, element: <Editproduct />, title: 'editproduct' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails`, element: <Orderdetails />, title: 'orderdetails' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orders`, element: <Orders />, title: 'orders' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/product`, element: <Product />, title: 'product' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/productdetails`, element: <Productdetails />, title: 'productdetails' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/productlist`, element: <Productlist />, title: 'productlist' },
    { path: `${import.meta.env.BASE_URL}pagecomponent/Ecommerce/wishlist`, element: <Wishlist />, title: 'wishlist' },

    // {/* Icons content */ }

    { path: `${import.meta.env.BASE_URL}icon/remixicons`, element: <Remixicons />, title: 'remixicons' },
    { path: `${import.meta.env.BASE_URL}icon/tablericons`, element: <Tablericons />, title: 'tablericons' },

]