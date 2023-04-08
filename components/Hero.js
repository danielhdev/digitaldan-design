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
        <main className="h-[55vh] flex flex-col 
        justify-center items-center md:items-start ml-[2.5vw] relative">
            <section className="mix-blend-difference text-stone-900 z-50">

                <motion.div animate={titleAnimate} className="pt-[4vh] paragraph">
                    Daniel Hubschmann<br />

                    <div className="flex flex-row header text-stone-900 ">
                        Freelance
                        <span className="flex flex-col text-stone-700">
                            Web Developer<br />
                            Web Designer<br />

                        </span>
                    </div>

                </motion.div>

            </section>


        </main>
    )
}

export default Hero