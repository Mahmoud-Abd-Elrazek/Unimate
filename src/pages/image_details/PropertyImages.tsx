import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/PropertyManagementSystem/ui/Layout';
import { ImageModal } from '../../components/PropertyManagementSystem/ui/ImageModal';
import { ArrowLeft } from 'lucide-react';

const PropertyImages: React.FC = () => {
   const navigate = useNavigate();
   const [selectedImage, setSelectedImage] = useState<string | null>(null);

   const images = {
      livingRoom: [
         'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
         'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
         'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
      ],
      kitchen: [
         'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
         'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
         'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      ],
      bathroom: [
         'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
         'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg',
         'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg',
      ],
      entrance: [
         'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
         'https://images.pexels.com/photos/1396123/pexels-photo-1396123.jpeg',
      ],
      more:  [
         'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
         'https://images.pexels.com/photos/1396123/pexels-photo-1396123.jpeg',
         'https://images.pexels.com/photos/1396123/pexels-photo-1396123.jpeg',
      ],
   };

   return (
      <div className='px-[24px] fade-in'>
         <Layout>
            <div className="max-w-6xl mx-auto pt-[100px]" dir='rtl'>
               <div className="flex flex-row-reverse items-center justify-between gap-4 mb-8">
                  <button
                     onClick={() => navigate(-1)}
                     className="flex items-center flex-row-reverse gap-2 text-blue-500 hover:text-blue-600"
                  >
                     <ArrowLeft size={20} />
                     العودة للتفاصيل
                  </button>
                  <h1 className="text-2xl font-bold text-gray-800">صور العقار</h1>
               </div>

               <div className="space-y-12">
                  <section>
                     <h2 className="text-xl font-semibold text-gray-800 mb-4">صور الصالة</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.livingRoom.map((url, index) => (
                           <div
                              key={index}
                              className="aspect-video rounded-md overflow-hidden shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedImage(url)}
                           >
                              <img
                                 src={url}
                                 alt={`صورة الصالة ${index + 1}`}
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        ))}
                     </div>
                  </section>

                  <section>
                     <h2 className="text-xl font-semibold text-gray-800 mb-4">صور المطبخ</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.kitchen.map((url, index) => (
                           <div
                              key={index}
                              className="aspect-video rounded-md overflow-hidden shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedImage(url)}
                           >
                              <img
                                 src={url}
                                 alt={`صورة المطبخ ${index + 1}`}
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        ))}
                     </div>
                  </section>

                  <section>
                     <h2 className="text-xl font-semibold text-gray-800 mb-4">صور الحمام</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.bathroom.map((url, index) => (
                           <div
                              key={index}
                              className="aspect-video rounded-md overflow-hidden shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedImage(url)}
                           >
                              <img
                                 src={url}
                                 alt={`صورة الحمام ${index + 1}`}
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        ))}
                     </div>
                  </section>

                  <section>
                     <h2 className="text-xl font-semibold text-gray-800 mb-4">صور المدخل</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.entrance.map((url, index) => (
                           <div
                              key={index}
                              className="aspect-video rounded-md overflow-hidden shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedImage(url)}
                           >
                              <img
                                 src={url}
                                 alt={`صورة المدخل ${index + 1}`}
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        ))}
                     </div>
                  </section>

                  <section>
                     <h2 className="text-xl font-semibold text-gray-800 mb-4">صور اضافيه</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.more.map((url, index) => (
                           <div
                              key={index}
                              className="aspect-video rounded-md overflow-hidden shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => setSelectedImage(url)}
                           >
                              <img
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