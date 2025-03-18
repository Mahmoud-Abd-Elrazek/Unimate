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
import Register from './components/RegisterCard/register'

// App component  to wrap all routes and components in a Router and Routes
import ApartmentCard from './components/ApartmentCard/ApartmentCard'
export default function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <div className="flex flex-wrap gap-4 p-4 mt-[130px] justify-center sm:justify-center md:justify-end">
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/SignIn" element={<SigninCard />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
