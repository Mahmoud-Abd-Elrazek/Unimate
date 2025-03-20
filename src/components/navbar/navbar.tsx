import { MdOutlineLightMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import Search_bar from '../search_bar/search_bar';
// import "./navbar.css"
import { useState } from "react";
import MenuCard from "../MenuCard/menuCard";




export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='px-1 md:px-10 m-0 h-[80px] w-full flex justify-between items-center'>
            {/* Logo */}

            <Link to='/' className='flex flex-wrap justify-center items-center text-center text-[#212529] font-[Nunito] cursor-pointer'>
                <span className='pr-1 font-[Nunito] text-[24px] sm:text-[33px]'>Uni</span>
                <PiStudentFill className='w-9 h-9 text-red-500' />
                <span className="font-[Nunito] text-[24px] sm:text-[33px]">mate</span>
            </Link>

          


          

            {/* Search bar */}
            <div className='hidden lg:block'>
            <div>
                <Search_bar />
            </div>
            </div>
            {/* user */}
            <div className='flex justify-between items-center gap-[30px]'>

                {/* lang & theme icons */}
                <div className="flex justify-between items-center gap-[25px]">
                    <div className="flex justify-between items-center gap-2">
                        {/* dark and light icon */}
                        <div className='flex items-center justify-center w-[44px] h-[44px] p-[9px] rounded-full  text-[#1E1E1E] hover:cursor-pointer hover:bg-[#F1F3F4] transition-colors duration-150 ease-in-out'>
                            <MdOutlineLightMode className='w-6 h-6 hover:cursor-pointer' />
                        </div>
                    </div>
                </div>

                {/* user icon */}
                <div className='border-gray-200 border-2 rounded-3xl flex items-center w-[100px] justify-around h-10 hover:cursor-pointer'  onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <IoMdMenu className='w-7 h-7 mr-1 hover:cursor-pointer text-gray-400' />
                <FaUserCircle className='w-7 h-7 hover:cursor-pointer text-gray-400' />
                </div>

            </div>



            {/* menu card */}
            {(isMenuOpen && <MenuCard setIsOpen={setIsMenuOpen} />)
             }




        </div>
    )
}