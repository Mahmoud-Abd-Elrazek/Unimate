

import { Link } from "react-router-dom";
import {  MdOutlineManageHistory } from "react-icons/md";
import {  FaUserEdit } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { GiGraduateCap } from "react-icons/gi";

export default function Side_bar_edit_profile() {
   
    return (<div>

      

            <div className=" w-full h-full " style={{ padding: "10px" }}>
                {/* <h3>Sideba r</h3> */}
                <ul className="grid gap-3 mt-4 ">
                    <li className="">
                        <Link to='/auther/editprofile/editpersonalinfo' className="flex justify-end">
                            تديل معلومات الملف الشخصى
                            <span className="">
                                <FaUserEdit className="IconSize" />
                            </span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to='/auther/editprofile/editcontactinfo' className="flex justify-end">
                            تعديل معلومات التواصل
                            <span className="">
                                <FiEdit className="IconSize" />
                            </span>
                        </Link>
                    </li>

                    <li className="">
                        <Link to='/auther/editprofile/editAcademicinfo' className="flex justify-end">
                            تعديل المعلومات الاكادميه
                            <span className="">
                                <GiGraduateCap className="IconSize" />
                            </span>
                        </Link>
                    </li>

                    <li className="">
                        <Link to='/auther/editprofile/editlogininfo' className="flex justify-end">
                            تعديل معلومات تسجيل الدخول
                            <span className="">
                                <MdOutlineManageHistory className="IconSize" />
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>

           
    </div>
    )
}
