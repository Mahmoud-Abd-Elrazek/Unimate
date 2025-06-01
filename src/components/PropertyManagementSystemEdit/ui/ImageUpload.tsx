// ImageUpload.tsx
import React, { useState, useRef, useEffect } from 'react';

interface ImageUploadProps {
  imageFile?: File;
  onChange: (file: File) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ imageFile, onChange }) => {
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setPreviewUrl(url);

      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl('');
    }
  }, [imageFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      {previewUrl ? (
        <img src={previewUrl} alt="Preview" className="w-full aspect-video object-cover rounded" />
      ) : (
        <div className="w-full aspect-video flex items-center justify-center bg-gray-100 rounded">
          <span className="text-gray-400">اختر صورة</span>
        </div>
      )}
      <button
        type="button"
        onClick={handleUploadClick}
        className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition-colors"
      >
        رفع صورة
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};
