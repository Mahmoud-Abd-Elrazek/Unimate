import { useState } from "react";
import { Link } from "react-router-dom";
import { RiGalleryView2 } from "react-icons/ri";

const RoomGallery = () => {
   const images = [
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg",
      "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
   ];

   const [mainImage, setMainImage] = useState(images[0]);

   return (
      <div className="flex flex-col lg:flex-row-reverse gap-1 lg:gap-1">

         <div className="w-full flex-1 overflow-hidden">
            <img
               src={mainImage}
               alt="Main Room"
               className="w-full h-full max-h-[300px] lg:max-h-[380px] object-cover rounded-md "
            />
         </div>

         <div className="flex flex-wrap lg:flex-col gap-1 md:gap-2 lg:gap-1 lg:w-[30%] lg:w-[25%] relative lg:h-[380px] overflow-hidden">
            {images.map((img, idx) => (
               <img
                  key={idx}
                  src={img}
                  alt={`Room Thumbnail ${idx + 1}`}
                  className="w-full h-[110px] object-cover rounded-md cursor-pointer transition-transform hover:scale-[1.02] flex-1
                  opacity-90 hover:opacity-100"
                  onClick={() => setMainImage(img)}
               />
            ))}
            {/* زر إظهار كل الصور */}
            <Link
               to="/img_details"
               className="absolute bottom-3 left-3 bg-red-600/90 hover:bg-red-700/100 text-white text-sm px-4 py-2 rounded-full flex items-center gap-1 shadow-md transition"
            >

               <RiGalleryView2 className="text-sm md:text-base" />
               اظهار كل الصور
            </Link>
         </div>
      </div>
   );
};

export default RoomGallery;
