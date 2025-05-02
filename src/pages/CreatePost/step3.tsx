import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { MdKitchen, MdMicrowave, MdBlender, MdLocalDrink } from "react-icons/md";
import { GiGasStove } from "react-icons/gi";
import { TbFridge } from "react-icons/tb";
import { PiCookingPotBold } from "react-icons/pi";
import { LuWashingMachine } from "react-icons/lu";

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
    </div>
  );
};

export default StepThree;
