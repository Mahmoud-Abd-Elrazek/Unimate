// import React from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Roomate() {
    return (
        <div className="flex items-center justify-between bg-gray-100 rounded-lg  p-1 shadow-sm w-full my-3 dark:bg-[#1D1D1D]">
            <div className="text-gray-500">
                <IoPersonCircleOutline className="w-10 h-10 text-gray-700 dark:text-[white] " />
            </div>
            <div className="text-right ml-2">
                <p className="text-sm text-gray-600 dark:text-[white]">
                    <span className=" font-semibold "> طالب فى</span>  كلية الحاسبات والمعلومات
                </p>
                <p className="text-xs text-gray-500 mt-1 dark:text-[white]">
                    الفرقة الثالثة <span className="mx-1">من</span> أبو تشت
                </p>
            </div>
        </div>
    )
}
