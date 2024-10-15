import React, { useState, useEffect } from 'react';

const ImageResizer = ({ children, onResize, initialSize }) => {
    const [isResizing, setIsResizing] = useState(false);
    const [size, setSize] = useState(initialSize);
    useEffect(() => {
        setSize(initialSize);
    }, [initialSize]);

    const startResize = (e) => {
        setIsResizing(true);
        e.preventDefault();
    };
    const doResize = (e) => {
        if (isResizing) {
            const newWidth = Math.max(50, e.clientX - e.target.getBoundingClientRect().left);
            const newHeight = Math.max(50, e.clientY - e.target.getBoundingClientRect().top);
            setSize({ width: `${newWidth}px`, height: `${newHeight}px` });
            onResize({ width: newWidth, height: newHeight }); 
        }
    };
    const stopResize = () => {
        setIsResizing(false);
    };

    return (
        <div
            style={{ width: size.width, height: size.height, position: 'relative' }}
            onMouseMove={doResize}
            onMouseUp={stopResize}
            onMouseLeave={stopResize}
        >
            {children}
            <div
                className="resizer"
                onMouseDown={startResize}
            />
        </div>
    );
};

export default ImageResizer;
