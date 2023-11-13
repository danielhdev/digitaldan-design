import { motion } from 'framer-motion'
import ScrollArrow from './utility/ScrollArrow';


const Hero = () => {
    const introAnimate = {
        opacity: [0, 1],
        x: [10, 0],
        transition: { delay: 0.2, duration: 1 },
        ease: "ease-in"
    }
    const introAnimate2 = {
        opacity: [0, 1],
        x: [10, 0],
        transition: { delay: 0.2, duration: 0.75 },
        ease: "ease-in"
    }

    return (
        <>
            <div className="h-[20vh] pt-[2vh] flex flex-col 
        justify-start items-start">
                <motion.div className="px-[2rem] pt-[5rem]">
                    <div>
                        <motion.h1 animate={introAnimate} className="flex flex-col">
                            <motion.div animate={introAnimate2} className="font-bold subheader
                        lg:ml-[0.25rem] mt-[2rem] mx-auto">
                                <div className="herotitle inline">
                                    <span className="herotitle2">Portfolio</span>
                                    <br />Daniel Hubschmann
                                </div>
                                <br /> Full Stack Developer
                                <div className="mt-[1rem]">
                                    <ScrollArrow /></div>
                            </motion.div>
                        </motion.h1>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Hero