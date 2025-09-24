import { useState, useEffect } from 'react';
import { IoChevronBack } from "react-icons/io5";
import "../../../public/animations.css";

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
      "https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg",
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
  const [startY, setStartY] = useState<number | null>(null);

  // Esc key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className='pt-[80px]  slide-in'>
    <div className="relative p-4 md:p-6 max-w-screen-lg mx-auto space-y-10">
      {/* صورة مكبرة مع زر رجوع */}
      {selectedImage && (
        <div
          className="absolute top-0 left-0 w-full  bg-white/80 dark:bg-gray-900/60 backdrop-blur-[2px] flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
          onTouchStart={(e) => setStartY(e.touches[0].clientY)}
          onTouchMove={(e) => {
            if (startY !== null) {
              const diff = e.touches[0].clientY - startY;
              if (diff > 100) {
                setSelectedImage(null);
                setStartY(null);
              }
            }
          }}
          onTouchEnd={() => setStartY(null)}
        >
          <div
            className="relative dark:bg-gray-800 rounded-lg p-2 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 left-2 text-gray-700  bg-gray-100 dark:bg-gray-100 px-3 py-1 rounded-[2px] shadow hover:bg-gray-200 dark:hover:bg-gray-200 transition"
            >
              <IoChevronBack className="text-black" />
            </button>
            <img
              src={selectedImage}
              alt="عرض الصورة"
              className="max-w-[90vw] max-h-[70vh] rounded"
            />
          </div>
        </div>
      )}

      {/* عرض الصور حسب الأقسام */}
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-lg font-bold mb-3 text-right">{section.title}</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {section.images.map((src, idx) => {
              const isFirst = idx === 0 && section.images.length % 2 !== 0;

              return (
                <img
                  key={idx}
                  src={src}
                  alt={`img-${idx}`}
                  className={`w-full object-cover rounded cursor-pointer transform transition duration-300 hover:scale-105 ${
                    isFirst ? 'col-span-full h-64 sm:h-80' : 'h-60'
                  }`}
                  onClick={() => setSelectedImage(src)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gallery;
