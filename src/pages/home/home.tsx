import "./home.css";
import Filter_bar from '../../components/Filter_Bar/filter_bar';
import { FaRegStar } from "react-icons/fa";
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard';
import HeroSection from '../../components/HeroSection/HeroSection';
import SearchBar from '../../components/SearchBar/SearchBarWithFilters';
import "../../../public/animations.css";
import { useEffect, useState } from "react";
import CreatPostButton from "../../components/navbar/Button";
import useAuthStore from "../../Store/Auth/Auth.store";
import { Slide, ToastContainer } from "react-toastify";
import useApartmentData from "../../Store/DataApartment/useApartmentData.store";
import ChatBot from "../../components/ChatBot/ChatbotIframe"
import { ApartmentData } from "../../../src/components/ApartmentCard/ApartmentCard"; // تأكد من المسار الصحيح

// Extend the Window interface to include chatbase
declare global {
  interface Window {
    chatbase?: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

export default function Home() {
  const Role = useAuthStore((state) => state.role);
  const [pageSize, setPageSize] = useState(6);
  const {
    fetchTopRated,
    fetchNew,
    topRated,
    newApartments,
    apartments,
    totalCount,
    isLoading,
    isSearching,
    find,
    setIsSearching,
  } = useApartmentData();

  useEffect(() => {
    fetchTopRated();
    fetchNew(pageSize);
    setIsSearching(false)
  }, [pageSize]);

  return (
    <div className='min-h-lvh Page fade-in pt-[80px]'>
      {Role === "Owner" && (
        <div className="block md:hidden">
          <CreatPostButton />
        </div>
      )}

      <HeroSection />
      <div className="block">
        <ChatBot />
      </div>

      <section
        id='filter-bar-section'
        className='mt-10 flex flex-col items-center gap-y-12 px-4 sm:px-8 md:px-12 lg:px-20'
      >
        <div className="w-full block md:hidden">
          <h1 className='mb-2 text-lg sm:text-lg md:text-lg  text-[#777] text-center'>
            ابدأ عمليه بحث سهله من هنا
          </h1>
          <SearchBar />
        </div>
        <div className='w-full'>
          <h1 className='mb-2 text-xl sm:text-[20px] md:text-xl font-semibold MainColorText text-center'>
            استخدم الفلتره الذكيه لتحديد ما يناسبك
          </h1>
          <div className='w-full max-w-[1050px] mx-auto flex justify-center items-center h-auto sm:h-40'>
            <Filter_bar />
          </div>
        </div>
      </section>

      {isSearching ? (
        <div id="RoomSection">
          <h1 className="text-center text-xl font-semibold my-4">نتائج البحث</h1>
          {find?
          <ApartmentGrid apartments={apartments} />
          :
            <div className="flex flex-col items-center justify-center py-10">
            <span className="text-2xl font-semibold text-gray-500 mb-2 min-h-[20rem]">لا يوجد نتائج لبحثك</span>
            </div>
          }
        </div>
      ) : isLoading && topRated.length === 0 ? (
        <div className="flex justify-center items-center py-10 h-[50vh]">
          <div className="loading"></div>
        </div>
      ) : (
        <div id="RoomSection" className="pl-[24px] pr-[24px]">
          <div>
            <h1 className="flex justify-end items-center mt-5 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              الاعلى تقييما
              <FaRegStar className="ml-2 text-[#FFA500] dark:text-[#FFCC00]" />
            </h1>
            <ApartmentGrid apartments={topRated} />
          </div>

          <div>
            <h1 className="flex justify-end items-center mt-5 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              اضيف حديثا <FaRegStar className="ml-2 dark:text-[#5bc0de] text-[#0d6efd]" />
            </h1>
            <ApartmentGrid apartments={newApartments} />

            <div className='flex items-center justify-center mt-10'>
              {newApartments.length < totalCount ? (
                <button
                  onClick={() => setPageSize(prev => prev + 6)}
                  disabled={isLoading}
                  className={`
                    text-center rounded-full
                    w-[300px] h-[3rem]
                    text-[#f8fafc]
                    ${isLoading ? 'bg-gray-400 border-[gray-400] cursor-not-allowed' : 'bg-mainColor'}
                    mb-[50px] text-[16px] py-[10px] px-0
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
      )}
      <ToastContainer position="top-center" autoClose={3000} transition={Slide} />
    </div>
  );
}

interface ApartmentGridProps {
  apartments: ApartmentData[];
}

const ApartmentGrid: React.FC<ApartmentGridProps> = ({ apartments }) => {
  return (
    <div
      className="grid grid-cols-1 gap-y-3 gap-x-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 3xl:grid-cols-6"
      dir="rtl"
    >
      {apartments.map((apartment, i) => (
        <div key={i} dir="ltr">
          <ApartmentCard data={apartment} id={i + 4} />
        </div>
      ))}
    </div>
  );
};
