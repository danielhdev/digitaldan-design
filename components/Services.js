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
                                In recent years I took the next career steps, now focusing on full stack development & UX/UI design.
                            </p>
                            <br />
                            <p>
                                I can create states and responsive designs myself during development, saving designer time.
                            </p>
                        </div> </Borders></ul>

                    <ul className="subheader font-bold px-[5vh] md:p-[5vh] landscape:w-[45vw] list-disc">
                        Skills/ Tools
                        <Borders><div className="paragraph font-normal">
                            <span className="font-bold">
                                App & Web development</span>
                            <li>HTML, CSS, Tailwind CSS</li>
                            <li>JavaScript & JavaScript frameworks </li>
                            <li>PHP & Laravel </li>
                            <li>MySQL </li>
                            <li>CMS (Strapi & others)</li>
                            <span className="font-bold">
                                UX/UI design</span>
                            <li>Figma</li>
                            <li>Adobe Ae, Ps, Ai, Inkscape, Gimp </li>
                            <span className="font-bold">
                                ChatGPT, Dall-E, Midjourney</span>
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