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
                                            website (new tab) <BsArrowUpRight /></ArrowLinks>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
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

                <Casestudyimage>
                    <img src='/ubg3.png'
                        alt="Upper Burger portfolio redesign"
                    /></Casestudyimage>
                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="title">AI for UI</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    The new kid on the block: AI can help designers develop ideas like in the following example.
                                    <br /></motion.p></Borders>
                        </div>
                        <br />
                    </div>   </section>

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
                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="lg:w-[50%]">

                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    UI/UX/Brand design for skateboard shop.
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

                <section id="ASnew"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start lg:gap-12 mx-auto my-[15vh]">

                    <div className="w-screen lg:w-[50%]">

                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    A fresh portfolio site for an American people and fashion photographer.
                                    <br />

                                </motion.p></Borders>
                        </div><br />
                        <Link href="https://asnetlify.app/"
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



                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">


                    <div className="lg:w-[50%]">

                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    Landing pages with strong imagery & messages. Catch even the most impatient user.

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
                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="w-fit">
                        <Borders>
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Your new job thanks to a strong online presence. Giving you an egde in competitive markets. </motion.p></Borders>
                    </div>

                    <Link href="https://ddshowcase3.netlify.app/"
                    >
                        <a target={'_blank'}
                            rel={'noreferrer noopener'}>
                            <ArrowLinks>
                                website (new tab) <BsArrowUpRight />
                            </ArrowLinks></a>
                    </Link>

                </section>
                <Casestudyimage>
                    <img src='/dev1.png'
                        alt="AS portfolio redesign"

                    /></Casestudyimage>
                <Casestudyimage>
                    <img src='/desk1.png'
                        alt="AS portfolio redesign"

                    /></Casestudyimage>

                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="lg:w-[50%]">

                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    Website and social media assets for a picky client: myself.
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





            </main>
        </>
    )
}

export default Work