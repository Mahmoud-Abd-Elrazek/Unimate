import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../../../components/SideBar/sideBar';

const AuthorLayout = () => {
  const location = useLocation();

  // Define routes where the sidebar should be hidden
  const hideSidebarRoutes =
  location.pathname.startsWith('/auther/editprofile') || 
  location.pathname === '/auther/help';


    // console.log(shouldHideSidebar) 
    // console.log(location.pathname)
  return (
    <div className=" flex justify-end Page min-h-screen">
      <main className="content w-full h-full">
        <Outlet />
      </main>

      {/* Show sidebar only if not in hidden list */}
      {!hideSidebarRoutes && (
        <aside className=" min-h-full w-[250px] bg-[#EFEFEF] dark:bg-[#121111]">
          <SideBar />
        </aside>
      )}
    </div>
  );
};

export default AuthorLayout;
