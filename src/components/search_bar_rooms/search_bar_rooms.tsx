import { TfiSearch } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import useApartmentData from "../../Store/DataApartment/useApartmentData.store";

interface Funprop {
  placeholderval: string;
}

export default function SearchBar({ placeholderval }: Funprop) {
  // const [isFocused, setIsFocused] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const location = useLocation();
  const showSearchBarPaths = ["/"];
  const shouldShowSearchBar = showSearchBarPaths.includes(location.pathname);
  const [keyword, setKeyword] = useState<string>("");

  const { fetchByKeyword, setIsSearching } = useApartmentData();

  if (!shouldShowSearchBar) return null;

  const handleSearch = async () => {
    if (!keyword.trim()) return;
    setIsSearching(true);
    await fetchByKeyword(keyword);
  };

  const handleClearSearch = () => {
    setIsSearching(false);
    setKeyword("");
    setShowMobileSearch(false);
  };

  const sharedInputStyles = `flex items-center gap-2 px-4 py-2 h-12 md:h-[50px] w-full max-w-[360px] border border-gray-300 dark:border-gray-600 rounded-full shadow transition-all duration-300 bg-white dark:bg-[#495057] focus-within:ring-2 focus-within:ring-mainColor`;

  return (
    <>
      {/* Desktop Search Bar */}
      <div className="hidden md:flex justify-center">
        <div className={sharedInputStyles}>
          {keyword && (
            <button onClick={handleClearSearch} className="text-red-500 text-xl hover:scale-110 transition">
              <IoMdClose />
            </button>
          )}
          <input
            className="flex-1 text-right text-sm bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400"
            placeholder={placeholderval}
            type="text"
            dir="rtl"
            // onFocus={() => setIsFocused(true)}
            // onBlur={() => setIsFocused(false)}
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
          <button onClick={handleSearch} className="text-white bg-mainColor w-9 h-9 rounded-full flex items-center justify-center hover:opacity-90 transition">
            <TfiSearch className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden">
        {!showMobileSearch ? (
          <button
            onClick={() => setShowMobileSearch(true)}
            className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full shadow text-white text-lg"
          >
            <TfiSearch />
          </button>
        ) : (
          <div className={`mt-3 ${sharedInputStyles}`}>
            {keyword && (
              <button onClick={handleClearSearch} className="text-red-500 text-xl hover:scale-110 transition">
                <IoMdClose />
              </button>
            )}
            <input
              className="flex-1 text-right text-sm bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400"
              placeholder={placeholderval}
              type="text"
              dir="rtl"
              autoFocus
              // onFocus={() => setIsFocused(true)}
              // onBlur={() => setIsFocused(false)}
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
            />
            <button onClick={handleSearch} className="text-white bg-mainColor w-8 h-8 rounded-full flex items-center justify-center hover:opacity-90 transition">
              <TfiSearch className="w-[16px] h-[16px]" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
