import { useState } from 'react';
import { Link } from 'react-router-dom';

// import animation file
import "../../../../public/animations.css";

export default function AccountSettings() {
  const [, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div dir="rtl" className="container mx-auto px-4 py-6 fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-g w-[450px] h-[55px] font-semibold bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-r-4 border-red-500">
            تعديل معلومات الملف الشخصي
          </h2>
          <button className="flex items-center gap-2 bg-[#4F4F4F] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <svg className="w-5 h-5 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            <span className="text-sm">حفظ التعديلات</span>
          </button>
        </div>

        {/* Form */}
        <div className="rounded-lg p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">الجامعة </label>
                <input
                  type="text"
                  defaultValue=" جنوب الوادي"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1"> الفرقة</label>
                <input
                  type="text"
                  defaultValue=" الثالثة"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>

              {/* كارنيه الكلية / بطاقة الترشيح */}
              <div className="space-y-2">
                <label className="block text-sm font-medium mb-1">كارنيه الكلية / بطاقة الترشيح</label>

                <div className="w-24 h-24 border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center overflow-hidden">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="صورة البطاقة"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-xs text-gray-500 text-center px-2">اضغط لاختيار صورة</span>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute w-32 h-32 opacity-0 cursor-pointer"
                  />
                </div>
              </div>

            </div>

            {/* Second Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">الكلية</label>
                <input
                  type="text"
                  defaultValue=" حاسبات و معلومات"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">القسم/التخصص(ان وجد)</label>
                <input
                  type="text"
                  defaultValue="علوم الحاسب"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-6 flex justify-end">
          <Link to="/auther/profile">
            <button className="flex items-center gap-2 bg-[#4F4F4F] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>الرجوع إلى المتصفح الرئيسة</span>
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}