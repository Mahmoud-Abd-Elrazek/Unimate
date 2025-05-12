import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ApartmentCard from "../../../components/ApartmentCard/ApartmentCard";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const RealEstateSlider: React.FC = () => {
  const properties = [
    { id: 1, title: "شقة مفروشة", price: "600 ر.س", image: "/images/apt1.jpg" },
    { id: 2, title: "غرفة لطالب", price: "400 ر.س", image: "/images/apt2.jpg" },
    { id: 3, title: "شقة 3 غرف", price: "800 ر.س", image: "/images/apt3.jpg" },
    { id: 4, title: "ستوديو مفروش", price: "500 ر.س", image: "/images/apt4.jpg" },
    { id: 5, title: "سكن طلابي", price: "300 ر.س", image: "/images/apt5.jpg" },
  ];

  return (
    <section className="py-10 w-full px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
          عقاراتي
        </h2>

        <div className="relative">
          {/* السهم السابق */}
          <button className="custom-prev absolute top-1/2 left-2 sm:-left-5 z-10 -translate-y-1/2  dark:bg-gray-800 shadow-md p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* السهم التالي */}
          <button className="custom-next absolute top-1/2 right-2 sm:-right-5 z-10 -translate-y-1/2  dark:bg-gray-800 shadow-md p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="h-full"
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <div className="px-2">
                  <ApartmentCard
                    // title={property.title}
                    // price={property.price}
                    // image={property.image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RealEstateSlider;
