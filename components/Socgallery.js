import React from 'react';

const Socgallery = () => {
    const images = [
        '/soc1.png',
        '/soc2.png',
        '/soc3.png',
        '/soc4.png',
        '/soc6.png',

    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-[4rem]">
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Image ${index + 1}`} className="w-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Socgallery;