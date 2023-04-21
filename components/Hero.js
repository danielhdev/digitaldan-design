import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
        <main className="h-screen flex flex-col 
        justify-center items-start ml-[3rem]">
            <motion.section className="z-50">

                <div className="paragraph">


                    <motion.h1 animate={wedesignAnimate} className="heroheader font-bold">We design,</motion.h1>
                    <motion.h1 animate={wedesignAnimate2} className="heroheader font-bold">you sell.</motion.h1>
                    <br />
                    <motion.h2 animate={servicesAnimate}>
                        Digital Design & Development<br />
                        Brand & Graphic Design</motion.h2><br/>
                    <motion.section animate={wedesignAnimate2}
                        className="flex flex-row gap-8 link font-bold uppercase">

                        <Link href="/Work">
                            <h2 className=" text-amber-500 cursor-pointer"> work <BsArrowUpRight /></h2>
                        </Link>

                        <Link href="/About">
                            <h2 className=" text-orange-500 cursor-pointer">service <BsArrowUpRight /></h2>
                        </Link>

                        <Link href="/Contact">
                            <h2 className=" text-red-600 cursor-pointer">contact <BsArrowUpRight /> </h2>
                        </Link>
                    </motion.section>
                </div>

            </motion.section>
        </main>
    )
}

export default Hero