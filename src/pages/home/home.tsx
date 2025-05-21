import "./home.css"
import Filter_bar from '../../components/Filter_Bar/filter_bar'
import { FaRegStar } from "react-icons/fa";
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard';
import HeroSection from '../../components/HeroSection/HeroSection';
import SearchBar from '../../components/SearchBar/SearchBarWithFilters';

// import animation file
import "../../../public/animations.css";
import useAuthStore from '../../Store/Auth/Auth.store';
import { useEffect, useState } from "react";
import axios from "axios";

// import { useEffect } from 'react';

export default function Home() {
  const role = useAuthStore((state) => state.role)
  console.log("this is role", role)

  const [pagesize, setpagesize] = useState(6);
  const [apartments, setapartments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const FetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`https://darkteam.runasp.net/GetApartmentEndpoint/GetApartment?PageNumber=1&PageSize=${pagesize}`);
      setapartments(res.data.data.apartments);
      setTotalCount(res.data.data.totalCount); // تأكد من اسم الخاصية في response
    } catch (error) {
      console.log("failed to fetch the data!!!!!!!!!!!" + error)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    FetchData()
  }, [pagesize])

  // Unimate chatbase script: This script is used to load the chatbase script and initialize it
  // ================== Start ================== 
  /*useEffect(() => {
    if (
      !window.chatbase ||
      window.chatbase("getState") !== "initialized"
    ) {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args) => target(prop, ...args);
        },
      });
    }

    const onLoad = () => {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "mmxgFf-wRNPfCTfGJjPhf";
      script.domain = "www.chatbase.co";
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
      const script = document.getElementById("mmxgFf-wRNPfCTfGJjPhf");
      if (script) {
        script.remove();
      }
    };
  }, []);*/
  // ================== End ================== 

  return (
    <div className='min-h-lvh Page fade-in pt-[80px]'>
      {/* hero section */}
      <HeroSection />

      {/* filter_bar section */}
      <section
        id='filter-bar-section'
        className='mt-10 flex flex-col items-center gap-y-12 px-4 sm:px-8 md:px-12 lg:px-20'
      >
        <SearchBar />
        <div className='w-full'>
          <h1 className='mb-2 text-xl sm:text-[20px] md:text-xl font-semibold MainColorText text-center'>
            استخدم الفلتره الذكيه لتحديد ما يناسبك
          </h1>
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
            <ApartmentGrid apartments={apartments} />
          </div>
        </div>

        {/* اضيف حديثا */}
        <div>
          <h1 className="flex justify-end items-center mt-5 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            اضيف حديثا <FaRegStar className="ml-2 dark:text-[#5bc0de] text-[#0d6efd]" />
          </h1>
          <div>
            <ApartmentGrid apartments={apartments} />
          </div>

          <div className='flex items-center justify-center mt-10'>
            {apartments.length < totalCount ? (
              <button
                onClick={() => setpagesize(prev => prev + 12)}
                disabled={isLoading}
                className={`
                text-center rounded-full
                w-[300px] h-[3rem]
                text-[#f8fafc]
                ${isLoading ? 'bg-gray-400 border-[gray-400] cursor-not-allowed' : 'bg-mainColor'}
                mb-[50px]
                text-[16px]
                py-[10px] px-0
                md:mb-[50px] md:text-[16px] md:py-[10px] md:px-0 md:h-auto
                border-1 border-mainColor
                
                transition duration-300 ease-in-out transform
                hover:bg-transparent hover:text-mainColor
              `}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="loader"></span> جاري التحميل...
                  </span>
                ) : (
                  "عرض المزيد"
                )}
              </button>
            ) : (
              <p className="text-center mb-[50px] text-gray-500 text-lg">لا يوجد المزيد من العقارات</p>
            )}

          </div>
        </div>
      </div>
      {/* <PropertyManagement/> */}
    </div>
  )
}
interface ApartmentGridProps {
  // count: number; 
  apartments: object[];
}
const ApartmentGrid: React.FC<ApartmentGridProps> = ({ apartments }) => {
  return (
    <div className="
      grid grid-cols-1 
      gap-y-3 gap-x-2
      md:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-3
      2xl:grid-cols-5
      3xl:grid-cols-6"
      dir="rtl">
      {apartments.map((apartment, i) => (
        <div key={i} dir="ltr">
          <ApartmentCard data={apartment} id={i} />
        </div>
      ))}
    </div>
  );
};
