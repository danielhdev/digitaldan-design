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

                <section className="px-2 my-[5rem] grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <ul className="subheader font-bold px-[5vh] p-[5vh] landscape:w-[45vw]">
                        <li>About Me</li>
                        <Borders><div className="paragraph font-normal mr-[2rem]">
                            <p>Daniel Hubschmann (Germany) <br />Web and graphic designer with over two decades of experience.</p>
                            <br />
                            <p>
                                In recent years I took the next career steps, now focusing on fullstack development & UX/ UI design.
                            </p>
                        </div> </Borders></ul>

                    <ul className="subheader font-bold px-[5vh] md:p-[5vh] landscape:w-[45vw] list-disc">
                        Skills/ Tools
                        <Borders><div className="paragraph font-normal">
                            <li>UX/UI design</li>
                            <li>App & Web development</li>
                            <li>Proficient in HTML, CSS, Tailwind CSS</li>
                            <li>JavaScript & JavaScript frameworks </li>
                            <li>PHP & MySQL </li>
                            <li>Figma</li>
                            <li>Adobe Ae, Ps, Ai, Inkscape, Gimp </li>
                            <li>ChatGPT, Dall-E, Midjourney</li>
                        </div>
                        </Borders>
                        <br />
                    </ul>

                </section>
                {/* <span className="pb-[5%]">
                    <Link href="https://drive.google.com/file/d/1JIKTwgwAZAFZ8fyAO0eYpzlEM95a5YWM/view?usp=drive_link"
                    >
                        <a target={'_blank'}
                            rel={'noreferrer noopener'}>
                            <ArrowLinks >
                                My resume (PDF) <BsArrowUpRight /> </ArrowLinks>  </a>
                    </Link></span> */}

            </main >
        </>
    )
}

export default Services