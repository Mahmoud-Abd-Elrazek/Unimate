import { MdOutlineLightMode } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import Search_bar from '../search_bar/search_bar';
import { useState } from "react";
import MenuCard from "../MenuCard/menuCard";
// import SignoutCard from "../SignOutCard/signoutCard";
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='fixed top-0 left-0 w-full px-[30px] m-0 h-[100px] flex justify-between items-center border-b border-[#D6D6D6] bg-white z-50'>


            {/* Logo */}
            <Link to='/' className='flex flex-wrap justify-center items-center text-center text-[#212529] font-[Nunito] cursor-pointer'>
                <span className='pr-1 font-[Nunito] text-[24px] sm:text-[33px]'>Uni</span>
                <PiStudentFill className='w-9 h-9 text-red-500' />
                <span className="font-[Nunito] text-[24px] sm:text-[33px]">mate</span>
            </Link>

            {/* Search bar */}
            <div className='hidden lg:block'>
                <Search_bar />
            </div>

            {/* user */}
            <div className='flex justify-between items-center gap-[30px]'>

                {/* icons with unimate text */}
                <div className="flex justify-between items-center gap-[25px]">
                    {/* unimate text */}
                    <div className='flex flex-wrap justify-center hover:cursor-pointer items-center text-center text-[#1E1E1E] font-[Nunito]'>
                        <span className='pr-1 font-[Nunito] text-[18px] sm:text-[18px] underline'>Uni</span>
                        <PiStudentFill className='w-4 h-4 text-red-500' />
                        <span className="font-[Nunito] text-[18px] sm:text-[18px] underline">mate</span>
                        <span className='pr-1 text-[16px] sm:text-[16px] ml-2 underline'>اعرض مسكنك علي</span>
                    </div>

                    {/* left nav icon */}
                    <div className="flex justify-between items-center gap-2">
                        
                        {/* dark and light icon */}
                        <div className='flex items-center justify-center w-[44px] h-[44px] p-[9px] rounded-full  text-[#1E1E1E] hover:cursor-pointer hover:bg-[#F1F3F4] transition-colors duration-150 ease-in-out'>
                            <MdOutlineLightMode className='w-6 h-6 hover:cursor-pointer' />
                        </div>

                        {/* Language Icon */}
                        <div className='flex items-center justify-center w-[44px] h-[44px] p-[9px] rounded-full  text-[#1E1E1E] hover:cursor-pointer hover:bg-[#F1F3F4] transition-colors duration-150 ease-in-out'>
                            <IoLanguageOutline className='w-6 h-6' />
                        </div>

                    </div>
                </div>

                {/* user icon */}
                <div className='border border-[#CED4DA] rounded-3xl flex items-center justify-between 
               w-[100px] h-[44px] px-[15px] py-[8px] hover:cursor-pointer'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>

                    <MdMenu className='w-6 h-6 text-[#212529] hover:cursor-pointer' />
                    <FaUserCircle className='w-[31px] h-[31px] text-[#1E1E1E] hover:cursor-pointer' />
                </div>

            </div>

            {/* menu card */}
            {(isMenuOpen && <MenuCard setIsOpen={setIsMenuOpen} />)
             }
           
        </div>
    )
}
