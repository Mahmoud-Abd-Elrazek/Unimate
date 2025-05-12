import { TfiSearch } from "react-icons/tfi";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./search_bar_rooms.css";

interface Funprop {
  placeholderval: string;
}

export default function Search_bar({ placeholderval }: Funprop) {
  const [isFocused, setIsFocused] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const location = useLocation();
  const showsearchbar = ["/"];
  const shouldshowsearchbar = showsearchbar.includes(location.pathname);

  if (!shouldshowsearchbar) return null;

  return (
    <>

      <div className="hidden md:block">
        <div className={`input-container ${isFocused ? "focused" : ""}`}>
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
      </div>


      <div className="block md:hidden">
        {!showMobileSearch ? (
          <div
            className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full shadow cursor-pointer"
            onClick={() => setShowMobileSearch(true)}
          >
            <TfiSearch className="text-white text-lg" />
          </div>
        ) : (
          <div className={`input-container ${isFocused ? "focused" : ""}`}>
            <input
              className="input-field dark:text-white"
              placeholder={placeholderval}
              type="text"
              dir="rtl"
              autoFocus
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                setShowMobileSearch(false);
              }}
            />
            <div className="search-button">
              <TfiSearch className="search-icon" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}