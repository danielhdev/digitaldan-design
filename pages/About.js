
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
                className="h-auto pt-[5rem] flex flex-col justify-center">
                <motion.h1
                    className="aboutheader font-bold ml-[5%]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    service
                </motion.h1 >

                <section className="paragraph flex justify-center items-center md:py-[2.5rem]">
                    <div className="aboutcontainer w-[95vw] lg:w-[70vw]">

                        <motion.div animate={paragraphAnimate}>
                            <section className="h-auto pt-[10vh] pb-[15vh] lg:w-[65ch] text-[var(--stone) px-[4vw]
                         
                                                        ">
                                Daniel Hubschmann (Germany), freelancer, senior multidisciplinary designer and web developer.

                                Helping out clients with my over two decades of experience. In my remote-only agency I work with professionals from around the world.
                                <br />
                                <br />

                                <ul className="header list-disc">

                                    <li>Digital design of <br /> websites, apps, <br />advertising and UIs </li>
                                    <li>Digital development</li>
                                    <li>Art direction</li>
                                    <li>Graphic design</li>
                                    <li>Brand design</li>
                                </ul>
                                <br />

                                Please {' '}
                                <Link href="/Contact">
                                    <span className="dark:text-amber-400 text-amber-900 font-extrabold cursor-pointer uppercase
                                    border-[0.15rem] dark:border-amber-400 border-amber-900 px-[0.1rem]">
                                        contact</span></Link>{' '} me <br />and let&apos;s talk about your project!

                                <br />
                                <br />
                            </section>
                        </motion.div>
                    </div>
                </section>

            </main >
        </>
    )
}

export default About 