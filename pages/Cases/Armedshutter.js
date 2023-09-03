import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Borders from '@components/utility/Borders'
import ArrowLinks from '@components/utility/ArrowLinks'
import Back from '@components/utility/Back'
import Projectspecs from '@components/utility/Projectspecs'
import GalleryMapper from '@components/utility/GalleryMapper'

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
        <>

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
                                rel={'noreferrer noopener'}> <ArrowLinks >demo (new tab)
                                </ArrowLinks>  </a>
                        </Link>
                    </div>
                </section>
                <GalleryMapper
                    images={images} />
                <Back />
            </main>

        </>

    )
}
export default Armedshutter