
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
            <main className="relative h-auto py-[15vh] md:py-[5vh]">
                <div className="aboutbgdd tracking-wide top-[10vw] right-[12vw] opacity-10 absolute">d.d</div>
                <section className="
                flex justify-center items-center">
                    <div className="aboutcontainer h-auto w-[95vw] lg:w-[70vw]">

                        <motion.div animate={paragraphAnimate}>
                            <section className="paragraph lg:w-[60ch] text-[var(--stone)] font-bold
                            pt-4 pr-6 
                            md:pt-8 md:pr-12 
                                                        ">
                                I&apos;m Daniel Hubschmann (Germany), senior web designer with over two decades of experience. I changed careers to creative development in recent years, making me a good partner for agencies.
                                I&apos;m your dev not afraid of CSS and design.
                                <br />
                                <br />

                                <ul className="list-disc border-[0.15rem] border-l-0 border-b-0 border-amber-600 
                                pt-[1rem] pl-[2rem]">
                                    <span className="font-bold header">Skills & Tools</span>{' '}
                                    <li>App, UI, web development</li>

                                    <li>HTML, CSS & JavaScript</li>
                                    <li>Gsap & Framer Motion</li>
                                    <li>React & Next.js</li>
                                    <li>Firebase & headless CMS (Sanity)</li>
                                    <li>Figma</li>
                                    <li>Chat GPT & other AIs</li>
                                </ul>
                                <br />
                                <br />
                                I work remote around the world, onsite in Berlin/ Germany.
                                Freelance rate 60 Euro/ hour, discounts for longer contracts.
                                <br />
                                <br />
                                Please {' '}
                                <Link href="/Contact">
                                    <span className="text-amber-600 font-extrabold cursor-pointer uppercase
                                    border-[0.15rem] border-amber-600 px-[0.1rem]">
                                        contact</span></Link>{' '} me and let&apos;s talk about how I can support you!
                                <br />
                                <br />
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