import React from 'react'

import { motion } from 'framer-motion'

const Hero = () => {
    const titleAnimate = {
        opacity: [0, 1],
        y: [-10, 0],
        transition: { delay: 0.4, duration: 0.5 }

    }
    const scrollAnimate = {
        opacity: [0, 1],
        transition: { delay: 0.6, duration: 1.5, repeat: 2 }

    }

    return (
        <main className="h-screen flex flex-col
        justify-center items-center relative bg-stone-900">
            <section className="mix-blend-difference text-zinc-50 z-50">
                <h1 className="heroheader">digital.dan</h1>
                <motion.div animate={titleAnimate} className="pt-[4vh]">
                    Daniel Hubschmann<br />

                    <div className="flex flex-row  ">
                        Freelance
                        <span className="pl-[1vh] flex flex-col">
                            Web Developer<br />
                            Web Designer<br />

                        </span>
                    </div>


                </motion.div>

            </section>

            <div className=" md:w-[45vw] h-fit 
            flex flex-col justify-end items-end text-center
            " >




                <motion.div animate={scrollAnimate} className="text-stone-50 paragraph pt-[4vh]">
                    scroll please</motion.div>

            </div>
        </main>
    )
}

export default Hero