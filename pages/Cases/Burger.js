import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowUpRight } from 'react-icons/bs'
import Borders from '@components/Borders'
import ArrowLinks from '@components/ArrowLinks'
import Back from '@components/Back'

const Burger = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    const images = [
        '/ubg5.png',
        '/ubg1.png',
        '/ubg1a.png',
        '/ubg4.png',
        '/ubg2.png',
        '/ubg6.png',
        '/ubg8.png',
        '/ubg9.png',
        '/ubg10.png',
    ];
    return (
        <div>


            <main id="Work" className="h-auto flex flex-col justify-center items-center 
            pb-[10rem] lg:pb-[15rem] pt-5rem]">

                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="title">Gourmet Burger</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.p whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    Brand design refresh: A younger appearance, bringing the website out of 2016, social media advertising and stationary.
                                    <br /></motion.p></Borders>
                        </div><br />
                        <Link href="https://digitaldanrestaurant.netlify.app/"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}> <ArrowLinks >website (new tab)
                                    <BsArrowUpRight /> </ArrowLinks>  </a>
                        </Link>
                    </div>
                </section>


                <div className="sm:w-screen md:w-screen lg:w-[90vw] mx-auto px-2 mt-[4rem]">
                    <div className="grid grid-cols-1 gap-4 ">
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Image ${index + 1}`} className="w-full mx-auto lg:w-[75%] mb-[4rem]
                                border-[1px] border-solid border-stone-800" />
                            </div>
                        ))}
                    </div>
                </div>
                <Back />
            </main>
        </div>
    )
}

export default Burger