import React from 'react'
import { Link } from 'react-router-dom';
import PageHeader from '../../layout/layoutsection/pageHeader/pageHeader';
// import { Connect } from 'react-redux';
import ALLImages from '../../common/imagesdata';

const Agents_dashboard = ({ local_varaiable }) => {
  return (
    <div>
      <PageHeader currentpage="Dashboard" activepage="Home" mainpage="Dashboard" />
      <div className="grid grid-cols-12 gap-x-5">
        Welcome
      </div>

      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="flex">
                <h5 className="box-title my-auto">Recent Sales Details</h5>
                <div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
                  <button type="button" className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">View All <i className="ti ti-chevron-down"></i></button>
                  <div className="hs-dropdown-menu ti-dropdown-menu">
                    <Link className="ti-dropdown-item" to="#">Download</Link>
                    <Link className="ti-dropdown-item" to="#">Import</Link>
                    <Link className="ti-dropdown-item" to="#">Export</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-body">
              <div className="table-bordered rounded-sm ti-custom-table-head overflow-auto">
                <table className="ti-custom-table ti-custom-table-head whitespace-nowrap">
                  <thead className="bg-gray-50 dark:bg-black/20">
                    <tr className="">
                      <th scope="col" className="dark:text-white/80">S.no</th>
                      <th scope="col" className="dark:text-white/80">Item Details</th>
                      <th scope="col" className="dark:text-white/80">Customer No.</th>
                      <th scope="col" className="dark:text-white/80 min-w-[300px]">Agent Name</th>
                      <th scope="col" className="dark:text-white/80">Sale Date</th>
                      <th scope="col" className="dark:text-white/80">Status</th>
                      <th scope="col" className="dark:text-white/80">Price</th>
                      <th scope="col" className="dark:text-white/80">Action</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="">
                      <td>1</td>
                      <td>
                        <div className="flex space-x-3 rtl:space-x-reverse w-full">
                          <img className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
                            src={ALLImages('png25')} alt="Image Description" />
                          <div className="block w-full my-auto">
                            <span
                              className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">Tecno Spark 20 Pro</span>
                            <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">#2343</span>
                          </div>
                        </div>
                      </td>
                      <td className="!text-success font-semibold text-base">+254 721 928 038</td>
                      <td>
                        <div className="flex space-x-3 rtl:space-x-reverse text-start">
                          <img className="avatar avatar-sm rounded-sm" src={ALLImages('jpg58')}
                            alt="Image Description" />
                          <div className="block my-auto">
                            <p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">Socrates
                              Itumay</p>
                            <span
                              className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">+254 110 928 038</span>
                          </div>
                        </div>
                      </td>
                      <td>10-03-2024</td>
                      <td><span
                        className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-success/10 text-success/80">Success</span>
                      </td>
                      <td>Ksh 10,999</td>
                      <td className="font-medium space-x-2 rtl:space-x-reverse">
                        <div className="hs-tooltip ti-main-tooltip">
                          <Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}
                            className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
                            <i className="ti ti-eye"></i>
                            <span
                              className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                              role="tooltip">
                              View
                            </span>
                          </Link>
                        </div>

                      </td>
                    </tr>
                    <tr className="">
                      <td>2</td>
                      <td>
                        <div className="flex space-x-3 rtl:space-x-reverse w-full">
                          <img className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
                            src={ALLImages('png26')} alt="Image Description" />
                          <div className="block w-full my-auto">
                            <span
                              className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">Huawei P30 Pro</span>
                            <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">#5655</span>
                          </div>
                        </div>
                      </td>
                      <td className="!text-success font-semibold text-base">+254 721 000 038</td>
                      <td>
                        <div className="flex space-x-3 rtl:space-x-reverse text-start">
                          <img className="avatar avatar-sm rounded-sm" src={ALLImages('jpg59')}
                            alt="Image Description" />
                          <div className="block my-auto">
                            <p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                              Json Taylor</p>
                            <span
                              className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">+254 701 118 038</span>
                          </div>
                        </div>
                      </td>
                      <td>11-03-2024</td>
                      <td><span
                        className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-info/10 text-info/80">Ordered</span>
                      </td>
                      <td>Ksh 25,699</td>
                      <td className="font-medium space-x-2 rtl:space-x-reverse">
                        <div className="hs-tooltip ti-main-tooltip">
                          <Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}
                            className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
                            <i className="ti ti-eye"></i>
                            <span
                              className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                              role="tooltip">
                              View
                            </span>
                          </Link>
                        </div>

                      </td>
                    </tr>
                    <tr className="">
                      <td>3</td>
                      <td>
                        <div className="flex space-x-3 rtl:space-x-reverse w-full">
                          <img className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
                            src={ALLImages('png27')} alt="Image Description" />
                          <div className="block w-full my-auto">
                            <span
                              className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">Samsung Galaxy A35 5G</span>
                            <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">#15245</span>
                          </div>
                        </div>
                      </td>
                      <td className="!text-success font-semibold text-base">+254 701 928 038</td>
                      <td>
                        <div className="flex space-x-3 rtl:space-x-reverse text-start">
                          <img className="avatar avatar-sm rounded-sm" src={ALLImages('jpg60')}
                            alt="Image Description" />
                          <div className="block my-auto">
                            <p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                              Suzika Stallone</p>
                            <span
                              className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">+254 735 948 075</span>
                          </div>
                        </div>
                      </td>
                      <td>12-03-2024</td>
                      <td><span
                        className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-warning/10 text-warning/80">Out
                        For Delivery</span>
                      </td>
                      <td>Ksh 8,599</td>
                      <td className="font-medium space-x-2 rtl:space-x-reverse">
                        <div className="hs-tooltip ti-main-tooltip">
                          <Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}
                            className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
                            <i className="ti ti-eye"></i>
                            <span
                              className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                              role="tooltip">
                              View
                            </span>
                          </Link>
                        </div>

                      </td>
                    </tr>
                    <tr className="">
                      <td>4</td>
                      <td>
                        <div className="flex space-x-3 rtl:space-x-reverse w-full">
                          <img className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
                            src={ALLImages('png28')} alt="Image Description" />
                          <div className="block w-full my-auto">
                            <span
                              className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">Redmi Note 12 Dual Sim</span>
                            <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">#45415</span>
                          </div>
                        </div>
                      </td>
                      <td className="!text-success font-semibold text-base">+254 723 118 031</td>
                      <td>
                        <div className="flex space-x-3 rtl:space-x-reverse text-start">
                          <img className="avatar avatar-sm rounded-sm" src={ALLImages('jpg61')}
                            alt="Image Description" />
                          <div className="block my-auto">
                            <p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                              Selena Deoyl</p>
                            <span
                              className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">+254 701 118 042</span>
                          </div>
                        </div>
                      </td>
                      <td>12-03-2024</td>
                      <td><span
                        className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-danger/10 text-danger/80">Cancelled</span>
                      </td>
                      <td>Ksh 12,299</td>
                      <td className="font-medium space-x-2 rtl:space-x-reverse">
                        <div className="hs-tooltip ti-main-tooltip">
                          <Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}
                            className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
                            <i className="ti ti-eye"></i>
                            <span
                              className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                              role="tooltip">
                              View
                            </span>
                          </Link>
                        </div>

                      </td>
                    </tr>
                    <tr className="">
                      <td>5</td>
                      <td>
                        <div className="flex space-x-3 rtl:space-x-reverse w-full">
                          <img className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
                            src={ALLImages('png29')} alt="Image Description" />
                          <div className="block w-full my-auto">
                            <span
                              className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">Infinix smart 8 X6525 Dual sim 3GB/64GB</span>
                            <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">#35656</span>
                          </div>
                        </div>
                      </td>
                      <td className="!text-success font-semibold text-base">+254 711 920 011</td>
                      <td>
                        <div className="flex space-x-3 rtl:space-x-reverse text-start">
                          <img className="avatar avatar-sm rounded-sm" src={ALLImages('jpg65')}
                            alt="Image Description" />
                          <div className="block my-auto">
                            <p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                              Roman Killon</p>
                            <span
                              className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">+254 792 438 044</span>
                          </div>
                        </div>
                      </td>
                      <td>13-03-2024</td>
                      <td><span
                        className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">Shipping</span>
                      </td>
                      <td>Ksh 32,993</td>
                      <td className="font-medium space-x-2 rtl:space-x-reverse">
                        <div className="hs-tooltip ti-main-tooltip">
                          <Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}
                            className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
                            <i className="ti ti-eye"></i>
                            <span
                              className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                              role="tooltip">
                              View
                            </span>
                          </Link>
                        </div>

                      </td>
                    </tr>
                    <tr className="">
                      <td>6</td>
                      <td>
                        <div className="flex space-x-3 rtl:space-x-reverse w-full">
                          <img className="avatar rounded-sm bg-gray-100 dark:bg-black/20 p-2"
                            src={ALLImages('png30')} alt="Image Description" />
                          <div className="block w-full my-auto">
                            <span
                              className="block text-sm font-semibold text-gray-800 dark:text-gray-300 min-w-[180px] truncate">Realme C53 Dual Sim 6GB/128GB</span>
                            <span className="block text-xs text-gray-400 dark:text-white/80 !font-normal">#622545</span>
                          </div>
                        </div>
                      </td>
                      <td className="!text-success font-semibold text-base">+254 721 922 041</td>
                      <td>
                        <div className="flex space-x-3 rtl:space-x-reverse text-start">
                          <img className="avatar avatar-sm rounded-sm" src={ALLImages('jpg66')}
                            alt="Image Description" />
                          <div className="block my-auto">
                            <p className="block text-sm font-semibold my-auto text-gray-800 dark:text-white">
                              Charlie Davieson</p>
                            <span
                              className="block text-xs text-gray-400 dark:text-white/80 !font-normal my-auto">+254 711 933 099</span>
                          </div>
                        </div>
                      </td>
                      <td>13-03-2024</td>
                      <td><span
                        className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-secondary/10 text-secondary/80">Packed</span>
                      </td>
                      <td>Ksh 32,929</td>
                      <td className="font-medium space-x-2 rtl:space-x-reverse">
                        <div className="hs-tooltip ti-main-tooltip">
                          <Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}
                            className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
                            <i className="ti ti-eye"></i>
                            <span
                              className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
                              role="tooltip">
                              View
                            </span>
                          </Link>
                        </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agents_dashboard;
