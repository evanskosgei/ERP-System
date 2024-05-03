import React, { useEffect, useState } from "react";
import mtaApi from "../../../api/mtaApi";
import { useNavigate } from "react-router-dom";

const Status = ({ data, closeModal }) => {


    return (
        <div className="flex items-center justify-center h-screen">
            <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <svg class="h-20 w-20 text-red-600" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round">  
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /> 
                    <line x1="12" y1="9" x2="12" y2="13" />  
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <h1 class="font-bold">Warning</h1>
                <h3>Are you sure?</h3>
            </div>
        </div>
    )
}

export default Status;
