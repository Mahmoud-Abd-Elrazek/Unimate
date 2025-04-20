import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../../components/SideBar/sideBar';

const AuthorLayout = () => {
  const location = useLocation();

  // Define routes where the sidebar should be hidden
  const hideSidebarRoutes = ['/auther/editprofile','/auther/help'];

  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);
    // console.log(shouldHideSidebar) 
    // console.log(location.pathname)
  return (
    <div className="author-page flex justify-end Page">
      <main className="content w-full h-lvh">
        <Outlet />
      </main>

      {/* Show sidebar only if not in hidden list */}
      {!shouldHideSidebar && (
        <aside className="sidebar">
          <SideBar />
        </aside>
      )}
    </div>
  );
};

export default AuthorLayout;
