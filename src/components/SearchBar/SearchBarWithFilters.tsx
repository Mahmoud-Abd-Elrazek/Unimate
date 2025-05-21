import { SlidersHorizontal } from "lucide-react";
import { Button } from './UI/Button'
import SearchBar from './UI/SearchBar'


const SearchBarWithFilters = () => {
  return (
    <div className="w-full flex flex-row-reverse justify-center gap-2 
    h-[40px]
    max-w-[1050px]
    dark:bg-secondary_BGD">
      {/* Search Bar */}
      <SearchBar />

      {/* Filter Button */}
      <Button variant="outline" className="flex gap-2 h-full">
        <SlidersHorizontal className="" />
        <span className="hidden sm:inline">فلتر نتائجك</span>
      </Button>

    </div>
  );
};

export default SearchBarWithFilters;