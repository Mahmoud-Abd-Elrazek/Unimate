import { GoSignIn } from "react-icons/go";
import { IoHomeOutline, IoPersonAddOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from '../../assets/Frame 371.png';

interface MenuCardProps {
    setIsOpen: (isOpen: boolean) => void;
}

export default function MenuCard({ setIsOpen }: MenuCardProps) {
   
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
            <div className="bg-white w-[30rem] h-[25rem] rounded-lg p-6 relative shadow-lg">
                {/* Close Button */}
                <button onClick={()=>setIsOpen(false)}
                    className=" text-3xl  text-gray-500 hover:text-gray-700"
                    
                >
                    ✖
                </button>

                <div className="flex flex-col items-end space-y-4 pt-8">
                    <Link to="/SignIn" className='menu-link' >تسجيل الدخول <GoSignIn className='IconSize inline my-3 ml-2' /></Link>
                    <Link to="/register" className='menu-link'>انشاء حساب جديد <IoPersonAddOutline className='IconSize inline my-3 ml-2' /></Link>
                    <div className="flex items-center text-xl">
                    <Link to="/SignOut" className='menu-link '>
                        <img src={Logo} alt="img" className="inline w-[100px] h-[3rem] pb-1.5 mr-1" /> اعرض مسكنك على <IoHomeOutline className='IconSize inline my-3 ml-2' />
                    </Link>
                    </div>
                    <Link to="/help" className='menu-link'>مركز المساعده <IoIosHelpCircleOutline className='IconSize inline my-3 ml-2'/></Link>
                </div>
            </div>
        </div>
    );
}
