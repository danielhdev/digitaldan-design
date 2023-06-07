import Link from 'next/link'
import { motion } from 'framer-motion'
import ArrowLinks from './ArrowLinks'
import { BsArrowUpRight } from 'react-icons/bs'

const About = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    return (
        <>
            <main
                className="h-auto flex flex-col justify-center 
                pt-[10vh] pb-[20vh] lg:py-[25vh]
                ">
                <section className="paragraph flex justify-center items-start md:py-[2.5rem]
                ">
                    <div>
                        <div>
                            <section className="text-[var(--stone) md:w-[80vw] w-full">

                                <div className='grid place-content-start header'>
                                    <motion.h1 whileInView={paragraphAnimate} className="title mb-[10%]">
                                        Welcome!<br />
                                        <div className="paragraph">
                                            Please scroll or choose a link:</div>
                                    </motion.h1>
                                    <span className="pb-[5%]">

                                        <Link href="#Work"
                                        >
                                            <a>
                                                <ArrowLinks
                                                >
                                                    Show me your work! <BsArrowUpRight />
                                                </ArrowLinks>  </a>
                                        </Link></span>

                                    <span className="pb-[5%]">


                                        <Link href="#services"
                                        >
                                            <a>
                                                <ArrowLinks >
                                                    Your skills? <BsArrowUpRight /> </ArrowLinks>  </a>
                                        </Link></span>
                                    <span className="pb-[5%]">


                                        <Link href="https://drive.google.com/file/d/1JIKTwgwAZAFZ8fyAO0eYpzlEM95a5YWM/view?usp=drive_link"
                                        >
                                            <a target={'_blank'}
                                                rel={'noreferrer noopener'}>
                                                <ArrowLinks >
                                                    Your resume? (Google document) <BsArrowUpRight /> </ArrowLinks>  </a>
                                        </Link></span>
                                    <span className="pb-[5%]">

                                        <Link href="#Contact"
                                        >
                                            <a  >
                                                <ArrowLinks >
                                                    How can I contact you? <BsArrowUpRight /> </ArrowLinks>  </a>
                                        </Link></span>

                                </div>
                                <br />
                            </section>
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}

export default About 