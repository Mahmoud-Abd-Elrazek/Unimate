import { Link } from "react-router-dom";
import { cn } from "../../lib/utils"; // Updated import path
import { PiStudentFill } from "react-icons/pi";


interface LogoProps {
   className?: string;
   iconSize?: number;
   showText?: boolean;
   textSize?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({
   className,
   iconSize = 24,
   showText = true,
   textSize = "xl",
}: LogoProps) => {
   const textSizeClasses = {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
   };

   return (
      <Link to="/" className={cn("flex items-center gap-2", className)}>
         <div className="relative">
            <PiStudentFill className="text-primary transition-transform duration-300 hover:scale-110"
               size={iconSize} />
            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-uniPurple.light animate-pulse" />
         </div>
         {showText && (
            <span className={cn("font-bold flex text-foreground", textSizeClasses[textSize])}>
               <span className="text-primary">Uni</span>
               <span>Mate</span>
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