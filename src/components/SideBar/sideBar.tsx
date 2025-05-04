// import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { BiCommentDetail } from "react-icons/bi";

import { Link } from "react-router-dom";
import { MdAttachMoney, MdFavoriteBorder, MdHelpOutline, MdManageAccounts, MdOutlinePrivacyTip } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { TbHomeCheck } from "react-icons/tb";
import {  FaRegCalendarCheck } from "react-icons/fa";

export default function SideBar() {
    const Role = "Owner"
    return (<div>

        {Role === "Owner" ?

            <div className=" w-full h-full " style={{  padding: "10px" }}>
                {/* <h3>Sideba r</h3> */}
                <ul className="grid gap-3 mt-4 ">
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
                        <Link to='/auther/myreservations' className="flex justify-end">
                            سجل الحجوزات
                            <span className="">
                                <GoHistory className="IconSize" />
                            </span>
                        </Link>
                    </li>

                    <li className="">
                        <Link to='/auther/personalreviews' className="flex justify-end">
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

        :
            <div className=" w-full h-full" style={{   padding: "10px" }}>
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
                        <Link to='/auther/my_real_estate' className="flex justify-end">
                            العقارات الخاصه بى
                            <span className="">
                                <TbHomeCheck className="IconSize" />
                            </span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to='/auther/reservation_requests_Owner' className="flex justify-end">
                                طلبات الحجز
                            <span className="">
                                <FaRegCalendarCheck className="IconSize" />
                            </span>
                        </Link>
                    </li>

                    <li className="">
                        <Link to='/auther/myreservations' className="flex justify-end">
                            ادارة الحجوزات
                            <span className="">
                                <MdManageAccounts className="IconSize" />
                            </span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to='/auther/my_money_transactions' className="flex justify-end">
                            المعاملات الماليه 
                            <span className="">
                                <MdAttachMoney className="IconSize" />
                            </span>
                        </Link>
                    </li>

                    <li className="">
                        <Link to='/auther/personalreviews' className="flex justify-end">
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

        }
    </div>
    )
}
