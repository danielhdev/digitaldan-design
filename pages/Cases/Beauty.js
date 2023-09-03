import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Borders from '@components/utility/Borders'
import ArrowLinks from '@components/utility/ArrowLinks'
import Back from '@components/utility/Back'
import Projectspecs from '@components/utility/Projectspecs'
import GalleryMapper from '@components/utility/GalleryMapper'

const Beauty = () => {
    const projectTech = "React/Vite, Tailwind, Sanity CMS, Shopify"
    const projectRole = "UI design, full stack development"
    const projectDesc = "A costumizable e-commerce template for beauty, health or wellness industry clients."

    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    const images = [
        '/beau1.png',
        '/beau2.jpg',
        '/beau3.png',
    ];
    return (
        <>
            <main id="Work" className="h-auto flex 
            flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">
                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh]">
                    <div className="lg:w-[50%]">
                        <h1 className="title">Beauty & Health</h1>
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
                        <Link href="https://food-health-one-seven.vercel.app/"
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
export default Beauty