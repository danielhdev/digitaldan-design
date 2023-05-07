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
        justify-center items-center">
            <motion.section className="w-full md:px-[2rem]">
                <section className="p-4 flex portrait:flex-col">
                    <motion.h1 animate={wedesignAnimate} className="heroheader
                        flex flex-col">
                        <div className="mt-[1.5rem]">
                            digital.dan
                        </div>
                        <motion.div animate={wedesignAnimate2} className="font-bold herosubtext
                        mt-[0.5rem]">
                            Daniel Hubschmann (Germany) <br />
                            Freelance Web Developer<br />
                            Bringing your design on user screens<br />
                            Let&apos;s chat about your project!
                        </motion.div>
                    </motion.h1>
                    <div className='md:w-[50%] grid lg:place-content-center'>

                        <Link href="/Case1/Ubg"
                        >
                            <a>
                                <ArrowLinks
                                >
                                    Upper Burger Grill <BsArrowUpRight /> </ArrowLinks>  </a>
                        </Link>
                        <Link href="/Case3/AS"
                        >
                            <a>
                                <ArrowLinks >
                                    Photographer portfolio <BsArrowUpRight /> </ArrowLinks>  </a>
                        </Link>
                        <Link href="https://food-health-one-seven.vercel.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}> <ArrowLinks >Beauty landing page (new tab)
                                    <BsArrowUpRight /> </ArrowLinks>  </a>
                        </Link>
                        <Link href="https://ddshowcase3.netlify.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}>
                                <ArrowLinks>
                                    Developer portfolio (new tab) <BsArrowUpRight />
                                </ArrowLinks></a>
                        </Link>

                    </div>
                </section>
            </motion.section>
        </main>
    )
}

export default Hero