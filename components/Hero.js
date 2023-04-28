import { motion } from 'framer-motion'


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
        justify-center items-center py-[1rem]">
            <motion.section className="z-50 w-full md:px-[2rem]">
                <section className="border-orange-500 border-t-[1px] border-r-[1px]
                p-4">


                    <motion.h1 animate={wedesignAnimate} className="heroheader
                        flex flex-col justify-between">
                        <div className="py-[1.5vw] mt-[1.5rem]">
                            digital.dan
                        </div>
                        <motion.div animate={wedesignAnimate2} className="font-bold headertagline">
                            Daniel Hubschmann (Germany) <br />
                            Freelance web developer <br />Turning your design into code
                        </motion.div>


                    </motion.h1>

                </section>
            </motion.section>
        </main>
    )
}

export default Hero