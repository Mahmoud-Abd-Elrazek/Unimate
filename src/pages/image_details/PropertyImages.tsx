import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout } from '../../components/PropertyManagementSystem/ui/Layout';
import { ImageModal } from '../../components/PropertyManagementSystem/ui/ImageModal';
import { ArrowLeft } from 'lucide-react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const groupImages = (images: { imageUrl: string; kind: string }[]) => {
   const grouped: {
      kitchen: string[];
      bathroom: string[];
      livingRoom: string[];
      entrance: string[];
      more: string[];
   } = {
      kitchen: [],
      bathroom: [],
      livingRoom: [],
      entrance: [],
      more: [],
   };

   images.forEach((img) => {
      switch (img.kind) {
         case "KitchenImage":
            grouped.kitchen.push(img.imageUrl);
            break;
         case "BathroomImage":
            grouped.bathroom.push(img.imageUrl);
            break;
         case "LivingRoomImage":
            grouped.livingRoom.push(img.imageUrl);
            break;
         case "OutsideImage":
            grouped.entrance.push(img.imageUrl);
            break;
         default:
            grouped.more.push(img.imageUrl);
            break;
      }
   });

   return grouped;
};


const PropertyImages: React.FC = () => {
   const navigate = useNavigate();
   const [selectedImage, setSelectedImage] = useState<string | null>(null);
   const location = useLocation();
   const { images } = location.state || { images: [] };

   const groupedImages = groupImages(images);

   return (
      <div className='px-[24px] fade-in'>
         <Layout>
            <div className="max-w-6xl mx-auto pt-[100px]" dir='rtl'>
               <div className="flex flex-row-reverse items-center justify-between gap-4 mb-8">
                  <button
                     onClick={() => navigate(-1)}
                     className="items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-[#ece3fc] h-9 rounded-md px-3 flex gap-2"
                  >
                     <ArrowLeft size={20} />
                     العودة للتفاصيل
                  </button>
                  <h1 className="text-2xl font-bold ">صور العقار</h1>
               </div>

               <div className="space-y-12">
                  <section>
                     <h2 className="text-xl font-semibold mb-4 dark:text-secondary_TXD">صور الصالة</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {groupedImages.livingRoom.map((url, index) => (
                           <div
                              key={index}
                              className="aspect-video rounded-md overflow-hidden shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedImage(url)}
                           >
                              <LazyLoadImage
                                 src={url}
                                 alt={`صورة الصالة ${index + 1}`}
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        ))}
                     </div>
                  </section>

                  <section>
                     <h2 className="text-xl font-semibold mb-4 dark:text-secondary_TXD">صور المطبخ</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {groupedImages.kitchen.map((url, index) => (
                           <div
                              key={index}
                              className="aspect-video rounded-md overflow-hidden shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedImage(url)}
                           >
                              <LazyLoadImage
                                 src={url}
                                 alt={`صورة المطبخ ${index + 1}`}
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        ))}
                     </div>
                  </section>

                  <section>
                     <h2 className="text-xl font-semibold mb-4 dark:text-secondary_TXD">صور الحمام</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {groupedImages.bathroom.map((url, index) => (
                           <div
                              key={index}
                              className="aspect-video rounded-md overflow-hidden shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedImage(url)}
                           >
                              <LazyLoadImage
                                 src={url}
                                 alt={`صورة الحمام ${index + 1}`}
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        ))}
                     </div>
                  </section>

                  <section>
                     <h2 className="text-xl font-semibold dark:text-secondary_TXD mb-4">صور المدخل</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {groupedImages.entrance.map((url, index) => (
                           <div
                              key={index}
                              className="aspect-video rounded-md overflow-hidden shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedImage(url)}
                           >
                              <LazyLoadImage
                                 src={url}
                                 alt={`صورة المدخل ${index + 1}`}
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        ))}
                     </div>
                  </section>

                  <section>
                     <h2 className="text-xl font-semibold dark:text-secondary_TXD mb-4">صور اضافيه</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {groupedImages.more.map((url, index) => (
                           <div
                              key={index}
                              className="aspect-video rounded-md overflow-hidden shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedImage(url)}
                           >
                              <LazyLoadImage
                                 src={url}
                                 alt={`صورة اضافيه ${index + 1}`}
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        ))}
                     </div>
                  </section>
               </div>

               {selectedImage && (
                  <ImageModal
                     imageUrl={selectedImage}
                     alt="صورة العقار"
                     onClose={() => setSelectedImage(null)}
                  />
               )}
            </div>
         </Layout>

         <p className='mt-[40px] py-[20px] text-center text-base text-[#777]'>لا يوجد المزيد من الصور في هذا العقار</p>
      </div>
   );
};

export default PropertyImages;