import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Search_bar from '../search_bar_rooms/search_bar_rooms';
// import "./navbar.css"
import { useState } from "react";
import MenuCard from "../MenuCard/menuCard";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "../Logo/Logo"
import Logo from "../Logo/Logo";



export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='px-4 md:px-10 m-0 h-[80px] w-full flex justify-between items-center ' >
            {/* Logo */}
            <Link to='/' className='flex flex-wrap justify-center items-center text-center text-[#212529] cursor-pointer'>
                <Logo />
            </Link>

            {/* Search bar */}
            <div className='hidden lg:block'>
                <div>
                    <Search_bar placeholderval="ابحث عن سكن مناسب لك" />
                </div>
            </div>

            {/* nav-bar right side */}
            <div className='flex justify-between items-center gap-[40px]'>
                {/* lang & theme icons */}
                <Link to='/createpost' className="btn MainColorBG text-white ">اضافه مسكن جديد</Link>
                <div className="flex justify-between items-center gap-[25px]">
                    <ThemeToggle />
                </div>

                {/* user icon */}
                <div className='border-[1px] border-[#CED4DA] rounded-3xl flex items-center w-[95px] h-[49px] justify-between p-[10px] hover:shadow hover:cursor-pointer
' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <IoMdMenu className="w-[23px] h-[23px] mr-1 text-[#1E1E1E]" />
                    <FaUserCircle className='w-[29px] h-[29px] mr-1 text-[#1E1E1E]' />
                </div>

            </div>

            {/* menu card */}
            {(isMenuOpen && <MenuCard setIsOpen={setIsMenuOpen} />)}

        </div>
    )
}