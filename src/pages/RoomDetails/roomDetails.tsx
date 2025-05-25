// import React from 'react'
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { TbToolsKitchen2, TbAirConditioning } from "react-icons/tb";
import RoomCard from "../../components/RoomCard/roomCard";
import Room_Photo from "../../assets/room_photo.jpg";
import { FaBath, FaStar } from "react-icons/fa";
import { BsDisplay } from "react-icons/bs"; // Monitor/Display icon (from Bootstrap Icons)
import { FaPaperPlane } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { ArrowLeft } from 'lucide-react';
import { LuWashingMachine } from "react-icons/lu";
import { MdOutlineFireplace } from "react-icons/md";
import { GiFireplace } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbElevator } from "react-icons/tb";
import "../../../public/animations.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApartmentStore } from "../../Store/Data/useApartment.store";
import { useNavigate } from 'react-router-dom';
import RoomGallery from "./RoomGallery";
const features = [
  { label: "واي فاي", icon: <IoWifi className="IconSize" /> },
  { label: "ماء سخن", icon: <MdOutlineFireplace className="IconSize" /> },
  { label: "تلفزيون", icon: <BsDisplay size={24} className="mx-1" /> },
  { label: "أدوات مطبخ", icon: <TbToolsKitchen2 className="IconSize" /> },
  { label: "غسالة", icon: <LuWashingMachine className="IconSize" /> },
  { label: "مدفأة", icon: <GiFireplace className="IconSize" /> },
  { label: "تكييف", icon: <TbAirConditioning className="IconSize" /> },
];
const servicesMap = {
  "WiFi": { label: "واي فاي", icon: <IoWifi className="IconSize" /> },
  "Hot Water": { label: "ماء سخن", icon: <MdOutlineFireplace className="IconSize" /> },
  "TV": { label: "تلفزيون", icon: <BsDisplay size={24} className="mx-1" /> },
  "Kitchen Tools": { label: "أدوات مطبخ", icon: <TbToolsKitchen2 className="IconSize" /> },
  "Washing Machine": { label: "غسالة", icon: <LuWashingMachine className="IconSize" /> },
  "Fireplace": { label: "مدفأة", icon: <GiFireplace className="IconSize" /> },
  "Air Conditioning": { label: "تكييف", icon: <TbAirConditioning className="IconSize" /> },
};

export default function RoomDetails() {
  const [searchparams] = useSearchParams()
  const id = searchparams.get("id");
  const location = useLocation();
  const { ownerName } = location.state
  const AddFavorite = useApartmentStore(state => state.AddFavorite)
  const AddtoFav = (id: string) => {
    AddFavorite(id);
  }
  type ApartmentData = {
    apartmentDTO: {
      price: number;
      kind: string;
      bedRoomCount: number;
      roomCount: number;
      floor: number;
      location: string;
      isAvailable: boolean;
    };
    categoryWithFacilities: {
      Services: string[];
    };
  };
  const navigate = useNavigate();
  const [data, setdata] = useState<ApartmentData | null>(null);
  const Fetchdata = async (id: string) => {
    try {
      const res = await axios.get(
        `https://darkteam.runasp.net/ApartmentDetailsEndpoint/ApartmentDetails?id=${id}`
      );
      const Data = await res.data.data;
      setdata(Data);
      console.log(Data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      Fetchdata(id);
      console.log("this is the room details page of room with id " + id);
      console.log(ownerName)
      //  console.log( data?.categoryWithFacilities.Services)
    }
  }, [id])
  if (!data) return <p>Loading...</p>;
  // نوع السكن
  const type = data?.apartmentDTO.kind === "Male" ? "أولاد" : "بنات";
  // عدد الغرف
  const bedroomcount = (data?.apartmentDTO.roomCount > 4 || data?.apartmentDTO.roomCount == 0) ? 4 : data?.apartmentDTO.roomCount
  // الطابق
  // Helper function
  const parseFloor = (floorRaw: unknown): string => {
    if (typeof floorRaw !== "string") return "?";

    const trimmed = floorRaw.trim();

    // هل محاطة بعلامات اقتباس مزدوجة؟ مثال: "\"2nd\""
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
      "1st": "الأول",
      "2nd": "الثاني",
      "3rd": "الثالث",
      "4th": "الرابع",
      "5th": "الخامس",
      "6th": "السادس",
      "7th": "السابع",
      "8th": "الثامن",
      "9th": "التاسع",
      "10th": "العاشر",
    };

    return map[floor] || floor;
  };
  const rawFloor = data?.apartmentDTO.floor;
  const floorValue = parseFloor(rawFloor);
  const translatedFloor = translateFloor(floorValue);
  //   العنوان
  const addressMap: { [key: string]: string } = {
    "\"at Giza\"": "دردشة",
    "at Giza": "عمر افندى",
    "123 Main St, Downtown": "قنا الجديدة",
    "456 College Ave": "المساكن",
    "789 Park Lane": "الشئون",
    "321 Arts District": "مدينة العمال",

  };

  return (
    <div className="min-h-screen Page slide-in pt-[100px] px-[24px]">
      <div className="flex items center justify-between mb-[40px]">
        <button
          onClick={() => navigate(-1)}
          className="flex text-base items-center flex-row-reverse gap-2 text-blue-500 hover:text-blue-600"
        >
          العودة للتفاصيل
          <ArrowLeft size={20} />
        </button>
        <h3 className="text-md md:text-lg lg:text-xl font-semibold text-right">
          جوله تصوير
        </h3>
      </div>
      {/* the first section */}
      <div className="flex gap-4 items-center mb-[14px] justify-end">
        <button
          className="flex items-center text-base flex-row-reverse gap-1 text-blue-500 hover:text-blue-600 ">
          <IoShareSocial size={18}/>
          مشاركه
        </button>
        <button
          onClick={() => {
            if (id) AddtoFav(id);
          }}
          className="flex items-center flex-row-reverse gap-1 text-[#212529] hover:text-red-600 dark:text-[#D9D9D9] hover:dark:text-white">
          <FaHeart size={15} />
          حفظ
        </button>
      </div>
      {/* Imgs Section */}
      <div className="rounded-sm shadow-sm">
        <RoomGallery />

        {/* الوصف */}
        <div className="py-4 px-2 text-right dark:bg-[#171515]">
          <p className="text-[#212529] leading-6 font-medium dark:text-[white]">
            {/* {data.apartmentDTO.descripeLocation} */}
          </p>
          <p className="text-base text-[#6C757D] mt-3 dark:text-[#D9D9D9]">
            ضيف · {bedroomcount}غرف · {type} · {addressMap[data?.apartmentDTO.location ?? ""] ?? data?.apartmentDTO.location} · الدور {translatedFloor}
          </p>
          <p className="text-base mt-2 font-medium dark:text-[white]">
            وصف الموقع :{" "}
            <span className="text-[#6C757D] dark:text-[#D9D9D9]">قنا / {addressMap[data?.apartmentDTO.location ?? ""] ?? ""} / شارع أبو علاء</span>
          </p>
        </div>
      </div>

      {/* ما يقدمه السكن */}
      <div className="pt-5 px-3 flex flex-col-reverse gap-y-10 justify-end flex-wrap 
        lg:gap-[60px] lg:flex-row lg:items-start lg:px-8 
        md:flex-row md:items-start md:px-3 
        sm:px-8 items-end">
        {/* Left section */}
        <div className="left dark:bg-[#1D1D1D]
        w-full
        md:max-w-[40%]
        sm:max-[50%] sm:mb-4
        md
        lg:max-w-[35%]
        xl:max-w-[30%]">
          {/* the card */}
          <div className="rounded-xl border p-4 shadow-md space-y-3">
            {data.apartmentDTO.isAvailable ?
              <div className="flex justify-between items-center">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 rounded p-2">
                  متاحة للسكان
                </span>
                <span className="text-[#D32F2F] font-bold text-lg">{data.apartmentDTO.price} ج.م / mo</span>
              </div>
              :
              <div className="flex justify-between items-center">
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 rounded p-2">
                  غير متاحة للسكان
                </span>
                <span className="text-[#D32F2F] font-bold text-lg">{data.apartmentDTO.price} ج.م / mo</span>
              </div>
            }
            <div className="text-right text-sm text-gray-700 dark:text-[#D9D9D9]">
              <div className="flex items-center justify-end gap-2 text-right">
                <p> {addressMap[data?.apartmentDTO.location ?? ""] ?? data?.apartmentDTO.location} - شارع أبو علاء</p>
                <MdOutlineLocationOn className="text-[16px]" />
              </div>
              <div className="flex items-center justify-end gap-2 text-right">
                <p className="mt-1 mb-1">{type}</p>
                <FaRegUser className="text-[15px]" />
              </div>
              <div className="flex items-center justify-end gap-2 text-right">
                <p>الدور {translatedFloor}</p>
                <TbElevator className="text-[16px]" />
              </div>
            </div>

            <div className="border-t pt-[12px] text-center font-semibold rounded-md text-sm mt-4 flex gap-3 flex-wrap justify-end items-center">
              <div className="flex flex-col justify-center items-center text-center bg-blue-400 rounded bg-opacity-15 pl-8 pr-8 py-3">
                <FaBath className="text-[#D32F2F] text-[18px]" />
                <p className="font-bold text-lg">2</p>
                <p className="flex">حمام</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center bg-blue-400 rounded bg-opacity-15 pl-8 pr-8 py-3">
                <MdMeetingRoom className="text-[#D32F2F] text-[18px]" />
                <p className="font-bold text-lg">{bedroomcount}</p>
                <p>غرف</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center bg-blue-400 rounded bg-opacity-15 pl-8 pr-8 py-3">
                <PiStudentBold className="text-[#D32F2F] text-[18px]" />
                <p className="font-bold text-lg">12</p>
                <p>طالب</p>
              </div>
            </div>

            <div className="border-t border-b pt-2 text-right rounded-md">
              <div className="flex items-center justify-end gap-2 text-right mb-2 mt-2">
                <p className="text-sm text-gray-500 dark:text-[#D9D9D9]">مالك العقار</p>
                <FaRegUser className="text-[14px]" />
              </div>
              <div className="flex items-center justify-end mt-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-sm flex flex-col text-right items-end">
                    <p className="font-semibold">{ownerName ?? ""}</p>
                    <p className="text-xs text-gray-500 dark:text-[#D9D9D9]">mahmoudarafa@gmail.com</p>
                    <span className="text-yellow-500 text-sm flex items-center gap-1">
                      <FaStar size={14} /> 3.5
                    </span>
                  </div>
                  <div className="border-2 border-white outline outline-[#D32F2F] rounded-full w-14 h-14">
                    {/* here is the img of the owner */}
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#D32F2F] hover:bg-red-800 text-white py-[10px] rounded-lg flex justify-center items-center gap-2">
              <FaPaperPlane />
              حجز المسكن بالكامل
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="right flex-1 md:w-[50%] sm:w-full flex flex-col gap-4  [align-items:revert]" dir="rtl">
          <h2 className="text-xl md:text-2xl text-right font-semibold">
            ما يقدمه السكن
          </h2>

          <div>
            {Array.isArray(data.categoryWithFacilities.Services) && data.categoryWithFacilities.Services.filter(Boolean).length >= 2 ? (
              <div
                className="grid grid-cols-3 grid-rows-3 
                gap-y-4 gap-x-4
                lg:gap-x-5 lg:gap-y-4 
                md:gap-x-3 md:gap-y-2 
                sm:gap-x-5 sm:gap-y-4"
              >
                {[...new Set(data.categoryWithFacilities.Services)].map((serviceName: string, index) => {
                  const service = servicesMap[serviceName as keyof typeof servicesMap];
                  return service ? (
                    <div key={index} className="flex items-center justify-end gap-2 text-right">
                      {service.icon}
                      <span className="text-sm md:text-base">{service.label}</span>
                    </div>
                  ) : null;
                })}
              </div>
            ) : (
              <div
                className="grid grid-cols-3 grid-rows-3 
                gap-y-4 gap-x-4
                lg:gap-x-10 lg:gap-y-10 
                md:gap-x-10 md:gap-y-10
                sm:gap-x-10 sm:gap-y-10 items-center"
              >
                {features.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-end gap-2 text-right">
                    {item.icon}
                    <h3 className="text-sm md:text-base">{item.label}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* 
          {data.categoryWithFacilities.Services.length > 6 ? <div className="text-center mt-8">
            <Link to="/housing_services" className="border border-black rounded-lg px-4 py-2 text-sm md:text-base">
              عرض كل المميزات ال 10
            </Link>
          </div> : null} */}

        </div>

      </div>

      <hr className="border-t border-gray-300 w-5/6 mx-auto my-8" />
      {/* a place for sleeping */}
      <div className="container mx-auto px-5 py-6">
        <h1 className="text-xl md:text-2xl text-right p-2 font-bold mb-4">
          مكان النوم
        </h1>
        <div className="flex gap-4 overflow-x-auto pb-2 scroll-hide" dir="rtl">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="min-w-[250px] flex-shrink-0">
              <RoomCard />
            </div>
          ))}
        </div>
      </div>

      {/* the owner of house */}
      <div className="bg-gray-200 px-5 py-4 flex items-center gap-4 dark:bg-[#1E1E1E]" dir="rtl">
        <div>
          <img
            src={Room_Photo}
            alt="img"
            className="rounded-full w-16 h-16 md:w-20 md:h-20 object-cover"
          />
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-semibold">محمود محمد عرفه</h1>
          <p className="text-sm md:text-base text-gray-700 dark:text-[#D9D9D9]">صاحب العقار</p>
          <div className="flex items-center gap-1 mt-1">
            <FaStar className="text-yellow-400" size={14} />
            <FaStar className="text-yellow-400" size={14} />
            <FaStar className="text-yellow-400" size={14} />
            {/* Add more stars if needed */}
          </div>
        </div>
      </div>
      {/* قسم التعليقات */}
      <div dir="rtl" className="container mx-auto w-full p-4">
        <h2 className="text-center text-xl font-bold mb-4">
          المراجعه والتعليقات
        </h2>

        {/* No comments yet */}
        <div className="bg-gray-100 text-right p-3 rounded-md text-gray-600 mb-6 dark:bg-[#1E1E1E]">
          لا توجد تعليقات حتي الان، كن اول المتفاعلين علي هذا العقار
        </div>

        {/* Comment Box */}
        <div className="flex flex-col items-end gap-2 w-full md:w-3/4 lg:w-1/2 ml-auto">
          <div className="w-full border rounded-md bg-gray-100 p-2 dark:bg-[#1E1E1E]">
            <input
              type="text"
              placeholder="اكتب تعليقك هنا"
              className="w-full bg-transparent outline-none text-sm text-right placeholder-gray-500"
            />
          </div>
          <div dir="rtl" className="w-full flex items-center justify-center">
            <div className=" flex items-center  p-2">
              {/* Send Icon */}
              <button className="text-red-600 text-xl transform -scale-x-100">
                <FaPaperPlane />
              </button>

              {/* Rating */}
              <div className="flex items-center gap-2 text-sm">
                <span>قيم الحساب</span>
                <div className="text-black flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-300" size={14} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Section (moved out of the fixed height div) */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 py-3 px-5 md:hidden">
        <div className="flex justify-between items-center">
          <div className="text-green-500 font-semibold text-lg">
            6,600 <span className="text-gray-600 text-sm">/ شهر</span>
          </div>
          <button className="MainColorBG text-white rounded-3xl h-10 px-6 font-semibold">
            احجز الان
          </button>
        </div>
      </div> */}
    </div>
  );
}