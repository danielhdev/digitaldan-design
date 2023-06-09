import { motion } from 'framer-motion'
import ScrollArrow from './ScrollArrow';


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
        <main className="h-[20vh] pt-[2vh] flex flex-col
        justify-start items-start">
            <motion.section className="px-[2rem] pt-[5rem]">
                <section>
                    <motion.h1 animate={wedesignAnimate} className="flex flex-col heroheader">

                        <motion.div animate={wedesignAnimate2} className="font-bold subheader
                        mt-[2rem] mx-auto">
                            Portfolio Daniel Hubschmann (Germany) <br /> Art Director & Designer
                            <div className="mt-[1rem]">
                                <ScrollArrow /></div>
                        </motion.div>
                    </motion.h1>
                </section>
            </motion.section>
        </main>
    )
}

export default Hero