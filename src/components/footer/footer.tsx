import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import './footer.css';
import { AiOutlineCopyright } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";

export default function Footer() {
    return (
        <div className=' py-10 w-full bg-[#EFEFEF] grid place-items-center gap-6 md:gap-10 dark:bg-[#141313] '>
            {/* First Row */}
            <div className='flex flex-wrap justify-center items-center gap-6 md:gap-14 px-4 md:px-20 w-full max-w-6xl text-[#212529] text-[16px] sm:text-[17px] text-center md:text-start'>
                <a href="#" className='cursor-pointer border-b-2 border-transparent hover:border-gray-500 dark:text-[white]'>
                    الرئيسية
                </a>
                <a href="#" className='cursor-pointer border-b-2 border-transparent hover:border-gray-500 dark:text-[white]'>
                    سياسة الخصوصية
                </a>
                <a href="#" className='cursor-pointer border-b-2 border-transparent hover:border-gray-500 dark:text-[white]'>
                    الشروط والأحكام
                </a>
                <a href="#" className='cursor-pointer font-bold border-b-2 border-transparent hover:border-gray-500 dark:text-[white]'>
                    انضم كاصاحب مسكن
                </a>
            </div>

            {/* Social Icons */}
            <div className='flex justify-center gap-6 text-[#212529] dark:text-[white]'>
                <FaFacebook className='cursor-pointer w-5 h-5 hover:text-[#0a0707] hover:text-[blue]' />
                <FaSquareInstagram className='cursor-pointer w-5 h-5 hover:text-[#0a0707] hover:text-red-800' />
                <FaWhatsapp className='cursor-pointer w-5 h-5 hover:text-[#0a0707] hover:text-[green]' />
            </div>

            {/* Copyrights */}
            <div className='flex flex-wrap justify-center items-center text-center text-[#212529] font-[Nunito] dark:text-[white]'>
                <AiOutlineCopyright className='w-5 h-5 mr-2' />
                <span className='pr-1 font-[Nunito] text-[18px] sm:text-[19px]'>uni</span>
                <PiStudentFill className='w-4 h- text-red-500' />
                <span className="font-[Nunito] text-[18px] sm:text-[19px]">mate</span>
                <span className='pl-1 ml-1'>جميع الحقوق محفوظة لموقع</span>
            </div>
        </div>
    );
}
