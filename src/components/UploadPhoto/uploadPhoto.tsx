import React, { useRef } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';

const UploadPhoto: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log('Selected file:', file);
      // You can handle the file upload here
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
      <div style={styles.uploadButton} onClick={handleUploadClick}>
        <div style={styles.icon}><MdOutlineFileUpload/></div>
      </div>
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
    display: 'none', // Hide the file input
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
  },
  icon: {
    fontSize: '24px',
  },
  text: {
    marginTop: '5px',
    fontSize: '16px',
  },
};

export default UploadPhoto;