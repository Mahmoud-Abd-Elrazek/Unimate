import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ApartmentCard from "../../components/ApartmentCard/ApartmentCard"; // عدّل المسار حسب مشروعك

const RealEstateSlider: React.FC = () => {
  const properties = [
    { id: 1, title: "شقة مفروشة", price: "600 ر.س", image: "/images/apt1.jpg" },
    { id: 2, title: "غرفة لطالب", price: "400 ر.س", image: "/images/apt2.jpg" },
    { id: 3, title: "شقة 3 غرف", price: "800 ر.س", image: "/images/apt3.jpg" },
    { id: 4, title: "ستوديو مفروش", price: "500 ر.س", image: "/images/apt4.jpg" },
    { id: 5, title: "سكن طلابي", price: "300 ر.س", image: "/images/apt5.jpg" },
  ];

  return (
    <section className="py-10 w-full max-w-7xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">عقاراتي</h2>

      <div className="relative">
        {/* سهم السابق ← على اليمين */}
<button className="custom-prev absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</button>

{/* سهم التالي → على الشمال */}
<button className="custom-next absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>


        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          dir="rtl"
          >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <ApartmentCard {...property} />
            </SwiperSlide>
          ))}
          </Swiper>
      </div>
    </section>
  );
};

export default RealEstateSlider;