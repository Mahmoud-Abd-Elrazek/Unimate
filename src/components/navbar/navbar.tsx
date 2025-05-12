import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Search_bar from '../search_bar_rooms/search_bar_rooms';
import { useState } from "react";
import MenuCard from "../MenuCard/menuCard";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Logo from "../Logo/Logo";
import useAuthStore from "../../Store/useAuthStore";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Role = useAuthStore((state) => state.role);

  return (
    <div className='px-4 md:px-10 m-0 h-[80px] w-full flex justify-between items-center bg-[#EFEFEF] dark:bg-[#121111]'>

      {/* Logo */}
      <Link to='/' className='flex items-center text-[#212529] cursor-pointer'>
        <Logo />
      </Link>

      {/* Search Bar - Hidden on small screens */}
      <div className='  dark:bg-[#1D1D1D] dark:rounded-3xl dark:shadow'>
        <Search_bar placeholderval="ابحث عن سكن مناسب لك" />
      </div>

      {/* Right section */}
      <div className='flex items-center gap-4'>

        {/* Create post - only on medium and up */}
        {Role === "Owner" && (
          <Link
            to='/createpost'
            className="hidden md:block btn MainColorBG text-white"
          >
            اضافه مسكن جديد
          </Link>
        )}

        {/* Theme toggle always visible */}
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>

        {/* Mobile menu toggle */}
        <div
          className='border border-[#CED4DA] rounded-3xl flex items-center w-[95px] h-[49px] justify-between p-2 hover:shadow cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IoMdMenu className="w-[23px] h-[23px] mr-1 text-[#1E1E1E] dark:text-white" />
          <FaUserCircle className='w-[29px] h-[29px] mr-1 text-[#1E1E1E] dark:text-white' />
        </div>
      </div>

      {/* Dropdown Menu (user) */}
      {isMenuOpen && <MenuCard setIsOpen={setIsMenuOpen} />}
    </div>
  );
}
