import React from 'react';
import Draggable from 'react-draggable';

const ImageOverlay = ({ images, setImages }) => {
    return (
        <div className="overlay-container">
            {images.map((image, index) => (
                <Draggable key={index}>
                    <div
                        className="image-wrapper"
                        style={{
                            position: 'absolute',
                            left: image.left,
                            top: image.top,
                        }}
                    >
                        <img
                            src={image.src}
                            alt={`Overlay ${index}`}
                            className="overlay-image"
                            style={{
                                width: image.width,
                                height: image.height,
                            }}
                        />
                    </div>
                </Draggable>
            ))}
        </div>
    );
};

export default ImageOverlay;
