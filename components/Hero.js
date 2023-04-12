import React from 'react'

import { motion } from 'framer-motion'

const Hero = () => {
    const titleAnimate = {
        opacity: [0, 1],
        y: [-10, 0],
        transition: { delay: 0.4, duration: 0.5 }

    }


    return (
        <main className="h-[90vh] flex flex-col 
        justify-center items-start ml-[1.5vw]">
            <section className="z-50 mt-[15vh]">

                <motion.div animate={titleAnimate} className="paragraph">

                    Digital Design & Development<br />
                    Graphic & Brand Design
                    <br />
                    <span className="aboutheader font-bold">We design,<br /> you sell</span>
                    <br />
                    <h2 className="link text-amber-900 dark:text-amber-400">scroll please</h2>
                </motion.div>

            </section>
        </main>
    )
}

export default Hero