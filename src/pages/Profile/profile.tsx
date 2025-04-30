import './profile.css';
import { FaPhone, FaEnvelope, FaRegFileAlt, FaUserCircle } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-10">
      <div className="bg-white shadow-md rounded-2xl w-full max-w-6xl grid md:grid-cols-3 gap-6 p-6 md:p-40">
        
        {/* محتوى البيانات */}
        <div className="md:col-span-2 text-right space-y-6">
          <h1 className="text-2xl font-bold">اسم المستخدم</h1>

          <div>
            <h2 className="font-semibold text-gray-700 mb-2">وسائل التواصل</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center justify-end gap-2">
                <span>رقم الهاتف :</span>
                <FaPhone className="text-lg" />
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>البريد الإلكتروني :</span>
                <FaEnvelope className="text-lg" />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-gray-700 mb-2">الوصف</h2>
            <div className="flex gap-2 items-start text-gray-600 text-sm">
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النصوص في أدوات منصة تقابل، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى لإضافة إلى زيادة عدد الحروف التي تولدها الأداة.
              </p>
              <FaRegFileAlt className="w-[50px] h-[40px] text-lg mt-1 h-30" />
            </div>
          </div>
        </div>

        {/* صورة البروفايل */}
        <div className="flex justify-center items-start ml-10 pt-[40px]" >
        <FaUserCircle className="w-48 h-48 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;