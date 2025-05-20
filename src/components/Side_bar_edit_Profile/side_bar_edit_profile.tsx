import { Link, useLocation } from "react-router-dom";
import { MdOutlineManageHistory } from "react-icons/md";
import { FaUserEdit, FaUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { GiGraduateCap } from "react-icons/gi";

type Props = {
  onLinkClick?: () => void;
};

export default function Side_bar_edit_profile({ onLinkClick }: Props) {
  const location = useLocation();

  const links = [
    {
      to: "/auther/editprofile/editpersonalinfo",
      label: "تعديل معلومات الملف الشخصي ",
      icon: <FaUserEdit className="text-xl" />,
    },
    {
      to: "/auther/editprofile/editcontactinfo",
      label: "تعديل معلومات التواصل",
      icon: <FiEdit className="text-xl" />,
    },
    {
      to: "/auther/editprofile/editAcademicinfo",
      label: "تعديل المعلومات الاكاديميه",
      icon: <GiGraduateCap className="text-xl" />,
    },
    {
      to: "/auther/editprofile/editlogininfo",
      label: "تعديل معلومات تسجيل الدخول",
      icon: <MdOutlineManageHistory className="text-xl" />,
    },
  ];

  return (
    <div className="w-full max-w-sm rounded-2xl  text-right">
      <div className="flex flex-col items-center pt-[35px]">
        <FaUserCircle className="text-7xl text-gray-400 dark:text-gray-600" />
        <h2 className="text-lg font-bold px-[24px] py-[10px] border-b border-gray-300 dark:border-gray-700">محمود عبدالرزاق حمدالله</h2>
      </div>

      {/* <hr className="my-4 border-gray-300 dark:border-gray-700" /> */}

      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              onClick={onLinkClick}
              className={`grid grid-cols-[1fr_auto] items-center p-4 rounded-lg transition-all duration-200 font-semibold ${
                location.pathname === link.to
                  ? "bg-gray-100 dark:bg-gray-800 border-r-4 border-red-500"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <span className="text-sm text-right">{link.label}</span>
              <span className="text-xl">{link.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
