import { useEffect, useRef, useState } from "react";
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
import { useApartmentStore } from "../../Store/Data/useApartment.store";
// import { useNavigate } from 'react-router-dom';
// import { boolean } from "zod";
// import { toast } from "sonner";
export interface ApartmentData {
  address?: string;
  gender?: string;
  floor?: string;
  numberOfRooms?: number;
  price?: string | number;
  ownerName?: string;
  detailedAddress: string;
  location: number;
  favourite: boolean;
}

interface ApartmentCardProps {
  className?: string;
  edit?: boolean;
  data?: ApartmentData;
  id?: number;

}

const ApartmentCard = ({ className = "", edit = false, data, id }: ApartmentCardProps) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg",
    "https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg",
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg",
    "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg",
  ];

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  const parseFloor = (floorRaw: unknown): string => {
    if (typeof floorRaw !== "string") return "?";
    const trimmed = floorRaw.trim();
    const isProbablyJSON = trimmed.startsWith('"') && trimmed.endsWith('"');
    if (isProbablyJSON) {
      try {
        const parsed = JSON.parse(trimmed);
        if (typeof parsed === "string") return parsed;
      } catch (e) {
        console.log(e)
        return trimmed;
      }
    }
    return trimmed;
  };

  const translateFloor = (floor: string): string => {
    const map: Record<string, string> = {
      "1": "الأول", "1st": "الأول", "first": "الأول",
      "2": "الثاني", "2nd": "الثاني", "second": "الثاني",
      "3": "الثالث", "3rd": "الثالث", "third": "الثالث",
      "4": "الرابع", "4th": "الرابع", "fourth": "الرابع",
      "5": "الخامس", "5th": "الخامس", "fifth": "الخامس",
      "6": "السادس", "6th": "السادس", "sixth": "السادس",
      "7": "السابع", "7th": "السابع", "seventh": "السابع",
      "8": "الثامن", "8th": "الثامن", "eighth": "الثامن",
      "9": "التاسع", "9th": "التاسع", "ninth": "التاسع",
      "10": "العاشر", "10th": "العاشر", "tenth": "العاشر",
    };
    return map[floor] || floor;
  };

  const rawFloor = data?.floor;
  const floorValue = parseFloor(rawFloor);
  const translatedFloor = translateFloor(floorValue);
  const type = data?.gender === "Male" ? "أولاد" : "بنات";
  let numofRooms = (data?.numberOfRooms ?? 3) > 4 ? 4 : data?.numberOfRooms;
  numofRooms = numofRooms == 0 ? 3 : numofRooms;


  const { DeleteFavorite, AddFavorite } = useApartmentStore();

  const handleClick = () => {
    console.log(id)
    console.log(data?.favourite)
    if (id !== undefined) {
      if (!data?.favourite) {
        AddFavorite(id);
      } else {
        DeleteFavorite(id);
      }
    }
  };

  const areas = [
    { id: 0, key: 'AlMasaken', value: 'المساكن' },
    { id: 1, key: 'Darda', value: 'دردشه' },
    { id: 2, key: 'Shooun', value: 'الشؤون' },
    { id: 3, key: 'WastElBalad', value: 'وسط البلد' },
    { id: 4, key: 'ALKnooz', value: 'الكنوز' },
    { id: 5, key: 'ALMoataqal', value: 'المعتقل' },
    { id: 6, key: 'ALBank', value: 'البنك' },
    { id: 7, key: 'ALTameen', value: 'التأمين' },
    { id: 8, key: 'ALMahatta', value: 'المحطه' },
    { id: 9, key: 'ALSayyedaAisha', value: 'السيدة عايشة' },
    { id: 10, key: 'ALShahba', value: 'الشهباء' },
    { id: 11, key: 'ALKods', value: 'القدس' },
    { id: 12, key: 'ALMana', value: 'المعنا' },
    { id: 13, key: 'ALRamla', value: 'الرملة' },
    { id: 14, key: 'Dandara', value: 'دندرة' },
    { id: 15, key: 'QenaUniversity', value: 'جامعة جنوب الوادي' },
  ];

  const [locationId, setLocationId] = useState<number | null>(null);
  useEffect(() => {
    setLocationId(data?.location ?? null);
    console.log("this is data fav", data?.favourite)
  }, [data?.location]);

  const selectedLocation = areas.find((area) => area.id === locationId);

  return (
    <div
      className={`
        relative group overflow-hidden rounded-xl
        transition-transform duration-300 ease-in-out
        border-1 border-[#e0e0e0] dark:border-[#1f2630] dark:bg-secondary_BGD
        mn-w-full sm:w-full 
        md:mn-w-[370px] md:mx-w-[400px] 
        lg:mn-w-[300px] lg:mx-w-[500px] 
        lg:hover:scale-[1.03] lg:hover:shadow-md
        xl:mn-w-[500px]
        ${className}
      `}
    >
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: images.length >= 5,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          className="w-full h-full"
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
            className="absolute left-3 top-1/3 -translate-y-1/2 w-[32px] h-[32px] rounded-full shadow-lg z-10 items-center justify-center cursor-pointer group-hover:opacity-100 transition-opacity duration-300 bg-BTN_TXD hidden lg:flex"
          >
            <IoIosArrowBack className="text-[#000]" style={{ width: "100%", height: "20px" }} />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            ref={nextRef}
            onClick={handleNextClick}
            className="absolute right-3 top-1/3 -translate-y-1/2 w-[32px] h-[32px] rounded-full shadow-lg z-10 items-center justify-center cursor-pointer group-hover:opacity-100 transition-opacity duration-300 bg-BTN_TXD hidden lg:flex"
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



        {!edit && (
          <div
            onClick={handleClick}
            title="Add to Favourites"
            className="absolute top-3 left-3 p-2 rounded-full shadow-md cursor-pointer z-10 bg-[#f8fafc]"
          >
            <FaHeart
              className={`transition text-xl ${data?.favourite ? 'text-red-500' : 'text-[#00000080]'
                } hover:scale-110`}
            />
          </div>
        )}

        <Link to={`/roomdetails?id=${id}`} state={{ data: data, ownerName: data?.ownerName }}>
          <div className="p-3 text-right">
            <div className="flex items-start justify-between mb-2">
              <span className="text-[13px] font-bold text-[#DC3545] dark:text-[#ff6170] sm:text-[16px] lg:text-[14px]">
                {data?.price == 0 ? 200 : data?.price}/mo
              </span>
              <h3 className="text-[14px] font-semibold text-[#212529] dark:text-primary_TXD sm:text-[16px] lg:text-[15px]">
                {selectedLocation?.value} · {type} · {numofRooms} غرف ·  الدور {translatedFloor}
              </h3>
            </div>

            <div className="flex items-center justify-end mb-2">
              <span className="text-[14px] text-[#515151] mr-2 dark:text-primary_TXD">{data?.detailedAddress} /   </span>
              <IoLocationOutline className="text-[#515151] dark:text-[#8492a7]" />
            </div>

            <p className="text-[14px] text-[#515151] dark:text-secondary_TXD sm:text-[14px] lg:text-[14px]">
              سكن مناسب للطلبه و العائلات · قريب من المواصلات العامة · قريب من المحلات التجارية · قريب من المطاعم · قريب من الجامعه
            </p>

            <div className="flex items-center justify-end mb-2 mt-2 gap-x-2 pb-2 border-b border-[#e0e0e0] dark:border-[#1f2630]">
              <div className="flex items-center justify-end">
                <span className="text-[#111111] mr-2 dark:text-BTN_BGD text-[14px] sm:text-[14px] lg:text-[12px] xl:text-[14px]">12 سرير</span>
                <LuBed className="lg:text-[14px] text-[#111111] dark:text-BTN_BGD" />
              </div>
              <div className="flex items-center justify-end">
                <span className="text-[14px] text-[#111111] mr-2 dark:text-BTN_BGD sm:text-[14px] lg:text-[12px] xl:text-[14px]">4 غرفه</span>
                <MdOutlineMeetingRoom className="lg:text-[14px] text-[#111111] dark:text-BTN_BGD" />
              </div>
              <div className="flex items-center justify-end">
                <span className="text-[14px] text-[#111111] mr-2 dark:text-BTN_BGD sm:text-[14px] lg:text-[12px] xl:text-[14px]">1 حمام</span>
                <BiBath className="lg:text-[14px] text-[#111111] dark:text-BTN_BGD" />
              </div>
            </div>

            {/* <div className="flex items-center justify-end gap-x-2 mt-2 mb-3 lg:gap-x-1">
              {["+10 اخري", "WiFi", "غاز طبيعي", "مكيف"].map((feature, i) => (
                <span key={i} className="bg-[#F1F5F9] text-[#111111] rounded-full dark:text-BTN_TXD dark:bg-darkBg 
              sm:text-sm
              text-[12px] p-1
              
              sm:px-3 sm:py-1 
              md:px-2 md:text-[12px]
              lg:px-3 lg:py-3 lg:text-[13px]">
                  {feature}
                </span>
              ))}
            </div> */}

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center justify-end">
                <span className="text-[13px] text-[#515151] mr-2 dark:text-BTN_BGD sm:text-[14px] lg:text-[12px] xl:text-[14px]">قبل يوم</span>
                <MdOutlineAccessTime className="text-[14px] text-[#515151] dark:text-BTN_BGD" />
              </div>
              <div className="flex items-center justify-end">
                <span className="text-[14px] text-[#515151] mr-2 dark:text-BTN_BGD sm:text-[14px] lg:text-[12px] xl:text-[14px]">+10 تعليقات</span>
                <div className="flex items-center">
                  <span className="text-[13px] text-[#515151] mr-2 dark:text-BTN_BGD">4.5</span>
                  <MdOutlineStar className="text-[14px] text-[#FFA500] dark:text-[#FFCC00] sm:text-[14px] lg:text-[12px] xl:text-[14px]" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {edit && (
          <div className="absolute top-3 right-3 z-10">
            <Link to={`/manage_property?id=${id}`}
                  state={{mode: 'edit'}}
              className="text-[#f8fafc] bg-[#495057] hover:bg-[#f8fafc] hover:text-[#0f1729] px-4 py-1 rounded-[10px] text-base shadow-md cursor-pointer"
            >
              edit
            </Link>
          </div>

        )}
      </div>
    </div>
  );
};

export default ApartmentCard;
