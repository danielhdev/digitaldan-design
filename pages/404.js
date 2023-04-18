import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'


const pageNotFound = () => {
    const borderCollapse = {
        rotate: ['0deg', '55deg'],
        y: [0, 100],
        transition: { delay: 0.5, duration: 0.3, type: 'spring', stiffness: '200' }
    }

    return (
        <main className="h-screen w-full flex flex-col justify-center items-center relative">

            <div className="absolute w-[300px] h-[300px] border-t-[2px] rounded-full
            border-[var(--stone)] dark:border-amber-400"></div>
            <motion.div animate={borderCollapse} className="absolute w-[300px] h-[300px] rounded-full
            border-r-[2px] border-[var(--stone)] dark:border-amber-400
            "></motion.div>
            <h1 className="font-[octarine] header z-20">404</h1>
            <h1 className="font-[octarine] header z-20">page not found</h1>
            <h2 className="font-[Oxygen] text-[2vw] z-20 text-amber-600">
                <Link href="/">
                    go back

                </Link>
            </h2>

        </main>
    )
}

export default pageNotFound