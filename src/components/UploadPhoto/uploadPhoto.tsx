import React, { useRef, useState } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';

interface UploadPhotoProps {
  onFileSelect: (file: File) => void;
}

const UploadPhoto: React.FC<UploadPhotoProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onFileSelect(file);
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={styles.input}
      />
      {preview ? (
        <img
          src={preview}
          alt="Uploaded Preview"
          style={styles.imagePreview}
          onClick={handleUploadClick}
          title="Click to change image"
        />
      ) : (
        <div style={styles.uploadButton} onClick={handleUploadClick}>
          <div style={styles.icon}><MdOutlineFileUpload /></div>
          <div style={styles.text}>Upload Photo</div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  input: {
    display: 'none',
  },
  uploadButton: {
    border: '2px dashed grey',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px',
    height: '120px',
  },
  icon: {
    fontSize: '32px',
    marginBottom: '8px',
  },
  text: {
    fontSize: '16px',
  },
  imagePreview: {
    width: '120px',
    height: '120px',
    objectFit: 'cover' as const,
    borderRadius: '4px',
    border: '2px solid #ccc',
  },
};

export default UploadPhoto;
