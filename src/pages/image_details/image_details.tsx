import { useState } from 'react';

const sections = [
  {
    title: 'الصالة',
    images: [
      "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
      "https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg",
    ],
  },
  {
    title: 'غرفة رقم 1',
    images: [
      "https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg",
    ],
  },
  {
    title: 'غرفة رقم 2',
    images: [
      "https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg",
      "https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg",
    ],
  },
  {
    title: 'غرفة رقم 3',
    images: [
      "https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg",
    ],
  },
  {
    title: 'الحمام',
    images: [
      "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
      "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    ],
  },
  {
    title: 'صور المدخل والشارع الرئيسي',
    images: [
      "https://www.imtilak.net/crop/798/469/posts/57fef479be96eae51ab4dadcea1fdc76hzA997.webp",
    ],
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative p-4 md:p-6 max-w-screen-lg mx-auto space-y-10">
      {/* Simple image overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="عرض الصورة"
            className="max-w-full max-h-full"
          />
        </div>
      )}

      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-lg font-bold mb-3 text-right">{section.title}</h2>
          <div
            className={`grid gap-4 ${
              section.title === 'الصالة'
                ? 'grid-cols-1 md:grid-cols-2'
                : section.images.length > 1
                ? 'grid-cols-2 sm:grid-cols-2'
                : 'grid-cols-1'
            }`}
          >
            {section.images.map((src, idx) => {
              const isFirstInLivingRoom = section.title === 'الصالة' && idx === 0;
              return (
                <img
                  key={idx}
                  src={src}
                  alt={`img-${idx}`}
                  className={`w-full object-cover rounded cursor-pointer ${
                    isFirstInLivingRoom ? 'col-span-full h-64 sm:h-80 md:h-96' : 'h-60'
                  }`}
                  onClick={() => setSelectedImage(src)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;