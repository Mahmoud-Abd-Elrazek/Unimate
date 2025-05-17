import { useEffect, useRef, useState } from 'react';
import { GoSignIn } from "react-icons/go";
import { IoHomeOutline, IoPersonAddOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuthStore from '../../Store/Auth/Auth.store';
interface MenuCardProps {
    setIsOpen: (isOpen: boolean) => void;
}

export default function MenuCard({ setIsOpen }: MenuCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true); // for animation class

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
                closeWithAnimation();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });

    // Close with animation
    const closeWithAnimation = () => {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 300); // match the animation duration
    };
    const Role = useAuthStore((state) => state.role);
    // console.log("Role value:", Role);

    return (
        <div className="fixed inset-0 z-50">
            <div ref={cardRef}
                className={`
                    absolute top-[80px] w-[270px] right-[0px] 
                    pr-[24px] pt-[12px] pb-[12px] pl-[12px]
                    transition-transform duration-300
                    ${isVisible ? 'animate-slide-in-left' : 'animate-slide-out-left'} 
                    rounded-md rounded-tl-none rounded-tr-none 
                    shadow-lg 
                    bg-[#f8fafc]
                    dark:bg-[#151d30]`}>

                <div className="flex flex-col items-end gap-[2px]">
                    {Role !== null &&
                        <Link to="/auther"
                            className='menu-link w-full 
                            flex items-center justify-end 
                            hover:bg-[#F1F3F4] dark:hover:bg-[#1E293B] hover:pr-1 transition-all duration-200 
                            rounded-md 
                            text-[15px]
                            dark:text-[#f8fafc] text-[#0f1729]'
                            onClick={closeWithAnimation}>
                            عرض الملف الشخصى<GoSignIn className='inline my-3 ml-2 text-[18px] ' />
                        </Link>
                    }
                    {Role == null &&
                        <Link to="/SignIn"
                            className='menu-link w-full 
                            flex items-center justify-end 
                            hover:bg-[#F1F3F4] dark:hover:bg-[#1E293B] hover:pr-1 transition-all duration-200 
                            rounded-md 
                            text-[15px]
                            dark:text-[#f8fafc] text-[#0f1729]'
                            onClick={closeWithAnimation}>
                            تسجيل الدخول <GoSignIn className='inline my-3 ml-2 text-[18px]' />
                        </Link>
                    }
                    {Role == null &&
                        <Link to="/register"
                            className='menu-link w-full 
                            flex items-center justify-end 
                            hover:bg-[#F1F3F4] dark:hover:bg-[#1E293B] hover:pr-1 transition-all duration-200 
                            rounded-md 
                            text-[15px]
                            dark:text-[#f8fafc] text-[#0f1729]'
                            onClick={closeWithAnimation}>
                            انشاء حساب جديد <IoPersonAddOutline className='text-[18px] inline my-3 ml-2' />
                        </Link>
                    }

                    {Role === "Owner" && (
                        <Link to="/createpost"
                            className='menu-link w-full 
                            flex items-center justify-end 
                            hover:bg-[#F1F3F4] dark:hover:bg-[#1E293B] hover:pr-1 transition-all duration-200 
                            rounded-md 
                            text-[15px]
                            dark:text-[#f8fafc] text-[#0f1729]'
                            onClick={closeWithAnimation}>
                            unimate اعرض مسكنك على
                            <IoHomeOutline className='text-[18px] inline my-3 ml-2' />
                        </Link>
                    )}


                    <Link to="/help"
                        className='menu-link w-full 
                            flex items-center justify-end 
                            hover:bg-[#F1F3F4] dark:hover:bg-[#1E293B] hover:pr-1 transition-all duration-200 
                            rounded-md 
                            text-[15px]
                            dark:text-[#f8fafc] text-[#0f1729]'
                        onClick={closeWithAnimation}>مركز المساعده <IoIosHelpCircleOutline className='text-[18px] inline my-3 ml-2' />
                    </Link>

                </div>

            </div>
        </div>
    );
}
