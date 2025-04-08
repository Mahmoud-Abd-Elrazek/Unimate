import { useEffect, useRef, useState } from 'react';
import { GoSignIn } from "react-icons/go";
import { IoHomeOutline, IoPersonAddOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

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

    return (
        <div className="fixed inset-0 z-50">
            <div ref={cardRef}
                className={`absolute top-[90px] w-[290px] right-[20px] bg-[white] rounded-lg p-6 shadow-md transition-transform duration-300 ${isVisible ? 'animate-slide-in-left' : 'animate-slide-out-left'}`}>
                <div className="flex flex-col items-end gap-[2px]">

                    <Link to="/SignIn"
                        className='menu-link w-full text-right hover:bg-[#F1F3F4] hover:pr-1 transition-all duration-200 rounded-md'
                        onClick={closeWithAnimation}>
                        تسجيل الدخول <GoSignIn className='IconSize inline my-3 ml-2' />
                    </Link>

                    <Link to="/register"
                        className='menu-link w-full text-right hover:bg-[#F1F3F4] hover:pr-1 transition-all duration-200 rounded-md'
                        onClick={closeWithAnimation}>
                        انشاء حساب جديد <IoPersonAddOutline className='IconSize inline my-3 ml-2' />
                    </Link>

                    <Link to="/SignOut"
                        className='menu-link w-full text-right hover:bg-[#F1F3F4] hover:pr-1 transition-all duration-200 rounded-md'
                        onClick={closeWithAnimation}>
                        unimate اعرض مسكنك على
                        <IoHomeOutline className='IconSize inline my-3 ml-2' />
                    </Link>

                    <Link to="/help"
                        className='menu-link w-full text-right hover:bg-[#F1F3F4] hover:pr-1 transition-all duration-200 rounded-md'
                        onClick={closeWithAnimation}>مركز المساعده <IoIosHelpCircleOutline className='IconSize inline my-3 ml-2' />
                    </Link>

                </div>

            </div>
        </div>
    );
}
