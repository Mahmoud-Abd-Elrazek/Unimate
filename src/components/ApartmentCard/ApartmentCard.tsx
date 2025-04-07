
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


import { useState, useRef } from "react";

const ApartmentCard = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<Swiper | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Apartment images
  const images = [
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg",
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
    <div className="bg-white rounded-xl overflow-hidden w-[320px] relative group border border-[rgba(255,255,255,0.5)]">
      {/* Hover Button */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link
          to="/room-details"
          className="text-white font-bold py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg">
          View Room Details
        </Link>
      </div>

      {/* Image Slider Section */}
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}

          className="w-full h-[300px]"

          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}

                className="w-full h-[300px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Favorite Icon */}
        <div
          title="Add to Favourites"
          className="absolute top-3 left-3 p-2 rounded-full shadow-md cursor-pointer z-10">
          <FaHeart className="text-[#00000080]  hover:text-red-500 hover:scale-110 transition duration-300" />
        </div>
        {/* Custom Navigation Buttons */}
        {currentIndex > 0 && (
          <button
            ref={prevRef}
            onClick={handlePrevClick}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-[32px] h-[32px] rounded-full shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <IoIosArrowBack className="text-[#000]" style={{ width: "100%", height: "20px" }} />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            ref={nextRef}
            onClick={handleNextClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-[32px] h-[32px] rounded-full shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <IoIosArrowForward className="text-[#000]" style={{ width: "100%", height: "20px" }} />
          </button>
        )}
        {/* Custom styles for pagination dots */}
        <style>
          {`.swiper-pagination-bullet {
              background-color: white !important; /* White background */
              opacity: .5!important; /* Ensure visibility */
              width: 8px; /* Adjust size */
              height: 8px;
              margin: 0 3px !important; /* Adds space between dots */
            }
            .swiper-pagination-bullet-active {
              opacity: 1 !important; /* Ensure visibility */
            }`}
        </style>

        {/* Favorite Icon on the Left */}
        <div title="Add to Favourites" className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md cursor-pointer z-10">

          <FaHeart className="text-[#00000080] hover:text-red-500 hover:scale-110 transition duration-300" />
        </div>
      </div>

      {/* Details Section */}
      <div className="px-[10px] py-[12px] text-right">
        <h3 className="text-[17px] font-semibold text-[#212529]">
          الشؤون · أولاد · 3 غرف · 6 ضيف · الدور الثالث
        </h3>
        <p className="text-base text-[#6C757D]">ج.م 600 في الشهر</p>
        <p className="text-[12px] text-[#6C757D] text-sm">قبل يومين</p>
      </div>

      {/* Owner Section */}
      <div className="cursor-pointer hover:bg-[#F1F3F4] border-t px-[10px] py-[8px] flex flex-row-reverse items-center">
        <img
          src="https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/455031373_1934517026975496_2310134617658645041_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XHIJmIFiVOoQ7kNvwH2Klze&_nc_oc=AdkO1_5dMia-84KsGWlN8SRwxCejRGdjlB5rf33cQ1V-klvKUEF3itI08eqoWW9FlsU&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=Xine1_ca6090EOHz1zz_uw&oh=00_AfEgACBG3I_2DvEgy9oiDJephwqlFKbPlQnNbZigrbq8ew&oe=67F9E444"
          alt="Owner"
          className="w-[50px] h-[50px] rounded-full ml-3"
        />
        <div className="text-right">
          <p className="text-lg font-semibold text-[#212529]">عمرو محمد عبده</p>
          <div className="text-gray-500 text-sm">
            <p className="text-[#6C757D] font-semibold">صاحب عقار متميز</p>
            <div className="text-gray-500 text-sm flex items-center justify-end gap-0">
              <MdOutlineStar className="text-[15px] text-yellow-500" />
              <MdOutlineStar className="text-[15px] text-yellow-500" />
              <MdOutlineStar className="text-[15px] text-yellow-500" />
              <MdOutlineStarBorder className="text-[15px] text-yellow-500" />
              <MdOutlineStarBorder className="text-[15px] text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;