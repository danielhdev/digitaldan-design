import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowUpRight } from 'react-icons/bs'
import Borders from '@components/Borders'
import ArrowLinks from '@components/ArrowLinks'
import Casestudyimage from '@components/Casestudyimage'
import Back from '@components/Back'
import Socgallery from '@components/Socgallery'

const Social = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    return (
        <div>

            <main id="Work" className="h-auto flex 
            flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">

                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh]">


                    <div className="lg:w-[50%]">
                        <h1 className="title">Playground</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    A collection of past work including social media ads and random design projects

                                </motion.p></Borders>
                        </div><br />

                    </div> </section>
                <Socgallery />

                <Back />
            </main>
        </div>

    )
}
export default Social