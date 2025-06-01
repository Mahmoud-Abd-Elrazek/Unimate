import {
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

// Pages
import Home from "./pages/home/home";
import NotFound from './pages/notfound/notFound';
import Favorites from './pages/User_Profile_Pages/Favorites/favorites';
import SignOutCard from './components/SignOutCard/signoutCard';
import Help from './pages/Help/help';
import RoomDetails from './pages/RoomDetails/roomDetails';
import ApartmentCard from './components/ApartmentCard/ApartmentCard';
import AuthorLayout from './pages/User_Profile_Pages/AuthorLayout/authorLayout';
import EditProfilepage from './pages/EditProfilePage/editProfilepage';
import My_reservations from './pages/User_Profile_Pages/My_reservations/My_reservations';
import Personal_Reviews from './pages/User_Profile_Pages/Personal_Reviews/Personal_Reviews';
import Gallery from './pages/image_details/PropertyImages';
import UnauthorizedPage from './pages/Auth/UnauthorizedPage/UnauthorizedPage';
import Reservation_requests_Owner from './pages/User_Profile_Pages/Reservation_requests_Owner/reservation_requests_Owner';
import My_Money_transactions from './pages/User_Profile_Pages/My_Money_transactions/my_Money_transactions';
import My_real_estate from './pages/User_Profile_Pages/My_properties/my_real_estate';
import CreatePost from './pages/CreatePost/createPost';
import Step1 from './pages/CreatePost/step1';
import Step2 from './pages/CreatePost/step2';
import Step3 from './pages/CreatePost/step3';
import Step4 from './pages/CreatePost/step4';
import LoginPage from './pages/Auth/LoginPage/LoginPage';
import Housing_Services from './pages/Housing_Services/housing_services';
import DashBord from './pages/Admain/admain_dashBord';
import Requests from './pages/Admain/requests';

// import edit_property from '../../components/PropertyManagementSystem/PropertyManagement'

// Components
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import ForgetPassword from './pages/Auth/Passwords/ForgetPassword/forgetPassword';
import ResetPass from './pages/Auth/Passwords/ResetPass/resetPass';
import Edit_academic_information from './pages/EditProfilePage/Edit_academic_information/edit_academic_information';
import Edit_contact_information from './pages/EditProfilePage/Edit_contact_information/edit_contact_information';
import Edit_login_information from './pages/EditProfilePage/Edit_login_information/edit_login_information';
import Edit_profile_information from './pages/EditProfilePage/Edit_personal_information/edit_profile_information';
import RegisterStudentPage from './pages/Auth/RegisterPage/registerStudentPage';
import RegisterOwnerPage from './pages/Auth/RegisterPage/registerOwnerPage';
// import RegisterPage from './pages/Auth/RegisterPage/registe';
import ChangePass from './pages/Auth/Passwords/ChangePass/changepass';
import ConfirmEmail from './pages/Auth/Emails/confirmemail';
import LogOut from './pages/Auth/LogOut/logout';
import ConfirmEmail12 from './pages/Auth/Emails/confirmemail12';
import PropertyManagementAdd from './components/PropertyManagementSystemAdd/PropertyManagement';
import PropertyManagementEdit from './components/PropertyManagementSystemEdit/PropertyManagement';
import StudentProfile from './pages/User_Profile_Pages/Profile/studentprofile';
import OwnerProfile from './pages/User_Profile_Pages/Profile/onwerProfile';
import RedirectBasedOnRole from './RedirectBasedOnRole';
import { Toaster } from 'sonner';
// import MainLayout from './mainLayout';
export default function App() {
  const location = useLocation();
  const hideFooterRoutes = [
    '/SignIn',
    '/register',
    '/signout',
    '/unauthorized',
    '/resetpassword',
    '/forgetpassword',
    '/auther/profile',
    '/auther/favorites',
    '/auther/help',
    '/auther/editprofile',
    '/auther/myreservations',
    '/auther/personalreviews',
    '/auther/my_real_estate',
    '/auther/reservation_requests_Owner',
    '/auther/my_money_transactions',
    '/createpost',
    '/createpost/step1',
    '/createpost/step2',
    '/createpost/step3',
    '/createpost/step4',
    '/auther/editprofile/editAcademicinfo',
    '/auther/editprofile/editcontactinfo',
    '/auther/editprofile/editlogininfo',
    '/auther/editprofile/editpersonalinfo',
    '/auther/editprofile/editAcademicinfo',
    '/auther/editprofile/editcontactinfo',
    '/manage_property',
    '/img_details',
    '/roomdetails',
    '/admain_dashBord',
    '/requests',
    '/register/owner',
    '/auther/ownerprofile',
  ];
  const hideNavbarRoutes = [
    '/register',
    '/signout',
    '/unauthorized',
    '/resetpassword',
    '/forgetpassword'
    
  ];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  return (
    <>
    <Toaster position="top-center" richColors />
      {!shouldHideNavbar && <NavBar />}
      <Routes>
       {/* <Route path="/" element={<MainLayout />}> */}
          <Route index element={<Home />} />


        {/* Auth */}
        <Route path="/SignIn" element={<LoginPage />} />
        <Route path='/logout' element={<LogOut/>} />

        {/* <Route path='/register' element={<RegisterPage />} > */}
          <Route path="/register_student" element={<RegisterStudentPage />} />
          {/* </Route> */}
          <Route path="/register_owner" element={<RegisterOwnerPage />} />
        {/* </Route> */}
        <Route path="/signout" element={<SignOutCard />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword' element={<ResetPass />} />
        <Route path='/confirmemail1' element={<ConfirmEmail12 />} />
        <Route path="/confirmemail" element={<ConfirmEmail />} />

        <Route path='/changepassord' element={<ChangePass />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        {/* Room details */}
        <Route path="/img_details" element={<Gallery />} />
        <Route path="/housing_services" element={<Housing_Services />} />
        <Route path="/ApartmentCard" element={<ApartmentCard />} />
        <Route path="/manage_property_add" element={<PropertyManagementAdd />} />
        <Route path="/manage_property_edit" element={<PropertyManagementEdit />} />

        {/* Author Pages */}
        <Route path="/auther/*" element={<AuthorLayout isAuthorized={false} />}>
         <Route index element={<RedirectBasedOnRole />} />
          <Route path="studentProfile" element={<StudentProfile />} />
          <Route path="ownerProfile" element={<OwnerProfile />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="help" element={<Help />} />
          <Route path="editprofile" element={<EditProfilepage />} >
            <Route index element={<Navigate to="editpersonalinfo" replace />} />
            <Route path='editAcademicinfo' element={<Edit_academic_information />} />
            <Route path='editcontactinfo' element={<Edit_contact_information />} />
            <Route path='editlogininfo' element={<Edit_login_information />} />
            <Route path='editpersonalinfo' element={<Edit_profile_information />} />
          </Route>
          <Route path="myreservations" element={<My_reservations />} />
          <Route path="personalreviews" element={<Personal_Reviews />} />
          <Route path="my_real_estate" element={<My_real_estate />} />
          <Route path="reservation_requests_Owner" element={<Reservation_requests_Owner />} />
          <Route path="my_money_transactions" element={<My_Money_transactions />} />
        </Route>

        {/* Room detail page */}
        <Route path="/roomdetails" element={<RoomDetails />} />

        {/* Create Post */}
        <Route path="/createpost" element={<CreatePost />}>
          <Route index element={<Navigate to="step1" replace />} />
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="step4" element={<Step4 />} />
        </Route>

        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
        
        {/* Admin Dashboard */}
        <Route path="/admain_dashBord" element={<DashBord />} />
        <Route path="/requests" element={<Requests />} />

        {/* </Route> */}
      </Routes>

      {!shouldHideFooter && <Footer />}
    </>
  );
}

