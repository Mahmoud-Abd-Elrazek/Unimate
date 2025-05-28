import "../../../../public/animations.css";
import { useEffect, useState } from 'react';
import useProfileStore from '../../../Store/Student/useProfile.store';
import { Link } from 'react-router-dom';
import useAuthStore from "../../../Store/Auth/Auth.store";
import { useprofileOwnerStore } from "../../../Store/Owner/useprofileOwner.store";

export default function EditProfileInformation() {
  const Role = useAuthStore((state) => state.role);

  const studentStore = useProfileStore();
  const ownerStore = useprofileOwnerStore();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gov, setGov] = useState("");
  const [add, setAdd] = useState("");
  const [brief, setBrief] = useState("");

  const [errors, setErrors] = useState<{ gov?: string; brief?: string; firstname?: string; lastname?: string }>({});

 useEffect(() => {
  const loadData = async () => {
    if (Role === "Owner") {
      await ownerStore.DisplayUpdatedOwnerInfo();
      const { fname, lname, governomet, address, briefOverView } = useprofileOwnerStore.getState();
      setFirstname(fname || "");
      setLastname(lname || "");
      setGov(governomet || "");
      setAdd(address || "");
      setBrief(briefOverView || "");
    } else {
      await studentStore.DisplayUpdatedStudentinfo();
      const { fname, lname, governorate, address, briefOverView } = useProfileStore.getState();
      setFirstname(fname || "");
      setLastname(lname || "");
      setGov(governorate || "");
      setAdd(address || "");
      setBrief(briefOverView || "");
    }
  };

  loadData();
}, [Role]);



  const validate = () => {
    const errors: { gov?: string; brief?: string; firstname?: string; lastname?: string } = {};
    if (gov.length < 2 || gov.length > 20) {
      errors.gov = "المحافظة يجب أن تكون بين 2 و 20 أحرف";
    }
    if (firstname.length < 2 || firstname.length > 20) {
      errors.firstname = "الاسم الأول يجب أن يكون بين 2 و 20 أحرف";
    }
    if (lastname.length < 2 || lastname.length > 20) {
      errors.lastname = "الاسم الأخير يجب أن يكون بين 2 و 20 أحرف";
    }
    if (brief.length < 10) {
      errors.brief = "النبذة يجب ألا تقل عن 10 أحرف";
    }
    return errors;
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      if (Role === "Owner") {
        ownerStore.UPdateOwnerProfile(firstname, lastname, gov, add, brief);
      } else {
        studentStore.UPdateStudentProfile(firstname, lastname, gov, add, brief);
      }
    }
  };

  return (
    <div dir="rtl" className="container mx-auto px-4 py-6 fade-in">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <h2 className="text-base md:text-lg font-semibold bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-r-4 border-red-500 w-full md:w-auto">
            تعديل معلومات الملف الشخصي
          </h2>

          <button
            onClick={handleSave}
            type="button"
            className="flex items-center gap-2 bg-[#4F4F4F] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            <span className="text-sm">حفظ التعديلات</span>
          </button>
        </div>

        <form onSubmit={handleSave} className="rounded-lg sm:p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">الاسم الاول</label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2"
                />
                {errors.firstname && <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">العنوان</label>
                <input
                  type="text"
                  placeholder="الوشاش / الدرب"
                  value={add}
                  onChange={(e) => setAdd(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">الاسم الاخير</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2"
                />
                {errors.lastname && <p className="text-red-500 text-xs mt-1">{errors.lastname}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">المحافظه</label>
                <input
                  type="text"
                  value={gov}
                  onChange={(e) => setGov(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2"
                />
                {errors.gov && <p className="text-red-500 text-xs mt-1">{errors.gov}</p>}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">نبذة مختصرة</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-[#171515] focus:outline-none focus:ring-2"
              rows={4}
              placeholder="نبذة مختصرة عنك (مثلاً: اهتماماتك، المهارات)"
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
            />
            {errors.brief && <p className="text-red-500 text-xs mt-1">{errors.brief}</p>}
          </div>
        </form>

        <div className="my-6 flex justify-end">
          {Role === "Owner" ? (
            <Link to="/auther/ownerprofile">
              <button className="flex items-center gap-2 bg-[#4F4F4F] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>الرجوع إلى الصفحه الرئيسة</span>
              </button>
            </Link>
          ) : (
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
