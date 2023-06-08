import React from 'react'
import { motion } from 'framer-motion'
import Borders from '@components/Borders'
import Casestudyimage from '@components/Casestudyimage'
import Back from '@components/Back'

const Selfbrand = () => {
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
                        <h1 className="title">Self-Branding</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    Website and social media assets for a picky client: myself. One of the brand types consists of some circles.
                                    Based on this I chose AI-generated images of metal balls and circles for the first batch of promotional material.
                                    <br /></motion.p></Borders>
                        </div><br />
                    </div>
                </section>
                <Casestudyimage>
                    <img src='/ddfonts.png'
                        alt="AS portfolio redesign"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/ddmob1.png'
                        alt="AS portfolio redesign"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/ddtype.png'
                        alt="AS portfolio redesign"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/ddtab.png'
                        alt="AS portfolio redesign"

                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/noway.png'
                        alt="AS portfolio redesign"

                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/noway2.png'
                        alt="AS portfolio redesign"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/ddmock1.png'
                        alt="AS portfolio redesign"
                    /></Casestudyimage>


                <Back />

            </main>
        </div>

    )
}
export default Selfbrand