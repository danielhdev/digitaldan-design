import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowUpRight } from 'react-icons/bs'
import Borders from '@components/Borders'
import ArrowLinks from '@components/ArrowLinks'
import Casestudyimage from '@components/Casestudyimage'
import Back from '@components/Back'

const Burger = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    return (
        <div>
            <main id="Work" className="h-auto flex flex-col justify-center items-center 
            pb-[10rem] lg:pb-[15rem]">
                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto  mt-[15vh] lg:mt-[35vh]">

                    <div className="lg:w-[50%]">

                        <h1 className="title">Burger Place</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    Redesign of a Berlin upscale burger joints' website, getting it out of 2016 with many UI improvements.
                                    <br />
                                </motion.p></Borders>
                            <br />
                            <div className='flex flex-row gap-[2rem]'>

                                <Link href="https://digitaldanrestaurant.netlify.app/"
                                >
                                    <a target={'_blank'}
                                        rel={'noreferrer noopener'}>
                                        <ArrowLinks>
                                            website (new tab) <BsArrowUpRight /></ArrowLinks>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Casestudyimage>
                    <img src='/ubg5.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/ubg1.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/ubg4.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/ubg2.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>

                <Casestudyimage>
                    <img src='/ubg3.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>

                <Back />
            </main>
        </div>
    )
}

export default Burger