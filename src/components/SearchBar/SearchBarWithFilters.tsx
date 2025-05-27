import { SlidersHorizontal } from "lucide-react";
import { Button } from './UI/Button'
import SearchBar from './UI/SearchBar'

const SearchBarWithFilters = () => {
  return (
    <div className="w-full flex flex-row-reverse justify-center gap-2 h-[40px] max-w-[1050px] dark:bg-secondary_BGD">
      <SearchBar />
<<<<<<< HEAD
      <Button variant="outline" className="flex gap-2 h-full">
        <SlidersHorizontal />
        <span className="hidden sm:inline">فلتر نتائجك</span>
=======

      {/* Filter Button */}
      <Button variant="outline" className="flex gap-2 h-full bg-[#ef4444] text-white">
        <SlidersHorizontal className="" />
        <span className="hidden sm:inline"> ابحث</span>
>>>>>>> d1e77b7308e52e82df293ed00568a045f6725141
      </Button>
    </div>
  );
};

export default SearchBarWithFilters;
