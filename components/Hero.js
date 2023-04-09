import React from 'react'

import { motion } from 'framer-motion'

const Hero = () => {
    const titleAnimate = {
        opacity: [0, 1],
        y: [-10, 0],
        transition: { delay: 0.4, duration: 0.5 }

    }


    return (
        <main className="h-[55vh] flex flex-col 
        justify-center items-center md:items-start ml-[1.5vw] relative">
            <section className="mix-blend-difference text-stone-900 z-50">

                <motion.div animate={titleAnimate} className="pt-[4vh] header text-stone-900
                ">
                    <span className="paragraph">Daniel Hubschmann   </span><br />
                    <span className="flex flex-row text-stone-700 pl-[1.5vw]">

                        Freelance
                        <span className="pl-[1rem]">Web Developer<br />
                            Web Designer<br /></span>

                    </span>


                </motion.div>

            </section>


        </main>
    )
}

export default Hero