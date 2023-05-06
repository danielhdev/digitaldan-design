import { motion } from 'framer-motion'
import ArrowLinks from './ArrowLinks'
import { BsArrowUpRight } from 'react-icons/bs'
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
            <motion.section className="w-full md:px-[2rem]">
                <section className="p-4 flex portrait:flex-col">
                    <motion.h1 animate={wedesignAnimate} className="heroheader
                        flex flex-col">
                        <div className="mt-[1.5rem]">
                            digital.dan
                        </div>
                        <motion.div animate={wedesignAnimate2} className="font-bold herosubtext mt-[1rem]
                        md:mt-[0.5rem]">
                            Digital Agency <br />
                            Digital Design & Marketing  <br />Success is just one great image away
                        </motion.div>
                    </motion.h1>
                    <div className='md:w-[50%] md:pt-12 grid place-content-center'>
                        <ArrowLinks>
                            <Link href="#Work"
                            >
                                <a>
                                    <ArrowLinks
                                    >
                                        work <BsArrowUpRight /> </ArrowLinks>  </a>
                            </Link>
                            <Link href="#About"
                            >
                                <a>
                                    <ArrowLinks >
                                        services <BsArrowUpRight /> </ArrowLinks>  </a>
                            </Link>
                            <Link href="#Contact"
                            >
                                <a  >
                                    <ArrowLinks >
                                        contact <BsArrowUpRight /> </ArrowLinks>  </a>
                            </Link>
                        </ArrowLinks>
                    </div>
                </section>
            </motion.section>
        </main>
    )
}

export default Hero