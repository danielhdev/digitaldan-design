import Link from 'next/link'
import { motion } from 'framer-motion'
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
                className="h-auto flex flex-col justify-center py-[20vh]">

                <section className="paragraph flex justify-center items-center md:py-[2.5rem]
                ">
                    <div>
                        <div>
                            <section className="text-[var(--stone)
                            grid lg:grid-cols-2 md:w-[80vw] w-full grid-cols-1">

                                <div>
                                    <h1 className="header">Welcome!</h1>
                                    <br />

                                    <motion.p whileInView={paragraphAnimate} className="p-5">
                                        I'm Daniel Hubschmann (Germany), freelance digital designer
                                        and digital marketer.
                                    </motion.p>

                                    <motion.p whileInView={paragraphAnimate} className="p-5">


                                        Please scroll or choose a link:
                                    </motion.p>

                                </div>
                                <div className='grid place-content-end'>
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