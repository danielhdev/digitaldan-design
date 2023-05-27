import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import Borders from '@components/Borders'
import ArrowLinks from '@components/ArrowLinks'
import Casestudyimage from '@components/Casestudyimage'

const Work = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },

    }
    return (
        <>
            <main id="Work" className="h-auto flex flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">
                <Casestudyimage>
                    <img src='/ubg1.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>
                <div className='lg:w-[65%]'></div>
                <Casestudyimage>
                    <img src='/ubg4.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/ubg2.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>
                <section className="lg:w-[80vw] h-auto md:py-[10vh] flex flex-col justify-start gap-12 mx-auto mt-[15vh] 
                mb-[15vh]">

                    <div className="lg:w-[50%]">


                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    Redesign of a Berlin upscale burger joints' website, getting it out of 2016 with many UX improvements.
                                    <br />
                                </motion.p></Borders>
                            <br />
                            <div className='flex flex-row gap-[2rem]'>

                                <Link href="https://digitaldanrestaurant.netlify.app/"
                                >
                                    <a target={'_blank'}
                                        rel={'noreferrer noopener'}>
                                        <ArrowLinks>
                                            website prototype (new tab) <BsArrowUpRight /></ArrowLinks>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Casestudyimage>
                    <img src='/ubg3.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>

                <Casestudyimage>
                    <img src='/as2.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/as1.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>

                <section id="ASnew"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start lg:gap-12 mx-auto my-[15vh]">

                    <div className="w-screen lg:w-[50%]">

                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    A fresh portfolio site for a popular unsplash.com photographer.
                                    <br />

                                </motion.p></Borders>
                        </div><br />
                        <Link href="https://asprototype.netlify.app/Prototype/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}> <ArrowLinks >website prototype (new tab)
                                    <BsArrowUpRight /> </ArrowLinks>  </a>
                        </Link>
                    </div>
                </section>
                <Casestudyimage>
                    <img src='/twitter2.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>
                <Casestudyimage><img src='/as3.png'
                    alt="AS portfolio redesign"
                /></Casestudyimage>


                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">


                    <div className="lg:w-[50%]">
                        <h1 className="header">Landing Pages </h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    that will help you convert more visitors into customers: Fast loading, strong imagery & messages. Catch even the most impatient user.

                                </motion.p></Borders>
                        </div><br />
                        <Link href="https://food-health-one-seven.vercel.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}> <ArrowLinks >website prototype (new tab)
                                    <BsArrowUpRight /> </ArrowLinks>  </a>
                        </Link>
                    </div> </section>

                <Casestudyimage>
                    <img src='/beauty.png'
                        alt="AS portfolio redesign"
                    /></Casestudyimage>




                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">


                    <div className="lg:w-[50%]">
                        <h1 className="header">Your New Job</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    thanks to a strong online presence. Giving you an egde in competitive markets. </motion.p></Borders>
                        </div><br />

                        <Link href="https://ddshowcase3.netlify.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}>
                                <ArrowLinks>
                                    website prototype (new tab) <BsArrowUpRight />
                                </ArrowLinks></a>
                        </Link>
                    </div>
                </section>


                <Casestudyimage>
                    <img src='/devport1.png'
                        alt="AS portfolio redesign"

                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/soc1.png'
                        alt="AS portfolio redesign"

                    /></Casestudyimage>
                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="lg:w-[50%]">

                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    Online Advertisement: Using visual power and proven design rules to help you get noticed in a sea of information.  </motion.p></Borders>
                        </div><br />
                    </div>    </section>
                <Casestudyimage>
                    <img src='/soc2.png'
                        alt="AS portfolio redesign"

                    /></Casestudyimage>
                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="header">It&apos;s Personal!</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    Website and ads for a picky client: myself. AI helped out with ideas.
                                    <br /></motion.p></Borders>
                        </div><br />

                    </div>
                </section>

                <Casestudyimage>
                    <img src='/noway.png'
                        alt="AS portfolio redesign"

                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/noway2.png'
                        alt="AS portfolio redesign"

                    /></Casestudyimage>
                <div className="w-[75%]"></div>

                <Casestudyimage>
                    <img src='/ddfonts.png'
                        alt="AS portfolio redesign"
                    /></Casestudyimage>


                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="header">AI</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    The new kid on the block: Billions of AI images will be produced every year. I will help you to stand out
                                    from the masses by curating and customizing AI images and videos. (Edited base image provided by Dall-E)
                                    <br /></motion.p></Borders>
                        </div>
                        <br />
                    </div>   </section>

                <Casestudyimage>
                    <img src='/makingof1.png'
                        alt="Picture of two pugs in pop art style made by AI Dall-E"
                    /></Casestudyimage>


            </main>
        </>
    )
}

export default Work