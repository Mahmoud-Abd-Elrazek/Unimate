import { Outlet } from 'react-router-dom';
import Side_bar_edit_profile from '../../components/Side_bar_edit_Profile/side_bar_edit_profile';

const EditProfilePage = () => {

 

  return (
    <div className=" flex justify-end  min-h-screen">
      <main className="content w-full h-full">
        <Outlet />
      </main>

        <aside className=" min-h-full w-[250px] bg-[#EFEFEF] dark:bg-[#121111]">
          <Side_bar_edit_profile />
        </aside>
      
    </div>
  );
};

export default EditProfilePage;
