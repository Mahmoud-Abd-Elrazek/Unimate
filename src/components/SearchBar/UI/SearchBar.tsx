import { SearchIcon } from 'lucide-react';

type Props = {
   onSearchChange?: (value: string) => void;
};

const SearchBarWithFilters: React.FC<Props> = ({ onSearchChange }) => {
   return (
      <div className="relative w-full" dir="rtl">
         <input
            type="search"
            placeholder="ابحث عن مسكن مناسب لك"
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="w-full pr-10 pl-4 h-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mainColor focus:border-mainColor transition duration-100 ease-in-out text-sm"
         />
         <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
   );
};

export default SearchBarWithFilters;