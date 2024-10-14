import React, { useRef } from 'react';

const ImageUploader = ({ addImage }) => {
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                addImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click(); // Trigger file input when button is clicked
    };

    return (
        <div className="image-uploader">
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }} // Hide the default input
            />
            <button onClick={handleButtonClick} className="custom-file-upload">
                Choose File
            </button>
        </div>
    );
};

export default ImageUploader;
