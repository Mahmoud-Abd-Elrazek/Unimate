import React, { useState, useEffect } from 'react';

interface ImageUploadSectionProps {
  title: string;
  description: string;
  maxImages: number;
  onImagesChange: (images: File[]) => void;
}

export const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({
  title,
  description,
  maxImages,
  onImagesChange
}) => {
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const selectedFiles = Array.from(files).slice(0, maxImages - images.length);
      setImages((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    onImagesChange(images);
  }, [images]);

  return (
    <div>
      <h4 className="text-md font-medium text-gray-700 mb-2">{title}</h4>
      <p className="text-sm text-gray-500 mb-3">{description}</p>
      <div className="flex flex-wrap gap-3">
        {images.map((file, index) => (
          <div key={index} className="relative w-32 h-32 border rounded overflow-hidden">
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
              title="حذف الصورة"
            >
              ×
            </button>
          </div>
        ))}
        {images.length < maxImages && (
          <label className="w-32 h-32 border-2 border-dashed rounded flex items-center justify-center cursor-pointer text-gray-400 hover:border-gray-500 transition">
            +
            <input type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>
        )}
      </div>
    </div>
  );
};
