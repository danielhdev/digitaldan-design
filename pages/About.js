
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
            <main className="relative h-auto py-[10vh]">
                <motion.h1
                    className="contactli1 ml-[5%]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    service
                </motion.h1>

                <section className="
                flex justify-center items-center">
                    <div className="aboutcontainer h-auto w-[95vw] lg:w-[70vw]">

                        <motion.div animate={paragraphAnimate}>
                            <section className="paragraph lg:w-[65ch] text-[var(--stone)] font-bold 
                            pt-4 pr-6 
                            md:pt-8 md:pr-12 
                                                        ">
                                Daniel Hubschmann (Germany), freelancer and senior web designer with two decades of experience.
                                I changed careers to web development in recent years.

                                <br />
                                <br />


                                I love working with creative agencies around the world, developing digital products from "just" great to cutting edge.
                                <br />
                                <br />
                                Please {' '}
                                <Link href="/Contact">
                                    <span className="text-amber-600 font-extrabold cursor-pointer uppercase
                                    border-[0.15rem] border-amber-600 px-[0.1rem]">
                                        contact</span></Link>{' '} me and let&apos;s talk about your project!

                                <br />
                                <br />
                                My Services:
                                <br />
                                <br />



                                <ul className="border-[0.15rem] border-l-0 border-b-0 border-stone-600 
                                pt-[1rem] pl-[2rem]">
                                    <span className="header">App, Web, UI Development</span>{' '}
                                    <li>with HTML, CSS, JavaScript and JavaScript libraries,</li>
                                    <li>Firebase or headless CMS as backend solutions.</li>
                                    <li>Animations and interactive design included.</li>

                                    <br />
                                    <br />


                                    <span className="header">Web Consulting</span>{' '}
                                    <li>With my long experience creating websites </li>
                                    <li>I can help you improve and optimize your project.</li>

                                </ul>

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