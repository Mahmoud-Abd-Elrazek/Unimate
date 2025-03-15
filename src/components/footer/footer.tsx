import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import './footer.css';
import { AiOutlineCopyright } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='h-auto py-10 w-full bg-[#EFEFEF] grid place-items-center gap-6 md:gap-10'>
            {/* First Row */}
            <div className='flex flex-wrap justify-center items-center gap-6 md:gap-14 px-4 md:px-20 w-full max-w-6xl text-[#212529] text-[16px] sm:text-[17px] text-center md:text-start'>
                <a href="#" className='cursor-pointer border-b-2 border-transparent hover:border-gray-500'>
                    الرئيسية
                </a>
                <a href="#" className='cursor-pointer border-b-2 border-transparent hover:border-gray-500'>
                    سياسة الخصوصية
                </a>
                <a href="#" className='cursor-pointer border-b-2 border-transparent hover:border-gray-500'>
                    الشروط والأحكام
                </a>
                <a href="#" className='cursor-pointer font-bold border-b-2 border-transparent hover:border-gray-500'>
                    انضم كاصاحب مسكن
                </a>
            </div>

            {/* Social Icons */}
            <div className='flex justify-center gap-6 text-[#212529]'>
                <FaFacebook className='cursor-pointer w-5 h-5 hover:text-[#0a0707]' />
                <FaSquareInstagram className='cursor-pointer w-5 h-5 hover:text-[#0a0707]' />
                <FaWhatsapp className='cursor-pointer w-5 h-5 hover:text-[#0a0707]' />
            </div>

            {/* Copyrights */}
            <div className='flex flex-wrap justify-center items-center text-center text-[#212529] font-[Nunito]'>
                <AiOutlineCopyright className='w-5 h-5 mr-2' />
                <span className='pr-1 font-[Nunito] text-[18px] sm:text-[19px]'>uni</span>
                <FaUserGraduate className='w-4 h- text-red-500' />
                <span className="font-[Nunito] text-[18px] sm:text-[19px]">mate</span>
                <span className='pl-1 ml-1'>جميع الحقوق محفوظة لموقع</span>
            </div>
        </div>
    );
}
