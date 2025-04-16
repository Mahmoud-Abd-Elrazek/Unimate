// import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { BiCommentDetail } from "react-icons/bi";

import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdHelpOutline, MdOutlinePrivacyTip } from "react-icons/md";
import { GoHistory } from "react-icons/go";

export default function SideBar() {
    return (
        <div  className="min-h-lvh" style={{ width: "250px", backgroundColor: "#f4f4f4", padding: "10px"}}>
            {/* <h3>Sideba r</h3> */}
            <ul className="grid gap-3 mt-4">
                <li className="">
                    <Link to='/auther/profile' className="flex justify-end">
                        عرض الملف الشخصى
                        <span className="">
                            <IoPersonOutline className="IconSize" />
                        </span>
                    </Link>
                </li>
                <li className="">
                    <Link to='/auther/editprofile' className="flex justify-end">
                            الاعدادات والخصوصيه
                        <span className="">
                            <MdOutlinePrivacyTip className="IconSize" />
                        </span>
                    </Link>
                </li>
                <li className="">
                    <Link to='/auther/favorites' className="flex justify-end">
                        المفضلة
                        <span className="">
                            <MdFavoriteBorder className="IconSize" />
                        </span>
                    </Link>
                </li>
              
                <li className="">
                    <Link to='/' className="flex justify-end">
                        سجل الحجوزات
                        <span className="">
                            <GoHistory className="IconSize" />
                        </span>
                    </Link>
                </li>
                <li className="">
                    <Link to='/' className="flex justify-end">
                    المراجعات والتقييمات
                        <span className="">
                            <BiCommentDetail className="IconSize" />
                        </span>
                    </Link>
                </li>
                <li className="">
                    <Link to='/auther/help' className="flex justify-end">
                        المساعده
                        <span className="">
                            <MdHelpOutline className="IconSize" />
                        </span>
                    </Link>
                </li>
                <li className="">
                    <Link to='/' className="flex justify-end">
                            تسجيل الخروج
                        <span className="">
                            <CiLogout className="IconSize" />
                        </span>
                    </Link>
                </li>
            </ul>
        </div>

    )
}
