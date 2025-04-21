
import { useNavigate } from 'react-router-dom';
import UploadPhoto from '../../components/UploadPhoto/uploadPhoto';
import { Link } from 'react-router-dom';
import { MdHelpOutline } from 'react-icons/md';
const StepOne: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }} >
      {/* the first div the photos of bathroom and the kitchen */}
      <div className=' flex justify-start items-center' >
        {/* the kitchen room div */}
        <div className='' dir='rtl'>
          <h1 className='text-right my-4 text-xl font-bold'>صور المطبخ</h1>
          <div className=' flex  gap-4'>
            <UploadPhoto />
            <UploadPhoto />
            <UploadPhoto />
          </div>
        </div>
        {/* the pathroom div */}
        <div className='mr-24' dir='rtl'>
          <h1 className='text-right my-4 text-xl font-bold'>صور الحمام</h1>
          <div className=' flex  gap-4'>
            <UploadPhoto />
            <UploadPhoto />
            <UploadPhoto />
          </div>
        </div>
      </div>
      {/* the second dev  */}
      <div className=' flex justify-between items-center mt-5' >
        {/* الشارع الرئيسى */}
        <div className='' dir='rtl'>
          <h1 className='text-right my-4 text-xl font-bold'>صور المدخل/الشارع الرئيسى</h1>
          <div className=' flex  gap-4'>
            <UploadPhoto />
            <UploadPhoto />
            <UploadPhoto />
          </div>
        </div>
        {/* الصاله */}
        <div className='' dir='rtl'>
          <h1 className='text-right my-4 text-xl font-bold'>صور الصاله</h1>
          <div className=' flex  gap-4'>
            <UploadPhoto />
            <UploadPhoto />
            <UploadPhoto />
          </div>
        </div>
        {/* صور اضافيه (اختيارى) */}
        <div className='' dir='rtl'>
          <h1 className='text-right my-4 text-xl font-bold'>صور اضافيه</h1>
          <div className=' flex  gap-4'>
            <UploadPhoto />
            <UploadPhoto />
            <UploadPhoto />
          </div>
        </div>

      </div>
      {/* the third div  */}
      <h1 className=' text-gray-500 text-right mt-10' >

      يمكنك اضافة صور الغرف في قسم الغرف في الخطوات التالية
      </h1>
      <hr className="border-t border-gray-400 w-5/6 mx-auto my-8" />
      <div className='mt-10 flex justify-between items-center' >
        <Link to='/auther/help' className="flex justify-end">
          <span className="">
            <MdHelpOutline className="IconSize" />
          </span>
          المساعده
        </Link>
        <button  onClick={() => navigate('/createpost/step2')} className='MainColorBG text-white w-20 h-10 rounded-md'>
          التالى
        </button>
      </div>
    </div>
  );
};

export default StepOne;
