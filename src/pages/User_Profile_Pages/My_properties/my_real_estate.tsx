import React, { useEffect } from "react";
import ApartmentCard from "../../../components/ApartmentCard/ApartmentCard";


import AuthorLayout from '../AuthorLayout/authorLayout';
import { useBookingHistoryStore } from "../../../Store/Owner/BookingHistory.store";


const RealEstateSlider: React.FC = () => {
 
  const {GetOwnerRequests}=useBookingHistoryStore()
  
  useEffect(()=>{
    GetOwnerRequests();
    console.log("this is real state page")
  },[])

  return (
    <AuthorLayout isAuthorized={true} >
    <section className="py-10 w-full px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
          عقاراتي
        </h2>
        {/* add apartment cards */}
        <div>
          <ApartmentGrid count={5} />
        </div>
      </div>
    </section>
    </AuthorLayout>
  );
};

interface ApartmentGridProps {
  count: number; // Number of cards to display
}
const ApartmentGrid: React.FC<ApartmentGridProps> = ({ count }) => {
  return (
    <div className="
    grid grid-cols-1 
    gap-y-3 gap-x-1  
    md:grid-cols-2 
    lg:grid-cols-2 
    xl:grid-cols-3
    2xl:grid-cols-5
    3xl:grid-cols-6"
      dir="rtl">
      {[...Array(count)].map((_, i) => (
        <div key={i} dir="ltr">
          <ApartmentCard edit={true}/>
        </div>
      ))}
    </div>
  );
};

export default RealEstateSlider;
