import { SearchIcon, X } from "lucide-react";
import { useState } from "react";
import useApartmentData from '../../../Store/DataApartment/useApartmentData.store';

type Props = {
  onSearchChange?: (value: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearchChange }) => {
  const { setIsSearching } = useApartmentData();
  const [value, setValue] = useState("");
  const {fetchByEveryThing}=useApartmentData()
  const handleSearch = () => {
    if (value.trim()) {
      setIsSearching(true);
      onSearchChange?.(value);
      fetchByEveryThing() 
    }
  };

  const clearSearch = () => {
    setValue("");
    setIsSearching(false);
    onSearchChange?.(""); 
   
  };

  return (
    <div className="relative w-full h-full" dir="rtl">
      <input
        type="search"
        placeholder="ابحث عن مناسب لك"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      //   onKeyDown={(e) => {
      //     if (e.key === "Enter") handleSearch();
      //   }}
        className="w-full pr-10 pl-10 h-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mainColor focus:border-mainColor transition text-sm"
      />
      {value && (
        <X
          onClick={clearSearch}
          className="cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500"
        />
      )}
      <SearchIcon
        onClick={handleSearch}
        className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-400 hover:bg-red-500 "
      />
    </div>
  );
};

export default SearchBar;
