import React from 'react';

const Aboutgallery = () => {
    const images = [
        'about1.png',
        'about2.png',
        'about3.png',
        ,
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4">
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Image ${index + 1}`} className="w-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Aboutgallery;