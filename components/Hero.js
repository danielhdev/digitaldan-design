import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
    const titleAnimate = {
        opacity: [0, 1],
        y: [-10, 0],
        transition: { delay: 0.4, duration: 0.5 }

    }
    const frameAnimate = {
        opacity: [0, 1],
        transition: { delay: 0.2, duration: 1 }

    }

    return (
        <main className="h-screen flex justify-center items-center relative darkbg">
            <section className="absolute top-[12vh] md:top-[10vh] left-[2.5vw]
            mix-blend-difference text-zinc-50 z-50">
                <h1 className="heroheader">digital.dan agency</h1>
                <motion.div animate={titleAnimate} className="herosubheader">
                    Daniel Hubschmann<br />
                    Freelance Web Developer<br />  </motion.div>

            </section>
            <div className=" w-screen h-[55vh]
            flex flex-col justify-center items-center text-center
            " >


                <motion.div animate={frameAnimate} className="
                pt-5 pr-[3vw] w-fit z-40
                flex flex-col">

                    <Link href="/About">
                        <span className=' text-inherit p-1 
                    cursor-pointer heroli2'

                        >service </span></Link>
                    <Link href="/Work">
                        <span className='text-inherit p-1 
                    cursor-pointer heroli1 
                    '

                        >work </span></Link>
                    <Link href="/Contact">
                        <span className=' text-inherit p-1 
                    cursor-pointer heroli3
                    '

                        >contact </span></Link>
                </motion.div>
            </div>
        </main>
    )
}

export default Hero