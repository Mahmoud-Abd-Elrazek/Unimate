import { Box, MenuItem, Select } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const StepTwo: React.FC = () => {
  const navigate = useNavigate();
  const location = ['دردشة', 'الشؤون', 'التأمين', 'التجنيد', 'المساكن'];

  return (
    <div className="px-4 sm:px-6 md:px-10 py-6" dir="rtl">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-5">
        {/* First Column - الجمهور + مدة الإقامة */}
        <div className="flex flex-col gap-16 w-full lg:w-1/3">
          <div>
            <h1 className="text-xl font-semibold text-right">الجمهور</h1>
            <div className="flex items-center space-x-2">
              <input type="radio" id="سكن اولاد" name="سكن" className="w-5 h-5" />
              <label htmlFor="سكن اولاد" className="m-2 font-medium">سكن اولاد</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" id="سكن بنات" name="سكن" className="w-5 h-5" />
              <label htmlFor="سكن بنات" className="m-2 font-medium">سكن بنات</label>
            </div>
          </div>

          <div>
            <h1 className="text-xl font-semibold text-right">مدة الاقامة</h1>
            <div className="flex items-center space-x-2">
              <input type="radio" id="سنه دراسيه كامله" name="الاقامه" className="w-5 h-5" />
              <label htmlFor="سنه دراسيه كامله" className="m-2 font-medium">سنه دراسيه كاملة</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" id="ترم دراسى كامل" name="الاقامه" className="w-5 h-5" />
              <label htmlFor="ترم دراسى كامل" className="m-2 font-medium">ترم دراسى كامل</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" id="فتره مؤقته قصيرة" name="الاقامه" className="w-5 h-5" />
              <label htmlFor="فتره مؤقته قصيرة" className="m-2 font-medium">فتره مؤقته قصيرة</label>
            </div>
          </div>
        </div>

        {/* Second Column - منطقة وسعر ودور وعدد الغرف */}
        <div className="w-full lg:w-1/3">
          <Box className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">تحديد المنطقة</h1>
            <Select
              fullWidth
              defaultValue=""
              sx={{ mb: 2, height: '2rem' }}
              className="dark:bg-[#1E1E1E]"
            >
              {location.map((loc) => (
                <MenuItem key={loc} value={loc}>
                  {loc}
                </MenuItem>
              ))}
            </Select>

            <h1 className="text-xl font-semibold">سعر المسكن بالكامل في الشهر</h1>
            <input
              type="number"
              placeholder="أدخل السعر"
              className="w-full p-3 border border-gray-300 rounded-lg text-lg text-right focus:border-red-500 focus:ring focus:ring-red-200 h-[2.5rem]"
            />

            <h1 className="text-xl font-semibold">الدور</h1>
            <input
              type="number"
              placeholder="الدور"
              className="w-full p-3 border border-gray-300 rounded-lg text-lg text-right focus:border-red-500 focus:ring focus:ring-red-200 h-[2.5rem]"
            />

            <h1 className="text-xl font-semibold">عدد الغرف</h1>
            <input
              type="number"
              placeholder="عدد الغرف"
              className="w-full p-3 border border-gray-300 rounded-lg text-lg text-right focus:border-red-500 focus:ring focus:ring-red-200 h-[2.5rem]"
            />
          </Box>
        </div>

        {/* Third Column - وصف الموقع والمسكن */}
        <div className="w-full lg:w-1/3 flex flex-col gap-y-8">
          <div className="flex flex-col space-y-2">
            <label htmlFor="description1" className="text-xl font-medium text-gray-700 dark:text-white">
              وصف الموقع
            </label>
            <textarea
              id="description1"
              placeholder="أدخل الوصف هنا..."
              className="p-2 w-full h-[10rem] border border-black rounded-lg text-lg focus:border-transparent dark:bg-[#1E1E1E]"
            ></textarea>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="description2" className="text-xl font-medium text-gray-700 dark:text-white">
              وصف للمسكن
            </label>
            <textarea
              id="description2"
              placeholder="أدخل الوصف هنا..."
              className="p-2 w-full h-[10rem] border border-black rounded-lg text-lg focus:border-transparent dark:bg-[#1E1E1E]"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4 border-t pt-4 px-2">
        <Link
          to="/help"
          className="text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1"
        >
          <span>مركز المساعدة</span>
          <span className="text-xl">؟</span>
        </Link>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/createpost/step1")}
            className="px-6 py-2 rounded-full bg-gray-100 text-gray-700"
          >
            رجوع
          </button>
          <button
            onClick={() => navigate("/createpost/step3")}
            className="px-6 py-2 rounded-full bg-[#4F4F4F] text-white dark:bg-[#515151]"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
