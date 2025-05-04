//import React from 'react';

export default function Edit_profile_information() {
  return (
    <div dir="rtl" className="container mx-auto px-4 py-6">

      <div className="max-w-4xl mx-auto">
        {/* Header Section with Button and Title in one line */}
        <div className="flex items-center justify-between ">
          <h2 className="text-g w-[450px] h-[55px] font-semibold bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-r-4 border-red-500">تعديل معلومات الملف الشخصي</h2>

          <button className="flex items-center h-[55px] gap-2 bg-[#4F4F4F] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            <span className="text-sm">حفظ التعديلات</span>
          </button>
        </div>

        {/* Form */}
        <div className=" rounded-lg p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium  mb-1">الاسم الاخر</label>
                <input
                  type="text"
                  defaultValue="عبدالرازق حمدالله"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium  mb-1">المحافظة</label>
                <select className="w-full px-3 py-2 border border-gray-300  dark:bg-[#171515]  rounded-lg focus:outline-none focus:ring-2 focus:border-transparent appearance-none ">
                  <option>قنا</option>
                </select>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium  mb-1">الاسم الاول</label>
                <input
                  type="text"
                  defaultValue="محمود"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium  mb-1">البلد</label>
                <select className="w-full px-3 py-2 border border-gray-300  dark:bg-[#171515] rounded-lg focus:outline-none focus:ring-2 focus:border-transparent appearance-none ">
                  <option>مصر</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium  mb-1">العنوان</label>
                <input
                  type="text"
                  placeholder="الوشاش / الدرب"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mt-6">
            <label className="block text-sm font-medium  mb-1">نبذة مختصرة</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg dark:bg-[#171515] focus:outline-none focus:ring-2 focus:border-transparent"
              rows={4}
              placeholder="نبذة مختصرة عنك (مثلاً: اهتماماتك، المهارات)"
            ></textarea>
            <div className="flex justify-start mt-1">
              <span className="text-sm text-gray-500 ltr">0 / 30</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6 flex justify-end">
          <button className="flex items-center gap-2 bg-[#4F4F4F] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <svg className="w-5 h-5 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>الرجوع إلى المتصفح الرئيسة</span>
          </button>
        </div>
      </div>
    </div>
  );
}