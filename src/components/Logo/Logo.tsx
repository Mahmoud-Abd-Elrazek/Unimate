import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { PiStudentFill } from "react-icons/pi";
import { IconType } from "react-icons";

interface LogoProps {
   className?: string;
   icon?: IconType;
   iconSize?: number;
   showText?: boolean;
   leftText?: string;
   rightText?: string;
   textSize?: "sm" | "md" | "lg" | "xl";
   to?: string;
}

const Logo = ({
   className,
   icon: Icon = PiStudentFill,
   iconSize = 24,
   showText = true,
   leftText = "Uni",
   rightText = "mate",
   textSize = "xl",
   to = "/",
}: LogoProps) => {
   const textSizeClasses = {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
   };

   return (
      <Link
         to={to}
         className={cn(
            "flex flex-wrap justify-center items-center text-center cursor-pointer",
            className
         )}
      >
         {showText && (
            <span
               className={cn(
                  "font-playwrite text-[24px] sm:text-[28px] dark:text-white",
                  textSizeClasses[textSize]
               )}
            >
               {leftText}
            </span>
         )}
         <Icon
            className="w-9 h-9 text-red-500 transition-transform duration-300 hover:scale-110"
            size={iconSize}
         />
         {showText && (
            <span
               className={cn(
                  "font-playwrite text-[24px] sm:text-[28px] dark:text-white",
                  textSizeClasses[textSize]
               )}
            >
               {rightText}
            </span>
         )}
      </Link>
   );
};

export default Logo;

// Logo
{/* <span className='pr-1 font-playwrite text-[24px] sm:text-[28px]'>Uni</span>
   <PiStudentFill className='w-9 h-9 text-red-500' />
   <span className="font-playwrite text-[24px] sm:text-[28px]">mate</span> */}

{/* Logo */ }