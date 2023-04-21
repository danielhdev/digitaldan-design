import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

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
            <main id="Work" className="h-auto pb-[10vh] flex flex-col justify-center items-center">
                <section className="lg:w-[80vw] h-auto py-[10vh] flex flex-col lg:flex-row justify-start gap-12 mx-auto mt-[15vh] 
                mb-[15vh]">

                    <div className="border-r-0 border-b-0 border-stone-800/50 dark:border-zinc-50 border-[0.5rem] 
                     w-screen lg:w-[50%]">

                        <img src='/burger.png'
                            alt="Upper Burger portfolio redesign"
                            className="workimg"
                        />

                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">Just Premium</h1>
                        <div className="border-t-[1px] border-r-[1px] 
                        border-l-0 border-b-0 border-stone-800/50 dark:border-zinc-50 border-[1rem] w-fit">
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Redesign of a Berlin upscale burger joints' website. Replacing an outdated template.
                                <br />
                                <br />
                            </motion.p>
                            <Link href="/Case1/Ubg"
                            >
                                <h2 className="paragraph text-amber-500 cursor-pointer"> case study <BsArrowUpRight /></h2>
                            </Link>
                            <Link href="https://digitaldanrestaurant.netlify.app/"
                            >
                                <a target={'_blank'}
                                    rel={'noreferrer noopener'}>
                                    <h2 className="paragraph text-amber-500 cursor-pointer"> website <BsArrowUpRight /> </h2></a>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col lg:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className=" border-r-0 border-b-0 border-stone-800/50 dark:border-zinc-50  border-[0.5rem] 
                      w-screen lg:w-[50%]">

                        <img src='/selfbrand1.png'
                            alt="AS portfolio redesign"
                            className="workimg"
                        />

                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">It&apos;s Personal!</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 
                        border-stone-800/50 dark:border-zinc-50 border-[1rem] w-fit">
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Brand design for a picky client: myself. AI helped out with ideas.
                                <br /></motion.p>
                        </div>
                        <Link href="/Case2/DDbranding"
                        >
                            <a className="paragraph cursor-pointer"
                            >

                                <h2 className="paragraph text-amber-500 cursor-pointer"> case study <BsArrowUpRight /></h2>

                            </a>
                        </Link></div>
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col lg:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className=" border-r-0 border-b-0 border-stone-800/50 dark:border-zinc-50 border-[0.5rem] 
                      w-screen lg:w-[50%]">


                        <img src='/social.png'
                            alt="Social media ads"
                            className="workimg"
                        />

                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">Social Media</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 dark:border-zinc-50  border-[1rem] w-fit">
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Ad campaigns for social media. Bringing classic, proven design rules into the 21st century.
                                <br />
                                <br />


                                Art direction, graphic design, digital design.  </motion.p>
                        </div></div>
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col lg:flex-row justify-start lg:gap-12 mx-auto my-[15vh]">


                    <motion.div animate={firstImg} className="border-r-0 border-b-0 border-stone-800/50 dark:border-zinc-50  border-[0.5rem] 
  w-screen lg:w-[50%]">



                        <img src='/as.png'
                            alt="AS portfolio redesign"
                            className="workimg"
                        />



                    </motion.div>
                    <div className="w-screen lg:w-[50%]">
                        <h1 className="header mt-[5vh] lg:mt-0">A New Look</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 dark:border-zinc-50 border-[1rem] w-fit">
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Some branding and a new portfolio site for one of the best photographers on unsplash.com.
                                <br />

                            </motion.p>
                        </div><br />
                        <Link href="/Case3/AS"
                        >
                            <a><h2 className="paragraph text-amber-500 cursor-pointer"> case study <BsArrowUpRight /> </h2></a>
                        </Link>
                    </div>
                </section>
                <section className="lg:w-[80vw] h-auto flex flex-col lg:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className=" border-r-0 border-b-0 border-stone-800/50 dark:border-zinc-50 border-[0.5rem] 
                     w-screen  lg:w-[50%]">
                        <img src='/beauty.png'
                            alt="AS portfolio redesign"
                            className="workimg"
                        />

                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">Just Beautiful</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 dark:border-zinc-50  border-[1rem] w-fit">
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Landing page template for beauty products. With scroll animations, contact form and ready to connect to a shop.
                                <br />
                                <br />


                                Art direction, digital design, development with React.  </motion.p>
                        </div><br />
                        <Link href="https://food-health-one-seven.vercel.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}>
                                <h2 className="paragraph text-amber-500 cursor-pointer"> website (new tab) <BsArrowUpRight /> </h2></a>
                        </Link>
                    </div>
                </section>


                <section className="lg:w-[80vw] h-auto flex flex-col lg:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="border-r-0 border-b-0 border-stone-800/50 dark:border-zinc-50 border-[0.5rem] 
                   w-screen lg:w-[50%]">
                        <img src='/devport.png'
                            alt="AS portfolio redesign"
                            className="workimg"
                        />
                    </div>
                    <div className="lg:w-[50%]">
                        <h1 className="header">For Tool Fans</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 dark:border-zinc-50 border-[1rem] w-fit">
                            <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                Customizable portfolio template. Find the animation that gave the mysterious headline its name.
                                <br />
                                <br />


                                Digital design, development with Next.js, Framer Motion, Tailwind.  </motion.p>
                        </div><br />

                        <Link href="https://ddshowcase3.netlify.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}>
                                <h2 className="paragraph text-amber-500 cursor-pointer"> website (new tab) <BsArrowUpRight /> </h2></a>
                        </Link>
                    </div>

                </section>




            </main>
        </>
    )
}

export default Work