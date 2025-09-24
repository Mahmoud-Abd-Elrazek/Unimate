import { JSX, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { MdMicrowave, MdBlender, MdLocalDrink } from "react-icons/md";
import { GiGasStove } from "react-icons/gi";
import { TbFridge } from "react-icons/tb";
import { PiCookingPotBold } from "react-icons/pi";
import { LuWashingMachine } from "react-icons/lu";

// خدمة واحدة: أيقونة + اسم + متوفر أو لا
type KitchenService = {
  label: string;
  available: boolean;
  iconKey: string;
};

const iconMap: Record<string, JSX.Element> = {
  cooking: <PiCookingPotBold size={20} />,
  dishwasher: <LuWashingMachine size={20} />,
  stove: <GiGasStove size={20} />,
  microwave: <MdMicrowave size={20} />,
  fridge: <TbFridge size={20} />,
  blender: <MdBlender size={20} />,
  kettle: <MdLocalDrink size={20} />,
};

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
  const [kitchenServices, setKitchenServices] = useState<KitchenService[]>([]);

  useEffect(() => {
    // مثال على جلب البيانات من API
    const fetchData = async () => {
      try {
        const res = await fetch("/api/kitchen-services");
        const data = await res.json();
        setKitchenServices(data);
      } catch (error) {
        console.error("فشل تحميل بيانات المطبخ:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-6" dir="rtl">
      {/* المحتوى الرئيسي */}
      <div className="flex flex-col lg:flex-row gap-6 flex-1">
        {/* القائمة الجانبية */}
        <aside className="w-full lg:w-64">
          <p className="mb-4 font-medium text-gray-500 dark:text-[#D9D9D9]">+12 من الخدمات حتى الآن</p>
          <ul className="space-y-2 text-sm">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className={`p-2 rounded cursor-pointer ${
                  item === "الطعام والمطبخ" ? "bg-gray-100 font-semibold dark:bg-[#515151]" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* محتوى الخدمات */}
        <section className="flex-1 border rounded p-4 sm:p-6">
          <h2 className="text-lg font-semibold mb-4 text-center dark:text-[#BDBDBD]">الطعام والمطبخ</h2>

          {kitchenServices.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-300">جاري تحميل البيانات...</p>
          ) : (
            <ul className="space-y-3">
              {kitchenServices.map((item, index) => (
                <li key={index} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-3">
                    <span className={`text-${item.available ? "green" : "red"}-500`}>
                      {item.available ? <FaCheckCircle /> : <FaPlusCircle />}
                    </span>
                    <span className="text-gray-700 dark:text-[#BDBDBD]">{item.label}</span>
                  </div>
                  <div className="text-xl text-gray-600 dark:text-[#BDBDBD]">
                    {iconMap[item.iconKey] ?? <span>?</span>}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {/* أزرار التنقل */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 px-2 sm:px-4 gap-4 sm:gap-0">
        <Link to="/help" className="text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1">
          <span>مركز المساعدة</span>
          <span className="text-xl">؟</span>
        </Link>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/createpost/step2")}
            className="px-6 py-2 rounded-full bg-gray-100 text-gray-700"
          >
            رجوع
          </button>
          <button
            onClick={() => navigate("/createpost/step4")}
            className="px-6 py-2 rounded-full bg-[#4F4F4F] text-white dark:bg-[#515151] dark:text-white"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
