import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Borders from '@components/utility/Borders'
import ArrowLinks from '@components/utility/ArrowLinks'
import Back from '@components/utility/Back'
import Projectspecs from '@components/utility/Projectspecs'
import GalleryMapper from '@components/utility/GalleryMapper'

const DDtimer = () => {
    const tech = "Demo: NEXT, Zustand, shadcn/ui; Production: React/Vite, Django, Tailwind CSS"
    const role = "(v1.0.0 in development) UI design, web development"
    const desc = "Work hour time logger. Roadmap: Developed with React/ Django, user authentication, user accounts, data storage."

    const paragraphAnimate = {
        opacity: [0, 1],
        y: [15, 0],
        transition: { delay: 0.2, duration: 1 },
    }
    const images = [
        '/ddtimermob.jpg',
        '/ddtimerdesk.jpg',
    ];
    return (
        <>
            <main id="Work" className="h-auto flex 
            flex-col justify-center items-center pb-[10rem] lg:pb-[15rem]">
                <section className="lg:w-[80vw] h-auto flex flex-col justify-start gap-12 mx-auto mt-[15vh]">
                    <div className="lg:w-[50%]">
                        <h1 className="title">d.d timelogger</h1>
                        <div className="w-fit">
                            <Borders>
                                <motion.div whileInView={paragraphAnimate} className="paragraph lg:w-[40ch] pt-3 pr-8 ">
                                    <Projectspecs
                                        tech={tech}
                                        role={role}
                                        description={desc}
                                    />
                                </motion.div></Borders>
                        </div><br />
                        <section className='flex items-center gap-[1rem]'>
                            <Link href="https://ddtimelogger.netlify.app/"
                            >
                                <a target={'_blank'}
                                    rel={'noreferrer noopener'}> <ArrowLinks >demo (new tab)
                                    </ArrowLinks>  </a>
                            </Link>
                            <Link href="https://github.com/danielhdev/dd_Timelogger_React_Django"
                            >
                                <a target={'_blank'}
                                    rel={'noreferrer noopener'}> <ArrowLinks >GitHub (new tab)
                                    </ArrowLinks>  </a>
                            </Link>
                        </section>
                    </div>
                </section>
                <GalleryMapper
                    images={images} />
                <Back />
            </main>

        </>

    )
}
export default DDtimer