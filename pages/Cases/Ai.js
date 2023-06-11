import React from 'react'
import { motion } from 'framer-motion'
import Borders from '@components/Borders'
import Back from '@components/Back'

const Ai = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    const images = [
        '/howto1.png',
        '/howto2.png',
        '/howto3.png',

    ];
    return (
        <div>

            <main id="Work" className="h-auto flex 
            flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">
                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="title">AI for UI</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    The new kid on the block: AI can help designers develop ideas like in the following example.
                                    <br /></motion.p></Borders>
                        </div>
                        <br />
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
export default Ai