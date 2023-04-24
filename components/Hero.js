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

    return (
        <main className="h-screen flex flex-col 
        justify-center items-center py-[1rem]">
            <motion.section className="z-50 w-full md:px-[2rem]">
                <section className="paragraph bg-orange-500 dark:bg-zinc-100">
                    <div className="text-[#041320] flex flex-col md:flex-row">
                        <div className="flex flex-col md:justify-center md:items-center flex-1">
                            <motion.h1 animate={wedesignAnimate} className="heroheader">
                                digital.dan agency <br />quality<br />code & design
                            </motion.h1>
                        </div>
                    </div>
                </section>   <motion.section animate={wedesignAnimate2}
                    className="flex flex-row justify-between herolinks font-bold px-[2rem]">
                    <Link href="/Work">
                        <h2 className=" text-amber-600 cursor-pointer">work<BsArrowUpRight /></h2>
                    </Link>
                    <Link href="/About">
                        <h2 className=" text-amber-600 cursor-pointer">service<BsArrowUpRight /></h2>
                    </Link>
                    <Link href="/Contact">
                        <h2 className=" text-amber-600 cursor-pointer">contact<BsArrowUpRight /> </h2>
                    </Link>
                </motion.section>
            </motion.section>
        </main>
    )
}

export default Hero