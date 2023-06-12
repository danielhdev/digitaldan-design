import React from 'react'
import { motion } from 'framer-motion'
import Borders from '@components/Borders'
import Back from '@components/Back'


const Social = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    const images = [
        '/soc1.png',
        '/soc2.png',
        '/soc3.png',
        '/soc4.png',
        '/soc5.png',
        '/soc6.png',
    ];

    return (
        <div>

            <main id="Work" className="h-auto flex 
            flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">
                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto my-[15vh]">
                    <div className="lg:w-[50%]">
                        <h1 className="title">Playground</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    A collection of past work including social media ads and random design projects
                                </motion.p></Borders>
                        </div><br />
                    </div>
                </section>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-[4rem]">
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Image ${index + 1}`} className="w-full" />
                            </div>
                        ))}
                    </div>
                </div>
                <Back />
            </main>
        </div>

    )
}
export default Social