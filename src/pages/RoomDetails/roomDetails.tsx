// import React from 'react'
import { IoShareOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { IoWifi } from "react-icons/io5";
import { TbToolsKitchen2,TbAirConditioning } from "react-icons/tb";
import RoomCard from "../../components/RoomCard/roomCard";
import Room_Photo from "../../assets/room_photo.jpg";
import { FaBath, FaStar } from "react-icons/fa";
import { BsDisplay } from "react-icons/bs"; // Monitor/Display icon (from Bootstrap Icons)
import { FaPaperPlane } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { LuWashingMachine } from "react-icons/lu";
import { MdOutlineFireplace } from "react-icons/md";
import { GiFireplace } from "react-icons/gi";
import { Link } from "react-router-dom";

// import animation file
import "../../../public/animations.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export default function RoomDetails() {
  return (
    <div className="min-h-screen Page slide-in">
          <Link to='/' className="flex items-center gap-1 cursor-pointer my-3 ml-3">
            <IoMdArrowRoundBack className="IconSize" />
            <h2 className=" text-sm md:text-base">رجوع</h2>
          </Link>
      {/* the first section */}
      <div className="flex justify-between items-center px-5">
        <div className="flex gap-4">
          <div className="flex items-center gap-1 cursor-pointer">
            <IoShareOutline className="IconSize" />
            <h2 className="underline text-sm md:text-base">مشاركه</h2>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FcLike className="IconSize" />
            <h2 className="underline text-sm md:text-base">حفظ</h2>
          </div>
        </div>
        <h1 className="text-xl md:text-2xl font-semibold text-right">
          جوله تصوير
        </h1>
      </div>
      {/* Imgs Section */}
      <div className="mt-4 bg-white rounded-xl shadow-md overflow-hidden">
        {/* الصور */}
        <div className="flex flex-row-reverse gap-2 p-3 dark:bg-[#171515]">
          {/* الصورة الكبيرة */}
          <div className="flex-1">
            <img
              src="https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp" // الصورة الكبيرة
              alt="Main Room"
              className="w-full h-full max-h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* الصور الجانبية + زر اظهار كل الصور */}
          <div className="w-[30%] flex flex-col gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg"
              alt="Thumb 1"
              className="w-full h-[128px] object-cover rounded-md"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg"
              alt="Thumb 2"
              className="w-full h-[128px] object-cover rounded-md"
            />
            <div className="relative w-full h-[128px]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg"
                alt="Thumb 3"
                className="w-full h-[128px] object-cover rounded-md"
              />
              {/* زر اظهار كل الصور */}
              <Link to='/img_details' className="absolute bottom-3 left-3 bg-red-600/90 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-md transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 3h2v2H3V3zm3 0h2v2H6V3zm3 0h2v2H9V3zm3 0h2v2h-2V3zm3 0h2v2h-2V3zM3 6h2v2H3V6zm3 0h2v2H6V6zm3 0h2v2H9V6zm3 0h2v2h-2V6zm3 0h2v2h-2V6zM3 9h2v2H3V9zm3 0h2v2H6V9zm3 0h2v2H9V9zm3 0h2v2h-2V9zm3 0h2v2h-2V9z" />
                </svg>
                اظهار كل الصور
              </Link>
            </div>
          </div>
        </div>

        {/* الوصف */}
        <div className="px-5 py-4 text-right dark:bg-[#171515]">
          <p className="text-[#212529] leading-6 font-medium dark:text-[white]">
            شقه قريبه من الجامعة، هادئة وبجوار أهالي. تبعد 5 دقائق عن الجامعة
            سيراً على الأقدام. المسكن شامل المياه والغاز فقط لا غير. يُفضّل
            الإقامة لفترة لا تقل عن 6 أشهر.
          </p>
          <p className="text-sm text-[#6C757D] mt-2 dark:text-[#D9D9D9]">
            12 ضيف · 3 غرف · أولاد · الشؤون · الدور الثالث
          </p>
          <p className="text-sm mt-1 font-semibold dark:text-[white]">
            وصف الموقع:{" "}
            <span className="text-[#6C757D] dark:text-[#D9D9D9]">قنا - الشؤون - شارع أبو علاء</span>
          </p>
        </div>
      </div>
      <hr className="border-t border-gray-300 w-5/6 mx-auto my-8" />
      {/* ما يقدمه السكن */}
      <div className="flex justify-between p-5">
        <div className="left dark:bg-[#1D1D1D]">
          <div className="rounded-xl border p-4 w-[320px] shadow-md  space-y-3">
            <div className="flex justify-between items-center">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                متاحة للسكان
              </span>
              <span className="text-[#D32F2F] font-bold text-lg">6,600 ج.م / mo</span>
            </div>

            <div className="text-right text-sm text-gray-700 dark:text-[#D9D9D9]">
              <p>الشؤون - شارع أبو علاء</p>
              <p>اولاد</p>
              <p>الدور الثالث</p>
            </div>

            <div className="grid grid-cols-3 text-center  py-2 rounded-md text-sm">
              <div className="flex flex-col justify-center items-center text-center bg-blue-400 rounded bg-opacity-15 ml-1 p-1">
                <FaBath className="text-[#D32F2F] IconSize" />
                <p className="font-bold text-lg">2</p>
                <p className="flex ">      حمام</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center bg-blue-400 rounded bg-opacity-15 ml-1 p-1">
              <MdMeetingRoom className="text-[#D32F2F] IconSize text-[#D32F2F]" />
              
                <p className="font-bold text-lg">4</p>
                <p>غرف</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center bg-blue-400 rounded bg-opacity-15 ml-1 p-1">
              <PiStudentBold className="text-[#D32F2F] IconSize text-[#D32F2F]" />
                <p className="font-bold text-lg">12</p>
                <p>طالب</p>
              </div>
            </div>

            <div className="border-t pt-2 text-right">
              <p className="text-sm text-gray-500 mb-2 dark:text-[#D9D9D9]">مالك العقار</p>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <p className="font-semibold">محمود محمد عرفه</p>
                  <p className="text-xs text-gray-500 dark:text-[#D9D9D9]">mahmoudarafa@gmail.com</p>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="مالك"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-yellow-500 text-sm flex items-center gap-1">
                    <FaStar size={14} /> 3.5
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#D32F2F] hover:bg-red-800 text-white font-semibold py-2 rounded-lg flex justify-center items-center gap-2">
              <FaPaperPlane />
              حجز المسكن بالكامل
            </button>
          </div>
        </div>
        <div className="right container mx-auto my-10 px-5">
          <h2 className="text-xl md:text-2xl text-right font-semibold mb-5 ">
            ما يقدمه السكن
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-2 text-right w-[195px]">
              <IoWifi className="IconSize" />
              <h3 className="text-sm md:text-base">واى فاى</h3>
            </div>
            <div className="flex items-center justify-center gap-2 text-right">
            <MdOutlineFireplace className="IconSize" />
              <h3 className="text-sm md:text-base">ماء سخن</h3>
            </div>
            <div className="flex items-center justify-center gap-2 text-right">
              <BsDisplay size={24} className="mx-1" />
              <h3 className="text-sm md:text-base">تلفيزيون</h3>
            </div>
            <div className="flex items-center justify-center gap-2 text-right">
              <TbToolsKitchen2 className="IconSize" />
              <h3 className="text-sm md:text-base">أدوات مطبخ</h3>
            </div>
            <div className="flex items-center justify-center gap-2 text-right w-[194px]">
            <LuWashingMachine className="IconSize" />
              <h3 className="text-sm md:text-base">غساله</h3>
            </div>
            <div className="flex items-center justify-center gap-2 text-right w-[192px]">
            <GiFireplace className="IconSize" />
              <h3 className="text-sm md:text-base">مدفأه</h3>
            </div>
            <div className="flex items-center justify-center gap-2 text-right w-[180px]">
            <TbAirConditioning className="IconSize" />
              <h3 className="text-sm md:text-base">تكييف</h3>
            </div>
            {/* Add the remaining features here */}
          </div>
          <div className="text-center mt-8">
            <Link to='/housing_services' className="border border-black rounded-lg px-4 py-2 text-sm md:text-base">
              عرض كل المميزات ال 10
            </Link>
          </div>
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
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 py-3 px-5 md:hidden">
        <div className="flex justify-between items-center">
          <div className="text-green-500 font-semibold text-lg">
            6,600 <span className="text-gray-600 text-sm">/ شهر</span>
          </div>
          <button className="MainColorBG text-white rounded-3xl h-10 px-6 font-semibold">
            احجز الان
          </button>
        </div>
      </div>
    </div>
  );
}