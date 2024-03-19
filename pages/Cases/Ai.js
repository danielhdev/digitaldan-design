import React from 'react'
import { motion } from 'framer-motion'
import Borders from '@components/utility/Borders'
import Back from '@components/utility/Back'
import GalleryMapper from '@components/utility/GalleryMapper'

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
        <>

            <main id="Work" className="h-auto flex 
            flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">
                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="title">AI for UI</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="abouttext lg:w-[40ch] pt-3 pr-8">
                                    The new kid on the block: AI as a valuable assistant, enhancing ideas and speeding up the design process like in the following example.
                                    <br /></motion.p></Borders>
                        </div>
                        <br />
                    </div>
                </section>
                <GalleryMapper
                    images={images} />

                <Back />
            </main>

        </>

    )
}
export default Ai