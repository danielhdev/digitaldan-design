import React from 'react';
import Link from 'next/link'


const FrontGallery = () => {
    const images = [
        { id: 1, image: 'ubg4.png', slug: '/Cases/Burger' },
        { id: 2, image: 'moon1.png', slug: '/Cases/Skateboard' },
        { id: 3, image: 'as1.png', slug: '/Cases/Armedshutter' },
        { id: 4, image: 'beau1.png', slug: '/Cases/Beauty' },
        { id: 5, image: 'soc1.png', slug: '/Cases/Social' },
        { id: 6, image: 'ddmob1.png', slug: '/Cases/Selfbrand' }

    ];

    return (
        <main id="Work"
            className="h-auto flex flex-col justify-center items-center py-[10rem] lg:py-[15rem]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-[4rem]">
                    {images.map((item) => (
                        <div key={item.id} className="gallery-icon">

                            <Link href={`${item.slug}`}>
                                <a>
                                    <div
                                        className="w-full h-[24rem] lg:h-[36rem] bg-cover bg-center"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    ></div>
                                </a>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </main >
    );
};

export default FrontGallery;