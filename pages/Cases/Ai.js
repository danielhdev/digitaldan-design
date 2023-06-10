import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowUpRight } from 'react-icons/bs'
import Borders from '@components/Borders'

import Casestudyimage from '@components/Casestudyimage'
import Back from '@components/Back'

const Ai = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
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
export default Ai