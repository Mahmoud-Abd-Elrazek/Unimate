<<<<<<< HEAD
import { MdHelpOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
// import Housing_services_Side_Bar from '../../components/Housing_services_Side_Bar/housing_services_Side_Bar';
=======
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { MdKitchen, MdMicrowave, MdBlender, MdLocalDrink } from "react-icons/md";
import { GiGasStove } from "react-icons/gi";
import { TbFridge } from "react-icons/tb";
import { PiCookingPotBold } from "react-icons/pi";
import { LuWashingMachine } from "react-icons/lu";
>>>>>>> f7c57efd8e3c58afd29cd8802ee010cae1cbbce2

const kitchenServices = [
  { label: "مطبخ", icon: <PiCookingPotBold size={20} />, available: false },
  { label: "غسالة أطباق (صواعين)", icon: <LuWashingMachine size={20} />, available: true },
  { label: "بوتجاز", icon: <GiGasStove size={20} />, available: true },
  { label: "مايكرويف", icon: <MdMicrowave size={20} />, available: false },
  { label: "ثلاجة", icon: <TbFridge size={20} />, available: true },
  { label: "خلاط", icon: <MdBlender size={20} />, available: false },
  { label: "غلايه ماء (كاتل)", icon: <MdLocalDrink size={20} />, available: true },
];

const sidebarItems = [
  "الحمام",
  "غرفه النوم ولوازم الغسيل",
  "الطعام والمطبخ",
  "الانترنت والمكتب والمذاكره",
  "الترفيه",
  "التدفئه والتبريد",
  "السلامه والخصوصيه داخل المسكن",
];

const StepThree = () => {
  const navigate = useNavigate();

  return (
<<<<<<< HEAD
    <div style={{ padding: '2rem' }}>
      {/* the sidebar */}
      <div className=" flex justify-end " dir='rtl'>
        {/* side bar */}
        <aside className=" min-h-full bg-[#f4f4f4] w-[250px]">
        <div className=" w-full h-full" style={{ padding: "10px" }}>
            {/* <h3>Sideba r</h3> */}
            <ul className="grid gap-3 mt-1 ">
                <li className="">
                    الحمام
                </li>
                <li className="">
                    الحمام
                </li>
                <li className="">
                    الحمام
                </li>
                <li className="">
                    الحمام
                </li>
                <li className="">
                    الحمام
                </li>
               

              
                
            </ul>
        </div>
        </aside>
        {/* main content */}
        <main className="content w-full h-full">
          heloo world
          <p>Welcome to the step three of the post creation process.</p>
        </main>

      </div>

      {/* buttons */}
      <hr className="border-t border-gray-400 w-5/6 mx-auto my-8" />

      <div className=' flex justify-between items-center mt-5'>
        <div>
          <Link to='/auther/help' className="flex justify-end">
            <span className="">
              <MdHelpOutline className="IconSize" />
            </span>
            المساعده
          </Link>
        </div>
        <div className='flex justify-between items-center w-[15rem] '>
          <button onClick={() => navigate('/createpost/step2')} className='bg-black text-white w-20 h-10 rounded-md'>
            رجوع
          </button>
          <button onClick={() => navigate('/createpost/step4')} className='MainColorBG text-white w-20 h-10 rounded-md'>
            التالى
          </button>
        </div>
      </div>
=======
    <div className="flex flex-col min-h-screen  p-6">
      {/* المحتوى الرئيسي */}
      <div className="flex flex-col md:flex-row gap-6 flex-1">
        {/* القائمة الجانبية */}
        <div className="w-full md:w-64">
          <p className="mb-4 font-medium text-gray-500 dark:text-[#D9D9D9]">+12 من الخدمات حتي الان</p>
          <ul className="space-y-2 text-sm">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className={`p-2 rounded cursor-pointer ${
                  item === "الطعام والمطبخ" ? "bg-gray-100 font-semibold dark:bg-[#757575]" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* محتوى الخدمات */}
        <div className="flex-1  border rounded p-6">
          <h2 className="text-lg font-semibold mb-4 text-center dark:text-[#BDBDBD]">الطعام والمطبخ</h2>
          <ul className="space-y-3">
            {kitchenServices.map((item, index) => (
              <li key={index} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-3">
                  <span className={`text-${item.available ? "green" : "red"}-500`}>
                    {item.available ? <FaCheckCircle /> : <FaPlusCircle />}
                  </span>
                  <span className="text-gray-700 dark:text-[#BDBDBD]">{item.label}</span>
                </div>
                <div className="text-xl text-gray-600 dark:text-[#BDBDBD]">{item.icon}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* أزرار التنقل */}
      <div className="flex justify-between items-center mt-8 border-t pt-4">
        <button
          onClick={() => navigate("/createpost/step2")}
          className="px-6 py-2 rounded-full bg-gray-100 text-gray-700"
        >
          رجوع
        </button>
        <button
          onClick={() => navigate("/createpost/step4")}
          className="px-6 py-2 rounded-full bg-[#4F4F4F] text-white dark:bg-[#757575] dark:text-white"
        >
          التالي
        </button>
      </div>
>>>>>>> f7c57efd8e3c58afd29cd8802ee010cae1cbbce2
    </div>
  );
};

export default StepThree;
