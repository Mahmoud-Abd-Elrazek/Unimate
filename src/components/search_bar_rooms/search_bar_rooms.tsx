import { TfiSearch } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import useApartmentData from "../../Store/DataApartment/useApartmentData.store";
import {toast} from 'sonner'
interface Funprop {
  placeholderval: string;
}

export default function SearchBar({ placeholderval }: Funprop) {

  // const [isFocused, setIsFocused] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const location = useLocation();
  const showSearchBarPaths = ["/"];
  const shouldShowSearchBar = showSearchBarPaths.includes(location.pathname);

  const { Keyword,setKeyword, setIsSearching,fetchByEveryThing,Gender,capecity,Location,FromPrice,ToPrice } = useApartmentData();

  if (!shouldShowSearchBar) return null;

  const handleSearch = async () => {
 

  const noFiltersSelected = Gender === 0 && capecity === 0 && Location === -1 && ToPrice === 0 && FromPrice===0;

  if (noFiltersSelected) {
    toast.error("من فضلك اختر على الأقل فلتر واحد قبل البحث.");
    return;
  }else{

    
    // setKeyword(keyword);
    setIsSearching(true);
    fetchByEveryThing();
    console.log(Gender)
    console.log(capecity)
    console.log(location)
    console.log(ToPrice)
    console.log(FromPrice)
    console.log("helo from search")
  }
};


  const handleClearSearch = () => {
    setIsSearching(false);
    setKeyword("");
    setShowMobileSearch(false);
    // setKeywordState("")
  };

  const sharedInputStyles = `flex items-center gap-2 px-4 py-2 h-12 md:h-[50px] w-full max-w-[360px] border border-gray-300 dark:border-gray-600 rounded-full shadow transition-all duration-300 bg-white dark:bg-[#495057] focus-within:ring-2 focus-within:ring-mainColor`;

 
  return (
    <>
      {/* Desktop Search Bar */}
      <div className="hidden md:flex justify-center">
        <div className={sharedInputStyles}>
          {Keyword && (
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
            value={Keyword}
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
            {Keyword && (
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
              value={Keyword}
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
