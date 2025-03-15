import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import './footer.css';

export default function Footer() {
    return (
        <div className='h-auto py-10 w-full bg-slate-200 grid place-items-center'>
            {/* First Row */}
            <div className='flex flex-col md:flex-row justify-between items-center py-5 px-4 md:px-20 w-full max-w-6xl'>
                <h6 className='hover_pointer border-b-2 border-gray-500 mb-4 md:mb-0'>انضم كا صاحب عقار او وسيط سكن</h6>
                <h6 className='hover_pointer hover:border-b-2 border-gray-500 mb-4 md:mb-0'>سياسه الخصوصيه</h6>
                <h6 className='hover_pointer hover:border-b-2 border-gray-500 mb-4 md:mb-0'>الشروط والاحكام</h6>
                <h6 className='hover_pointer hover:border-b-2 border-gray-500'>الرئيسيه</h6>
            </div>
            {/* Icons */}
            <div className='flex justify-center space-x-4 mb-4'>
                <div><FaFacebook className='hover_pointer w-7 h-7 text-gray-400' /></div>
                <div><FaSquareInstagram className='hover_pointer w-7 h-7 text-gray-400' /></div>
                <div><FaWhatsapp className='hover_pointer w-7 h-7 text-gray-400' /></div>
            </div>
            <div className='text-center'>
                <span className='pr-1'>uni_mate @2025</span>جميع الحقوق محفوظه لموقع
            </div>
        </div>
    );
}