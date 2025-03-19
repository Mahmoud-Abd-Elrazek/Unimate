// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// pages
import Home from "./pages/home/home"
import Rooms from './pages/rooms/rooms'
import NotFound from './pages/notfound/notFound'
// components
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import SigninCard from './components/signincard/signinCard'
import MenuCard from './components/MenuCard/menuCard'
import Register from './components/RegisterCard/register'
import SignOutCard from './components/SignOutCard/signoutCard'

// App component  to wrap all routes and components in a Router and Routes
export default function App() {
  return (
    <div>
      <Router>
        <NavBar />

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/SignIn" element={<SigninCard />} />
          <Route path='/menucard' element={<MenuCard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signout' element={<SignOutCard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
