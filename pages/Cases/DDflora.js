import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Borders from '@components/utility/Borders'
import ArrowLinks from '@components/utility/ArrowLinks'
import Back from '@components/utility/Back'
import Projectspecs from '@components/utility/Projectspecs'
import GalleryMapper from '@components/utility/GalleryMapper'

const Armedshutter = () => {
    const tech = "Django and PyTorch"
    const role = "(In development) AI model training, UI design, web development"
    const desc = "AI plant image recognition app for professionals and hobbyists. Combines an easy to navigate UI with maximum user experience. Roadmap: Plant wiki, plant maintenance, where to buy and more."


    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    const images = [
        '/ddflorin.jpg',

    ];
    return (
        <>

            <main id="Work" className="h-auto flex 
            flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">

                <section id="dd_florainspector"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start lg:gap-12 mx-auto mt-[15vh]">

                    <div className="w-screen lg:w-[50%]">
                        <h1 className="title">FloraInspector</h1>
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
                        <Link href="https://github.com/danielhdev/ddflorainspector"
                        >
                            <a target={'_blank'}
                                rel={'noreferrer noopener'}> <ArrowLinks >GitHub
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