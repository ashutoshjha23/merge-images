import React from 'react';
import html2canvas from 'html2canvas';

const DownloadButton = () => {
    const handleDownload = async () => {
        const element = document.querySelector('.overlay-container');
        const canvas = await html2canvas(element, { backgroundColor: null });
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'overlayed-image.png';
        link.click();
    };

    return <button onClick={handleDownload}>Download Image</button>;
};

export default DownloadButton;
