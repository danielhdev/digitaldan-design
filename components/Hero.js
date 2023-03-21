import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <main className="h-screen pt-[32vh]">
            <section className="absolute top-[16vh] left-[10vw]">
                <h1 className="header">digital.dan agency</h1>
                <div className="paragraph">
                    Daniel Hubschmann<br /> digital design - brand design</div>

            </section>
            <div className="herobg bg-cover bg-center bg-no-repeat w-screen h-[60vh]
            flex flex-col justify-center items-center 
            " >

                <div className="border-l-0 border-b-0 border-[var(--stone)] text-[var(--stone)]
                 border-[0.15rem] pt-5 pr-7 w-fit
                flex flex-col">
                    <Link href="/Work">
                        <motion.span className=' text-inherit p-1 
                    cursor-pointer heroli
                    '
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            viewport={{ once: true }}
                        >work </motion.span></Link>
                    <Link href="/About">
                        <motion.span className=' text-inherit p-1 
                    cursor-pointer heroli'
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            viewport={{ once: true }}

                        >about </motion.span></Link>
                    <Link href="/Contact">
                        <motion.span className=' text-inherit p-1 
                    cursor-pointer heroli
                    '
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            viewport={{ once: true }}
                        >contact </motion.span></Link></div>



            </div>
        </main>
    )
}

export default Hero