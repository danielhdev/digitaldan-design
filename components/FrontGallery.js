import React from 'react';
import Link from 'next/link'


const FrontGallery = () => {
    const images = [
        { id: 1, image: 'ubg6.jpg', slug: '/Cases/Burger' },
        { id: 2, image: 'moon1.png', slug: '/Cases/Skateboard' },
        { id: 3, image: 'beau1.png', slug: '/Cases/Beauty' },
        { id: 4, image: 'as1.png', slug: '/Cases/Armedshutter' },
        { id: 5, image: 'ddimg1.jpg', slug: '/Cases/Petsinspace' },
        { id: 6, image: 'soc1.png', slug: '/Cases/Social' },
        { id: 7, image: 'ddmock1.png', slug: '/Cases/Selfbrand' }

    ];

    return (
        <main id="Work"
            className=" flex flex-col justify-center items-center py-[10rem] lg:py-[15rem]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-[4rem]">
                    {images.map((item) => (
                        <div key={item.id} className="gallery-icon">

                            <Link href={`${item.slug}`}>
                                <a>
                                    <div
                                        className="w-full h-[35rem] 2xl:h-[40rem] bg-cover bg-center
                                        border-[1px] border-stone-800 border-solid"
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