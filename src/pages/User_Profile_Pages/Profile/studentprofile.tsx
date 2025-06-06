// import React from 'react';
import { Phone, Mail, FileText, MapPin, GraduationCap } from 'lucide-react';
import { FaUserCircle } from "react-icons/fa";
import useProfileStore from '../../../Store/Student/useProfile.store';
import { useEffect } from 'react';
// import { useStudentStore } from '../../../Store/Student/Profile.store';
import AuthorLayout from '../AuthorLayout/authorLayout';


const StudentProfile = () => {
  const { GetStudentInfo, userName, email, nationalId, briefOverView, faculty, address, academicYear, governorate, img } = useProfileStore();

  useEffect(() => {    
        GetStudentInfo();
    }, [ GetStudentInfo]);


  
  return (
    <AuthorLayout isAuthorized={true} >
    <div>
        <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-10">
          <div className="shadow-md rounded-2xl w-full max-w-6xl flex flex-col-reverse md:grid md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-10">

            {/* Student Information Content */}
            <div className="md:col-span-2 text-right ">
              <h1 className="text-xl sm:text-xl font-bold mb-4 sm:mb-6">{userName}</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <h2 className=" text-[black] mb-2 dark:text-[white] font-bold text-sm sm:text-base">وسائل التواصل</h2>
                  <ul className="space-y-2 sm:space-y-3 text-gray-600 text-xs sm:text-sm dark:text-[#BDBDBD]">
                    <li className="flex items-center justify-end gap-2">
                      <span>رقم الهاتف : 01234567890</span>
                      <Phone className="text-base sm:text-lg" />
                    </li>
                    <li className="flex items-center justify-end gap-2">
                      <span>{email}: البريد الإلكتروني </span>
                      <Mail className="text-base sm:text-lg" />
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h2 className=" text-[black] mb-2 dark:text-[white] font-bold text-sm sm:text-base">البيانات الأساسية</h2>
                  <ul className="space-y-2 sm:space-y-3 text-gray-600 text-xs sm:text-sm dark:text-[#BDBDBD]">
                    <li className="flex items-center justify-end gap-2">
                      <span>: الرقم القومى {nationalId}</span>
                      <GraduationCap className="text-base sm:text-lg" />
                    </li>
                    <li className="flex items-center justify-end gap-2">
                      <span >: العنوان {governorate} {address} </span>
                      <MapPin className="text-base sm:text-lg" />
                    </li>
                  </ul>
                </div>
              </div>

             <div className="mt-4 sm:mt-6">
                <div className="flex items-center justify-end gap-2 mb-2 text-sm sm:text-base text-right">
                  <span className="text-gray-400 text-xs sm:text-sm">
                    {briefOverView || "لا يوجد وصف"}
                  </span>
                  <h2 className="text-sm sm:text-base dark:text-[#BDBDBD]">: الوصف</h2>
                  <FileText className="text-base sm:text-lg w-5 h-5 dark:text-[#BDBDBD]" />
                </div>
              </div>
            </div>

            {/* Profile Image and College Info */}
            <div className="flex flex-col items-center pt-4 md:pt-0 space-y-3 sm:space-y-4">

              {img != null
                ? <img src={typeof img === "string" ? img : URL.createObjectURL(img)} alt="Profile" />
                : <FaUserCircle className="w-32 h-32 sm:w-48 sm:h-48 text-gray-400 dark:text-[#BDBDBD]" />
              }

              <div className="text-center space-y-1 sm:space-y-2">
                <div className="flex items-center justify-center gap-2 text-[black] font-bold dark:text-[white] text-sm sm:text-base">
                  <span> طالب في كلية  {faculty ?? " حاسبات ومعلومات"}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-[black] font-bold dark:text-[white] text-sm sm:text-base">
                  <span> الفرقة {academicYear}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
    </AuthorLayout>
  );
};

export default StudentProfile;