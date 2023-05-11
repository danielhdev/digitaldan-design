import { motion } from 'framer-motion'
import ScrollArrow from './ScrollArrow'
import Heroimage from '@components/Heroimage';

const Hero = () => {
    const wedesignAnimate = {
        opacity: [0, 1],
        x: [10, 0],
        transition: { delay: 0.5, duration: 1 },
        ease: "ease-in"
    }
    const wedesignAnimate2 = {
        opacity: [0, 1],
        x: [10, 0],
        transition: { delay: 1, duration: 0.75 },
        ease: "ease-in"
    }
    return (
        <main className="h-screen py-[10rem] lg:py-[2rem] flex flex-col
        justify-center items-center">
            <motion.section className="w-full md:px-[2rem]">
                <section className="h-auto p-4 flex portrait:flex-col">
                    <motion.h1 animate={wedesignAnimate} className="
                        flex flex-col">
                        <Heroimage>
                            <img src="./heroimg.png" alt="digital.dan design & marketing agency -  Your success is one great image away" />
                        </Heroimage>
                        <motion.div animate={wedesignAnimate2} className="font-bold herosubtext
                        mt-[0.5rem] mx-auto">
                            Digital Design & Digital Marketing<br />
                            Scroll Please<br />

                        </motion.div>
                    </motion.h1>
                </section>
            </motion.section>
        </main>
    )
}

export default Hero