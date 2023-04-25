import { BsArrowUpRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
                                "...Every detail is important because the end result is the sum of all details..." "...Quality is there or is not there, and if it is not there we have lost our time..."
                                <br /> <span className="italic">Massimo Vignelli, from The Vignelli Canon</span>
                                <br />
                                <br />
                                Daniel Hubschmann (Germany), freelancer, senior digital designer and web developer.
                                After over two decades in design I changed careers to fullstack web development in recent years.
                                <br />
                                <br />
                                <h1 className="header">Agency for creative agencies</h1>
                                <br />
                                <div>Helping creative agencies around to world turning their ideas into well performing code.
                                    In addition my agency offers digital design services to help you reduce your workload.</div>
                                <br />
                                <ul className="header list-disc">
                                    Services:
                                    <li>Digital development <br />(JavaScript and other tools)</li>
                                    <li>Digital design <br /> (Websites, apps, ads, <br />presentations and events) </li>
                                </ul>
                                <br />  <Link href="/Contact">
                                    <h2 className="header text-amber-600 cursor-pointer">contact <BsArrowUpRight /> </h2>
                                </Link>
                            </section>
                        </motion.div>
                    </div>
                </section>

            </main >
        </>
    )
}

export default About 