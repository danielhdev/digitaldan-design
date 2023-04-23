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
                                <br/>
                                <br/>
                                Daniel Hubschmann (Germany), freelancer, senior multidisciplinary designer and web developer.
                                Helping clients with my over two decades of experience.   In my remote-only agency I work with professionals from around the world.
                                <br />
                                <br />
                                <span className="font-bold">I believe in timeless design over trends, using classic rules.
                                    Your investment will pay off for many years thanks to great, timeless design.</span>
                                <br />
                                <br />
                                <ul className="header list-disc">
                                    Services:
                                    <li>Art direction</li>
                                    <li>Brand design</li>
                                    <li>Digital design <br /> (Websites, apps, ads, <br />presentations and events) </li>
                                    <li>Digital development <br />(JavaScript and other tools)</li>
                                    <li>Graphic design</li>
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