import { Outlet, useLocation } from 'react-router-dom';

import SideBar from '../../../components/SideBar/sideBar';
import'./authorLayout.css'
const AuthorLayout = () => {
  const location = useLocation();

  // Define routes where the sidebar should be hidden
  const hideSidebarRoutes =
  location.pathname.startsWith('/auther/editprofile') || 
  location.pathname === '/auther/help';
  return (
    <div className="flex lg:flex-row-reverse  px-4 py-8 lg:py-6 min-h-[80vh]">
      {/* Show sidebar only if not in hidden list */}
      {!hideSidebarRoutes && (
        <aside className="w-full lg:w-[250px] h-full rounded-2xl border border-gray-200 dark:border-gray-700 p-2 bg-[#FAFAFA] dark:bg-[#121111] shadow-md ml-4">
          <SideBar />
        </aside>
      )}
      <main className="flex-1  w-[0px]">
        <Outlet />
      </main>

    </div>
  );
};

export default AuthorLayout;
