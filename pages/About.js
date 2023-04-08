
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
            <main
                id="About"
                className="relative h-auto py-[10vh]">
                <motion.h1
                    className="aboutheader ml-[5%]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}

                >
                    service
                </motion.h1 >

                <section className="
                flex justify-center items-center">
                    <div className="aboutcontainer h-auto py-[5rem] w-[95vw] lg:w-[70vw]">

                        <motion.div animate={paragraphAnimate}>
                            <section className="h-auto py-[5vh] paragraph lg:w-[65ch] text-[var(--stone) 
                            pt-4 pr-6 
                            md:pt-8 md:pr-12 
                                                        ">
                                Daniel Hubschmann (Germany), freelancer, web designer and creative developer with two decades of experience.
                                I'm a JavaScript/ Jamstack fullstack developer fit in CSS and UI animations.
                                <br />
                                <br />

                                <ul> You can hire me for
                                    <li>Art direction</li>
                                    <li>Web/ UI design</li>
                                    <li>Web/ UI development</li>
                                    <li>Web consultation</li>



                                </ul>


                                <br />
                                <div>One role or combined.</div>
                                Please {' '}
                                <Link href="#Contact">
                                    <span className="text-amber-600 font-extrabold cursor-pointer uppercase
                                    border-[0.15rem] border-amber-600 px-[0.1rem]">
                                        contact</span></Link>{' '} me and let&apos;s talk about your project!

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