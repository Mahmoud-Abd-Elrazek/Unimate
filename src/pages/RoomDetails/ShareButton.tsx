import { useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import {
   FaFacebook,
   FaWhatsapp,
   FaXTwitter,
   FaLink,
} 
from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShareButton() {
   const [isOpen, setIsOpen] = useState(false);
   const shareUrl = window.location.href;

   const copyLink = async () => {
      try {
         await navigator.clipboard.writeText(shareUrl);
         // toast.success("تمت إضافة الشقة إلى المفضلة بنجاح");
      } catch {
         toast.error("❌ فشل في نسخ الرابط");
      }
   };

   return (
      <div className="relative inline-block text-right">
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background 
            hover:bg-[#ece3fc] h-9 rounded-md px-3 flex gap-2"
         >
            <IoShareSocial size={18} />
            مشاركه
         </button>

         {isOpen && (
            <div className="p-[16px] absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-10 text-right
            grid gap-2">
               <p className="font-medium mb-1">مشاركه هذا العقار</p>
               <button
                  onClick={copyLink}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-[#ece3fc]   h-10 px-4 py-2 w-full justify-end"
               >
                  نسخ الرابط
                  <FaLink />
               </button>
               <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-[#ece3fc]   h-10 px-4 py-2 w-full justify-end"
               >
                  Facebook
                  مشاركه على
                  <FaFacebook />
               </a>
               <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-[#ece3fc]   h-10 px-4 py-2 w-full justify-end"
               >
                  WhatsApp
                  مشاركه على
                  <FaWhatsapp />
               </a>
               <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-[#ece3fc]   h-10 px-4 py-2 w-full justify-end"
               >
                  Twitter
                  مشاركه على
                  <FaXTwitter />
               </a>
            </div>
         )}
         <ToastContainer
            toastClassName={() =>
               "relative flex p-3 rounded bg-white text-black shadow-lg justify-center items-center transition-all duration-300"
            }
            style={{
               top: "5%",
               left: "50%",
               transform: "translate(-50%, 0)",
               position: "fixed",
               zIndex: 9999,
            }}
            transition={Slide}
         />

      </div>
   );
}
