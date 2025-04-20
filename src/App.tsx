// import React from 'react'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
// pages
import Home from "./pages/home/home"
import Rooms from './pages/rooms/rooms'
import NotFound from './pages/notfound/notFound'
import Favorites from './pages/Favorites/favorites'
// components
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import SigninCard from './components/signincard/signinCard'
import Register from './components/RegisterCard/register'
import SignOutCard from './components/SignOutCard/signoutCard'
import Help from './pages/Help/help'

import RoomDetails from './pages/RoomDetails/roomDetails'


import ApartmentCard from './components/ApartmentCard/ApartmentCard'
import Profile from './pages/Profile/profile'
import AuthorLayout from './pages/AuthorLayout/authorLayout'
import EditProfilepage from './pages/EditProfilePage/editProfilepage'
import My_reservations from './pages/My_reservations/My_reservations'
import Personal_Reviews from './pages/Personal_Reviews/Personal_Reviews'
import My_properties from './pages/My_properties/my_properties'

// App component  to wrap all routes and components in a Router and Routes
export default function App() {
  return (
    <div>
      <Router>
        <NavBar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route   path="/rooms" element={<Rooms />} />
          <Route path="/SignIn" element={<SigninCard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signout' element={<SignOutCard />} />
          <Route path='/auther/*' element={<AuthorLayout />} >
          // this route make the profile page is the default page that show when go to url /auther
          <Route index element={<Navigate to="profile" replace/>}/>
            <Route path="profile"  element={<Profile />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path='help' element={<Help />} />
            <Route path='editprofile' element={<EditProfilepage/>}/>
            <Route  path='myreservations' element={<My_reservations/>}/>
            <Route path='personalreviews' element={<Personal_Reviews/>}/>
            <Route path='myproperties' element={<My_properties/>}/> //this route for the owner 
          </Route>
          <Route path='/roomdetails' element={<RoomDetails />} />
          <Route path='/help' element={<Help />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/ApartmentCard' element={<ApartmentCard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
