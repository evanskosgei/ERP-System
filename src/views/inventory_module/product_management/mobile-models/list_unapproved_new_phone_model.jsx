import React, { useCallback, useEffect, useState } from "react";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
import { AgGridReact } from "ag-grid-react";
import { Link } from 'react-router-dom';
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { CSVLink } from "react-csv";
import { useForm } from "react-hook-form";
import mtaApi from "../../../../api/mtaApi";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ALLImages from "../../../../common/imagesdata";

const ApprovenewPhone = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigate = useNavigate();
  const [rowData, setRowData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [divStack, setDivStack] = useState(["table"]);
  const [editMode, setEditMode] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    formState,
    setValue,
    reset,
  } = useForm();

  const columnDefs = [
    { headerName: "#", field: "number", sortable: true, editable: false, filter: true, flex: 1, resizable: true, maxWidth: 30 },
    { headerName: "Model Name", field: "name", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5, },
    { headerName: "RAM", field: "ram", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 3, },
    { headerName: "Internal Storage", field: "internal_storage", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 3, },
    { headerName: "Back Camera", field: "main_camera", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5, },
    { headerName: "Front Camera", field: "front_camera", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5, },
    { headerName: "Dispaly", field: "display", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5, },
    { headerName: "Battery", field: "battery", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5, },
    { headerName: "OS", field: "operating_system", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5, },
    { headerName: "Connectivity", field: "connectivity", sortable: true, editable: false, filter: true, flex: 2, resizable: true, minWidth: 5, },
  ];
  const defaultColDef = { sortable: true, flex: 1, filter: true, floatingFilter: false };

  function dec(el) {
    let unit = el.currentTarget.parentElement.querySelector("input").value;
    if (Number(unit) === 0) {
      return false;
    } else {
      el.currentTarget.parentElement.querySelector("input").value--;
    }
  }
  function inc(el) {
    el.currentTarget.parentElement.querySelector("input").value++;
  }

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const onGridReady = useEffect((params) => {
    const newUnApproved = async () => {
      try {
        const { data } = await mtaApi.product_models.list_mobile_phone_model("2");
        if (data.status == 200) {
          setRowData(data.response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    newUnApproved();
  }, []);

  const onRowClicked = (event) => {
    const selectedData = event.data;
    setSelectedRowData(selectedData);
    handleClick("phoneDetails");
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = rowData.filter((row) => {
    return columnDefs.some((column) => {
      const fieldValue = row[column.field];
      if (fieldValue && typeof fieldValue === "string") {
        return fieldValue.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (fieldValue && typeof fieldValue !== "string") {
        return fieldValue.toString().toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    });
  });

  const handleClick = (divId) => {
    setDivStack((prevStack) => {
      if (prevStack.includes(divId)) {
        return prevStack.slice(0, prevStack.indexOf(divId) + 1);
      } else {
        return [...prevStack, divId];
      }
    });
  };

  const handleBack = () => {
    if (divStack.length > 1) {
      setDivStack((prevStack) => prevStack.slice(0, -1));
    }
  };
  const currentDiv = divStack[divStack.length - 1];

  const onSubmit = async (values) => {
    console.log(values);
    setEditMode(false);
    reset();
  };

  const approve = async () => {
    await mtaApi.product_models.approve_mobile_phone_model(selectedRowData.id)
      .then(response => {
        if (response.data.status === 200) {
          navigate("/inventory/active-phones-models")
        }
      }).catch(error => {
        console.log(error)
      })
  }
  return (
    <div>
      {currentDiv === "table" && (
        <div>
          <PageHeader
            currentpage="Approve New Phone Models"
            href="/inventory/product-management"
            activepage="Inventory"
            mainpage="Phone Models Pending Approval"
          />

          <div style={{ display: "flex", alignItems: "center", margin: "2" }}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
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
            <CSVLink
              data={filteredData.length > 0 ? filteredData : rowData.length > 0 ? rowData : []}
              filename="New unapproved Phone Models.csv"
              separator={","}
              className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Export
            </CSVLink>
          </div>
          <div className="ag-theme-alpine" style={{
            height: "calc(100dvh - 130px)", width: "100%", position: "relative",
            zIndex: 1,
            overflowY: "auto",
          }}
          >
            <AgGridReact
              rowData={filteredData.length > 0 ? filteredData : rowData}
              // rowData={rowData.length > 0 ? rowData : 'Loading...'}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={20}
              onGridReady={onGridReady}
              getRowNodeId={(data) => data.id}
              onRowClicked={onRowClicked}
            />
          </div>
        </div>
      )}
      {currentDiv === "phoneDetails" && (
        <div>
         
<PageHeader
            currentpage="Approve New Phone Models"
            href="/inventory/product-management"
            activepage="Inventory"
            mainpage="Phone Model Details"
          />

          <div className="box">
            <div className="grid grid-cols-12">
              <div className="col-span-12 xxl:col-span-5">
                <div className="box mb-0 border-0 shadow-none bg-transparent">
                  <div className="box-body">
                    <Swiper
                      style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" }}
                      className="mySwiper2"
                      loop={true}
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                    >
                      {Array.from(Array(8)).map((_, index) => (
                        <SwiperSlide key={index}>
                          <img alt={`product-image-${index}`} src={ALLImages(`png${index + 17}`)} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      loop={true}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      {Array.from(Array(8)).map((_, index) => (
                        <SwiperSlide key={index}>
                          <img alt={`product-image-${index}`} src={ALLImages(`png${index + 17}`)} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>

              <div className="col-span-12 xxl:col-span-7">

              <div className= "box">
						<div className= "box-body p-0">
							<div id="profile-settings-1" role="tabpanel" aria-labelledby="profile-settings-item-1">
								<div className= "box border-0 shadow-none mb-0">
									<div className= "box-header">
										<h5 className= "box-title leading-none flex"><i className= "ri ri-phone-line ltr:mr-2 rtl:ml-2"></i> Mobile Phone Model Details</h5>
									</div>
									<div className= "box-body">
										<div>
										<div className= "grid lg:grid-cols-2 gap-6">
                                        
                                        <div className= "space-x-3">
                                          <span className= "text-sm font-bold">Category Name :</span>
                                          <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.category_name}</span>
                                        </div>

                                        <div className= "space-x-3">
                                          <span className= "text-sm font-bold">Model Name :</span>
                                          <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.name}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">RAM Size :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.ram}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Internal Storage :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.internal_storage}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Battery :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.battery}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">VAT Amount :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.vat_percent_amount}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Main Camera :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.main_camera}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Front Camera :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.front_camera}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Display :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.display}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Connectivity :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.connectivity}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Colors :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.colors}</span> user_name
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Processor :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.processor}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Operating System :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.operating_system}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Created By:</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.user_name}</span>
                                        </div>

                                        <div className= "space-x-3">
                                            <span className= "text-sm font-bold">Date Created :</span>
                                            <span className= "text-sm text-gray-800 dark:text-white/70">{selectedRowData.date_created}</span>
                                        </div>
									</div>
									</div>
									</div>
								</div>
							</div>
						
						</div>
						<div className= "box-footer text-end space-x-3 rtl:space-x-reverse" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
							
              <Link to="#" className= "ti-btn m-0 ti-btn-soft-primary" onClick={approve}><i className="ri ri-refresh-line"></i> Approve</Link>
							<Link to="#" className= "ti-btn m-0 ti-btn-soft-secondary" onClick={editMode ? handleSubmit(onSubmit) : toggleEditMode}><i className= "ri ri-close-circle-line"></i> {editMode ? "Save" : "Edit"}</Link>
						</div>
					</div>
               
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApprovenewPhone;
