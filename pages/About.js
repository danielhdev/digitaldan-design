
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
                <section className="h-screen flex justify-center items-center">
                    <section className="absolute top-[10vh] lg:left-[10vw]">
                        <motion.h1 animate={titleAnimate}
                            className="header"
                        >about</motion.h1>
                    </section>
                    <h1 className="aboutbgdd tracking-widest absolute top-[10vw] right-[12vw] opacity-10">d.d</h1>

                    <div className="aboutcontainer w-[95vw] lg:w-[70vw]">

                        <motion.div animate={paragraphAnimate} className="border-[0.15rem] border-l-0 border-b-0 border-amber-600 w-fit">
                            <section className="paragraph lg:w-[60ch] text-[var(--stone)]
                            pt-4 pr-6 
                            md:pt-8 md:pr-12 
                            
                            ">
                                Daniel Hubschmann from Germany. <br />Senior graphic and web designer with over two decades experience.
                                I added web development to my skillset in the recent years.
                                <br />
                                <br />

                                Skills:{' '}<span className="text-amber-700 font-extrabold">
                                    App/ web/ UI design & development. Including user journeys, wireframing, branding, visual design and animations
                                </span>.
                                <br />


                                Tools: <span className="text-amber-700 font-extrabold">Figma, Abobe Ai/ Ps/ Ae, Inkscape,
                                    HTML, CSS, JavaScript, BaaS like Firebase, headless CMS. I have experience with more tech like Webflow and am using AIs</span>.
                                <br />
                                <br />

                                I&apos;m your reliable web designer/ web developer hybrid, available for contract and freelance work.
                                Please contact me{' '}
                                <Link href="/Contact">
                                    <span className="text-amber-600 font-extrabold cursor-pointer underline">
                                        HERE</span></Link>{' '}
                                and let&apos;s talk about your project!
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