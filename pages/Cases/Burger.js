import Link from 'next/link'
import { motion } from 'framer-motion'
import Borders from '@components/utility/Borders'
import ArrowLinks from '@components/utility/ArrowLinks'
import Back from '@components/utility/Back'
import Projectspecs from '@components/utility/Projectspecs'
import GalleryMapper from '@components/utility/GalleryMapper'


const Burger = () => {
    const tech = "Next, Tailwind, Strapi CMS"
    const role = "UI design, web development"
    const desc = "Refresh: A younger appearance, bringing the website out of 2016, added a CMS for updating the menu and contact data."

    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    const images = [
        '/ubg1.jpg',
        '/ubg2.png',
        '/ubg3.jpg',
        '/ubg4.jpg',
        '/ubg5.jpg',
        '/ubg6.jpg',
        '/ubg7.png',
    ];
    return (
        <>
            <main id="Work" className="h-auto flex flex-col justify-center items-center 
            pb-[10rem] lg:pb-[15rem] pt-5rem]">

                <section id="Selfbrand"
                    className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh]">

                    <div className="lg:w-[50%]">
                        <h1 className="title">Gourmet Burger</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.div whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8">
                                    <Projectspecs
                                        tech={tech}
                                        role={role}
                                        description={desc}
                                    />
                                </motion.div>
                            </Borders>
                        </div><br />
                        <Link href="https://ubg-next-13-demo.vercel.app/
                                    ">
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

export default Burger