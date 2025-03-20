// import React from 'react'
// import "./home.css"
// import ApartmentCard from "../../components/ApartmentCard/ApartmentCard"
import Search_bar from '../../components/search_bar/search_bar'
export default function Home() {
  return (
    <div className='min-h-lvh  BODY'>
      <div className='lg:hidden flex justify-center items-center'>
        <Search_bar />
      </div>
      <div className="flex flex-wrap gap-4 p-4  justify-center ">
          {/* <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard /> */}
        </div>
    </div>
  )
}
