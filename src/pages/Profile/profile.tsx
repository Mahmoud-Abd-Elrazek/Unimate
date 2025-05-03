// import React from 'react';
import { Phone, Mail, FileText, MapPin, GraduationCap } from 'lucide-react';
import { FaUserCircle } from "react-icons/fa";

const UserProfile = () => {
  const role = "Owner"; // This should be replaced with the actual role from your authentication context or state
  return (
    <div>
      { role === "Owner" ?
        <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-10">
          <div className="shadow-md rounded-2xl w-full max-w-6xl grid md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-40 h-[430px]">
            
            {/* محتوى البيانات */}
            <div className="md:col-span-2 text-right space-y-4 sm:space-y-6">
              <h1 className="text-xl sm:text-2xl font-bold">اسم المستخدم</h1>

              <div>
                <h2 className="font-semibold text-[black] font-bold mb-2 dark:text-[white]">وسائل التواصل</h2>
                <ul className="space-y-2 text-gray-600 text-sm dark:text-[#BDBDBD]">
                  <li className="flex items-center justify-end gap-2 dark:text-[#BDBDBD]">
                    <span>رقم الهاتف :</span>
                    <Phone className="text-lg" />
                  </li>
                  <li className="flex items-center justify-end gap-2 dark:text-[#BDBDBD]">
                    <span>البريد الإلكتروني :</span>
                    <Mail className="text-lg" />
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-[black] mb-2 font-bold dark:text-[white]">الوصف</h2>
                <div className="flex gap-2 items-start text-gray-600 text-sm dark:text-[#BDBDBD]">
                  <p className="text-xs sm:text-sm">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النصوص في أدوات منصة تقابل، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى لإضافة إلى زيادة عدد الحروف التي تولدها الأداة.
                  </p>
                  <FileText className="w-[30px] sm:w-[50px] h-[30px] sm:h-[40px] text-lg mt-1" />
                </div>
              </div>
            </div>

            {/* صورة البروفايل */}
            <div className="flex justify-center items-start ml-4 sm:ml-10 pt-[20px] sm:pt-[15px]">
              <FaUserCircle className="w-32 h-32 sm:w-48 sm:h-48 text-gray-400 dark:text-[#BDBDBD]" />
            </div>
          </div>
        </div>
        :
        <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-10">
          <div className="shadow-md rounded-2xl w-full max-w-6xl grid md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-10">
            
            {/* Student Information Content */}
            <div className="md:col-span-2 text-right">
              <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">اسم المستخدم</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="font-semibold text-[black] mb-2 dark:text-[white] font-bold text-sm sm:text-base">وسائل التواصل</h2>
                  <ul className="space-y-2 sm:space-y-3 text-gray-600 text-xs sm:text-sm dark:text-[#BDBDBD]">
                    <li className="flex items-center justify-end gap-2">
                      <span>رقم الهاتف: 01234567890</span>
                      <Phone className="text-base sm:text-lg" />
                    </li>
                    <li className="flex items-center justify-end gap-2">
                      <span>البريد الإلكتروني: user@example.com</span>
                      <Mail className="text-base sm:text-lg" />
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h2 className="font-semibold text-[black] mb-2 dark:text-[white] font-bold text-sm sm:text-base">البيانات الأساسية</h2>
                  <ul className="space-y-2 sm:space-y-3 text-gray-600 text-xs sm:text-sm dark:text-[#BDBDBD]">
                    <li className="flex items-center justify-end gap-2">
                      <span>الرقم القومي: 12345678901234</span>
                      <GraduationCap className="text-base sm:text-lg" />
                    </li>
                    <li className="flex items-center justify-end gap-2">
                      <span>العنوان: القاهرة، مصر</span>
                      <MapPin className="text-base sm:text-lg" />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <h2 className="font-semibold text-[black] font-bold mb-2 dark:text-[white] text-sm sm:text-base">الوصف</h2>
                <div className="flex gap-2 items-start text-gray-600 text-xs sm:text-sm dark:text-[#BDBDBD]">
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النصوص في أدوات منصة تقابل، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى لإضافة إلى زيادة عدد الحروف التي تولدها الأداة.
                  </p>
                  <FileText className="w-[30px] sm:w-[50px] h-[30px] sm:h-[40px] text-base sm:text-lg mt-1" />
                </div>
              </div>
            </div>

            {/* Profile Image and College Info */}
            <div className="flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="relative pt-[10px] sm:pt-[15px]">
                <FaUserCircle className="w-32 h-32 sm:w-48 sm:h-48 rounded-full text-gray-400 dark:text-[#BDBDBD]" strokeWidth={1} />
              </div>
              <div className="text-center space-y-1 sm:space-y-2">
                <div className="flex items-center justify-center gap-2 text-[black] font-bold dark:text-[white] text-sm sm:text-base">
                  <span> ..... طالب في كلية </span>
                </div>
                <div className="flex items-center justify-center gap-2 text-[black] font-bold dark:text-[white] text-sm sm:text-base">
                  <span>..... الفرقة </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default UserProfile;