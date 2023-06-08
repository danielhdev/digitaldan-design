import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowUpRight } from 'react-icons/bs'
import Borders from '@components/Borders'
import ArrowLinks from '@components/ArrowLinks'
import Casestudyimage from '@components/Casestudyimage'
import Back from '@components/Back'

const Armedshutter = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    return (
        <div>

            <main id="Work" className="h-auto flex 
            flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">

                <section id="ASnew"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start lg:gap-12 mx-auto mt-[15vh]">

                    <div className="w-screen lg:w-[50%]">
                        <h1 className="title">Portfolio</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    A fresh portfolio site for an American people and fashion photographer.
                                    <br />

                                </motion.p></Borders>
                        </div><br />
                        <Link href="https://asprototype.netlify.app/Prototype/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}> <ArrowLinks >website (new tab)
                                    <BsArrowUpRight /> </ArrowLinks>  </a>
                        </Link>
                    </div>
                </section>

                <Casestudyimage>
                    <img src='/as1.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>


                <Casestudyimage>
                    <img src='/twitter2.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>
                <Casestudyimage><img src='/as3.png'
                    alt="AS portfolio redesign"
                /></Casestudyimage>
                <Casestudyimage>
                    <img src='/as2.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>

                <Back />
            </main>

        </div>

    )
}
export default Armedshutter