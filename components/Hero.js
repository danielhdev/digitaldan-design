import { motion } from 'framer-motion'
import Heroimage from '@components/Heroimage';
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
        <main className="h-screen flex flex-col
        justify-center items-center">
            <motion.section className="md:px-[2rem]">
                <section>
                    <motion.h1 animate={wedesignAnimate} className="flex flex-col">
                        <Heroimage>
                            <img src="./heroimg.png"
                                alt="Digital.dan Digital Design Agency, UX/ UI, Web Design, Adverstisement, Social Media Content,  -  
                            Your success is one great user experience away"
                            >
                            </img>
                        </Heroimage>
                        <motion.div animate={wedesignAnimate2} className="font-bold herosubtext
                        mt-[2.5rem] mx-auto">
                            Digital Design Agency
                            <ScrollArrow />
                        </motion.div>
                    </motion.h1>
                </section>
            </motion.section>
        </main>
    )
}

export default Hero