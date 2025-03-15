// import React from 'react'
// import  './navbar.css'
import { FaRegMoon } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import frameimg from '../../assets/Frame 371.png'
import Search_bar from '../search_bar/search_bar';
import { useState } from "react";
import MenuCard from "../MenuCard/menuCard";
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 
    return (

        <div className='px-1 md:px-10 m-0 h-[80px] w-full flex justify-between items-center'>

            {/* Logo */}
            <Link to="/">
                <div>
                    <img src={frameimg} alt='img' className="logo" />
                </div>
            </Link>
            {/* Search bar */}
            <div className='hidden lg:block'>
                <Search_bar />
            </div>
            {/* user */}
            <div className='flex justify-between items-center w-[200px] h-full py-5'>
                {/* dark and light icon */}
                <div>
                    <FaRegMoon className='w-7 h-7 hover:cursor-pointer text-gray-400' />
                </div>
                {/* langauge icon */}
                <div className='flex justify-center items-start text-xl rounded-full bg-slate-200 text-black w-10 h-10 hover:cursor-pointer'>
                    ع
                </div>
                {/* user icon */}

                <div
                    className='border-gray-200 border-2 rounded-3xl flex items-center w-[100px] justify-around h-10 hover:cursor-pointer'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <IoMenu className='w-7 h-7 mr-1 hover:cursor-pointer text-gray-400' />
                    <FaUserCircle className='w-7 h-7 hover:cursor-pointer text-gray-400' />

                </div>


            </div>
            {/* menu card */}
            {isMenuOpen && <MenuCard setIsOpen={setIsMenuOpen} />}
        </div>
    )
}
