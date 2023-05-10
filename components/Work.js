import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import Borders from '@components/Borders'
import ArrowLinks from '@components/ArrowLinks'
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
                    <div className="lg:w-[95%]">

                        <img src='/burger.png'
                            alt="Upper Burger portfolio redesign"
                        />
                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">Just Premium</h1>

                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    Redesign of a Berlin upscale burger joints' website.
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
                </section>

                <section id="ASnew"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start lg:gap-12 mx-auto my-[15vh]">
                    <div className="lg:w-[95%]">
                        <img src='/as.png'
                            alt="AS portfolio redesign"
                        />
                    </div>
                    <div className="w-screen lg:w-[50%]">
                        <h1 className="header mt-[5vh] lg:mt-0">A New Look</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    A new portfolio site and social media marketing assets for a popular unsplash.com photographer.
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
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="lg:w-[95%]">
                        <img src='/beauty.png'
                            alt="AS portfolio redesign"
                        />

                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">Just Beautiful</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    Landing page for beauty products. Art direction, digital design, development with React.
                                </motion.p></Borders>
                        </div><br />
                        <Link href="https://food-health-one-seven.vercel.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}> <ArrowLinks >website (new tab)
                                    <BsArrowUpRight /> </ArrowLinks>  </a>
                        </Link>
                    </div>
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="lg:w-[95%]">
                        <img src='/devport1.png'
                            alt="AS portfolio redesign"

                        />
                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">For Tool Fans</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    Customizable portfolio template. Helping you to get noticed and get your next job.  </motion.p></Borders>
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
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="lg:w-[95%]">
                        <img src='/social.png'
                            alt="AS portfolio redesign"

                        />
                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">Social Media Marketing</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    Using visual power and proven design rules to help you stand out in a sea of information.  </motion.p></Borders>
                        </div><br />
                    </div>
                </section>
                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">
                    <div className="lg:w-[95%]">
                        <img src='/selfbrand1.png'
                            alt="Visual brand design for digital.dan agency"
                        />
                    </div>
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
                        </Link></div>
                </section>
            </main>
        </>
    )
}

export default Work