import { motion } from 'framer-motion'
import ScrollArrow from './ScrollArrow';
import Typeanimation from './Typeanimation';


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
            <motion.section className="md:px-[2rem] lg:pt-[5rem]">
                <section>
                    <motion.h1 animate={wedesignAnimate} className="flex flex-col heroheader">
                        <div className="flex flex-col justify-center items-center">
                            <Typeanimation /><br />
                            Design</div>
                        <motion.div animate={wedesignAnimate2} className="font-bold herosubtext
                        mt-[2.5rem] mx-auto text-center flex flex-col items-center">
                            Daniel Hubschmann (Germany)
                            <div className="h-[2rem]"></div>
                            <ScrollArrow />
                        </motion.div>
                    </motion.h1>
                </section>
            </motion.section>
        </main>
    )
}

export default Hero