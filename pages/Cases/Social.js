import React from 'react'
import { motion } from 'framer-motion'
import Borders from '@components/utility/Borders'
import Back from '@components/utility/Back'
import GalleryMapper from '@components/utility/GalleryMapper'


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
        '/soc5.png',
        '/soc6.png',
        '/ddmob1.png',
        '/ddmock1.png',
        '/noway.png',
        '/libgv2jpeg 2024.jpg',
    ];

    return (
        <>
            <main id="Work" className="h-auto flex 
                flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">
                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto my-[15vh]">
                    <div className="lg:w-[50%]">
                        <h1 className="title">Playground</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="abouttext lg:w-[40ch] pt-3 pr-8 ">
                                    A collection of past work including social media ads and random design projects
                                </motion.p></Borders>
                        </div><br />
                    </div>
                </section>
                <GalleryMapper images={images} />
                <Back />
            </main>
        </>

    )
}
export default Social