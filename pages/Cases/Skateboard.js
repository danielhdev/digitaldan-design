import React from 'react'
import { motion } from 'framer-motion'
import Back from '@components/utility/Back'
import Borders from '@components/utility/Borders'
import Projectspecs from '@components/utility/Projectspecs'
import GalleryMapper from '@components/utility/GalleryMapper'

const Skateboard = () => {
    const tech = "Next, Tailwind, Headless CMS, Shopify"
    const role = "UI design, web development"
    const desc = "Pre-launch design & development. Challenges: Standing out from the competitors through identity design. Finding the right tone between a solid e-commerce site and the experimental art style of the skater scene."

    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    const images = [
        '/moon1.png',
        '/moon2.png',
        '/moon3.png',
        '/moon4.png',
        '/moon5.png',
        '/moon6.png',
        '/moon7.png',
    ];
    return (
        <>
            <main id="Work" className="h-auto flex flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">
                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="title">Moonskater</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    <Projectspecs
                                        tech={tech}
                                        role={role}
                                        description={desc}
                                    /></motion.p></Borders>
                        </div><br />
                    </div>
                </section>

                <GalleryMapper images={images} />

                <Back />
            </main>
        </>
    )
}

export default Skateboard