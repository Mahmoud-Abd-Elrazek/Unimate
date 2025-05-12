import "./home.css"
import Filter_bar from '../../components/Filter_Bar/filter_bar'
//import Search_bar from '../../components/search_bar_rooms/search_bar_rooms'
import { FaRegStar } from "react-icons/fa";
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard';
import HeroSection from '../../components/HeroSection/HeroSection';
// import { Col, Row } from 'react-bootstrap';

// import animation file
import "../../../public/animations.css";
import useAuthStore from '../../Store/useAuthStore';

export default function Home() {
  const role = useAuthStore((state) => state.role)
  console.log("this is role", role)
  return (
    <div className='min-h-lvh Page fade-in'>
      {/* hero section */}
      <HeroSection />

      {/* filter_bar section */}
      <section
        id='filter-bar-section'
        className='mt-20 flex flex-col items-center gap-6 px-4 sm:px-8 md:px-12 lg:px-20'
      >
        <h1 className='text-sm sm:text-base md:text-xl font-medium MainColorText text-center'>
          استخدم الفلتره الذكيه لتحديد ما يناسبك
        </h1>

        <div className='w-full'>
          <div className='w-full max-w-[1050px] mx-auto flex justify-center items-center h-auto sm:h-40'>
            <Filter_bar />
          </div>

        </div>
      </section>

      <div id="RoomSection">

        {/* الاعلى تقييما */}
        <div className='p-3'>
          <h1 className='flex justify-end text-2xl items-center my-5'>
            الاعلى تقييما <FaRegStar />
          </h1>
          {/* <div>
            <ApartmentGrid count={5} />
          </div> */}
        </div>

        {/* اضيف حديثا */}
        <div className='p-3'>
          <h1 className='flex justify-end text-2xl items-center my-5'>
            اضيف حديثا <FaRegStar />
          </h1>
          <div className="flex justify-center items-center w-full min-h-screen">
            <ApartmentGrid count={5} />
          </div>

          <div className='flex items-center justify-center mt-10'>
            <button className='text-center MainColorBG rounded-full w-[300px] h-[3rem] text-white'>عرض المزيد</button>
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