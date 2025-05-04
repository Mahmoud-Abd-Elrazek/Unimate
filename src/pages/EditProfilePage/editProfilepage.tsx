import { Outlet } from 'react-router-dom';
import Side_bar_edit_profile from '../../components/Side_bar_edit_Profile/side_bar_edit_profile';

const EditProfilePage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-8 lg:py-12 min-h-[80vh] ">
      
      {/* المحتوى الرئيسي */}
      <main className="flex-1 w-full max-w-4xl">
        <h1 className="text-center text-2xl font-bold mb-6 border-b border-gray-300 pb-3 dark:text-white dark:border-gray-600">
          إعدادات الحساب
        </h1>

        <div className="rounded-2xl p-6 shadow-md">
          <Outlet />
        </div>
      </main>

      {/* الشريط الجانبي */}
      <aside className="w-full lg:w-[300px] rounded-2xl border border-gray-200 dark:border-gray-700 p-4 bg-[#FAFAFA] dark:bg-[#121111] shadow-md">
        <Side_bar_edit_profile />
      </aside>
    </div>
  );
};

export default EditProfilePage;
