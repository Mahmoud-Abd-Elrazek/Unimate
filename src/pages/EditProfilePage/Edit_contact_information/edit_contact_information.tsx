import { Link } from 'react-router-dom';
import "../../../../public/animations.css";
// import { useEffect, useState } from 'react';
// import useProfileStore from '../../../Store/Student/useProfile.store';
import useAuthStore from '../../../Store/Auth/Auth.store';
import { useprofileOwnerStore } from '../../../Store/Owner/useprofileOwner.store';
import useProfileStore from '../../../Store/Student/useProfile.store';
import { useEffect, useState } from 'react';
export default function Edit_profile_information() {

  // const { governorate, address, fname, lname, briefOverView } = useProfileStore()
  // const [firstname, setfirstname] = useState(fname || "")
  // const [lastname, setlastname] = useState(lname || "")
  // const [gov, setgov] = useState(governorate || "")
  // const [add, setadd] = useState(address || "")
  // const [brief, setbrief] = useState(briefOverView || "")
  // const UPdateStudentProfile = useProfileStore(state => state.UPdateStudentProfile)
  // // const {DisplayStudentinfo} =useProfileStore()
  // const handelchange = () => {
  //   console.log("update the user profile sucess@", firstname, lastname)
  //   UPdateStudentProfile(firstname, lastname, gov, add, brief)
  //   setfirstname(firstname);
  //   setlastname(lastname);
  //   setgov(gov);
  //   setadd(address);
  //   setbrief(brief);
  // }

  // useEffect(() => {
  //   setfirstname(fname);
  //   setlastname(lname);
  //   setgov(governorate);
  //   setadd(address);
  //   setbrief(briefOverView);
  // }, [fname, lname, governorate, address, briefOverView]);
  const Role=useAuthStore((state) => state.role);
   const studentStore = useProfileStore();
   const ownerStore = useprofileOwnerStore();

 
  const [phone, setphone] = useState("");
  const [anthorphone, setanthorphone] = useState("");
  const [whatsappurl,setwhatsappurl]=useState("");
  const [facebookurl,setfacebookurl]=useState("");
  const [errors, setErrors] = useState<{ phone?: string; anthorphone?: string; whatsappurl?: string; facebookurl?: string }>({});

 useEffect(() => {
  const loadData = async () => {
    if (Role === "Owner") {
      await ownerStore.DisplayUpdatedOwnerInfo();
      const { phones, anthorphone, facebookurl, whatsappurl } = useprofileOwnerStore.getState();
      setphone(phones || "");
      setanthorphone(anthorphone || "");
      setwhatsappurl(whatsappurl || "");
      setfacebookurl(facebookurl || "");
    } else {
      await studentStore.DisplayUpdatedStudentinfo();
      const { phones,anthorphone,facebookurl,whatsappurl} = useProfileStore.getState();
      setphone(phones || "");
      setanthorphone(anthorphone || "");
      setwhatsappurl(whatsappurl || "");
      setfacebookurl(facebookurl || "");
    }
  };

  loadData();
}, [Role]);

 const validate = () => {
    const errors: { phone?: string; anthorphone?: string; whatsappurl?: string; facebookurl?: string } = {};
    if (phone.length < 2 || phone.length > 20) {
      errors.phone = "رقم التليفون يجب أن يكون بين 2 و 20 أحرف";
    }
    if (anthorphone.length < 2 || anthorphone.length > 20) {
      errors.anthorphone = "رقم التليفون الآخر يجب أن يكون بين 2 و 20 أحرف";
    }
    if (whatsappurl.length < 40) {
      errors.whatsappurl = "لينك واتساب يجب أن يكون بين 40 أحرف";
    }
    if (facebookurl.length < 30) {
      errors.facebookurl = "رابط فيسبوك يجب ألا يقل عن 30 أحرف";
    }
    return errors;
  };
 const handelchange = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      if (Role === "Owner") {
        ownerStore.UPdateOwnerSocialInfo(phone, anthorphone, whatsappurl, facebookurl);
        console.log("send the edit of owner")
      } else {
        studentStore.UPdateStudentSocialInfo(phone, anthorphone, whatsappurl, facebookurl);
        console.log("send the edit of student")
      }
    }
  };
  return (
    <div dir="rtl" className="container mx-auto px-4 py-6 fade-in">
      <div className="w-full max-w-5xl mx-auto">

        {/* Header & Save */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <h2 className="text-base md:text-lg font-semibold bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-r-4 border-red-500 w-full md:w-auto">
            تعديل معلومات التواصل
          </h2>

          <button
            onClick={handelchange}
            className="flex items-center gap-2 bg-[#4F4F4F] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            <span className="text-sm">حفظ التعديلات</span>
          </button>
        </div>

        {/* Form */}
        <div className="rounded-lg p-4 sm:p-6 shadow-sm ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-right mb-1">رقم التليفون </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10,15}"
                  maxLength={11}
                  placeholder="+20 1000000000"
                  defaultValue={phone}
                  onChange={(e) => setphone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg  focus:outline-none focus:ring-2"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-right mb-1">لينك واتساب</label>
                <input
                  type="text"
                  placeholder="+20 100000000000"
                  defaultValue={whatsappurl}
                  onChange={(e) => setwhatsappurl(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg  focus:outline-none focus:ring-2"
                />
                {errors.whatsappurl && (
                  <p className="text-red-500 text-xs mt-1">{errors.whatsappurl}</p>
                )}
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-right mb-1">رقم تليفون آخر</label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10,15}"
                  maxLength={11}
                  placeholder="+20 1000000000"
                  defaultValue={anthorphone}
                  onChange={(e) => setanthorphone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg  focus:outline-none focus:ring-2"
                />
                {errors.anthorphone && (
                  <p className="text-red-500 text-xs mt-1">{errors.anthorphone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-right mb-1">رابط فيسبوك</label>
                <input
                  type="text"
                  placeholder="+20: 100000000000"
                  defaultValue={facebookurl}
                  onChange={(e) => setfacebookurl(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg  focus:outline-none focus:ring-2"
                />
                {errors.facebookurl && (
                  <p className="text-red-500 text-xs mt-1">{errors.facebookurl}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="my-6 flex justify-end">
          {Role === "Owner" ? (
            <Link to="/auther/ownerprofile">
              <button className="flex items-center gap-2 bg-[#4F4F4F] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>الرجوع إلى الصفحه الرئيسة</span>
              </button>
            </Link>):
            (
              <Link to="/auther/studentprofile">
              <button className="flex items-center gap-2 bg-[#4F4F4F] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>الرجوع إلى الصفحه الرئيسة</span>
              </button>
            </Link>
            )}
          </div>
      </div>
    </div>
  );
}
