import {  MenuItem, Select, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FiUpload, FiSearch } from 'react-icons/fi';

export default function Step4() {
  const navigate = useNavigate();

  return (
    <div dir="rtl" className="px-8 py-6 space-y-8">
      {/* العنوان */}
      <h2 className="text-xl font-semibold">الغرفة رقم 1</h2>

      {/* صف الاختيارات العلوية مع العناوين فوق */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-[#BDBDBD]">عدد الأفراد</label>
          <Select fullWidth size="small" defaultValue="" className='dark:bg-[#1E1E1E]'>
            <MenuItem value={1}>1</MenuItem>
          </Select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-[#BDBDBD]">سعر السرير للشهر</label>
          <Select fullWidth size="small" defaultValue="" className='dark:bg-[#1E1E1E]'>
            <MenuItem value={500}>500</MenuItem>
          </Select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-[#BDBDBD]">سعر الغرفة بالكامل للشهر</label>
          <Select fullWidth size="small" defaultValue="" className='dark:bg-[#1E1E1E]'>
            <MenuItem value={1000}>1000</MenuItem>
          </Select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-[#BDBDBD]">عدد الأفراد الموجودين  في الغرفة</label>
          <Select fullWidth size="small" defaultValue="" className='dark:bg-[#1E1E1E]'>
            <MenuItem value={1}>1</MenuItem>
          </Select>
        </div>
      </div>

      {/* صف البحث والرفع والوصف */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* البحث */}
        <div className="flex flex-col space-y-2 ">
          <label className="text-sm font-medium text-gray-700 dark:text-[#BDBDBD]">ابحث عن الضيف بالرقم القومي من هنا</label>
          <div className="w-full h-[48px] border border-gray-300 rounded-md flex items-center px-4 dark:bg-[#1E1E1E]">
            <FiSearch className="text-gray-500 ml-2 dark:text-[#BDBDBD]" size={20} />
            <input
              type="text"
              placeholder=""
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
            />
          </div>
        </div>

        {/* تحميل صورة */}
        <div className="flex flex-col items-center space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-[#BDBDBD] ">تحميل صورة الغرفة</label>
          <label className="w-[120px] h-[100px] border border-dashed border-gray-400 rounded-md flex flex-col items-center justify-center cursor-pointer dark:bg-[#1E1E1E]">
            <FiUpload className="text-gray-500 mb-1 dark:text-[#BDBDBD]" size={22} />
            <span className="text-xs text-gray-600 text-center dark:text-[#BDBDBD]">رفع</span>
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* وصف الغرفة */}
        <div className="flex flex-col space-y-2 ">
          <label className="text-sm font-medium text-gray-700 dark:text-[#BDBDBD] ">وصف للغرفة (اختياري)</label>
          <TextField
            fullWidth
            multiline
            rows={2}
            inputProps={{ maxLength: 30 }}
            className='dark:bg-[#1E1E1E]'
          />
          <div className="text-xs text-gray-400 text-left dark:text-[white]">0 / 30</div>
        </div>
      </div>

      {/* Navigation Buttons - Updated positions */}
      <div className="flex justify-between items-center mt-8 px-4">
        <button className="text-gray-500 hover:text-gray-700 dark:text-[white] transition-colors flex items-center gap-1">
          <span>مركز المساعدة</span>
          <span className="text-xl">؟</span>
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/createpost/step1")}
            className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 "
          >
            رجوع
          </button>
          <button
            onClick={() => navigate("/createpost/step4")}
            className="px-6 py-2 rounded-full MainColorBG text-white"
          >
            نشر الان
          </button>
        </div>
      </div>
    </div>
  );
};

{/* <button
  onClick={() => navigate("/createpost/step4")}
  className="px-6 py-2 rounded-full MainColorBG text-white"
>
  نشر الان 
</button> */}