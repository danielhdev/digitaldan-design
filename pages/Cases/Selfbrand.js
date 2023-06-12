import React from 'react'
import { motion } from 'framer-motion'
import Borders from '@components/Borders'
import Back from '@components/Back'

const Selfbrand = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    const images = [
        '/ddmob1.png',
        '/ddfonts.png',
        '/ddtab.png',
        '/ddtype.png',
        '/ddmock1.png',
        '/noway.png',
        '/noway2.png',
        '/ddcard.png',
        '/ddcard2.png',

    ];
    return (
        <div>

            <main id="Work" className="h-auto flex 
            flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">
                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="title">Self-Branding</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    Brand design, website, social media assets and stationary for myself. One of the brand types consists of some circles.
                                    Based on this I chose AI-generated images of metal balls and circles for the first batch of promotional material.
                                    <br /></motion.p></Borders>
                        </div><br />
                    </div>
                </section>
                <div className="sm:w-screen md:w-screen lg:w-[90vw] mx-auto px-2 mt-[4rem]">
                    <div className="grid grid-cols-1 gap-4 ">
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Image ${index + 1}`} className="w-full mx-auto lg:w-[90%] mb-[4rem]
                                border-[1px] border-solid border-stone-800" />
                            </div>
                        ))}
                    </div>
                </div>


                <Back />

            </main>
        </div>

    )
}
export default Selfbrand