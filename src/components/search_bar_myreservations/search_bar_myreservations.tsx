import { FaSearch } from "react-icons/fa";
  interface Funprop
  {
      placeholderval:string
  }
  export default function Search_bar_myreservations({placeholderval}:Funprop) {
  
      return (
        <div className="w-full max-w-3xl mx-auto">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder={placeholderval}
            className="w-full rounded-full border border-gray-400 py-2 pl-4 pr-12 text-right placeholder:text-gray-400 focus:outline-none"
            dir="rtl"
          />
          <button
            onClick={() => console.log("send the data!!")}
            className="absolute right-4 text-gray-500"
          >
            <FaSearch />
          </button>
        </div>
      </div>
      );
  }
  
  

