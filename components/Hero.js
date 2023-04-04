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
        <main className="h-screen flex flex-col
        justify-center items-center relative bg-stone-900">
            <section className="mix-blend-difference text-zinc-50 z-50">
                <h1 className="heroheader">digital.dan agency</h1>
                <motion.div animate={titleAnimate} className="herosubheader">
                    Daniel Hubschmann<br />
                    Freelance Web Developer<br />  </motion.div>

            </section>
            <div className=" md:w-[45vw] h-fit 
            flex flex-col justify-end items-end text-center
            " >


                <motion.div animate={frameAnimate} className="
                pt-5 pr-[2vw] w-fit z-40 border-t-[2px] border-r-[2px] border-amber-300 
                flex flex-col">

                    <Link href="#About">
                        <span className=' text-inherit p-1 
                    cursor-pointer heroli2'

                        >service </span></Link>
                    <Link href="#Work">
                        <span className='text-inherit p-1 
                    cursor-pointer heroli1 
                    '

                        >work </span></Link>
                    <Link href="#Contact">
                        <span className=' text-inherit p-1 
                    cursor-pointer heroli3
                    '

                        >contact </span></Link>
                </motion.div>


                <div className="text-stone-50 scroll">
                    scroll please</div> </div>
        </main>
    )
}

export default Hero