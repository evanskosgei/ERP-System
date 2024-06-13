import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mtaApi from '../../../api/mtaApi';

const UpdateStockPrices = () => {
    const [currentDiv, setCurrentDiv] = useState('stocks')
    const [models, setmodels] = useState([]);
    const [prices, setPrices] = useState([]);
    const [distributions, setDistributions] = useState([]);
    const [all, setAll] = useState([])
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const get_all = async () => {
            try {
                const { data } = await mtaApi.product_models.list_mobile_phone_model('1')
                setmodels(data.response);
            } catch (error) {
                console.log(error)
            }
            try {
                const { data } = await mtaApi.stock_price.list_stock_price_updated('1')
                setPrices(data.response)
            } catch (error) {
                console.log(error)
            }
            try {
                const { data } = await mtaApi.distributions.list_distribution('1')
                setDistributions(data.response)
            } catch (error) {
                console.log(error)
            }
        }
        get_all();
    }, [])

    const handleChange = () => {
        setCurrentDiv('pricing');
    }
    const handleBack = () => {
        setCurrentDiv('stocks');
    }
    return (
        <div>
            {currentDiv === 'stocks' && (
                <>
                    <PageHeader currentpage="Uptate Stock Prices" href="/inventory/product-management/" activepage="Inventory" mainpage="Update Stock Prices" />
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2', maxWidth: '50' }}>
                        <input
                            type="text"
                            value=""
                            onChange=""
                            placeholder="Search..."
                            style={{
                                marginTop: '5px',
                                marginBottom: '15px',
                                padding: '8px',
                                width: '30%',
                                boxSizing: 'border-box',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontFamily: 'Arial, sans-serif',
                                fontSize: '14px',
                                backgroundColor: '#f9f9f9',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                transition: 'border-color 0.3s',
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#007BFF'}
                            onBlur={(e) => e.target.style.borderColor = '#ccc'}
                        />
                    </div>
                    <div className="box">
                        <div className="box-header lg:flex lg:justify-between">
                            <h5 className="box-title my-auto">Products List</h5>
                            {/* <Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/addproduct/`} className="ti-btn ti-btn-primary m-0 py-2"><i className="ri ri-add-line"></i>Add Product</Link> */}
                        </div>
                        <div className="box-body">
                            <div className="table-bordered whitespace-nowrap rounded-sm overflow-auto">
                                <table className="ti-custom-table ti-custom-table-head">
                                    <thead className="">
                                        <tr>
                                            <th scope="col" className="dark:text-white">
                                                <div className="flex leading-[0] justify-center">
                                                    <p className='text-lg font-semibold'>::</p>
                                                    <label htmlFor="hs-default-checkbox" className="text-sm text-gray-500 dark:text-white/70"></label>
                                                </div>
                                            </th>
                                            <th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Phone Model</th>
                                            <th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Front Camera</th>
                                            <th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Back Camera</th>
                                            <th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Display</th>
                                            <th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Processor</th>
                                            <th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Connectivity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {models.map((model, index) => (
                                            <tr className="cart-box" key={index}>
                                                <td className="">
                                                    <div className="flex items-center h-5 product-checkbox justify-center">
                                                        <input
                                                            type="checkbox" className="border-gray-500 ti-form-checkbox"
                                                            onChange={handleChange}
                                                            id={`product-check-${index}`}
                                                        />
                                                        <label htmlFor="product-check-1" className="sr-only">Checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="flex">
                                                    <img className="avatar avatar-lg rounded-sm bg-gray-100 dark:bg-black/20 p-1" src={model.image_path} />
                                                    <div className="ltr:ml-3 rtl:mr-3">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-white max-w-[200px] truncate">{model.name}</span>
                                                        <span className="block text-sm text-gray-600 dark:text-white/70"> Ram: {model.ram}</span>
                                                        <span className="block text-sm text-gray-600 dark:text-white/70">Rom: {model.internal_storage} </span>
                                                        <span className="block text-sm text-gray-600 dark:text-white/70">Battery:{model.battery} </span>
                                                    </div>
                                                </td>
                                                <td>{model.front_camera}</td>
                                                <td>{model.main_camera}</td>
                                                <td>{model.display}</td>
                                                <td>{model.processor}</td>
                                                <td>{model.connectivity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <nav className="flex justify-end items-center space-x-2 rtl:space-x-reverse mt-5">
                                <Link className="w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full"
                                    to="#">
                                    <span aria-hidden="true">«</span>
                                    <span className="sr-only">Previous</span>
                                </Link>
                                <Link className="w-10 h-10 bg-primary text-white p-2 inline-flex items-center justify-center text-sm font-medium rounded-full"
                                    to="#" aria-current="page">1</Link>
                                <Link className="w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full"
                                    to="#">2</Link>
                                <Link className="w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full"
                                    to="#">3</Link>
                                <Link className="w-10 h-10 bg-transparent text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full"
                                    to="#">
                                    <span className="sr-only">Next</span>
                                    <span aria-hidden="true">»</span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </>
            )}
            {currentDiv === "pricing" && (
                <>
                    <div>
                        <PageHeader currentpage=" Supplier Details" activepage="Supplier" mainpage="Active supplier Details" />
                        <button className='className="flex left-0 text-blue-700 hover:bg-gray-100 p-3 font-bold'
                            onClick={handleBack}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                            <h4>back</h4>
                        </button>
                        <div className="grid grid-cols-12 gap-x-12">
                            <div className="col-span-12 xl:col-span-12">
                                <div className="box">
                                    <div className="box-body p-0">

                                        <div id="profile-settings-1" role="tabpanel" aria-labelledby="profile-settings-item-1">
                                            <div className="box border-0 shadow-none mb-0">

                                                <div className="box-header">
                                                    <h5 className="box-title  text-center">Supplier Details</h5>
                                                </div>
                                                <div className="box-body">
                                                    <div>
                                                        <div className="grid lg:grid-cols-2 gap-6">
                                                            <div className="space-x-3">
                                                                <span className="text-sm font-bold">Business Name :</span>
                                                                <span className="text-sm text-gray-800 dark:text-white/70">1</span>
                                                            </div>
                                                            <div className="space-x-3">
                                                                <span className="text-sm font-bold">Trading Name :</span>
                                                                <span className="text-sm text-gray-800 dark:text-white/70">2</span>
                                                            </div>
                                                            <div className="space-x-3">
                                                                <span className="text-sm font-bold">Company Email :</span>
                                                                <span className="text-sm text-gray-800 dark:text-white/70">3</span>
                                                            </div>

                                                            <div className="space-x-3">
                                                                <span className="text-sm font-bold"> Telephone Number :</span>
                                                                <span className="text-sm text-gray-800 dark:text-white/70">4</span>
                                                            </div>

                                                            <div className="space-x-3">
                                                                <span className="text-sm font-bold">Address:</span>
                                                                <span className="text-sm text-gray-800 dark:text-white/70">5</span>
                                                            </div>

                                                            <div className="space-x-3">
                                                                <span className="text-sm font-bold">Postal Code :</span>
                                                                <span className="text-sm text-gray-800 dark:text-white/70">6</span>
                                                            </div>
                                                            <div className="space-x-3">
                                                                <span className="text-sm font-bold">Country :</span>
                                                                <span className="text-sm text-gray-800 dark:text-white/70">7</span>
                                                            </div>

                                                            <div className="space-x-3">
                                                                <span className="text-sm font-bold">Created By :</span>
                                                                <span className="text-sm text-gray-800 dark:text-white/70">8</span>
                                                            </div>

                                                            <div className="space-x-3">
                                                                <span className="text-sm font-bold">Date Created :</span>
                                                                <span className="text-sm text-gray-800 dark:text-white/70">9</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="overflow-auto">
                                                    <h5 className="box-title  text-center">Payable Account Details</h5>
                                                    <table className="ti-custom-table table-bordered ti-custom-table-head">
                                                        <thead className="bg-gray-50 dark:bg-black/20">
                                                            <tr>
                                                                <th scope="col" className="!min-w-[13rem]">Account Name</th>
                                                                <th scope="col">Account Number</th>
                                                                <th scope="col">Account Currency</th>
                                                                <th scope="col">Account Balance</th>
                                                            </tr>
                                                        </thead>
                                                        {/* <tbody>
                                                    {selectedRowData && Array.isArray(selectedRowData.payable_account) && selectedRowData.payable_account.length > 0 ? (
                                                        PayableAccounts.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>{item.account_name}</td>
                                                                <td>{item.account_number}</td>
                                                                <td>{item.account_currency}</td>
                                                                <td>{item.account_balance}</td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr key="no-product-details">
                                                            <td colSpan="4">No Payable account details</td>
                                                        </tr>
                                                    )}
                                                </tbody> */}
                                                    </table>
                                                </div>
                                                <hr className='mt-8 mb-8 text-gray-400' />
                                                <div className="overflow-auto">
                                                    <h5 className="box-title  text-center">Prepaid Account Details</h5>
                                                    <table className="ti-custom-table table-bordered ti-custom-table-head">
                                                        <thead className="bg-gray-50 dark:bg-black/20">
                                                            <tr>
                                                                <th scope="col" className="!min-w-[13rem]">Account Name</th>
                                                                <th scope="col">Account Number</th>
                                                                <th scope="col">Account Currency</th>
                                                                <th scope="col">Account Balance</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {/* {selectedRowData && Array.isArray(selectedRowData.prepaid_account) && selectedRowData.prepaid_account.length > 0 ? (
                                                        PrepaidAccount.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>{item.account_name}</td>
                                                                <td>{item.account_number}</td>
                                                                <td>{item.account_currency}</td>
                                                                <td>{item.account_balance}</td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr key="no-product-details">
                                                            <td colSpan="4">No Prepaid account details</td>
                                                        </tr>
                                                    )} */}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="box-footer text-end space-x-3 rtl:space-x-reverse" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                                        <Link to="#" className="ti-btn m-0 ti-btn-soft-warning" onClick=""><i className="ri ri-refresh-line"></i> Deactivate</Link>
                                        <Link to="#" className="ti-btn m-0 ti-btn-soft-danger" onClick=""><i className="ri ri-close-circle-line"></i>Delete </Link>
                                        <Link to="#" className="ti-btn m-0 ti-btn-soft-secondary" onClick={() => window.print()}><i className="ri ri-printer-line"></i>Print</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="loader" style={{ display: 'none' }}>
                            <span className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue rounded-full" role="status" aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </span>
                        </div>
                    </div>
                </>
            )}
        </div >

    )
};
export default UpdateStockPrices;
