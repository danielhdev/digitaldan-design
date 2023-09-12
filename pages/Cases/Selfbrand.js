import React from 'react'
import { motion } from 'framer-motion'
import Borders from '@components/utility/Borders'
import Back from '@components/utility/Back'
import Projectspecs from '@components/utility/Projectspecs'
import GalleryMapper from '@components/utility/GalleryMapper'

const Selfbrand = () => {
    const tech = "Next, Tailwind, Dall-E"
    const role = "UI design, front-end development"
    const desc = "Brand design, website, and social media assets."

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
    ];
    return (
        <>
            <main id="Work" className="h-auto flex 
            flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">
                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="title">Self-Branding</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.div whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    <Projectspecs
                                        tech={tech}
                                        role={role}
                                        description={desc}
                                    />
                                </motion.div></Borders>
                        </div><br />
                    </div>
                </section>
                <GalleryMapper images={images} />
                <Back />
            </main>
        </>

    )
}
export default Selfbrand