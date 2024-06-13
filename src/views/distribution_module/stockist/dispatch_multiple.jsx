import React, { useState } from 'react'
import DateTimePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';

const Stockist_dispatch_multiple = () => {
    const [rowData, setRowData] = useState([]);
    return (
        <div>
            <PageHeader currentpage="Create Multiple Dispatch to Manager" href="/inventory/distribution-dashboard" activepage="Dispatch" mainpage="Select Device to Send To Manager" />
            <div className="col-span-12">
                <div className="box">
                    <div className="box-header">
                        <h5 className="box-title">Manager Details</h5>
                    </div>
                    <div className="box-body">
                        <div className="ti-custom-validation" noValidate>
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Manager Name</label>
                                    <select className="firstName my-auto ti-form-input">
                                        <option>...Select Manger</option>
                                        <option>John</option>
                                        <option>Pombe</option>
                                        <option>Mag</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Distribution Centers</label>
                                    <select className="firstName my-auto ti-form-input">
                                        <option>...Select distribution Center</option>
                                        <option>Mwendas</option>
                                        <option>Moi Ave</option>
                                        <option>Kenyatta ave</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Add Remarks</label>
                                    <input type="text" className="password ti-form-input" placeholder="...Add remarks" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="ti-form-label mb-0">Dispatch date</label>
                                    <DateTimePicker defaultValue={20 - 10 - 1999} className='confirmPassword ti-form-input' />
                                    <span className="dobError text-red-500 text-xs hidden">error</span>
                                </div>
                            </div>
                            {/* <button defaultValue="Login Now" type="submit" className="ti-btn ti-btn-primary ti-custom-validate-btn"><i className="ri-add-line"></i>Dispatch</button> */}
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <input type="text" className="w-50 mb-5" placeholder="Search..." required />
                </div>
                <div className="box">
                    <div className="box-header lg:flex lg:justify-between">
                        <h5 className="box-title my-auto">Products List</h5>
                        <button defaultValue="Login Now" type="submit" className="ti-btn ti-btn-primary ti-custom-validate-btn"><i className="ri-add-line"></i>Dispatch</button>
                        {/* <Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/addproduct/`} className="ti-btn ti-btn-primary m-0 py-2"><i className="ri ri-add-line"></i>Add Product</Link> */}
                    </div>
                    <div className="box-body">
                        <div className="table-bordered whitespace-nowrap rounded-sm overflow-auto">
                            <table className="ti-custom-table ti-custom-table-head">
                                <thead className="">
                                    <tr>
                                        <th scope="col" className="dark:text-white">
                                            <div className="flex leading-[0] justify-center">
                                                <p className="border-gray-500 ti-form-checkbox">::</p>
                                                <label htmlFor="hs-default-checkbox" className="text-sm text-gray-500 dark:text-white/70"></label>
                                            </div>
                                        </th>
                                        <th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Phone Model</th>
                                        <th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Front Camera</th>
                                        <th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Back Camera</th>
                                        <th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Display</th>
                                        <th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">QNTY</th>
                                        <th scope="col" className="!text-sm !p-4 !text-gray-800 dark:!text-white">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rowData.map((data, index) => (
                                        <tr className="cart-box" key={index}>
                                            <td className="">
                                                <div className="flex items-center h-5 product-checkbox justify-center">
                                                    <input
                                                        type="checkbox" className="border-gray-500 ti-form-checkbox"
                                                        id={`product-check-${index}`}
                                                        onChange=""
                                                        checked=""
                                                    />
                                                    <label htmlFor="product-check-1" className="sr-only">Checkbox</label>
                                                </div>
                                            </td>
                                            <td className="flex">
                                                <img className="avatar avatar-lg rounded-sm bg-gray-100 dark:bg-black/20 p-1" src={data.image_path} />
                                                <div className="ltr:ml-3 rtl:mr-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-white max-w-[200px] truncate">{data.name}</span>
                                                    <span className="block text-sm text-gray-600 dark:text-white/70"> Ram: {data.ram}</span>
                                                    <span className="block text-sm text-gray-600 dark:text-white/70">Rom: {data.internal_storage} </span>
                                                    <span className="block text-sm text-gray-600 dark:text-white/70">Battery:{data.battery} </span>
                                                </div>
                                            </td>
                                            <td>{data.front_camera}</td>
                                            <td>{data.main_camera}</td>
                                            <td>{data.display}</td>
                                            <td>
                                                <div className="flex rounded-sm">
                                                    <button aria-label="button" type="button" onClick="" className="product-quantity-minus inline-flex flex-shrink-0 justify-center items-center h-8 w-8 ltr:rounded-l-sm rtl:rounded-r-sm border border-transparent font-semibold ti-btn-soft-light transition-all text-sm">
                                                        <i className="ti ti-minus"></i>
                                                    </button>
                                                    <input type="text" name="product-quantity" className="product-quantity p-0 ti-form-input w-20 rounded-none focus:z-10 text-center"
                                                        placeholder="0" />
                                                    <button aria-label="button" type="button" onClick="" className="product-quantity-plus inline-flex flex-shrink-0 justify-center items-center h-8 w-8 ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold ti-btn-soft-light transition-all text-sm">
                                                        <i className="ti ti-plus"></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex rounded-sm">
                                                    <button aria-label="button" type="button" onClick="" className="product-quantity-minus inline-flex flex-shrink-0 justify-center items-center h-8 w-8 ltr:rounded-l-sm rtl:rounded-r-sm border border-transparent font-semibold ti-btn-soft-light transition-all text-sm">
                                                        <i className="ti ti-minus"></i>
                                                    </button>
                                                    <input type="text" name="product-quantity" className="product-quantity p-0 ti-form-input w-20 rounded-none focus:z-10 text-center"
                                                        placeholder="0" />
                                                    <button aria-label="button" type="button" onClick="" className="product-quantity-plus inline-flex flex-shrink-0 justify-center items-center h-8 w-8 ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold ti-btn-soft-light transition-all text-sm">
                                                        <i className="ti ti-plus"></i>
                                                    </button>
                                                </div>
                                            </td>
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
            </div>
        </div>
    )
}

export default Stockist_dispatch_multiple;
