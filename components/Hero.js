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
                <section className="border-orange-500 border-t-[1px] border-r-[1px] bg-zinc-100
                p-4">


                    <motion.h1 animate={wedesignAnimate} className="heroheader
                        text-[#041320] flex flex-row portrait:flex-col justify-between">
                        <div className="p-[1.5vw] mt-[1.5rem]">
                            digital.dan
                        </div>
                        <div className="paragraph font-bold">
                            Daniel Hubschmann (Germany) <br />
                            Freelance web developer <br />Turning your design into code
                        </div>
                    </motion.h1>

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