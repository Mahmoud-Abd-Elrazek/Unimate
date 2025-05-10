import { TfiSearch } from "react-icons/tfi";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./search_bar_rooms.css";

interface Funprop {
  placeholderval: string;
}

export default function Search_bar({ placeholderval }: Funprop) {
  const [isFocused, setIsFocused] = useState(false);
  const location = useLocation();
  const showsearchbar = ["/"];
  const shouldshowsearchbar = showsearchbar.includes(location.pathname);

  if (!shouldshowsearchbar) return null;

  return (
    <>
      {/* شريط البحث الكامل - يظهر في الشاشات المتوسطة وأعلى */}
      <div className={`input-container ${isFocused ? "focused" : ""} hidden md:flex`}>
        <input
          className="input-field dark:text-white"
          placeholder={placeholderval}
          type="text"
          dir="rtl"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="search-button">
          <TfiSearch className="search-icon" />
        </div>
      </div>

      {/* أيقونة فقط - تظهر في الشاشات الصغيرة */}
      <div className="md:hidden flex items-center justify-center w-10 h-10 bg-red-500 rounded-full shadow">
        <TfiSearch className="text-white text-lg" />
      </div>
    </>
  );
}
