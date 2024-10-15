import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ImageOverlay from './components/ImageOverlay';
import DownloadButton from './components/DownloadButton';
import ImageListOverlay from './components/ImageListOverlay';

const App = () => {
    const [images, setImages] = useState([]);
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const addImage = (image) => {
        const newImage = {
            src: image,
            left: 40,
            top: 40,
            width: '400px',
            height: '400px',
        };
        setImages((prevImages) => [...prevImages, newImage]);
    };

    const deleteImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    };

    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    };

    return (
        <div className="app-container">
            <h1>как кодировать</h1>
            <ImageUploader addImage={addImage} />
            <ImageOverlay images={images} setImages={setImages} />
            <DownloadButton />
            <button onClick={toggleOverlay} className="toggle-overlay-button">
                {isOverlayVisible ? 'Hide Uploaded Images' : 'Show Uploaded Images'}
            </button>
            {isOverlayVisible && (
                <ImageListOverlay images={images} onDelete={deleteImage} />
            )}
        </div>
    );
};

export default App;
