import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function HostInfoCard() {
   const navigate = useNavigate();
   return (
      <div className="flex justify-between items-center border bg-white shadow-md rounded-2xl p-6 max-w-sm" dir="ltr">
         {/* معلومات التقييمات */}
         <div className="flex flex-col text-center gap-4 text-sm text-gray-700">
            <div>
               <div className="text-xl font-bold">8</div>
               <div>التقييمات</div>
            </div>
            <div>
               <div className="text-xl font-bold flex items-center justify-center gap-1">
                  5.0
                  <Star className="w-4 h-4 fill-gray text-gray" />
               </div>
               <div>التقييم بالنجوم</div>
            </div>

         </div>

         {/* صورة واسم المضيف */}
         <div className="flex flex-col items-center text-center gap-1 cursor-pointer hover:opacity-90"
            title="open account"
            onClick={() => navigate("/auther/profile")} >
            <div className="relative">
               <img
                  src="https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/477087917_552077724531641_8310418652078223006_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2uUol99WkMEQ7kNvwHjWXPM&_nc_oc=AdmeVNF93gXOu5azGolZ4iuPYxAFciM4Ir9s3ZjMaOVRFHZFVvpXQhrd-NVmfKaXuqM&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=DzJbcrittJ7Y35CAd-Iclw&oh=00_AfLWWJEY5ItHx94a45M0K5kikl6jUGphHOBti4Q8T7ON8g&oe=68390498"
                  alt="Host"
                  className="w-24 h-24 rounded-full object-cover"
               />
               <div className="absolute bottom-0 right-0 bg-pink-500 rounded-full p-1" title="verified from UniMate">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                     <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414L9 13.414l4.707-4.707z"
                        clipRule="evenodd"
                     />
                  </svg>
               </div>
            </div>
            <div className="text-lg font-bold">Mahmoud</div>
            <div className="text-sm text-muted-foreground">مالك العقار</div>
         </div>
      </div>
   );
}
