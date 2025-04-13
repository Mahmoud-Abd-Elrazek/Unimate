import {  Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar/sideBar';

const AuthorLayout = () => {
  return (
    <div  className="author-page flex justify-end">

      <main className="content w-full h-lvh">
        <Outlet />
      </main>
      <aside className="sidebar">
      <SideBar/>
      </aside>
    </div>
  );
};

export default AuthorLayout;
