import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import SideBar from '../../../components/SideBar/sideBar';
import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import './authorLayout.css';

const AuthorLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const hideSidebarRoutes =
    location.pathname.startsWith('/auther/editprofile') ||
    location.pathname === '/auther/help';

  return (
    <div className="flex flex-col lg:flex-row-reverse min-h-[80vh] relative">

      {/* ✅ Sidebar في الشاشات الكبيرة */}
      {!hideSidebarRoutes && (
        <aside className="hidden lg:block lg:w-[250px] p-2 lg:p-4 lg:mt-12">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-[#FAFAFA] dark:bg-[#121111] shadow-md">
            <SideBar />
          </div>
        </aside>
      )}

      {/* ✅ محتوى الصفحة */}
      <main className="w-full flex-1 px-4 py-6 lg:w-0">
        {/* ✅ زر إظهار الـ Sidebar في الموبايل */}
        {!hideSidebarRoutes && !sidebarOpen && (
          <div className='flex justify-end w-full'>
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mb-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-md shadow-md "
          >
            <IoMdMenu className="text-xl text-gray-800 dark:text-white" />
          </button>
          </div>
        )}
      {/* ✅ Sidebar Overlay في الموبايل */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0  bg-opacity-4 flex justify-end items-start z-50">
          <div className="sm:w-[50%] md:w-[25%] max-w-sm bg-[#FAFAFA] dark:bg-[#121111] p-4 shadow-lg h-full relative">
            {/* زر إغلاق */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="bg-gray-200 dark:bg-gray-700 p-2 rounded-md shadow-md"
            >
              <IoMdClose />
            </button>

            <SideBar />
          </div>
        </div>
      )}

        <Outlet />
      </main>

    </div>
  );
};

export default AuthorLayout;
