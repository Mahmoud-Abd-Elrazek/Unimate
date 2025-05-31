// import React from 'react'

import { useEffect } from "react"
import { useApartmentStore } from "../../../Store/Data/useApartment.store"
import ApartmentCard from "../../../components/ApartmentCard/ApartmentCard"
// import { Link } from "react-router"
// import FavApartmentCard from "../../../components/ApartmentCard/FavApartmentCard"
export default function Favorites() {
  // const [data] = useState([])
  const { GetFavApartment, issuccess,aparments } = useApartmentStore()
  useEffect(() => {
    GetFavApartment()
    console.log(issuccess)
  }, [])
  return (
    <div>
      <h1 className="text-2xl text-gray-500 text-center my-10 dark:text-[white]">تفضيلاتى</h1>
      {issuccess &&
          
      <div>

     
      <div className="flex flex-col items-center justify-start min-h-screen mt-20">
        <p className="text-lg my-10 text-gray-700 dark:text-[white]">لا توجد شقق مفضله حتى الان</p>
        {/* <Link to="/" className="btn MainColorBG text-white">Go to Home</Link> */}
      </div>
      </div>
    }
    <div>
       <ApartmentGrid apartments={aparments} />
    </div>
    </div>
  )
}
interface ApartmentGridProps {
  apartments: object[];
}

const ApartmentGrid: React.FC<ApartmentGridProps> = ({ apartments }) => {
  return (
    <div
      className="grid grid-cols-1 gap-y-3 gap-x-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 3xl:grid-cols-6"
      dir="rtl"
    >
      {apartments.map((apartment, i) => (
        <div key={i} dir="ltr">
          <ApartmentCard data={apartment} id={i+4} />
          {/* <FavApartmentCard data={apartment} id={i + 4} /> */}
        </div>
      ))}
    </div>
  );
};