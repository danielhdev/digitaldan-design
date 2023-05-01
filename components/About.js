import Link from 'next/link'
import { motion } from 'framer-motion'
import Borders from '@components/Borders'
import ArrowLinks from './ArrowLinks'
import { BsArrowUpRight } from 'react-icons/bs'

const About = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    return (
        <>
            <main
                className="h-auto flex flex-col justify-center">

                <section className="paragraph flex justify-center items-center md:py-[2.5rem]
                ">
                    <div>
                        <div>
                            <section className="h-auto py-[10vh] text-[var(--stone)
                            grid md:grid-cols-2 md:w-[80vw] w-full grid-cols-1">
                                <h1 className="header">Your Coder For Hire</h1>
                                <br />
                                <Borders>
                                    <motion.p whileInView={paragraphAnimate} className="p-5">
                                        I'm Daniel Hubschmann, Germany, freelancer, senior digital designer
                                        and fullstack web developer.
                                    </motion.p>

                                    <motion.p whileInView={paragraphAnimate} className="p-5">
                                        Through my background I can help you to get your design on screens.
                                        Looking for a dev for the digital part of your campaign? Let&apos;s chat!
                                        <br />
                                        <br />
                                        Please scroll or choose a link:
                                    </motion.p>
                                </Borders>


                                <div className='p-[2rem] portrait:px-0'>
                                    <ArrowLinks>
                                        <Link href="#Work"
                                        >
                                            <a>
                                                <ArrowLinks
                                                >
                                                    Show me your work! <BsArrowUpRight /> </ArrowLinks>  </a>
                                        </Link>
                                        <Link href="#About"
                                        >
                                            <a>
                                                <ArrowLinks >
                                                    What services do you offer? <BsArrowUpRight /> </ArrowLinks>  </a>
                                        </Link>
                                        <Link href="#Contact"
                                        >
                                            <a  >
                                                <ArrowLinks >
                                                    How can I contact you? <BsArrowUpRight /> </ArrowLinks>  </a>
                                        </Link>
                                    </ArrowLinks>
                                </div>
                                <br />

                            </section>

                        </div>
                    </div>
                </section>




            </main >
        </>
    )
}

export default About 