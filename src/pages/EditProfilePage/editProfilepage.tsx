import { Outlet } from 'react-router-dom';
import Side_bar_edit_profile from '../../components/Side_bar_edit_Profile/side_bar_edit_profile';

// import animation file
import "../../../public/animations.css";

const EditProfilePage = () => {
  return (
    <div className="flex  lg:flex-row-reverse lg:py-6 min-h-[80vh] lg:ml-auto fade-in">
  
  {/* الشريط الجانبي */}
  <aside className="w-full lg:w-[280px] rounded-2xl border border-gray-200 dark:border-gray-700 p-2 bg-[#FAFAFA] dark:bg-[#121111] shadow-md">
    <Side_bar_edit_profile />
  </aside>

  {/* المحتوى الرئيسي */}
  <main className="flex-1 w-full max-w-7xl lg:mr-20 ">

    <h1 className="text-center text-2xl font-bold mb-6 border-b border-gray-300 pb-3 dark:text-white dark:border-gray-600">
      إعدادات الحساب
    </h1>

    {/* المحتوى المتغير */}
    <div className="rounded-2xl p-6 shadow-md">
      <Outlet />
    </div>
  </main>

</div>

  );
};

export default EditProfilePage;