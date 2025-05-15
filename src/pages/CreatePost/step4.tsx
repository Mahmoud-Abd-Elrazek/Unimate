import { MenuItem, Select, TextField } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import {  FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import UploadPhoto from '../../components/UploadPhoto/uploadPhoto';

export default function Step4() {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [roomImage] = useState<File | null>(null);

  return (
    <div dir="rtl" className="px-4 sm:px-6 md:px-8 py-6 space-y-8">
      {/* العنوان */}
      <h2 className="text-lg sm:text-xl font-semibold text-center md:text-right">الغرفة رقم 1</h2>

      {/* صف الاختيارات العلوية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* عدد الأفراد */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-[#BDBDBD]">عدد الأفراد</label>
          <Select fullWidth size="small" defaultValue="" className="dark:bg-[#1E1E1E]">
            <MenuItem value={1}>1</MenuItem>
          </Select>
        </div>

        {/* سعر السرير */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-[#BDBDBD]">سعر السرير للشهر</label>
          <Select fullWidth size="small" defaultValue="" className="dark:bg-[#1E1E1E]">
            <MenuItem value={500}>500</MenuItem>
          </Select>
        </div>

        {/* سعر الغرفة */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-[#BDBDBD]">سعر الغرفة بالكامل للشهر</label>
          <Select fullWidth size="small" defaultValue="" className="dark:bg-[#1E1E1E]">
            <MenuItem value={1000}>1000</MenuItem>
          </Select>
        </div>

        {/* عدد الموجودين */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-[#BDBDBD]">عدد الأفراد الموجودين في الغرفة</label>
          <Select fullWidth size="small" defaultValue="" className="dark:bg-[#1E1E1E]">
            <MenuItem value={1}>1</MenuItem>
          </Select>
        </div>
      </div>

      {/* صف البحث والتحميل والوصف */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-start">
        {/* البحث */}
        <div className="flex flex-col space-y-2">
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
       <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
          {roomImage && (
            <p className="text-xs text-gray-500 dark:text-[#BDBDBD] truncate">{roomImage.name}</p>
          )}
        </div>

        {/* وصف الغرفة */}
        <div className="flex flex-col space-y-2 w-full">
          <label className="text-sm font-medium text-gray-700 dark:text-[#BDBDBD]">وصف للغرفة (اختياري)</label>
          <TextField
            fullWidth
            multiline
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            inputProps={{ maxLength: 30 }}
            className="dark:bg-[#1E1E1E]"
          />
          <div className="text-xs text-gray-400 text-left dark:text-white">{description.length} / 30</div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4 px-2 sm:px-4">
        <Link
          to="/help"
          className="text-gray-500 hover:text-gray-700 dark:text-white transition-colors flex items-center gap-1"
        >
          <span>مركز المساعدة</span>
          <span className="text-xl">؟</span>
        </Link>

        <div className="flex gap-3 flex-wrap justify-center md:justify-end">
          <button
            onClick={() => navigate("/createpost/step3")}
            className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white"
          >
            رجوع
          </button>
          <button
            onClick={() => navigate("/createpost/confirmation")}
            className="px-6 py-2 rounded-full MainColorBG text-white"
          >
            نشر الآن
          </button>
        </div>
      </div>
    </div>
  );
}