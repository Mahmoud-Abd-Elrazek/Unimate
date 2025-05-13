//import React from 'react';
import { Link } from 'react-router-dom';

// import animation file
import "../../../../public/animations.css";
import { useState } from 'react';
import useProfileStore from '../../../Store/useProfileStore';

export default function Edit_profile_information() {
  const [fisrtname,setfirstname]=useState("")
  const [lastname,setlastname]=useState("")
  const [gov,setgov]=useState("")
  const [add,setadd]=useState("")
  const [brief,setbrief]=useState("")
  const UPdateStudentProfile=useProfileStore(state=>state.UPdateStudentProfile)
  const {governorate,address,fname,lname,briefOverView}=useProfileStore()

  const handelchange=()=>{
    console.log("update the user profile sucess@")
    UPdateStudentProfile(fisrtname,lastname,gov,add,brief)
  }

  return (
    <div dir="rtl" className="container mx-auto px-4 py-6 fade-in">

      <div className="max-w-4xl mx-auto">
        {/* Header Section with Button and Title in one line */}
        <div className="flex items-center justify-between ">
          <h2 className="text-g w-[450px] h-[55px] font-semibold bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-r-4 border-red-500">تعديل معلومات الملف الشخصي</h2>

          <button onClick={handelchange} className="flex items-center h-[55px] gap-2 bg-[#4F4F4F] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
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
                <label className="block text-sm font-medium  mb-1">الاسم الاول</label>
                <input
                  type="text"
                  defaultValue={fname}
                  onChange={(e)=>setfirstname(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>
              {/* <div>
                <label className="block text-sm font-medium  mb-1">البلد</label>
                <input
                  type="text"
                  placeholder='مصر'
                  // defaultValue=
                   onChange={(e)=>setcnt(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div> */}
              <div>
                <label className="block text-sm font-medium  mb-1">العنوان</label>
                <input
                  type="text"
                  placeholder="الوشاش / الدرب"
                  defaultValue={address}
                   onChange={(e)=>setadd(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>
            </div>


            {/* Second Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium  mb-1">الاسم الاخير</label>
                <input
                  type="text"
                  defaultValue={lname}
                   onChange={(e)=>setlastname(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium  mb-1">المحافظه</label>
                <input
                  type="text"
                  defaultValue={governorate}
                   onChange={(e)=>setgov(e.target.value)}
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
              defaultValue={briefOverView}
               onChange={(e)=>setbrief(e.target.value)}
            ></textarea>
            {/* <div className="flex justify-start mt-1">
            <span className="text-sm text-gray-500 ltr">0 / 30</span>
            </div> */}
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
  );
}