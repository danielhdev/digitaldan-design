import { motion } from 'framer-motion'
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
        <main className="h-[50vh] pt-[15rem] flex flex-col
        justify-center items-center">
            <motion.section className="md:px-[2rem]">
                <section className="h-auto p-4 flex portrait:flex-col">
                    <motion.h1 animate={wedesignAnimate} className="
                        flex flex-col">
                        <Heroimage>
                            <img src="./heroimg.png"
                                alt="digital.dan Freelance web developer, UX designer, SEO and Conversion -  
                            Your success is one great user experience away"
                            >
                            </img>

                        </Heroimage>
                        <motion.div animate={wedesignAnimate2} className="font-bold herosubtext
                        mt-[0.5rem] mx-auto">
                            Web Development<br />
                            User Experience (UX)<br /> SEO & Conversion<br />


                        </motion.div>
                    </motion.h1>
                </section>
            </motion.section>
        </main>
    )
}

export default Hero