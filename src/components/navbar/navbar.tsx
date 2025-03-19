import { MdOutlineLightMode } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import Search_bar from '../search_bar/search_bar';
<<<<<<< HEAD
import { useState } from "react";
import MenuCard from "../MenuCard/menuCard";
// import SignoutCard from "../SignOutCard/signoutCard";
=======

import "./navbar.css"
>>>>>>> 0a7f37636ebadf891a77970d9584d26285e8a1ae
export default function NavBar() {

    return (
        <div className='header'>
            {/* Logo */}
<<<<<<< HEAD
            <Link to='/' className='flex flex-wrap justify-center items-center text-center text-[#212529] font-[Nunito] cursor-pointer'>
                <span className='pr-1 font-[Nunito] text-[24px] sm:text-[33px]'>Uni</span>
                <PiStudentFill className='w-9 h-9 text-red-500' />
                <span className="font-[Nunito] text-[24px] sm:text-[33px]">mate</span>
            </Link>
=======
            <a className='logo-color'>
                <span>Uni</span>
                <PiStudentFill />
                <span>mate</span>
            </a>
>>>>>>> 0a7f37636ebadf891a77970d9584d26285e8a1ae

            {/* Search bar */}
            {/* <div className='hidden lg:block'> */}
            <div>
                <Search_bar />
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
                <div className='user-icon'>
                    <MdMenu className='menu-bar' />
                    <div>
                        <FaUserCircle className='user-icon-container' />
                    </div>
                </div>

            </div>
<<<<<<< HEAD

            {/* menu card */}
            {(isMenuOpen && <MenuCard setIsOpen={setIsMenuOpen} />)
             }
           
=======
>>>>>>> 0a7f37636ebadf891a77970d9584d26285e8a1ae
        </div>
    )
}
