import { motion } from 'framer-motion'
import ScrollArrow from './ScrollArrow'

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
        <main className="h-screen flex flex-col
        justify-center items-center">
            <motion.section className="w-full md:px-[2rem]">
                <section className="p-4 flex portrait:flex-col">
                    <motion.h1 animate={wedesignAnimate} className="heroheader
                        flex flex-col">
                        <div className="mt-[1.5rem]">
                            digital.dan
                        </div>
                        <motion.div animate={wedesignAnimate2} className="font-bold herosubtext
                        mt-[0.5rem]">
                            Digital Design & Digital Marketing<br />
                            Your success is one great image away<br />
                     
                        </motion.div>
                    </motion.h1>
                </section>
                <div className="w-[95vw] mx-auto">
                    <ScrollArrow /></div>
            </motion.section>
        </main>
    )
}

export default Hero