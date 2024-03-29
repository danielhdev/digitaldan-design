import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Borders from '@components/utility/Borders'
import ArrowLinks from '@components/utility/ArrowLinks'
import Back from '@components/utility/Back'
import Projectspecs from '@components/utility/Projectspecs'
import GalleryMapper from '@components/utility/GalleryMapper'

const PetsInSpace = () => {
    const tech = "Astro, Tailwind, DALL-E"
    const role = "UI design, web development"
    const desc = "Web development playground with AI-generated images. Regular updates, adding new images, animations and features."

    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    const images = [
        '/ddimg1v2.png',
        '/ddimg2v2.png',

    ];
    return (
        <>
            <main id="Work" className="h-auto flex 
            flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">
                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh]">
                    <div className="lg:w-[50%]">
                        <h1 className="title">Pets In Space</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.div whileInView={paragraphAnimate} className="abouttext lg:w-[40ch] pt-3 pr-8 ">
                                    <Projectspecs
                                        tech={tech}
                                        role={role}
                                        description={desc}
                                    />
                                </motion.div></Borders>
                        </div><br />
                        <Link href="https://petsinspace.netlify.app"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}> <ArrowLinks >website
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
export default PetsInSpace