import React from 'react'
import { motion } from 'framer-motion'
import Back from '@components/Back'
import Borders from '@components/Borders'
import Casestudyimage from '@components/Casestudyimage'

const Skateboard = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    return (
        <div>

            <main id="Work" className="h-auto flex flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">


                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="title">Skateboard Shop</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    UI & brand design. Challenges: Standing out from the competitors through a clear design identity.
                                    Finding the right tone between a sober, solid e-commerce site and the chaotic, experimental
                                    art style of the skater scene.
                                    <br /></motion.p></Borders>
                        </div><br />
                    </div>
                </section>

                <Casestudyimage>
                    <img src='/moon1.png'
                        alt="Gallery page for a skater shop"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/moon2.png'
                        alt="Tab version gallery shop"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/moon3.png'
                        alt="Tab version gallery shop"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/moon4.png'
                        alt="Tab version gallery shop"
                    /></Casestudyimage>
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

                <Casestudyimage>
                    <img src='/howto1.png'
                        alt="Picture of two pugs in pop art style made by AI Dall-E"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/howto2.png'
                        alt="Picture of two pugs in pop art style made by AI Dall-E"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/howto3.png'
                        alt="Picture of two pugs in pop art style made by AI Dall-E"
                    /></Casestudyimage>
                <Back />
            </main>
        </div>
    )
}

export default Skateboard