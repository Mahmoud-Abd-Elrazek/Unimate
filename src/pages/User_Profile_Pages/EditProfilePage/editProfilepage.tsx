import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import SideBar from '../../../components/SideBar/sideBar';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

// استيراد ملف الأنيميشن
import "../../../public/animations.css";

const EditProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSidebarOpen(false);
      setIsClosing(false);
    }, 300); // نفس مدة fade-out
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse min-h-[80vh] relative">

      {/* ✅ Sidebar في الشاشات الكبيرة */}
      <aside className="hidden lg:block lg:w-[280px] p-2 lg:p-4 lg:mt-12">
        <div className="h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-[#FAFAFA] dark:bg-[#121111] shadow-md">
          <SideBar />
        </div>
      </aside>

      {/* ✅ محتوى الصفحة */}
      <main className="w-full flex-1 md:px-4 ">
        {/* ✅ زر إظهار الـ Sidebar في الشاشات الصغيرة */}
        {!sidebarOpen && (
          <div className='flex justify-end w-full'>
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden mb-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-md shadow-md "
            >
              <IoMdMenu className="text-xl text-gray-800 dark:text-white" />
            </button>
          </div>
        )}

        {/* ✅ Sidebar Overlay في الشاشات الصغيرة */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-25 flex justify-end items-start z-50">
            <div className={`sm:w-[50%] md:w-[25%] max-w-sm bg-[#FAFAFA] dark:bg-[#121111] p-4 shadow-lg h-full relative ${isClosing ? "fade-out-right" : "fade-in-right"}`}>
              <button
                onClick={handleClose}
                className="bg-gray-200 dark:bg-gray-700 p-2 rounded-md shadow-md absolute top-4 left-4"
              >
                <IoMdClose />
              </button>
              <SideBar onLinkClick={handleClose} /> {/* ✅ هنا التعديل */}
            </div>
          </div>
        )}


        {/* العنوان والمحتوى */}
        <h1 className="text-center text-2xl font-bold mb-6 border-b border-gray-300 pb-3 dark:text-white dark:border-gray-600">
          إعدادات الحساب
        </h1>

        <div className="rounded-2xl shadow-md">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default EditProfilePage;
