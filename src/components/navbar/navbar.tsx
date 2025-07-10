import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Search_bar from '../search_bar_rooms/search_bar_rooms';
import { useState } from "react";
import MenuCard from "../MenuCard/menuCard";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Logo from "../Logo/Logo";
import useAuthStore from "../../Store/Auth/Auth.store";
import Button from "./Button"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Role = useAuthStore((state) => state.role);

  return (
    <div className='px-4 md:px-10 m-0 h-[80px] w-full flex justify-between items-center bg-[#EFEFEF] dark:bg-secondary_BGD/70  
    bg-white/70 backdrop-blur-md fixed top-0 left-0 w-full z-50 border-b border-gray-300 dark:border-[#1f2630]'>

      {/* Logo */}
      <Link to='/' className='flex items-center text-[#212529] cursor-pointer'>
        <Logo />
      </Link>

      {/* Search Bar - Hidden on small screens */}
      <div className='hidden md:block'>
        <Search_bar placeholderval="ابحث عن سكن مناسب لك" />
      </div>

      {/* Right section */}
      <div className='flex items-center gap-4'>
        {/* Create post - only on medium and up */}
        {Role === "Owner" && (
          <div className="hidden md:block">
            <Button />
          </div>
        )}

        {/* Theme toggle always visible */}
        <div className="sm:block">
          <ThemeToggle />
        </div>

        {/* Mobile menu toggle */}
        <div
          className='border border-[#CED4DA] rounded-3xl flex items-center w-[95px] h-[42px] justify-between p-2 hover:shadow cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IoMdMenu className="w-[23px] h-[23px] mr-1 text-[#1E1E1E] dark:text-[#f8fafc]" />
          <FaUserCircle className='w-[29px] h-[29px] mr-1 text-[#1E1E1E] dark:text-[#f8fafc]' />
        </div>
      </div>

      {/* Dropdown Menu (user) */}
      {isMenuOpen && <MenuCard setIsOpen={setIsMenuOpen} />}
    </div>
  );
}
