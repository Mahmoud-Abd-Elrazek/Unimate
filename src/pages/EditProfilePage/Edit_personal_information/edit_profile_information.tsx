import { Link } from 'react-router-dom';
import "../../../../public/animations.css";
import { useEffect, useState } from 'react';
import useProfileStore from '../../../Store/Student/useProfile.store';

export default function Edit_profile_information() {

  const {  governorate, address, fname, lname, briefOverView } = useProfileStore()
  const [firstname, setfirstname] = useState(fname||"")
  const [lastname, setlastname] = useState(lname||"")
  const [gov, setgov] = useState(governorate||"")
  const [add, setadd] = useState(address||"")
  const [brief, setbrief] = useState(briefOverView||"")
  const UPdateStudentProfile = useProfileStore(state => state.UPdateStudentProfile)
  // const {DisplayStudentinfo} =useProfileStore()
  const handelchange = () => {
    console.log("update the user profile sucess@", firstname, lastname)
    UPdateStudentProfile(firstname, lastname, gov, add, brief)
    setfirstname(firstname);
    setlastname(lastname);
    setgov(gov);
    setadd(address);
    setbrief(brief);
  }
  // useEffect(() => {
  //   DisplayStudentinfo()
  // }, [DisplayStudentinfo])

  useEffect(() => {
    setfirstname(fname);
    setlastname(lname);
    setgov(governorate);
    setadd(address);
    setbrief(briefOverView);
  }, [fname, lname, governorate, address, briefOverView]);


  return (
    <div dir="rtl" className="container mx-auto px-4 py-6 fade-in">

      <div className="w-full max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <h2 className="text-base md:text-lg font-semibold bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-r-4 border-red-500 w-full md:w-auto">
            تعديل معلومات الملف الشخصي
          </h2>

          <button onClick={handelchange} className="flex items-center gap-2 bg-[#4F4F4F] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            <span className="text-sm">حفظ التعديلات</span>
          </button>
        </div>

        {/* Form */}
        <div className="rounded-lg p-4 sm:p-6 shadow-sm  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">الاسم الاول</label>
                <input
                  type="text"
                  defaultValue={fname}
                  onChange={(e) => setfirstname(e.target.value)}

                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2"

                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">العنوان</label>
                <input
                  type="text"
                  placeholder="الوشاش / الدرب"
                  defaultValue={address}
                  onChange={(e) => setadd(e.target.value)}

                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2"

                />
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">الاسم الاخير</label>
                <input
                  type="text"
                  defaultValue={lname}
                  onChange={(e) => setlastname(e.target.value)}

                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2"

                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">المحافظه</label>
                <input
                  type="text"
                  defaultValue={governorate}
                  onChange={(e) => setgov(e.target.value)}

                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2"

                />
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">نبذة مختصرة</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg  dark:bg-[#171515] focus:outline-none focus:ring-2"
              rows={4}
              placeholder="نبذة مختصرة عنك (مثلاً: اهتماماتك، المهارات)"
              defaultValue={briefOverView}
              onChange={(e) => setbrief(e.target.value)}
            ></textarea>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6 flex justify-end">
          <Link to="/auther/profile">
            <button className="flex items-center gap-2 bg-[#4F4F4F] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm">الرجوع إلى المتصفح الرئيسة</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
