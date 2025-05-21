import { Link, useLocation } from 'react-router-dom';
import { IoPersonOutline } from 'react-icons/io5';
import { CiLogout }         from 'react-icons/ci';
import { BiCommentDetail }  from 'react-icons/bi';
import { MdAttachMoney,
         MdFavoriteBorder,
         MdHelpOutline,
         MdManageAccounts,
         MdOutlinePrivacyTip } from 'react-icons/md';
import { GoHistory } from "react-icons/go";
import { TbHomeCheck } from 'react-icons/tb';
import { FaRegCalendarCheck } from 'react-icons/fa';
import useAuthStore from '../../Store/Auth/Auth.store';
type SideBarProps = {
  onLinkClick?: () => void;
};
export default function SideBar({ onLinkClick }: SideBarProps) {
  const Role = useAuthStore((state) => state.role);
  const location = useLocation();

  const links = Role !== 'Owner'
    ? [
        { to: '/auther/profile', label: 'عرض الملف الشخصى', icon: IoPersonOutline },
        { to: '/auther/editprofile', label: 'الإعدادات والخصوصية', icon: MdOutlinePrivacyTip },
        { to: '/auther/favorites', label: 'المفضلة', icon: MdFavoriteBorder },
        { to: '/auther/myreservations', label: 'سجل الحجوزات', icon: GoHistory},
        { to: '/auther/personalreviews', label: 'المراجعات والتقييمات', icon: BiCommentDetail },
        { to: '/logout', label: 'تسجيل الخروج', icon: CiLogout },
      ]
    : [
        { to: '/auther/profile', label: 'عرض الملف الشخصى', icon: IoPersonOutline },
        { to: '/auther/editprofile', label: 'الإعدادات والخصوصية', icon: MdOutlinePrivacyTip },
        { to: '/auther/my_real_estate', label: 'عقاراتي', icon: TbHomeCheck },
        { to: '/auther/reservation_requests_Owner', label: 'طلبات الحجز', icon: FaRegCalendarCheck },
        { to: '/auther/myreservations', label: 'إدارة الحجوزات', icon: MdManageAccounts },
        { to: '/auther/my_money_transactions', label: 'المعاملات المالية', icon: MdAttachMoney },
        { to: '/auther/personalreviews', label: 'المراجعات والتقييمات', icon: BiCommentDetail },
        { to: '/auther/help', label: 'المساعدة', icon: MdHelpOutline },
        { to: '/logout', label: 'تسجيل الخروج', icon: CiLogout },
      ];

  return (
    <div className="w-full max-w-sm  rounded-2xl  text-right ">
      <div className="flex flex-col items-end py-6">
         <h2 className="text-lg font-bold px-[24px] pb-[30px] py-[10px] border-b border-gray-300 dark:border-gray-700">محمود عبدالرزاق حمدالله</h2>
      </div>

      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              onClick={onLinkClick}
              className={`flex justify-end items-center p-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                location.pathname === link.to
                  ? "bg-gray-100 dark:bg-gray-800 border-r-4 border-red-500"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <span className="text-sm text-right">{link.label}</span>
              <span className="text-xl text-gray-600 dark:text-gray-300">
                <link.icon />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}