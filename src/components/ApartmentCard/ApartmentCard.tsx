import { useRef, useState } from "react";
import { MdOutlineStar, MdOutlineAccessTime, MdOutlineMeetingRoom } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoLocationOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { LuBed } from "react-icons/lu";
import { Link } from "react-router-dom";
import 'swiper/swiper-bundle.css';
import { Swiper as SwiperClass } from "swiper";

interface ApartmentCardProps {
  className?: string;
  edit?: boolean;
}

const ApartmentCard = ({ className = "", edit = false}: ApartmentCardProps) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg",
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
  ];

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className={`border border-[#e0e0e0] rounded-xl overflow-hidden group relative transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md dark:bg-[#171515] w-full max-w-sm ${className}`}>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: images.length >= 5,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          className="w-full h-[250px]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt="img" className="w-full h-[200px] sm:h-[250px] md:h-[280px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>

        {currentIndex > 0 && (
          <button
            ref={prevRef}
            onClick={handlePrevClick}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-[32px] h-[32px] rounded-full shadow-lg z-10 flex items-center justify-center cursor-pointer group-hover:opacity-100 transition-opacity duration-300"
          >
            <IoIosArrowBack className="text-[#000]" style={{ width: "100%", height: "20px" }} />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            ref={nextRef}
            onClick={handleNextClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-[32px] h-[32px] rounded-full shadow-lg z-10 flex items-center justify-center cursor-pointer group-hover:opacity-100 transition-opacity duration-300"
          >
            <IoIosArrowForward className="text-[#000]" style={{ width: "100%", height: "20px" }} />
          </button>
        )}

        <style
          dangerouslySetInnerHTML={{
            __html: `
              .swiper-pagination-bullet {
                background-color: white !important;
                opacity: .5 !important;
                width: 8px;
                height: 8px;
                margin: 0 3px !important;
              }
              .swiper-pagination-bullet-active {
                opacity: 1 !important;
              }
            `,
          }}
        />

        <div title="Add to Favourites" className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md cursor-pointer z-10">
          <FaHeart className="text-[#00000080] hover:text-red-500 hover:scale-110 transition duration-300" />
        </div>
      </div>

      <Link to="/roomdetails">
        <div className="p-3 text-right">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[13px] sm:text-[14px] font-bold text-[#DC3545]">6,600/mo</span>
            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#212529] dark:text-white">
              الشؤون · أولاد · 3 غرف · 6 ضيف · الدور الثالث
            </h3>
          </div>

          <div className="flex items-center justify-end mb-2">
            <span className="text-[14px] text-[#515151] mr-2 dark:text-white">الشؤون / شارع ابو علاء</span>
            <IoLocationOutline className="text-[#515151] dark:text-white" />
          </div>

          <p className="text-[14px] text-[#515151] dark:text-white">
            سكن مناسب للطلبه و العائلات · قريب من المواصلات العامة · قريب من المحلات التجارية · قريب من المطاعم · قريب من الجامعه
          </p>

          <div className="flex items-center justify-end mb-2 mt-2 gap-x-2 pb-2 border-b border-[#e0e0e0]">
            <div className="flex items-center justify-end">
              <span className="text-[14px] text-[#111111] mr-2 dark:text-white">12 سرير</span>
              <LuBed className="text-[#111111]" />
            </div>
            <div className="flex items-center justify-end">
              <span className="text-[14px] text-[#111111] mr-2 dark:text-white">4 غرفه</span>
              <MdOutlineMeetingRoom className="text-[#111111]" />
            </div>
            <div className="flex items-center justify-end">
              <span className="text-[14px] text-[#111111] mr-2 dark:text-white">1 حمام</span>
              <BiBath className="text-[#111111]" />
            </div>
          </div>

          <div className="flex items-center justify-end gap-x-2 mt-2">
            {["+10 اخري", "WiFi", "غاز طبيعي", "مكيف"].map((feature, i) => (
              <span key={i} className="px-3 py-1 bg-[#F1F5F9] text-sm text-[#111111] rounded-full dark:text-white dark:bg-[#515151]">
                {feature}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center justify-end">
              <span className="text-[13px] text-[#515151] mr-2 dark:text-white">قبل يوم</span>
              <MdOutlineAccessTime className="text-[#515151]" />
            </div>
            <div className="flex items-center justify-end">
              <span className="text-[14px] text-[#515151] mr-2 dark:text-white">+10 تعليقات</span>
              <div className="flex items-center">
                <span className="text-[13px] text-[#515151] mr-2 dark:text-white">4.5</span>
                <MdOutlineStar className="text-[#515151]" />
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* add edit button */}
      {edit && (
        <div className="absolute top-3 right-3 z-10">
          <button
            type="button"
            className="bg-green-500 text-white px-8 py-2 rounded-[10px] text-base shadow-md cursor-pointer"
          >
            edit
          </button>
        </div>
      )}

    </div>
  );
};

export default ApartmentCard;
