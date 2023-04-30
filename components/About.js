
import { motion } from 'framer-motion'
import Borders from '@components/Borders'

const About = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [5, 0],
        transition: { delay: 0.2, duration: 0.6 }
    }
    return (
        <>
            <main
                className="h-auto flex flex-col justify-center">
                <section className="paragraph flex justify-center items-center md:py-[2.5rem]">
                    <div>
                        <motion.div animate={paragraphAnimate}>
                            <section className="h-auto py-[10vh] text-[var(--stone) px-[4vw]
                            md:w-[60vw] portrait:w-full">
                                <h1 className="header">About</h1>
                                <br />
                                <Borders><div className="p-2">
                                    Daniel Hubschmann, Germany, freelancer, senior digital designer and web developer.
                                    After over two decades in design I changed careers to fullstack web development in recent years.</div></Borders>
                                <br />
                                <br />
                                <h1 className="header">Your Creative Coder For Hire</h1>
                                <br />
                                <Borders>
                                    <div className="p-2">Through my background I can help agencies,
                                        start ups and everyone else get their design on user screens.</div>
                                </Borders>
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