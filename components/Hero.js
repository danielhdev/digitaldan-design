import React from 'react'

import { easeIn, motion } from 'framer-motion'

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
    const servicesAnimate = {
        opacity: [0, 1],
        y: [-5, 0],
        transition: { delay: 1.1, duration: 0.75 }

    }


    return (
        <main className="h-[90vh] flex flex-col 
        justify-center items-start ml-[3rem]">
            <section className="z-50 mt-[15vh]">

                <div className="paragraph">


                    <motion.h1 animate={wedesignAnimate} className="aboutheader font-bold">We design,</motion.h1>
                    <motion.h1 animate={wedesignAnimate2} className="aboutheader font-bold">you sell.</motion.h1><br />

                    <motion.h2 animate={servicesAnimate}>
                        Digital Design & Development<br />
                        Brand & Graphic Design</motion.h2>
                    <br />
                    <br />
                    <h2 className="link text-amber-900 dark:text-amber-400">scroll please</h2>
                </div>

            </section>
        </main>
    )
}

export default Hero