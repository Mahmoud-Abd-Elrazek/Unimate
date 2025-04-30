import { MdHelpOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
// import Housing_services_Side_Bar from '../../components/Housing_services_Side_Bar/housing_services_Side_Bar';

const StepThree: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      {/* the sidebar */}
      <div className=" flex justify-end " dir='rtl'>
        {/* side bar */}
        <aside className=" min-h-full bg-[#f4f4f4] w-[250px]">
        <div className=" w-full h-full" style={{ padding: "10px" }}>
            {/* <h3>Sideba r</h3> */}
            <ul className="grid gap-3 mt-1 ">
                <li className="">
                    الحمام
                </li>
                <li className="">
                    الحمام
                </li>
                <li className="">
                    الحمام
                </li>
                <li className="">
                    الحمام
                </li>
                <li className="">
                    الحمام
                </li>
               

              
                
            </ul>
        </div>
        </aside>
        {/* main content */}
        <main className="content w-full h-full">
          heloo world
          <p>Welcome to the step three of the post creation process.</p>
        </main>

      </div>

      {/* buttons */}
      <hr className="border-t border-gray-400 w-5/6 mx-auto my-8" />

      <div className=' flex justify-between items-center mt-5'>
        <div>
          <Link to='/auther/help' className="flex justify-end">
            <span className="">
              <MdHelpOutline className="IconSize" />
            </span>
            المساعده
          </Link>
        </div>
        <div className='flex justify-between items-center w-[15rem] '>
          <button onClick={() => navigate('/createpost/step2')} className='bg-black text-white w-20 h-10 rounded-md'>
            رجوع
          </button>
          <button onClick={() => navigate('/createpost/step4')} className='MainColorBG text-white w-20 h-10 rounded-md'>
            التالى
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
