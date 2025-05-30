import { useState } from "react";
import { Link } from "react-router-dom";
import { RiGalleryView2 } from "react-icons/ri";

interface ImageData {
   id: number;
   imageUrl: string;
   kind: string;
}
interface RoomGalleryProps {
   images: ImageData[];
}

// const RoomGallery = () => {
//    const images = [
//       "https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg",
//       "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//    ];
// const getImageTypeLabel = (kind: string) => {
//    const labels: Record<string, string> = {
//       'kitchenImage': 'المطبخ',
//       'BathroomImage': 'الحمام',
//       'OutsideImage': 'الواجهة الخارجية',
//       'LivingRoomImage': 'غرفة المعيشة',
//       'Additional': 'صورة إضافية'
//    };
//    return labels[kind] || kind;
// };
const RoomGallery = ({ images }: RoomGalleryProps) => {
   const [mainImage, setMainImage] = useState(images[0]);

   if (!images || images.length === 0) {
      return (
         <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg">
            <p className="text-gray-500">
               لا توجد صور متاحه لهذا العقار, يمكنك التواصل مع صاحب العقار
            </p>
         </div>
      );
   }

   return (
      <div className="flex flex-col lg:flex-row-reverse gap-1 lg:gap-1">

         <div className="w-full flex-1 overflow-hidden">
            <img
               src={mainImage.imageUrl}
               alt="Main Room"
               className="w-full h-full max-h-[300px] lg:max-h-[400px] object-cover rounded-md "
            />
         </div>

         <div className="flex flex-wrap lg:flex-col gap-1 md:gap-2 lg:gap-1 lg:w-[30%] lg:w-[25%] relative lg:h-[400px] overflow-hidden">
            {images.map((img, idx) => (
               <img
                  key={idx}
                  src={img.imageUrl}
                  alt={`Room Thumbnail ${idx + 1}`}
                  className="w-full h-[110px] object-cover rounded-md cursor-pointer transition-transform hover:scale-[1.02] flex-1
                  opacity-90 hover:opacity-100"
                  onClick={() => setMainImage(img)}
               />
            ))}
            {/* زر إظهار كل الصور */}
            <Link
               to="/img_details"
               state={{ images }}
               className="
               inline-flex items-center justify-center gap-2 
               whitespace-nowrap 
               text-sm font-medium 
               ring-offset-white 
               transition-colors 
               focus-visible:outline-none focus-visible:ring-2 
               focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none 
               disabled:opacity-50 
               text-white h-9 rounded-md px-3 bg-red-600/70 backdrop-blur-sm hover:bg-red-600/90 
               absolute bottom-3 left-3 py-2 shadow-md transition"
            >
               <RiGalleryView2 className="text-sm md:text-base" />
               اظهار كل الصور
            </Link>
         </div>
      </div>
   );
};

export default RoomGallery;
