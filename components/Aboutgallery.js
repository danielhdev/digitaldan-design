import React from 'react';

const Aboutgallery = () => {
    const images = [
        'about1.png',
        'about2.png',
        'about3.png',
        ,
    ];

    return (
        <div className="sm:w-screen md:w-screen lg:w-[90vw] mx-auto px-2 sm:px-4 lg:px-6">
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