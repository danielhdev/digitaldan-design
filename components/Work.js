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
            <main id="Work" className="h-auto flex flex-col justify-center items-center">
                <section className="lg:w-[80vw] h-auto md:py-[10vh] flex flex-col justify-start gap-12 mx-auto mt-[15vh] 
                mb-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="header">Better User Experience</h1>

                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    Redesign of a Berlin upscale burger joints' website, getting it out of 2016 with many UX improvements.
                                    <br />
                                </motion.p></Borders>
                            <br />
                            <div className='flex flex-row gap-[2rem]'>
                                <Link href="/Case1/Ubg"

                                >
                                    <a> <ArrowLinks>case study <BsArrowUpRight />  </ArrowLinks></a>
                                </Link>
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
                    <div className="lg:w-[95%]">
                        <Casestudyimage>
                            <img src='/burger.png'
                                alt="Upper Burger portfolio redesign"
                            /></Casestudyimage>
                    </div>
                </section>

                <section id="ASnew"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start lg:gap-12 mx-auto my-[15vh]">

                    <div className="w-screen lg:w-[50%]">
                        <h1 className="header mt-[5vh] lg:mt-0">Making it easy</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    for your target audience. Better UX and a fresh portfolio site for a popular unsplash.com photographer.
                                    <br />

                                </motion.p></Borders>
                        </div><br />
                        <Link href="/Case3/AS"
                        >
                            <a>
                                <ArrowLinks>
                                    case study <BsArrowUpRight /> </ArrowLinks>  </a>
                        </Link>
                    </div>
                    <div className="lg:w-[95%]">

                        <Casestudyimage><img src='/as.png'
                            alt="AS portfolio redesign"
                        /></Casestudyimage>
                    </div>
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">


                    <div className="lg:w-[50%]">
                        <h1 className="header">Landing Pages </h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    that will help you convert more visitors into customers: Strong imagery & messages, catch even the most impatient user.

                                </motion.p></Borders>
                        </div><br />
                        <Link href="https://food-health-one-seven.vercel.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}> <ArrowLinks >website (new tab)
                                    <BsArrowUpRight /> </ArrowLinks>  </a>
                        </Link>
                    </div>
                    <div className="lg:w-[95%]">
                        <Casestudyimage>
                            <img src='/beauty.png'
                                alt="AS portfolio redesign"
                            /></Casestudyimage>

                    </div>
                </section>
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
                                    website (new tab) <BsArrowUpRight />
                                </ArrowLinks></a>
                        </Link>
                    </div>
                    <div className="lg:w-[95%]">
                        <Casestudyimage>
                            <img src='/devport1.png'
                                alt="AS portfolio redesign"

                            /></Casestudyimage>
                    </div>
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">


                    <div className="lg:w-[50%]">
                        <h1 className="header">Accessibility & Consent</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    Avoid cease and desist messages or fines: <br />
                                    My UX/ UI designs are following the latest rules and regulations. </motion.p></Borders>
                        </div><br />
                    </div>

                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="header">Online Ads</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    Using visual power and proven design rules to help you get noticed in a sea of information.  </motion.p></Borders>
                        </div><br />
                    </div>

                    <div className="lg:w-[95%]">
                        <Casestudyimage>
                            <img src='/social.png'
                                alt="AS portfolio redesign"

                            /></Casestudyimage>
                    </div>
                </section>
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
                        <Link href="/Case2/DDbranding"
                        >
                            <a className="cursor-pointer"
                            ><ArrowLinks>
                                    case study <BsArrowUpRight /></ArrowLinks>
                            </a>
                        </Link>
                    </div>
                    <div className="lg:w-[95%]">
                        <Casestudyimage>
                            <img src='/selfbrand1.png'
                                alt="Visual brand design for digital.dan agency"
                            /></Casestudyimage>
                    </div>
                </section>
                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="header">AI Design Consultant</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    The new kid on the block: Billions of AI images will be produced every year. I will help you to stand out
                                    from the masses by curating and customizing AI images and videos. (Pop Art pugs by Dall-E)
                                    <br /></motion.p></Borders>
                        </div>
                        <br />
                    </div>
                    <div className="lg:w-[95%]">
                        <Casestudyimage>
                            <img src='/bonus pugs.png'
                                alt="Picture of two pugs in pop art style made by AI Dall-E"
                            /></Casestudyimage>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Work