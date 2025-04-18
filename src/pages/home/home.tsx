// import React from 'react'
// import "./home.css"
// import ApartmentCard from "../../components/ApartmentCard/ApartmentCard"
import Filter_bar from '../../components/Filter_Bar/filter_bar'
import Search_bar from '../../components/search_bar_rooms/search_bar_rooms'
import { FaRegStar } from "react-icons/fa";
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard';
import HeroSection from '../../components/HeroSection/HeroSection';
// import { Col, Row } from 'react-bootstrap';
export default function Home() {
  // const cards=
  return (
    <div className='min-h-lvh BODY pt-2'>
      <div className='lg:hidden flex justify-center items-center'>
        <Search_bar placeholderval='ابحث عن سكن مناسب لك'/>
      </div>
      {/* hero section */}
      <HeroSection />

      {/* filter_bar section */}
      <section id='filter-bar-section' className='mt-[5rem] CenterCol gap-10'>

        <h1 className='text-xl font-medium MainColorText'>استخدم الفلتره الذكيه لتحديد ما يناسبك</h1>
        <div className='CenterCol px-20  h-[10rem]'>
          <Filter_bar />
        </div>
      </section>
      <div id="RoomSection">

      {/* الاعلى تقييما */}
      <div className='p-3'>
        <h1 className='flex justify-end text-2xl items-center my-5'>الاعلى تقييما<FaRegStar />
        </h1>
        {/* rooms */}
        <div>

       
          <ApartmentGrid count={5} /> {/* Pass the number of cards to display */}
         
        </div>

      </div>
      {/* اضيف حديثا */}
      <div className='p-3'>
        <h1 className='flex justify-end text-2xl items-center my-5'>اضيف حديثا<FaRegStar />
        </h1>
        {/* rooms */}
        <div className="flex justify-center items-center w-full min-h-screen">
         
          <ApartmentGrid count={5} /> {/* Pass the number of cards to display */}
        </div>
        {/* button show more */}
        <div className='flex items-center justify-center mt-10'>
          <button className='text-center MainColorBG rounded-full w-[300px] h-[3rem] text-white'>عرض المزيد </button>
        </div>
      </div>
      </div>

    </div>
  )
}

// ========================================================================
interface ApartmentGridProps {
  count: number; // Number of cards to display
}

const ApartmentGrid: React.FC<ApartmentGridProps> = ({ count }) => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full min-h-screen gap-x-[25px] gap-y-[25px]">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="flex-none">
          <ApartmentCard />
        </div>
      ))}
    </div>
  );
};
// ========================================================================