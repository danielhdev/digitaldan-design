import { BsArrowUpRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Borders from '@components/Borders'
import ArrowLinks from '@components/ArrowLinks'

const About = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [5, 0],
        transition: { delay: 0.2, duration: 0.6 }
    }
    return (
        <>
            <main
                id="About"
                className="h-auto pt-[2.5rem] flex flex-col justify-center">
                <section className="paragraph flex justify-center items-center md:py-[2.5rem]">
                    <div className="aboutcontainer w-[95vw] lg:w-[70vw]">
                        <motion.div animate={paragraphAnimate}>
                            <section className="h-auto py-[10vh] lg:w-[65ch] text-[var(--stone) px-[4vw]">
                                <h1 className="header">About</h1>
                                <br />
                                <Borders><div className="pt-2 pr-1">
                                    Daniel Hubschmann, Germany, freelancer, senior digital designer and web developer.
                                    After over two decades in design I changed careers to fullstack web development in recent years.</div></Borders>
                                <br />
                                <br />
                                <h1 className="header">Your Creative Coder For Hire</h1>
                                <br />
                                <Borders>
                                    <div className="pt-2 pr-1">Through my background I can help agencies, start ups and everyone else get their design on user screens.</div></Borders>
                                <br />
                                <ul className="herolinks list-disc py-[5vh] md:py-[10vh]">
                                    Services:
                                    <li>Developing designs after<br />your ideas and systems</li>
                                    <li>Developing the digital part of brand and marketing projects</li>
                                    <li>UI animations and interactions</li>
                                    <li>Optimizing architectures, performance and loading speeds</li>
                                    <li>Development with JavaScript and <br />JavaScript libraries</li>
                                    <li>User Consent Management</li>
                                    <li>Creating Headless CMS <br />(Strapi and others)</li>
                                    <li>E-commerce development <br /></li>
                                    <br />  <Link href="/Contact">
                                        <a>
                                            <ArrowLinks>
                                                contact <BsArrowUpRight />
                                            </ArrowLinks>
                                        </a>
                                    </Link>
                                </ul>
                            </section>
                        </motion.div>
                    </div>
                </section>

            </main >
        </>
    )
}

export default About 