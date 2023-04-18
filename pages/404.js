import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'


const pageNotFound = () => {
    const Collapse = {
        rotate: ['0deg', '15deg'],
        y: [0, 10],
        transition: { delay: 0.75, duration: 0.3, type: 'spring', stiffness: '200' }
    }

    return (
        <main className="h-screen w-full flex flex-col justify-center items-center text-center">

            <div></div>
            <div className="
            "></div>
            <h1 className="font-[octarine] workheader z-20">404</h1>
            <motion.h1 animate={Collapse} className="font-[octarine] workheader z-20">page not found</motion.h1>
            <h2 className="font-[Oxygen] text-[2vw] z-20 text-amber-600">
                <Link href="/">
                    go back

                </Link>
            </h2>

        </main>
    )
}

export default pageNotFound