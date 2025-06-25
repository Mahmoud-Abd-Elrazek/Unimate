import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoPersonOutline } from 'react-icons/io5';
import { CiLogout } from 'react-icons/ci';
import {
  MdFavoriteBorder,
  // MdHelpOutline,
  MdManageAccounts,
  MdOutlineManageHistory,
  MdOutlinePrivacyTip
} from 'react-icons/md';
import { GoHistory } from "react-icons/go";
import { TbHomeCheck } from 'react-icons/tb';
import { FaRegCalendarCheck, FaUserCircle, FaUserEdit } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import useAuthStore from '../../Store/Auth/Auth.store';
import { useprofileOwnerStore } from '../../Store/Owner/useprofileOwner.store';
import useProfileStore from '../../Store/Student/useProfile.store';
import { FiEdit } from 'react-icons/fi';
import { GiGraduateCap } from 'react-icons/gi';
import { IoIosArrowDown } from "react-icons/io";

type SideBarProps = {
  onLinkClick?: () => void;
};

export default function SideBar({ onLinkClick }: SideBarProps) {
  const Role = useAuthStore((state) => state.role);
  const location = useLocation();
  const navigate = useNavigate();

  const studentProfile = useProfileStore();
  const ownerProfile = useprofileOwnerStore();

  let displayFname = Role === 'Owner'
    ? ownerProfile.userName ?? "User"
    : Role === 'Student'
      ? studentProfile.userName ?? "User"
      : "User";

  const commonSettingsChildren = [
    {
      to: "/auther/editpersonalinfo",
      label: "تعديل معلومات الملف الشخصي",
      icon: <FaUserEdit className="text-xl" />,
    },
    {
      to: "/auther/editcontactinfo",
      label: "تعديل معلومات التواصل",
      icon: <FiEdit className="text-xl" />,
    },
    ...(Role?.toLowerCase() !== "owner"
      ? [{
        to: "/auther/editAcademicinfo",
        label: "تعديل المعلومات الأكاديمية",
        icon: <GiGraduateCap className="text-xl" />,
      }]
      : []),
    {
      to: "/auther/editlogininfo",
      label: "تعديل معلومات تسجيل الدخول",
      icon: <MdOutlineManageHistory className="text-xl" />,
    },
  ];

  const studentLinks = [
    { to: '/auther/studentprofile', label: 'عرض الملف الشخصى', icon: IoPersonOutline },
    { label: 'الإعدادات والخصوصية', icon: MdOutlinePrivacyTip, children: commonSettingsChildren },
    { to: '/auther/favorites', label: 'المفضلة', icon: MdFavoriteBorder },
    { to: '/auther/myreservations', label: 'سجل الحجوزات', icon: GoHistory },
    { to: '/logout', label: 'تسجيل الخروج', icon: CiLogout },
  ];

  const ownerLinks = [
    { to: '/auther/ownerprofile', label: 'عرض الملف الشخصى', icon: IoPersonOutline },
    { label: 'الإعدادات والخصوصية', icon: MdOutlinePrivacyTip, children: commonSettingsChildren },
    { to: '/auther/my_real_estate', label: 'عقاراتي', icon: TbHomeCheck },
    { to: '/auther/reservation_requests_Owner', label: 'طلبات الحجز', icon: FaRegCalendarCheck },
    { to: '/auther/myreservations', label: 'إدارة الحجوزات', icon: MdManageAccounts },
    // { to: '/auther/help', label: 'المساعدة', icon: MdHelpOutline },
    { to: '/logout', label: 'تسجيل الخروج', icon: CiLogout },
  ];

  const links = Role === 'Owner' ? ownerLinks : studentLinks;

  const isChildRoute = (children?: any[]) =>
    Array.isArray(children) && children.some(child => location.pathname === child.to);

  const [settingsOpen, setSettingsOpen] = useState(
    isChildRoute(commonSettingsChildren)
  );

  useEffect(() => {
    if (isChildRoute(commonSettingsChildren)) {
      setSettingsOpen(true);
    }
  }, [location.pathname]);

  return (
    <div className="w-full max-w-sm rounded-2xl text-right p-4 shadow-md">
      <div className="flex flex-col items-center pt-2 pb-4 border-b border-gray-300 dark:border-gray-700">
        <FaUserCircle className="text-7xl text-gray-400 dark:text-gray-600 mb-2" />
        <h2 className="text-lg font-bold">{displayFname}</h2>
      </div>

      <ul className="space-y-1 mt-4">
        {links.map((link) => {
          if ('children' in link) {
            const isAnyChildActive = isChildRoute(link.children);

            return (
              <li key={link.label}>
                <button
                  onClick={() => {
                    setSettingsOpen(prev => !prev);
                    if (!settingsOpen) navigate("/auther/editpersonalinfo");
                  }}
                  className={`w-full flex justify-between items-center p-3 rounded-lg text-sm font-medium transition
                    ${isAnyChildActive
                      ? "bg-gray-100 dark:bg-gray-800 border-r-4 border-red-500"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                >
                  <div className="flex items-center gap-2 justify-end">
                    <span>{link.label}</span>
                    <link.icon className="text-lg text-gray-600 dark:text-gray-300" />
                  </div>
                  <IoIosArrowDown
                    className={`transition-transform duration-200 text-gray-500 dark:text-gray-400 ${settingsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {settingsOpen && (
                  <ul className="pr-4 border-r-[2px] border-gray-300 dark:border-gray-700 space-y-1 mt-1">
                    {link.children?.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          onClick={onLinkClick}
                          className={`flex items-center justify-end gap-2 text-sm rounded-md px-3 py-2 transition
                            ${location.pathname === child.to
                              ? "bg-gray-100 dark:bg-gray-700 border-r-4 border-red-500"
                              : "hover:bg-gray-50 dark:hover:bg-gray-800"
                            }`}
                        >
                          <span>{child.label}</span>
                          {child.icon}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          }

          return (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={onLinkClick}
                className={`flex justify-end items-center p-3 rounded-lg transition-all duration-200 text-sm font-medium
                  ${location.pathname === link.to
                    ? "bg-gray-100 dark:bg-gray-800 border-r-4 border-red-500"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
              >
                <span>{link.label}</span>
                <link.icon className="ml-2 text-xl text-gray-600 dark:text-gray-300" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
