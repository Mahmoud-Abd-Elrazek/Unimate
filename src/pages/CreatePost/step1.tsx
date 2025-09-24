import { useNavigate, Link } from 'react-router-dom';
import UploadPhoto from '../../components/UploadPhoto/uploadPhoto';

const StepOne: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6 md:p-8" dir="rtl">
      {/* صور المطبخ والحمام */}
      <div className="flex flex-col md:flex-row md:justify-start md:items-start gap-8">
        {/* المطبخ */}
        <div className="w-full md:w-1/2">
          <h1 className="text-right my-4 text-xl font-bold">صور المطبخ</h1>
          <div className="flex flex-wrap gap-4">
         <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
         <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
          <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
          </div>
        </div>
        {/* الحمام */}
        <div className="w-full md:w-1/2 md:mr-8">
          <h1 className="text-right my-4 text-xl font-bold">صور الحمام</h1>
          <div className="flex flex-wrap gap-4">
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
          </div>
        </div>
      </div>

      {/* صور المدخل والصالة والإضافية */}
      <div className="flex flex-col lg:flex-row justify-between items-start mt-10 gap-8">
        {/* المدخل */}
        <div className="w-full lg:w-1/3">
          <h1 className="text-right my-4 text-xl font-bold">صور المدخل/الشارع الرئيسى</h1>
          <div className="flex flex-wrap gap-4">
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
          </div>
        </div>
        {/* الصالة */}
        <div className="w-full lg:w-1/3">
          <h1 className="text-right my-4 text-xl font-bold">صور الصاله</h1>
          <div className="flex flex-wrap gap-4">
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
          </div>
        </div>
        {/* إضافية */}
        <div className="w-full lg:w-1/3">
          <h1 className="text-right my-4 text-xl font-bold">صور اضافيه</h1>
          <div className="flex flex-wrap gap-4">
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
            <UploadPhoto onFileSelect={(file) => console.log('Selected file:', file)} />
          </div>
        </div>
      </div>
      {/* تنويه */}
      <h1 className="text-gray-500 text-right mt-10 dark:text-white">
        يمكنك اضافة صور الغرف في قسم الغرف في الخطوات التالية
      </h1>

      {/* أزرار التنقل */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 border-t pt-4 gap-4">
        <Link
          to="/help"
          className="text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1"
        >
          <span>مركز المساعدة</span>
          <span className="text-xl">؟</span>
        </Link>
        <button
          onClick={() => navigate("/createpost/step2")}
          className="px-6 py-2 rounded-full bg-[#4F4F4F] text-white dark:bg-[#515151] dark:text-white"
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default StepOne;
