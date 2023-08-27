import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowUpRight } from 'react-icons/bs'
import Borders from '@components/Borders'
import ArrowLinks from '@components/ArrowLinks'
import Back from '@components/Back'
import Projectspecs from '@components/Projectspecs'

const Armedshutter = () => {
    const projectTech = "React, Tailwind, Sanity CMS"
    const projectRole = "UI design, full stack development"
    const projectDesc = " Brand refresh for an American people and fashion photographer: New types and logo, social media ads and a new website with improved UX."


    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    const images = [
        '/as1.png',
        '/Twitter2.png',
        '/as2.png',
        '/as3.png',

    ];
    return (
        <div>

            <main id="Work" className="h-auto flex 
            flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">

                <section id="ASnew"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start lg:gap-12 mx-auto mt-[15vh]">

                    <div className="w-screen lg:w-[50%]">
                        <h1 className="title">Portfolio</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.div whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">

                                    <Projectspecs
                                        tech={projectTech}
                                        role={projectRole}
                                        description={projectDesc}
                                    />

                                </motion.div></Borders>
                        </div><br />
                        <Link href="https://asprototype.netlify.app/Prototype/"
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
export default Armedshutter