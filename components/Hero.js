import React from 'react'

import { motion } from 'framer-motion'

const Hero = () => {
    const titleAnimate = {
        opacity: [0, 1],
        y: [-10, 0],
        transition: { delay: 0.4, duration: 0.5 }

    }


    return (
        <main className="h-[35vh] flex flex-col 
        justify-center items-center md:items-start ml-[1.5vw]">
            <section className="mix-blend-difference text-stone-900 z-50 mt-[10vh]">

                <motion.div animate={titleAnimate} className="paragraph font-bold
                ">
                    Graphic Design<br />
                    Brand Design<br />
                    Digital Design & Development<br />


                </motion.div>

            </section>


        </main>
    )
}

export default Hero