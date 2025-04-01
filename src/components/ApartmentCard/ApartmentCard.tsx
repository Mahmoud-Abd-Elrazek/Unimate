

import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


const ApartmentCard = () => {
  // Apartment images
  const images = [
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg",
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[320px] relative group">
      {/* Hover Button */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link
          to="/room-details"
          className="text-white font-bold py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          View Room Details
        </Link>
      </div>

      {/* Image Slider Section */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-[210px]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[210px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Favorite Icon */}
        <div
          title="Add to Favourites"
          className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md cursor-pointer z-10"
        >
          <FaHeart className="text-[#00000080] hover:text-red-500 hover:scale-110 transition duration-300" />
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 text-right">
        <h3 className="text-base font-semibold text-[#212529]">
          الشؤون · أولاد · 3 غرف · 6 ضيف · الدور الثالث
        </h3>
        <p className="text-sm text-[#6C757D]">ج.م 600 في الشهر</p>
        <p className="text-[12px] text-[#6C757D] text-sm">قبل يومين</p>
      </div>

      {/* Owner Section */}
      <div className="cursor-pointer hover:bg-[#F1F3F4] border-t px-4 py-3 flex flex-row-reverse items-center">
        <img
          src="https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-1/455031373_1934517026975496_2310134617658645041_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_ohc=Yi0xgVUN9KcQ7kNvgE8BX6x&_nc_oc=AdjxDwGv0WMWMla9tsq7UIDVmTlOATLneMT8MCVoYuySCUk5RRxepTsVQ9xgRLAHHdg&_nc_zt=24&_nc_ht=scontent.fcai20-2.fna&_nc_gid=tkJXZfGJiMJmS-GISUpCnA&oh=00_AYGlMRoN-aKQfHGJXBPvVurcIzfI1eZ6qizHGYdDOTo61w&oe=67DBB602"
          alt="Owner"
          className="w-[50px] h-[50px] rounded-full ml-3"
        />
        <div className="text-right">
          <p className="text-base font-semibold text-[#212529]">محمود محمد عرفة</p>
          <div className="text-gray-500 text-sm">
            <p className="text-[#6C757D] font-semibold">صاحب عقار متميز</p>
            <div className="text-gray-500 text-sm flex items-center justify-end gap-0">
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStar className="text-yellow-500" />
              <MdOutlineStarBorder className="text-yellow-500" />
              <MdOutlineStarBorder className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
