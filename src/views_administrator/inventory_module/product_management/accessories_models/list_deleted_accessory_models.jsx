import React, { useState } from 'react'
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import { AgGridReact } from "ag-grid-react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { CSVLink } from "react-csv";
import { useForm } from "react-hook-form";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ALLImages from "../../../../common/imagesdata";

const sampleRowData = [
    {
        id: 1,
        name: "charger",
        type: "type-c",
        colors: "white",
        make: "Tecno",
    },
    {
        id: 2,
        name: "charger",
        type: "type-B",
        colors: "black",
        make: "samsang",
    },
];
const Deletedaccessory = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [rowData, setRowData] = useState(sampleRowData);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [divStack, setDivStack] = useState(["table"]);
    // const [alert, setAlert] = useState(null);
    const [showStatusModal, setShowStatusModal] = useState(false);

    const columnDefs = Object.keys(sampleRowData[0]).map(key => ({
        headerName: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
        field: key,
        sortable: true,
        editable: false,
        filter: true,
    }));

    const onRowClicked = (event) => {
        const selectedData = event.data;
        setSelectedRowData(selectedData);
        handleClick('accessoryDetails');
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = rowData.filter((row) => {
        return columnDefs.some((column) => {
            const fieldValue = row[column.field];
            if (fieldValue && typeof fieldValue === 'string') {
                return fieldValue.toLowerCase().includes(searchQuery.toLowerCase());
            } else if (fieldValue && typeof fieldValue !== 'string') {
                return fieldValue.toString().toLowerCase().includes(searchQuery.toLowerCase());
            }
            return false;
        });
    });

    const handleClick = (divId) => {
        setDivStack(prevStack => {
            if (prevStack.includes(divId)) {
                return prevStack.slice(0, prevStack.indexOf(divId) + 1);
            } else {
                return [...prevStack, divId];
            }
        });
    };

    const handleBack = () => {
        if (divStack.length > 1) {
            setDivStack(prevStack => prevStack.slice(0, -1));
        }
    };
    const currentDiv = divStack[divStack.length - 1];

  return (
    <div>
    {currentDiv === "table" && (
        <div>
            <PageHeader currentpage="Deleted Accessory Models" href="/inventory/product-management" activepage="Inventory" mainpage="Deleted Accessory Models" />

            <div style={{ display: 'flex', alignItems: 'center', margin: '2' }}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box' }}
                />
                <CSVLink data={filteredData.length > 0 ? filteredData : rowData} filename="Deleted Accessory Models.csv" separator={","} className="h-6 w-6 items-center mb-7 ml-7 mr-8 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Export
                </CSVLink>
            </div>
            <div className="ag-theme-alpine" style={{ height: 'calc(100dvh - 130px)', width: '100%', position: 'relative', zIndex: 1, overflowY: 'auto' }}>
                <AgGridReact
                    rowData={filteredData.length > 0 ? filteredData : rowData}
                    columnDefs={columnDefs}
                    // defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={20}
                    // onGridReady={onGridReady}
                    getRowNodeId={(data) => data.id}
                    onRowClicked={onRowClicked}
                />
            </div>
        </div>
    )}

    {currentDiv === "accessoryDetails" && (
        <div>
            <PageHeader currentpage="Deleted Accessory Model" href="/inventory/product-management" activepage="Inventory" mainpage="Deleted Accessory Model" />
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
                    <div className="col-span-12 xxl:col-span-4">
                        <div className="box mb-0 border-0 shadow-none bg-transparent">
                            <div className="box-body xxl:px-0">
                                <div className="space-y-5">
                                    <h5 className="font-bold text-xl text-gray-800 dark:text-white">
                                        {selectedRowData.name}
                                    </h5>
                                    <div className="space-y-4">
                                        <h5 className="font-bold text-sm my-auto w-28 text-gray-800 dark:text-white">Description :</h5>

                                        <p className="my-auto font-medium text-sm text-gray-500 dark:text-white/70">
                                            <p className="my-auto font-medium text-sm text-gray-500 dark:text-white/70">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sint exercitationem
                                                veritatis harum maiores corporis perspiciatis quos accusantium velit. Deserunt tenetur
                                                rerum nemo illum. Dolor laboriosam atque accusantium perspiciatis rerum?
                                            </p>
                                        </p>
                                    </div>
                                    <div className="sm:flex sm:space-x-5">
                                        <h5 className="font-bold text-sm my-auto w-28 text-gray-800 dark:text-white">Type:</h5>
                                        <h5 className="font-medium text-sm my-auto w-28 text-gray-800 dark:text-white">
                                            {selectedRowData.type}
                                        </h5>
                                    </div>


                                    <div className="sm:flex sm:space-x-2">
                                        <h5 className="font-bold text-sm my-auto w-30 text-gray-800 dark:text-white">Colors :</h5>
                                        <h5 className="font-medium text-sm my-auto w-28 text-gray-800 dark:text-white">
                                            {selectedRowData.colors}
                                        </h5>
                                    </div>
                                    <div className="sm:flex sm:space-x-2">
                                        <h5 className="font-bold text-sm my-auto w-30 text-gray-800 dark:text-white">Make :</h5>
                                        <h5 className="font-medium text-sm my-auto w-28 text-gray-800 dark:text-white">
                                            {selectedRowData.make}
                                        </h5>
                                    </div>
                                    <div id="loader" style={{ display: "none" }}>
                                        <span
                                            className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue rounded-full"
                                            role="status"
                                            aria-label="loading"
                                        >
                                            <span className="sr-only">Loading...</span>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
</div>
  )
}

export default Deletedaccessory;
