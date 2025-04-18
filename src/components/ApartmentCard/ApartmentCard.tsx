import { useRef, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { LuBed } from "react-icons/lu";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const ApartmentCard = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<typeof Swiper | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Apartment images
  const images = [
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg",
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",

  ];

  const handlePrevClick = () => {
    if (swiperRef.current && currentIndex > 0) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && currentIndex < images.length - 1) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="bg-white border border-[#e0e0e0] rounded-xl overflow-hidden w-[420px] group relative transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md">
      {/* Image Slider Section */}
      <div className="relative">
        <Swiper
          ref={swiperRef}
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
              <img
                src={src}
                alt="img"
                className="w-full h-[250px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        {currentIndex > 0 && (
          <button
            ref={prevRef}
            onClick={handlePrevClick}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-[32px] h-[32px] rounded-full shadow-lg z-10 flex items-center justify-center cursor-pointer  group-hover:opacity-100 transition-opacity duration-300"
          >
            <IoIosArrowBack className="text-[#000]" style={{ width: "100%", height: "20px" }} />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            ref={nextRef}
            onClick={handleNextClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-[32px] h-[32px] rounded-full shadow-lg z-10 flex items-center justify-center cursor-pointer  group-hover:opacity-100 transition-opacity duration-300"
          >
            <IoIosArrowForward className="text-[#000]" style={{ width: "100%", height: "20px" }} />
          </button>
        )}
        {/* Custom styles for pagination dots */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
                .swiper-pagination-bullet {
                  background-color: white !important; /* White background */
                  opacity: .5 !important; /* Ensure visibility */
                  width: 8px; /* Adjust size */
                  height: 8px;
                  margin: 0 3px !important; /* Adds space between dots */
                }
                .swiper-pagination-bullet-active {
                  opacity: 1 !important; /* Ensure visibility */
                }
              `,
          }}
        />

        {/* Favorite Icon on the Left */}
        <div title="Add to Favourites" className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md cursor-pointer z-10">
          <FaHeart className="text-[#00000080] hover:text-red-500 hover:scale-110 transition duration-300" />
        </div>
      </div>
      {/* Details Section */}
          <Link to='/roomdetails'>
      <div className="p-3 text-right">
        <div className="flex items-center justify-between mb-2">
          <span
            className="block text-[14px] font-bold text-[#2002C6] text-right leading-[20px]">
            6,600/mo
          </span>
          <h3 className="text-[16px] font-semibold text-[#212529]">
            الشؤون · أولاد · 3 غرف · 6 ضيف · الدور الثالث
          </h3>
        </div>

        {/* location */}
        <div className="flex items-center justify-end mb-2">
          <span className="text-[14px] text-[#515151] mr-2"> الشؤون / شارع ابو علاء </span>
          <IoLocationOutline className="text-[#515151]" />
        </div>

        {/* descritpion */}
        <p className="text-[14px] text-[#515151]">
          سكن مناسب للطلبه و العائلات · قريب من المواصلات العامة · قريب من المحلات التجارية · قريب من المطاعم · قريب من الجامعه
        </p>

        {/* Services */}
        <div className="flex items-center justify-end mb-2 mt-2 gap-x-2 pb-2 border-b border-[#e0e0e0]">
          {/* bed */}
          <div className="flex items-center justify-end mb-2 mt-2">
            <span className="text-[14px] text-[#111111] mr-2"> 12 سرير </span>
            <LuBed className="text-[#111111]" />
          </div>
          {/* room */}
          <div className="flex items-center justify-end mb-2 mt-2">
            <span className="text-[14px] text-[#111111] mr-2">4 غرفه</span>
            <MdOutlineMeetingRoom className="text-[#111111]" />
          </div>
          {/* bath */}
          <div className="flex items-center justify-end mb-2 mt-2">
            <span className="text-[14px] text-[#111111] mr-2">1 حمام</span>
            <BiBath className="text-[#111111]" />
          </div>
        </div>

        {/* Some Services */}
        <div className="flex items-center justify-end gap-x-2">
          <span className="px-3 py-1 bg-[#F1F5F9] text-sm text-[#111111] rounded-full">
            +10 اخري
          </span>
          <span className="px-3 py-1 bg-[#F1F5F9] text-sm text-[#111111] rounded-full">
            WiFi
          </span>
          <span className="px-3 py-1 bg-[#F1F5F9] text-sm text-[#111111] rounded-full">
            غاز طبيعي
          </span>
          <span className="px-3 py-1 bg-[#F1F5F9] text-sm text-[#111111] rounded-full">
            مكيف
          </span>
        </div>

        <div className="flex items-center justify-between">
          {/* deuration */}
          <div className="flex items-center justify-end mb-2 mt-2">
            <span className="text-[13px] text-[#515151] mr-2">قبل يوم </span>
            <MdOutlineAccessTime className="text-[#515151]" />
          </div>

          {/* number of comments & rating */}
          <div className="flex items-center justify-end mb-2 mt-2">
            <span className="text-[14px] text-[#515151] mr-2"> +10 تعليقات </span>

            <div className="flex items-center justify-end mb-2 mt-2">
              <span className="text-[13px] text-[#515151] mr-2">4.5 </span>
              <MdOutlineStar className="text-[#515151]" />
            </div>
          </div>
        </div>
      </div>
      </Link>

    </div>
  );
};

export default ApartmentCard;