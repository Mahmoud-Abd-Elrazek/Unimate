import React, { useState, useRef } from 'react';
import { Upload, CheckCircle2, X } from 'lucide-react';

interface ImageUploadProps {
  imageUrl: string;
  onChange: (url: string) => void;
  index: number;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ imageUrl, onChange, index }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);

    setTimeout(() => {
      const localUrl = URL.createObjectURL(file);
      onChange(localUrl);
      setIsLoading(false);
    }, 1000);
  };

  const removeImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('');
  };

  return (
    <div
      className={`
        relative aspect-video border-2 rounded-lg overflow-hidden cursor-pointer
        ${imageUrl ? 'border-green-500' : 'border-dashed border-gray-300'} 
        ${isHovering && !isLoading ? 'bg-gray-100' : 'bg-gray-50'}
        transition-all duration-200
      `}
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
        disabled={isLoading}
      />

      {isLoading ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-8 h-8 border-t-2 border-blue-500 rounded-full animate-spin"></div>
          <p className="mt-2 text-sm text-gray-600">جاري الرفع...</p>
        </div>
      ) : imageUrl ? (
        <div className="relative h-full">
          <img
            src={imageUrl}
            alt={`صورة العقار ${index}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-2 right-2 flex space-x-1">
            <button
              className="bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
              onClick={removeImage}
            >
              <X size={16} className="text-red-500" />
            </button>
          </div>
          <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
            <CheckCircle2 size={12} />
            <span>تم الرفع</span>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-4">
          <Upload size={24} className="mb-2" />
          <p className="text-sm text-center">
            انقر لرفع الصورة {index}
          </p>
        </div>
      )}
    </div>
  );
};