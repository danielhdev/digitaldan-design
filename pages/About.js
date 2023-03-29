
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
            <main className="relative">
                <div className="aboutbgdd tracking-wide top-[10vw] right-[12vw] opacity-10 absolute">d.d</div>
                <section className="h-screen
                flex justify-center items-center">
                    <div className="aboutcontainer h-auto w-[95vw] lg:w-[70vw]">

                        <motion.div animate={paragraphAnimate}>
                            <section className="paragraph lg:w-[60ch] text-[var(--stone)] font-bold
                            pt-4 pr-6 
                            md:pt-8 md:pr-12 
                                                        ">
                                I&apos;m Daniel Hubschmann (Germany), senior UI and web designer with over two decades of experience.
                                My knowledge of frontend development make my designs easy to put into production.
                                <br />
                                <br />
                                I work remote around the world, onsite in Berlin/ Germany.
                                Daily rate 400 Euros, discounts for longer contracts (10+ days).
                                <br />
                                <br />
                                Please {' '}
                                <Link href="/Contact">
                                    <span className="text-amber-600 font-extrabold cursor-pointer uppercase
                                    border-[0.15rem] border-amber-600 px-[0.1rem]">
                                        contact</span></Link>{' '} me and let&apos;s talk about how I can support you!
                                <br />
                                <br />

                                <ul className="list-disc border-[0.15rem] border-l-0 border-b-0 border-amber-600 pt-[1rem] pl-[2rem]">
                                    <span className="font-bold">Skills & Tools:</span>{' '}
                                    <li>App/ web/ UI design </li>
                                    <li>Visual & brand design </li>
                                    <li>Customer journeys & wireframing </li>
                                    <li>Figma, Adobe Ae/ Ps/ Ai, Blender, Inkscape </li>
                                    <li>HTML, CSS & basic JavaScript</li>
                                    <li>Webflow & Wordpress</li>
                                    <li>Chat GPT & other AIs</li>
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