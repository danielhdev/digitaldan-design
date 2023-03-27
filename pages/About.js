
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

                <section className="h-screen  md:h-[120vh]
                flex justify-center items-center">

                    <h1 className="aboutbgdd tracking-wide absolute top-[10vw] right-[12vw] opacity-10">d.d</h1>

                    <div className="aboutcontainer h-auto w-[95vw] lg:w-[70vw]">

                        <motion.div animate={paragraphAnimate} className="">
                            <section className="paragraph lg:w-[60ch] text-[var(--stone)] font-bold
                            pt-4 pr-6 
                            md:pt-8 md:pr-12 
                            
                            ">
                                I&apos;m Daniel Hubschmann (Germany), freelance senior web designer now creative developer.
                                I'm your dev in love with CSS and design, helping you to get your ideas to the user&apos;s screens.

                                <br />
                                <br /><ul className="list border-[0.15rem] border-l-0 border-b-0 border-amber-600 w-fit pt-[1rem] pr-[2rem]">
                                    <span className="font-bold">Skills:</span>{' '}
                                    <li> App/ web/ UI development </li>
                                    <li> Interactive/ UI animations  </li>
                                    <br />
                                    <span className="font-bold">
                                        Tools:</span>{' '}
                                    <li>HTML, CSS, JavaScript & JS frameworks</li>
                                    <li>Wordpress & Webflow</li>
                                    <li>  BaaS like Firebase,
                                        headless CMS </li>
                                    <li> Gsap, Framer Motion</li>
                                    <li> Chat GPT and other AIs</li>
                                </ul>
                                <br />
                                I work remotly around the world and onsite in Berlin/ Germany.<br />
                                Current daily rate 500 Euros, discounts for longer contracts (10+ days).
                                <br />
                                <br />

                                Please {' '}
                                <Link href="/Contact">
                                    <span className="text-amber-600 font-extrabold cursor-pointer uppercase
                                    border-[0.15rem] border-amber-600 px-[0.1rem]">
                                        contact me</span></Link>{' '} and let&apos;s talk about your project!
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