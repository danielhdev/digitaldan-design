import { BsArrowUpRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Borders from '@components/Borders'
import ArrowLinks from '@components/ArrowLinks'

const About = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [5, 0],
        transition: { delay: 0.2, duration: 0.6 }
    }
    return (
        <>
            <main
                id="About"
                className="h-auto pt-[2.5rem] flex flex-col justify-center">
                <section className="paragraph flex justify-center items-center md:py-[2.5rem]">
                    <div className="aboutcontainer w-[95vw] lg:w-[70vw]">
                        <motion.div animate={paragraphAnimate}>
                            <section className="h-auto py-[10vh] lg:w-[65ch] text-[var(--stone) px-[4vw]">
                                <h1 className="header">About</h1>
                                <br />
                                <Borders><div className="pt-2 pr-1">
                                    "...Every detail is important because the end result is the sum of all details..." "...Quality is there or is not there, and if it is not there we have lost our time..."
                                    <br /> <span className="italic">Massimo Vignelli, from The Vignelli Canon</span>
                                    <br />
                                    <br />
                                    Daniel Hubschmann, Germany, freelancer, senior digital designer and web developer.
                                    After over two decades in design I changed careers to fullstack web development in recent years.</div></Borders>
                                <br />
                                <br />
                                <h1 className="header">Your Coders For Hire</h1>
                                <br />
                                <Borders>
                                    <div className="pt-2 pr-1">No matter if creative agency or start up: I will help you turn your ideas into code. I work with other freelance developers to cover every kind of project.</div></Borders>
                                <br />
                                <ul className="header list-disc py-[5vh] md:py-[10vh]">
                                    Services:
                                    <li>Digital development <br />(React/ JavaScript)</li>
                                    <li>Digital design <br /> (Websites, apps, ads, <br />presentations and events) </li>
                                    <br />  <Link href="/Contact">
                                        <a>
                                            <ArrowLinks>
                                                contact <BsArrowUpRight />
                                            </ArrowLinks>
                                        </a>
                                    </Link>
                                </ul>
                            </section>
                        </motion.div>
                    </div>
                </section>

            </main >
        </>
    )
}

export default About 