import "./home.css"
import Filter_bar from '../../components/Filter_Bar/filter_bar'
//import Search_bar from '../../components/search_bar_rooms/search_bar_rooms'
import { FaRegStar } from "react-icons/fa";
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard';
import HeroSection from '../../components/HeroSection/HeroSection';
// import { Col, Row } from 'react-bootstrap';

// import PropertyManagement from '../../components/PropertyManagementSystem/PropertyManagement'

// import animation file
import "../../../public/animations.css";
import useAuthStore from '../../Store/useAuthStore';

// import { useEffect } from 'react';

export default function Home() {
  const role = useAuthStore((state) => state.role)
  console.log("this is role", role)

  // Unimate chatbase script: This script is used to load the chatbase script and initialize it
  // ================== Start ================== 
  // useEffect(() => {
  //   if (
  //     !window.chatbase ||
  //     window.chatbase("getState") !== "initialized"
  //   ) {
  //     window.chatbase = (...args) => {
  //       if (!window.chatbase.q) {
  //         window.chatbase.q = [];
  //       }
  //       window.chatbase.q.push(args);
  //     };
  //     window.chatbase = new Proxy(window.chatbase, {
  //       get(target, prop) {
  //         if (prop === "q") {
  //           return target.q;
  //         }
  //         return (...args) => target(prop, ...args);
  //       },
  //     });
  //   }

  //   const onLoad = () => {
  //     const script = document.createElement("script");
  //     script.src = "https://www.chatbase.co/embed.min.js";
  //     script.id = "mmxgFf-wRNPfCTfGJjPhf";
  //     script.domain = "www.chatbase.co";
  //     document.body.appendChild(script);
  //   };

  //   if (document.readyState === "complete") {
  //     onLoad();
  //   } else {
  //     window.addEventListener("load", onLoad);
  //   }

  //   return () => {
  //     window.removeEventListener("load", onLoad);
  //     const script = document.getElementById("mmxgFf-wRNPfCTfGJjPhf");
  //     if (script) {
  //       script.remove();
  //     }
  //   };
  // }, []);
  // ================== End ================== 

  return (
    <div className='min-h-lvh Page fade-in dark:bg-[#0f1729] pt-[80px]'>
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

      <div id="RoomSection" className="pl-[24px] pr-[24px]">
        {/* الاعلى تقييما */}
        <div>
          <h1 className="flex justify-end items-center mt-5 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            الاعلى تقييما
            <FaRegStar className="ml-2 text-[#FFA500] dark:text-[#FFCC00]" />
          </h1>

          <div>
            <ApartmentGrid count={6} />
          </div>
        </div>

        {/* اضيف حديثا */}
        <div>
          <h1 className="flex justify-end items-center mt-5 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            اضيف حديثا <FaRegStar className="ml-2 dark:text-[#5bc0de] text-[#0d6efd]" />
          </h1>
          <div>
            <ApartmentGrid count={5} />
          </div>

          <div className='flex items-center justify-center mt-10'>
            <button
              className={`
                text-center rounded-full
                w-[300px] h-[3rem]
                text-[#f8fafc]
                bg-[#ef4444]
                mb-[50px]
                text-[16px]
                py-[10px] px-0
                h-auto
                md:mb-[50px] md:bg-[#ef4444] md:text-[16px] md:py-[10px] md:px-0 md:h-auto
              `}>
              عرض المزيد
            </button>

          </div>
        </div>
      </div>
      {/* <PropertyManagement/> */}
    </div>
  )
}
interface ApartmentGridProps {
  count: number; // Number of cards to display
}

const ApartmentGrid: React.FC<ApartmentGridProps> = ({ count }) => {
  return (
    <div className="
    grid grid-cols-1 
    gap-y-3 gap-x-1
    
    md:grid-cols-2 
    lg:grid-cols-3 
    xl:grid-cols-3
    2xl:grid-cols-5
    3xl:grid-cols-6"
    dir="rtl">
      {[...Array(count)].map((_, i) => (
        <div key={i} dir="ltr">
          <ApartmentCard />
        </div>
      ))}
    </div>
  );
};
