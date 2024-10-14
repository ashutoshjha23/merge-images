import React from 'react';

const ImageListOverlay = ({ images, onDelete }) => {
    return (
        <div className="image-list-overlay">
            <h2>Uploaded Images</h2>
            <div className="image-list">
                {images.map((image, index) => (
                    <div key={index} className="image-list-item">
                        <img src={image.src} alt={`Uploaded ${index}`} className="uploaded-image" />
                        <button onClick={() => onDelete(index)} className="delete-button">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageListOverlay;
