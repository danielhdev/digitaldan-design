
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
                <div className="aboutbgdd tracking-wide top-[10vw] right-[12vw] opacity-10 absolute">d.d</div>
                <section className="
                flex justify-center items-center">
                    <div className="aboutcontainer h-auto w-[95vw] lg:w-[70vw]">

                        <motion.div animate={paragraphAnimate}>
                            <section className="paragraph lg:w-[65ch] text-[var(--stone)] font-bold 
                            pt-4 pr-6 
                            md:pt-8 md:pr-12 
                                                        ">
                                Daniel Hubschmann (Germany), senior web designer with two decades of experience.
                                I changed careers to web development in recent years.
                                My background makes me your partner for bringing designs on user screens.
                                <br />
                                <br />
                                My Services:
                                <br />
                                <br />



                                <ul className="border-[0.15rem] border-l-0 border-b-0 border-amber-600 
                                pt-[1rem] pl-[2rem]">
                                    <span className="header">Web Development</span>{' '}
                                    <li>with HTML, CSS, JavaScript and JavaScript libraries,</li>
                                    <li>Firebase or Prismic CMS as backend solutions.</li>
                                    <li>Animations and interactive design included.</li>

                                    <br />
                                    <br />


                                    <span className="header">Web Consulting</span>{' '}
                                    <li>With my long experience creating websites </li>
                                    <li>I can help you improve your current online presence.</li>

                                </ul>

                                <br />
                                <br />
                                Please {' '}
                                <Link href="/Contact">
                                    <span className="text-amber-600 font-extrabold cursor-pointer uppercase
                                    border-[0.15rem] border-amber-600 px-[0.1rem]">
                                        contact</span></Link>{' '} me and let&apos;s talk about your project!

                            </section>
                        </motion.div>
                    </div>
                </section>

            </main >
        </>
    )
}

export default About 