import React, { useState } from 'react';
import { ImageUpload } from './ImageUpload';

interface ImageUploadSectionProps {
  title: string;
  description: string;
  maxImages: number;
}

export const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({

  description,
  maxImages
}) => {
  const [images, setImages] = useState<string[]>(Array(maxImages).fill(''));

  const handleImageChange = (index: number, imageUrl: string) => {
    const newImages = [...images];
    newImages[index] = imageUrl;
    setImages(newImages);
  };

  return (
    <div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: maxImages }).map((_, index) => (
          <ImageUpload 
            key={index}
            imageUrl={images[index]}
            onChange={(url) => handleImageChange(index, url)}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
};