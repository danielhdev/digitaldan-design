import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsGlobe } from 'react-icons/bs'

const Hero = () => {
    const titleAnimate = {
        opacity: [0, 1],
        y: [10, 0],
        transition: { delay: 0.4, duration: 0.5 }

    }
    const frameAnimate = {

        y: [-10, 0],
        transition: { delay: 0.2, duration: 1 }

    }

    return (
        <main className="h-screen pt-[32vh] relative">
            <section className="absolute top-[12vh] md:top-[10vh] left-[2.5vw] md:left-[10vw]">
                <h1 className="header">digital.dan agency</h1>
                <motion.div animate={titleAnimate} className="paragraph">
                    UI/ Web Design & Development <br />
                    <span className="flex gap-2 items-center"> Digital Values For The World<BsGlobe /></span>  </motion.div>

            </section>
            <div className="herobg2 bg-cover bg-center bg-no-repeat w-screen h-[55vh]
            flex flex-col justify-center items-center 
            " >


                <motion.div animate={frameAnimate} className="border-l-0 border-b-0 border-amber-400 text-amber-400
                 border-[0.15rem] pt-5 pr-[3vw] w-fit z-40
                flex flex-col">
                    <Link href="/Work">
                        <motion.span className='text-inherit p-1 
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

                        >service </motion.span></Link>
                    <Link href="/Contact">
                        <motion.span className=' text-inherit p-1 
                    cursor-pointer heroli
                    '
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            viewport={{ once: true }}
                        >contact </motion.span></Link>
                </motion.div>




            </div>
        </main>
    )
}

export default Hero