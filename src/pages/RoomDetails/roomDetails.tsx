// import React from 'react'
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { TbToolsKitchen2, TbAirConditioning } from "react-icons/tb";
// import RoomCard from "../../components/RoomCard/roomCard";
import { FaStar } from "react-icons/fa";
import { PiBed } from "react-icons/pi";

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
import ShareButton from "./ShareButton";
import CommentSection from "./CommentSection";
// import CommentCard from "./CommentCard";
import "./scrollBar.css";
import { GrServicePlay } from "react-icons/gr";
import HostInfoCard from "./HostInfoCard"
import RoomsSlider from "./RoomsSlider";
import useAuthStore from "../../Store/Auth/Auth.store";
import GetCommentSection from "./GetCommentSection"
import ErrorBoundary from "./ErrorBoundary"

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
  const role = useAuthStore((state) => state.role);

  const id = searchparams.get("id");
  const location = useLocation();
  const { ownerName } = location.state
  const AddFavorite = useApartmentStore(state => state.AddFavorite)
  const AddtoFav = (id: string) => {
    AddFavorite(id);
  }
  type data = {
    apartmentDTO: {
      price: number;
      kind: string;
      bedRoomCount: number;
      roomCount: number;
      floor: string;
      location: string;
      isAvailable: boolean;
      bookEntireApartment: boolean; // if all room and all bed not booked
      description: string;
      descripeLocation: string;
      id: number;
      isFavorite: boolean;
      gender: string;
      capecity: number;
    };
    categoryWithFacilities: {
      Services: string[];
    };
    images?: { // أضفنا حقل الصور كاختياري
      id: number;
      imageUrl: string;
      kind: string;
    }[];
    sleepPlaces?: Array<{
      bedRequestAvailable: boolean;
      imageRoomUrl: string;
      isFull: boolean;
      numBedNotBooked: number;
      numOfBeds: number;
      pricePerBed: number;
      roomId: number;
      roomRequestAvailable: boolean;
      studentDTOs: {
        collage: string;
        level: string;
        location: string;
      }[];
    }>;
  };

  const navigate = useNavigate();
  const [data, setdata] = useState<data | null>(null);
  const Fetchdata = async (id: string) => {
    try {
      const res = await axios.get(
        `https://darkteam.runasp.net/ApartmentDetailsEndpoint/ApartmentDetails?id=${id}`
      );
      const Data = await res.data.data;
      setdata(Data);
      console.log(Data);
      // Data.apartmentDTO.descripeLocation;
      // console.log(Data.data.descripeLocation)
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

  if (!data)
    return <p>Loading...</p>;

  // ========================== Helper functions ==========================
  const translateFloor = (floor: string): string => {
    const map: Record<string, string> = {
      "first": "الأول",
      "second": "الثاني",
      "third": "الثالث",
      "fourth": "الرابع",
      "fifth": "الخامس",
      "sixth": "السادس",
      "seventh": "السابع",
      "eighth": "الثامن",
      "ninth": "التاسع",
      "tenth": "العاشر",

      "ground": "الأرضي",
    };

    return map[floor] || floor;
  };

  // function to remove double qoutes form string like this ( "hello" => hello )
  const cleanDescription = (str: string) => {
    return str.replace(/^"+|"+$/g, '').replace(/\\/g, '');
  };
  // ========================== Helper functions ==========================

  // init apratment data
  // =========================== START =======================================
  const apartmentDescription = data.apartmentDTO.description ? cleanDescription(data.apartmentDTO.description) : "لا يوجد وصف"
  const apartmentDescriptionLoction = cleanDescription(data.apartmentDTO.descripeLocation);
  const type = data?.apartmentDTO.kind === "Male" ? "أولاد" : "بنات";
  const floor = translateFloor(cleanDescription(data.apartmentDTO.floor));
  const bedroomcount = (data?.apartmentDTO.roomCount > 4 || data?.apartmentDTO.roomCount == 0) ? 4 : data?.apartmentDTO.roomCount
  const numberOfBeds = data.apartmentDTO.bedRoomCount;
  const price = data.apartmentDTO.price;
  const capecity = data.apartmentDTO.capecity;
  const apartmentLocationArea = data.apartmentDTO.location !== "Location" ? data.apartmentDTO.location : "عند الجامعه";
  const isAvailable = data.apartmentDTO.isAvailable;
  const canBookEntireApartment = data.apartmentDTO.bookEntireApartment;
  const apartmentImages = data.images;
  const rooms = data.sleepPlaces;

  // const apartmentId = data.apartmentDTO.id;
  // =========================== END =======================================

  // ====================== Handel Booking ======================
  const handleBookApartment = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(
        "https://darkteam.runasp.net/BookApartmentEndpoint/BookApartment",
        { apartmentId: data?.apartmentDTO.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Booking successful:", response.data);
    }
    catch (error) {
      console.error("Booking failed:", error);
    }
  };
  // ====================== Handel Booking ======================

  return (
    <div className="min-h-screen Page slide-in pt-[100px]  px-[24px]">
      <div className="flex items center justify-between mb-[40px]">
        <button
          onClick={() => navigate(-1)}
          className="items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-[#ece3fc] h-9 rounded-md px-3 flex gap-2"
        >
          <ArrowLeft size={20} />
          رجوع
        </button>
        <h3 className="text-md md:text-lg lg:text-xl font-semibold text-right">
          جوله تصوير
        </h3>
      </div>
      {/* the first section */}
      <div className="flex gap-2 items-center mb-[14px] justify-end">
        <ShareButton />
        <button
          onClick={() => {
            if (id) AddtoFav(id);
          }}
          className="items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex gap-2">
          حفظ
          <FaHeart size={15} />
        </button>
      </div>

      {/* Imgs Section */}
      <div className="rounded-sm shadow-sm">
        <RoomGallery images={apartmentImages || []} />
        <div className="py-4 px-2 text-right dark:bg-[#171515]">
          <p className="text-[#212529] leading-6 font-medium dark:text-[white]">
            {apartmentDescription}
          </p>
          <div className="text-base text-[#6C757D] mt-3 dark:text-[#D9D9D9] flex justify-end items-center gap-2 flex-wrap">
            <p>. {type}</p>
            <p className="flex justify-end gap-1">
              <span>. </span>
              <p>{floor} </p>
              <span>الدور </span>
            </p>
            <p className="flex justify-end gap-1">
              <span>. </span>
              <p>{apartmentLocationArea} </p>
            </p>
            <p className="flex justify-end gap-1">
              <span>. </span>
              <span>غرفه </span>
              <span>{bedroomcount} </span>
            </p>
            <p className="flex justify-end gap-1">
              <span>. </span>
              <span>طلاب </span>
              <span>{capecity} </span>
            </p>
            <p className="flex justify-end gap-1">
              <span>. </span>
              <span>سرير </span>
              <span>{numberOfBeds} </span>
            </p>
            <p className="flex justify-end gap-1">
              <span>. </span>
              <span>طالب </span>
              <span>{bedroomcount} </span>
            </p>
          </div>
          <div className="text-base mt-2 font-medium dark:text-[white]">
            <div className="flex justify-start gap-1 flex-row-reverse">
              <span className="font-semibold">
                | وصف الموقع
              </span>
              <span>
                {apartmentDescriptionLoction}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ما يقدمه السكن */}
      <div className="pt-3 md:pt-5 px-0 md:px-3 flex flex-col-reverse gap-y-10 justify-end flex-wrap 
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
            {isAvailable ?
              <div className="flex justify-between items-center">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 rounded p-2">
                  متاحة للسكان
                </span>
                <div className="text-[#D32F2F] font-bold text-lg flex justify-end gap-1">
                  <span>شهر</span>
                  <span>/ج.م</span>
                  <span>{price}</span>
                </div>
              </div>
              :
              <div className="flex justify-between items-center">
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 rounded p-2">
                  غير متاحة للسكان
                </span>
                <div className="text-[#D32F2F] font-bold text-lg flex justify-end gap-1">
                  <span>شهر</span>
                  <span>/ج.م</span>
                  <span>{price}</span>
                </div>
              </div>
            }
            <div className="text-right text-sm text-gray-700 dark:text-[#D9D9D9]">
              <div className="flex items-center justify-end gap-2 text-right">
                <p>
                  {apartmentLocationArea}
                  <span> / </span>
                  {apartmentDescriptionLoction}
                </p>
                <MdOutlineLocationOn className="text-[16px]" />
              </div>
              <div className="flex items-center justify-end gap-2 text-right">
                <p className="mt-1 mb-1">{type}</p>
                <FaRegUser className="text-[15px]" />
              </div>
              <div className="flex items-center justify-end gap-2 text-right">
                <p>الدور {floor}</p>
                <TbElevator className="text-[16px]" />
              </div>
            </div>

            <div className="border-t pt-[12px] text-center font-semibold rounded-md text-sm mt-4 flex gap-3 flex-wrap justify-end items-center">
              <div className="flex flex-col justify-center items-center text-center bg-blue-400 rounded bg-opacity-15 pl-8 pr-8 py-3">
                <PiBed className="text-[#D32F2F] text-[18px]" />
                <p className="font-bold text-lg">{numberOfBeds}</p>
                <p className="flex">سرير</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center bg-blue-400 rounded bg-opacity-15 pl-8 pr-8 py-3">
                <MdMeetingRoom className="text-[#D32F2F] text-[18px]" />
                <p className="font-bold text-lg">{bedroomcount}</p>
                <p>غرف</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center bg-blue-400 rounded bg-opacity-15 pl-8 pr-8 py-3">
                <PiStudentBold className="text-[#D32F2F] text-[18px]" />
                <p className="font-bold text-lg">{capecity}</p>
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
                      3.5
                      <FaStar size={14} />
                    </span>
                  </div>
                  <div className="border-2 border-white outline outline-[#D32F2F] rounded-full w-14 h-14">
                    {/* here is the img of the owner */}
                  </div>
                </div>
              </div>
            </div>

            {role === "Student" && canBookEntireApartment && isAvailable ? (
              <button
                onClick={handleBookApartment}
                className="w-full bg-[#D32F2F] hover:bg-red-800 text-white py-[10px] rounded-lg flex justify-center items-center gap-2 text-[14px] md:text-[16px]">
                <FaPaperPlane />
                حجز المسكن بالكامل
              </button>
            ) : null}

          </div>
        </div>

        {/* Right section */}
        <div className="right flex-1 md:w-[50%] sm:w-full flex flex-col gap-4  [align-items:revert]" dir="rtl">
          <h2 className="flex gap-2 items-center text-lg md:text-xl text-right font-semibold">
            <GrServicePlay className="text-[16px]" />
            ما يقدمه السكن
          </h2>

          <div>
            {Array.isArray(data.categoryWithFacilities.Services) && data.categoryWithFacilities.Services.filter(Boolean).length >= 2 ? (
              <div
                className="
                grid grid-cols-3 grid-rows-3 
                gap-y-4 gap-x-4
                md:gap-x-3 md:gap-y-2 
                lg:gap-x-5 lg:gap-y-4 
                "
              >
                {[...new Set(data.categoryWithFacilities.Services)].map((serviceName: string, index) => {
                  const service = servicesMap[serviceName as keyof typeof servicesMap];
                  return service ? (
                    <div key={index} className="flex items-center justify-end gap-1 text-right">
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
                  <div key={idx} className="flex items-center justify-start w-fit gap-1 text-right">
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

      {/* a place for sleeping */}
      <div className="mx-auto py-6 border-t mt-4">
        <RoomsSlider rooms={(rooms || []).map(room => ({
          ...room,
          isAvailable: isAvailable,
          apartmentId: data?.apartmentDTO.id
        }))} />
      </div>

      <div className="border-t mt-5 md:px-[50px]">
        <div dir="rtl" className="mt-4 pb-3">
          <h3 className="mb-3 font-semibold text-[18px] flex items-center gap-2">
            <FaRegUser className="text-[16px]" />
            تعرف علي المالك
          </h3>
          <HostInfoCard />
        </div>

        <div dir="rtl" className="w-full">
          {(role === "Student") ? (
            <div className="pb-3 max-w-4xl" dir="rtl">
              <CommentSection apartmentId={data.apartmentDTO.id} />
            </div>
          ) : null}
          <div className="py-4 border-b border-t max-w-4xl overflow-y-auto max-h-96 custom-scrollbar" dir="ltr">
            <div dir="rtl" className="flex flex-col gap-2">
              <ErrorBoundary>
                <GetCommentSection apartmentId={data.apartmentDTO.id} />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-center py-4 text-gray-600 border-t dark:text-secondary_TXD">يمكنك التواصل مع المالك عبر وسائل التوصل الاجتماعي اذا كان هناك تفاصيل غير واضحه</p>
    </div>
  );
}