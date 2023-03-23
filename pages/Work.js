import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import AS from '../public/as.png'
import Beauty from '../public/beauty.png'
import Burger from '../public/burger.png'
import Dev from '../public/devport.png'
import Self from '../public/selfbrand1.png'
import Social from '../public/social1.png'
import VR from '../public/vr1.png'

const Work = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },

    }
    const firstImg = {
        opacity: [0, 1],
        transition: { delay: 0.4, duration: 1 },

    }

    return (
        <>
            <main className="h-auto pb-[20vh] flex flex-col">
                <section className="absolute top-[10vh] lg:left-[10vw]">
                    <h1 className="header">work</h1>
                </section>

                <section className="lg:w-[80vw] h-auto flex flex-col lg:flex-row justify-start lg:gap-12 mx-auto mt-[25vh] mb-[15vh]">

                    <motion.div animate={firstImg} className="border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                      w-screen lg:w-[50%]">

                        <Link href="https://asprototype.netlify.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}

                            ><Image src={AS}
                                alt="AS portfolio redesign"
                                priority="true"
                                className="cursor-pointer"
                                /></a>
                        </Link>

                    </motion.div>
                    <div className="w-screen lg:w-[50%]">
                        <h1 className="header mt-[5vh] lg:mt-0">A New Look</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Some branding and a new portfolio site for one of the best photographers on unsplash.com. His old portfolio looks a bit dated.
                                <br />
                                <br />


                                Styleguide and mockup coded with React.  </motion.p>
                        </div></div>
                </section>

                <section className="lg:w-[80vw] h-auto py-[10vh] flex flex-col lg:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                     w-screen lg:w-[50%]">

                        <Link href="https://digitaldanrestaurant.netlify.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}

                            ><Image src={Burger}
                                alt="AS portfolio redesign"
                                className="cursor-pointer"
                                /></a>
                        </Link>
                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">Just Premium</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Redesign of a Berlin upscale burger joints' online presense. The old one was an outdated template and didn't match the owner&apos;s strive for classy fast food.
                                <br />
                                <br />


                                This website mockup was coded with Next.js.  </motion.p>
                        </div></div>
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col lg:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className=" border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                      w-screen lg:w-[50%]">
                        <Link href="https://dd-agency-branding.netlify.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}

                            ><Image src={Self}
                                alt="AS portfolio redesign"
                                className="cursor-pointer"
                                /></a>
                        </Link>
                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">It&apos;s Personal!</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Branding Digitaldan agency in light of the post-covid restart. AI was glad to help out with ideas.
                                <br />
                                <br />


                                Case study coded with React.js. This website is made with Next.js  </motion.p>
                        </div></div>
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col lg:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className=" border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                     w-screen  lg:w-[50%]">
                        <Link href="https://food-health-one-seven.vercel.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}

                            ><Image src={Beauty}
                                alt="AS portfolio redesign"
                                className="cursor-pointer"
                                /></a>
                        </Link>
                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">Just Beautiful</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Designing a landing page for the launch of new skin care product line. Testing colors, layout and scroll animations.
                                <br />
                                <br />


                                Mockup coded with React.js.  </motion.p>
                        </div></div>
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col lg:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className=" border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                     w-screen  lg:w-[50%]">

                        <Image src={Social}
                            alt="AS portfolio redesign"
                        />
                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">Social Media</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Stand out from the noise with stylish ads, headers and other images for your social media accounts.
                                <br />
                                <br />


                                Made with Adobe Ai.  </motion.p>
                        </div></div>
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col lg:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className=" border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                     w-screen  lg:w-[50%]">  <Image src={VR}
                            alt="AS portfolio redesign"
                        /></div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">VR Nightclub</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Assets for a virtual reality night club in the game Second Life.

                                <br />
                                <br />

                                Inkscape and Photoshop.
                            </motion.p>
                        </div></div>
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col lg:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                   w-screen lg:w-[50%]">
                        <Link href="https://ddshowcase3.netlify.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}

                            ><Image src={Dev}
                                alt="AS portfolio redesign"
                                className="cursor-pointer"
                                /></a>
                        </Link>
                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">For Tool Fans</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Portfolio site, find the animation that gave the mysterious headline its name.
                                <br />
                                <br />


                                Mockup coded with Next.js.  </motion.p>
                        </div></div>
                </section>


            </main>
        </>
    )
}

export default Work