import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowUpRight } from 'react-icons/bs'
import Borders from '@components/Borders'
import ArrowLinks from '@components/ArrowLinks'
import Casestudyimage from '@components/Casestudyimage'
import Back from '@components/Back'

const Beauty = () => {
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
                        <h1 className="title">Beauty</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    Strong imagery & messages. Catch even the most impatient user.

                                </motion.p></Borders>
                        </div><br />
                        <Link href="https://food-health-one-seven.vercel.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}> <ArrowLinks >website (new tab)
                                    <BsArrowUpRight /> </ArrowLinks>  </a>
                        </Link>
                    </div> </section>
                <Casestudyimage><img src='/beau1.png'
                    alt="AS portfolio redesign"
                /></Casestudyimage>
                <Casestudyimage><img src='/beau2.jpg'
                    alt="AS portfolio redesign"
                /></Casestudyimage>
                <Casestudyimage><img src='/beau3.png'
                    alt="AS portfolio redesign"
                /></Casestudyimage>

                <Back />
            </main>

        </div>

    )
}
export default Beauty