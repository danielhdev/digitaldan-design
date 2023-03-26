
import Link from 'next/link'
import { motion } from 'framer-motion'

const About = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [5, 0],
        transition: { delay: 0.2, duration: 0.6 }
    }
    const titleAnimate = {
        opacity: [0, 1],
        x: [-5, 0],
        transition: { delay: 0.4, duration: 1 }
    }
    return (
        <>
            <main className="relative">
                <section className="absolute top-[10vh] lg:left-[10vw]">
                    <motion.h1 animate={titleAnimate}
                        className="header"
                    >about</motion.h1>
                </section>

                <section className="h-screen  md:h-[120vh]
                flex justify-center items-center">

                    <h1 className="aboutbgdd tracking-widest absolute top-[10vw] right-[12vw] opacity-10">d.d</h1>

                    <div className="aboutcontainer h-auto w-[95vw] lg:w-[70vw]">

                        <motion.div animate={paragraphAnimate} className="border-[0.15rem] border-l-0 border-b-0 border-amber-600 w-fit">
                            <section className="paragraph lg:w-[60ch] text-[var(--stone)] font-bold
                            pt-4 pr-6 
                            md:pt-8 md:pr-12 
                            
                            ">
                                I&apos;m Daniel Hubschmann (Germany), freelance senior graphic and
                                web designer with over two decades of experience.

                                <br />
                                <br />
                                <span className="font-bold">

                                    <ul className="list-disc"></ul>

                                    Skills:</span>{' '}
                                <li>  App/ web/ UI design & development </li>
                                <li> Customer journeys, wireframes</li>
                                <li>Brand design</li>

                                <li>Visual design & animations  </li>

                                <span className="font-bold">
                                    Tools:</span>{' '}
                                <li> Figma, Abobe Ai/ Ps/ Ae, Inkscape </li>
                                <li>HTML, CSS, JavaScript & JS frameworks</li>
                                <li>Wordpress & Webflow</li>
                                <li>  BaaS like Firebase,
                                    headless CMS </li>
                                <br />
                                I work remote around the world.<br />

                                Please {' '}
                                <Link href="/Contact">
                                    <span className="text-amber-600 font-extrabold cursor-pointer uppercase
                                    border-[0.15rem] border-amber-600 p-[0.1rem]">
                                        contact me</span></Link>{' '} for my rates
                                or let&apos;s talk about your project!
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