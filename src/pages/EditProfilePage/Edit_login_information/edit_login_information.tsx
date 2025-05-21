import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../../public/animations.css";

export default function AccountSettings() {
  const [previewUrlFront, setPreviewUrlFront] = useState<string | null>(null);
  const [previewUrlBack, setPreviewUrlBack] = useState<string | null>(null);

  const handleFrontImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewUrlFront(URL.createObjectURL(file));
    }
  };

  const handleBackImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewUrlBack(URL.createObjectURL(file));
    }
  };

  return (
    <div dir="rtl" className="container mx-auto px-4 py-6 fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-g text-center sm:text-right w-full sm:w-auto font-semibold bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg border-r-4 border-red-500">
            تعديل معلومات تسجيل الدخول
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
                <label className="block text-sm font-medium mb-1">الإيميل</label>
                <input
                  type="email"
                  defaultValue="mahmoudzanitty@gmail.com"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>

              {/* صورة البطاقة */}
              <div className="space-y-3">
                <label className="block text-sm font-medium">تعديل البطاقة الشخصية</label>

                <div className="flex flex-col sm:flex-row gap-6">
                  {/* الجهة الأمامية */}
                  <div className="space-y-2">
                    <div className="w-28 h-28 sm:w-24 sm:h-24 border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center overflow-hidden relative">
                      {previewUrlFront ? (
                        <img src={previewUrlFront} alt="صورة الجهة الأمامية" className="object-cover w-full h-full" />
                      ) : (
                        <span className="text-xs text-gray-500 text-center px-2">اضغط لاختيار صورة</span>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFrontImageChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                    <label className="block text-sm font-medium text-center">الجهة الأمامية</label>
                  </div>

                  {/* الجهة الخلفية */}
                  <div className="space-y-2">
                    <div className="w-28 h-28 sm:w-24 sm:h-24 border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center overflow-hidden relative">
                      {previewUrlBack ? (
                        <img src={previewUrlBack} alt="صورة الجهة الخلفية" className="object-cover w-full h-full" />
                      ) : (
                        <span className="text-xs text-gray-500 text-center px-2">اضغط لاختيار صورة</span>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleBackImageChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                    <label className="block text-sm font-medium text-center">الجهة الخلفية</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">الرقم القومي</label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="\d{1,14}"
                  maxLength={14}
                  defaultValue="12345678901234"
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
