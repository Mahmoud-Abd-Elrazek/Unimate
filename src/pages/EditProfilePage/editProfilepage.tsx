import { Outlet, useLocation } from 'react-router-dom';
import Side_bar_edit_profile from '../../Side_bar_edit_Profile/side_bar_edit_profile';

const EditProfilePage = () => {
  const location = useLocation();

  
  const hideSidebarRoutes = ['/auther/editprofile','/auther/help'];

  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className=" flex justify-end Page min-h-screen">
      <main className="content w-full h-full">
        <Outlet />
      </main>

      {/* Show sidebar only if not in hidden list */}
      {!shouldHideSidebar && (
        <aside className=" min-h-full w-[250px] bg-[#EFEFEF] dark:bg-[#121111]">
          <Side_bar_edit_profile />
        </aside>
      )}
    </div>
  );
};

export default EditProfilePage;
