
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


                    <div className="w-[95vw] md:w-[70vw]">
                        <motion.h1 animate={titleAnimate} className="header">About</motion.h1>
                        <motion.div animate={paragraphAnimate} className="border-[0.15rem] border-l-0 border-b-0 border-amber-600 w-fit">
                            <p className="paragraph md:w-[60ch] text-[var(--stone)] font-bold
                            pt-4 pr-6 
                            md:pt-8 md:pr-12 
                            
                            ">
                                I'm Daniel Hubschmann from Germany,<br /> senior digital designer with over 20 years of experience.
                                <br />
                                <br />
                                Offering <span className=" text-amber-600">web design</span> ,
                                digital <span className=" text-amber-600">graphics design</span>{' '}
                                for ads, events or presentations and <span className=" text-amber-600">brand design</span>.
                                <br />
                                <br />
                                My tools are <span className=" text-amber-600">Figma, Adobe Ae, Ps, Ai, Blender, Inkscape</span>.
                                I can code in <span className=" text-amber-600">HTML, CSS, JavaScript </span>
                                and am making use of <span className=" text-amber-600">AI</span> for my work.
                                <br />
                                <br />
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