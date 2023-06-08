import Aboutgallery from "./Aboutgallery"
import ArrowLinks from "./ArrowLinks"
import Borders from "./Borders"
import Link from "next/link"
import { BsArrowUpRight } from 'react-icons/bs'

const Services = () => {

    return (
        <>
            <main id="About" className='h-auto flex flex-col justify-center items-center py-[10rem] lg:py-[15rem]'>

                <Aboutgallery />

                <section className="px-2 my-[5rem] md:my-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <ul className="title px-[5vh] p-[5vh] landscape:w-[45vw]">
                        <li>About Me</li>
                        <Borders><div className="paragraph mr-[2rem]">
                            <p>Daniel Hubschmann (Germany) <br />Art director,
                                UI, web and visual designer with over 20 years experience.</p>
                            <br />
                            <p>Taking classic rules and the teachings of the art and design greats into the 21st century.</p>
                            <br />
                            <p>Focused on digital,
                                I can create timeless and original visuals across medias and industries.
                            </p>
                        </div> </Borders></ul>

                    <ul className="title px-[5vh] md:p-[5vh] landscape:w-[45vw] list-disc">
                        Skills/ Tools
                        <Borders><div className="paragraph">
                            <li>Art direction</li>
                            <li>User interface & web design</li>
                            <li>Graphic & visual design</li>
                            <li>Design systems</li>
                            <li>Proficient in HTML, CSS, Tailwind CSS</li>
                            <li>JavaScript & JavaScript frameworks for UI components </li>
                            <li>Figma</li>
                            <li>Adobe Ae, Ps, Ai</li>
                            <li>Inkscape</li>
                            <li>Dall-E, Midjourney</li>
                        </div>
                        </Borders>
                        <br />
                    </ul>

                </section>
                <span className="pb-[5%]">
                    <Link href="https://drive.google.com/file/d/1JIKTwgwAZAFZ8fyAO0eYpzlEM95a5YWM/view?usp=drive_link"
                    >
                        <a target={'_blank'}
                            rel={'noreferrer noopener'}>
                            <ArrowLinks >
                                My resume (PDF) <BsArrowUpRight /> </ArrowLinks>  </a>
                    </Link></span>
                <section className="herolinks grid place-content-center pb-[5rem] text-center">
                    Please contact me <br />
                    under:</section>
            </main >
        </>
    )
}

export default Services