import { useEffect } from 'react';
import { useprofileOwnerStore } from '../../../Store/Owner/useprofileOwner.store';
// import useAuthStore from "../../../Store/Auth/Auth.store";
import { Phone, Mail, FileText } from 'lucide-react';
import { FaUserCircle } from 'react-icons/fa';
import "../../../../public/animations.css"
// import { useSearchParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import { useSearchParams } from "react-router-dom";
import AuthorLayout from '../AuthorLayout/authorLayout';
export default function OwnerProfile() {

  // const authUserRole = useAuthStore((state) => state.role);
  const { state } = useLocation();
  const gustId = state?.gustId;
  const authUserId = localStorage.getItem("authUserId");
  const isAuthorized = (!gustId || (authUserId === gustId));

  // ================================ Start fetchOwnerProfile ================================

  // ================================ End fetchOwnerProfile ================================

  // ======================================== user data ========================================
  const { getOwnerInfo, userName, phones, email: ownerEmail, briefOverView: ownerBriefOverview } = useprofileOwnerStore();
  useEffect(() => {
    getOwnerInfo();
    // console.log("Owner Profile Data:");
    // console.log(phones)
  }, [getOwnerInfo]);
  // ======================================== user data ========================================
  // if Authorized get owner data
  // else get owner data by using gustId

  return (
    <AuthorLayout isAuthorized={isAuthorized} >
      <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-10 slide-in">
        <div className="shadow-md rounded-2xl w-full max-w-6xl flex flex-col-reverse md:grid md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-40 h-auto md:h-[430px]">

          {/* محتوى البيانات */}
          <div className="md:col-span-2 text-right space-y-4 sm:space-y-6">
            <h1 className="text-xl sm:text-2xl font-bold">{userName}</h1>

            <div>
              <h2 className=" text-[black] font-bold mb-2 dark:text-[white]">وسائل التواصل</h2>
              <ul className="space-y-2 text-gray-600 text-sm dark:text-[#BDBDBD]">
                <li className="flex items-center justify-end gap-2 dark:text-[#BDBDBD]">
                  <span>{phones}: رقم الهاتف </span>
                  <Phone className="text-lg" />
                </li>
                <li className="flex items-center justify-end gap-2 dark:text-[#BDBDBD]">
                  <span>{ownerEmail}: البريد الإلكتروني </span>
                  <Mail className="text-lg" />
                </li>
              </ul>
            </div>
            <div className="mt-4 sm:mt-6">
              <div className="flex items-center justify-end gap-2 mb-2 text-sm sm:text-base text-right">
                <span className="text-gray-400 text-xs sm:text-sm">
                  {ownerBriefOverview || "لا يوجد وصف"}
                </span>
                <h2 className="text-sm sm:text-base dark:text-[#BDBDBD]">: الوصف</h2>
                <FileText className="text-base sm:text-lg w-6 h-6 dark:text-[#BDBDBD]" />
              </div>
            </div>

          </div>

          {/* صورة البروفايل */}
          <div className="flex justify-center items-center pt-4 md:items-start md:ml-4">
            <FaUserCircle className="w-32 h-32 sm:w-48 sm:h-48 text-gray-400 dark:text-[#BDBDBD]" />
          </div>
        </div>
      </div>
    </AuthorLayout>
  )
}