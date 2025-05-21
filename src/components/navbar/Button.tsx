import { IoAdd } from "react-icons/io5";

const Button = () => {
   return (
      <button
         className="
        flex items-center justify-center gap-x-1
        btn text-[14px] 
        border-1
        transition duration-300 ease-in-out transform
        fixed right-4 bottom-20 z-[99]
        shadow-md
        bg-[#f8fafc]
        border-[#f8fafc]
        text-darkColor

        hover:shadow-md
        hover:bg-[#f8fafc] 
        hover:border-[#f8fafc] 
        hover:text-mainColor
        hover:scale-110
        
        rounded-full
        w-[55px]
        h-[55px]

        md:border-[#495057]
        md:bg-[#495057]
        md:text-[#f8fafc]
        md:w-auto
        md:h-auto
        md:rounded-md
        md:static md:shadow-md

        md:hover:bg-transparent 
        md:hover:border-[#495057] 
        md:hover:text-[#0f1729]
        md:hover:dark:text-secondary_TXD
        md:hover:dark:border-[#f8fafc]
        md:hover:scale-100
      "
      >
         <span className="hidden md:inline">اضافه مسكن</span>
         <IoAdd className="text-[30px] md:text-[17px]" />
      </button>
   );
};

export default Button;
