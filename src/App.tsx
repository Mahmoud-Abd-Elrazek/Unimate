import {
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

// Pages
import Home from "./pages/home/home";
import Rooms from './pages/rooms/rooms';
import NotFound from './pages/notfound/notFound';
import Favorites from './pages/Favorites/favorites';
import SignOutCard from './components/SignOutCard/signoutCard';
import Help from './pages/Help/help';
import RoomDetails from './pages/RoomDetails/roomDetails';
import ApartmentCard from './components/ApartmentCard/ApartmentCard';
import Profile from './pages/Profile/profile';
import AuthorLayout from './pages/AuthorLayout/authorLayout';
import EditProfilepage from './pages/EditProfilePage/editProfilepage';
import My_reservations from './pages/My_reservations/My_reservations';
import Personal_Reviews from './pages/Personal_Reviews/Personal_Reviews';
import Gallery from './pages/image_details/image_details';
import UnauthorizedPage from './pages/UnauthorizedPage/UnauthorizedPage';
import Reservation_requests_Owner from './pages/Reservation_requests_Owner/reservation_requests_Owner';
import My_Money_transactions from './pages/My_Money_transactions/my_Money_transactions';
import My_real_estate from './pages/My_properties/my_real_estate';
import CreatePost from './pages/CreatePost/createPost';
import Step1 from './pages/CreatePost/step1';
import Step2 from './pages/CreatePost/step2';
import Step3 from './pages/CreatePost/step3';
import Step4 from './pages/CreatePost/step4';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Housing_Services from './pages/Housing_Services/housing_services';

// Components
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import ForgetPassword from './pages/ForgetPassword/forgetPassword';
import ResetPass from './pages/ResetPass/resetPass';

export default function App() {
  const location = useLocation();
  const hideFooterNavbarRoutes = [
    '/SignIn',
    '/register',
    '/signout',
    '/unauthorized',
    '/resetpassword',
    '/forgetpassword'
  ];

  const shouldHideFooterNavbar = hideFooterNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideFooterNavbar && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />

        {/* Auth */}
        <Route path="/SignIn" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signout" element={<SignOutCard />} />
        <Route path='/forgetpassword'element={<ForgetPassword/>} />
        <Route path='/resetpassword' element={<ResetPass/>}  />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        {/* Room details */}
        <Route path="/img_details" element={<Gallery />} />
        <Route path="/housing_services" element={<Housing_Services />} />
        <Route path="/ApartmentCard" element={<ApartmentCard />} />

        {/* Author Pages */}
        <Route path="/auther/*" element={<AuthorLayout />}>
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<Profile />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="help" element={<Help />} />
          <Route path="editprofile" element={<EditProfilepage />} />
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
      </Routes>

      {!shouldHideFooterNavbar && <Footer />}
    </>
  );
}

