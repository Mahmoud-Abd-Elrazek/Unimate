import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import SideBar from '../../../components/SideBar/sideBar';
import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import './authorLayout.css';

import "../../../../public/animations.css"

type LayoutProps = {
  isAuthorized: boolean;
  children?: React.ReactNode;
};

export default function AuthorLayout({ isAuthorized , children }: LayoutProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSidebarOpen(false);
      setIsClosing(false); // reset للفتح مره ثانية
    }, 300); // نفس مدة fade-out animation بالـ CSS
  };

  const hideSidebarRoutes =
    // location.pathname.startsWith('/auther/editprofile') ||
    location.pathname === '/auther/help';

  return (
    <div className="flex flex-col lg:flex-row-reverse  relative pt-[30px]">

      {/* ✅ Sidebar في الشاشات الكبيرة */}
      {!hideSidebarRoutes && isAuthorized && (
        <aside className="hidden lg:block lg:w-[280px] p-2 lg:p-4 lg:mt-12">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-[#FAFAFA] dark:bg-[#121111] shadow-md">
            <SideBar />
          </div>
        </aside>
      )}

      <main className="w-full flex-1 px-4 py-6 lg:w-0">
        {!hideSidebarRoutes && !sidebarOpen && isAuthorized && (
          <div className='flex justify-end w-full '>
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden mb-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-md shadow-md "
            >
              <IoMdMenu className="text-xl text-gray-800 dark:text-white" />
            </button>
          </div>
        )}
        {sidebarOpen && isAuthorized && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-25 flex justify-end items-start z-50">
            <div className={`sm:w-[50%] md:w-[25%] max-w-sm bg-[#FAFAFA] dark:bg-[#121111] p-4 shadow-lg h-full relative ${isClosing ? "fade-out-right" : "fade-in-right"}`}>
              <button
                onClick={handleClose}
                className="bg-gray-200 dark:bg-gray-700 p-2 rounded-md shadow-md absolute top-4 left-4"
              >
                <IoMdClose />
              </button>
              <SideBar onLinkClick={handleClose} />
            </div>
          </div>
        )}

        {children}

        <Outlet />
      </main>


    </div>
  );
};