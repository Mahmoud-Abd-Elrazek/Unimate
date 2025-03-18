import { MdOutlineLightMode } from "react-icons/md";
import { MdMenu } from "react-icons/md";

import { FaUserCircle } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import Search_bar from '../search_bar/search_bar';

import "./navbar.css"
export default function NavBar() {

    return (
        <div className='header'>
            {/* Logo */}
            <a className='logo-color'>
                <span>Uni</span>
                <PiStudentFill />
                <span>mate</span>
            </a>

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
        </div>
    )
}
