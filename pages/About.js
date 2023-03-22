
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
            <main>
                <section className="h-screen flex justify-center items-center">


                    <div className="w-[95vw] lg:w-[70vw]">
                        <motion.h1 animate={titleAnimate} className="header">About</motion.h1>
                        <motion.div animate={paragraphAnimate} className="border-[0.15rem] border-l-0 border-b-0 border-amber-600 w-fit">
                            <p className="paragraph lg:w-[60ch] text-[var(--stone)] font-bold
                            pt-4 pr-6 
                            md:pt-8 md:pr-12 
                            
                            ">
                                Daniel Hubschmann from Germany. Senior digital designer with over 20 years experience.
                                I offer a wide range of skills:<span className="text-amber-600 font-extrabold cursor-pointer">
                                    Brand design, app and web design, digital graphic design for ads, events and presentations
                                </span>.
                                <br />
                                <br />
                                Tools Figma, Abobe Ai/ Ps/ Ae, Blender, Inkscape. I can code with
                                HTML, CSS, JavaScript and am making use of AI for my work.
                                <br />
                                <br />
                                My current daily rate is 400 Euros. Higher rates for director and lead roles. All rates negotiable.
                                If you are looking for a reliable freelancer and/ or sub contractor, please contact me{' '}
                                <Link href="/Contact">
                                    <span className="text-amber-600 font-extrabold cursor-pointer underline">
                                        HERE  </span></Link>
                                and let&apos;s talk about your project!
                                <br />
                                <br />
                            </p>
                        </motion.div>
                    </div>
                </section>

            </main >
        </>
    )
}

export default About 