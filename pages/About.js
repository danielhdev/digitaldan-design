
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
                    <h1 className="aboutbgdd tracking-widest absolute top-[10vw] right-[12vw] opacity-25">d.d</h1>

                    <div className="aboutcontainer w-[95vw] lg:w-[70vw]">
                        <motion.h1 animate={titleAnimate} className="header">About</motion.h1>
                        <motion.div animate={paragraphAnimate} className="border-[0.15rem] border-l-0 border-b-0 border-amber-600 w-fit">
                            <p className="paragraph lg:w-[60ch] text-[var(--stone)]
                            pt-4 pr-6 
                            md:pt-8 md:pr-12 
                            
                            ">
                                Daniel Hubschmann from Germany. <br />Senior multidisciplinary designer with over 20 years experience.
                                <br />
                                <br />

                                Skills:{' '}<span className="text-amber-600 font-extrabold">
                                    App/ web/ UI design, brand & graphic design
                                </span>.
                                <br />

                                Tools: <span className="text-amber-600 font-extrabold">Figma, Abobe Ai/ Ps/ Ae, Blender, Inkscape.
                                    <br />HTML, CSS, JavaScript, DALL-E and other AIs</span>.
                                <br />
                                <br />
                                Looking forward to working with agencies around the world.
                                If you are in search of a reliable freelancer or sub contractor, please contact me{' '}
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