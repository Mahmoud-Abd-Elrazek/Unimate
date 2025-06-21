// SearchBar.tsx
import { SearchIcon, X } from "lucide-react";
import useApartmentData from '../../../Store/DataApartment/useApartmentData.store';
import { useLocation } from "react-router-dom";
import { toast } from 'sonner';

type Props = {
  onSearchChange?: (value: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearchChange }) => {
  const location = useLocation();
  const showSearchBarPaths = ["/"];
  const shouldShowSearchBar = showSearchBarPaths.includes(location.pathname);

  const {
    Keyword,
    setKeyword,
    setIsSearching,
    fetchByEveryThing,
    Gender,
    capecity,
    LOCATION,
    FromPrice,
    ToPrice
  } = useApartmentData();

  if (!shouldShowSearchBar) return null;

  const handleSearch = () => {
    const noFiltersSelected =
      Gender === 0 &&
      capecity === 0 &&
      LOCATION === -1 &&
      ToPrice === 0 &&
      FromPrice === 0;

    const noKeyword = !Keyword || Keyword.trim() === "";

    if (noFiltersSelected && noKeyword) {
      toast.error("من فضلك اختر فلتر و أدخل كلمة مفتاحية للبحث.");
      return;
    }

    if (noFiltersSelected) {
      toast.error("من فضلك اختر على الأقل فلتر واحد قبل البحث.");
      return;
    }

    if (noKeyword) {
      toast.error("من فضلك أدخل كلمة مفتاحية للبحث.");
      return;
    }

    setIsSearching(true);
    fetchByEveryThing();
    onSearchChange?.(Keyword);
  };

  const clearSearch = () => {
    setKeyword("");
    setIsSearching(false);
    onSearchChange?.("");
  };

  return (
    <div className="relative w-full h-full" dir="rtl">
      <input
      type="search"
      placeholder="ابحث عن مناسب لك"
      value={Keyword}
      onChange={(e) => {
        setKeyword(e.target.value);
      }}
      className="w-full pr-10 pl-10 h-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mainColor focus:border-mainColor transition text-sm"
      />
      {Keyword && (
      <X
        onClick={clearSearch}
        className="cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500 hover:bg-red-600 hover:scale-110 transition-all duration-150"
      />
      )}
      <SearchIcon
      onClick={handleSearch}
      className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7  text-red-400 hover:text-white hover:bg-red-500 rounded-full p-1 transition-all duration-150"
      style={{ boxShadow: "0 2px 8px rgba(255, 0, 0, 0.15)" }}
      />
    </div>
  );
};

export default SearchBar;
