import Aboutgallery from "./Aboutgallery"
import Resume from "./Resume"
import Borders from "./utility/Borders"


const Services = () => {

    return (
        <>
            <main className='h-auto flex flex-col justify-center items-center py-[10rem] lg:py-[15rem]'>

                <Aboutgallery />

                <section id="About"
                    className="px-2 mt-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="subheader font-bold px-[5vh] p-[5vh] landscape:w-[45vw]">
                        <h1>About Me</h1>
                        <Borders>
                            <div className="paragraph font-normal mr-[2rem] max-h-[350px]">
                                <br />
                                <br />
                                <p>Daniel Hubschmann (Germany)
                                    <br />
                                    <br />
                                    After two decades in web design, I took the next career step in recent years:
                                    Working in full-stack web development.</p>
                                <br />
                                <br />
                            </div>
                        </Borders>
                    </div>

                    <ul className="subheader font-bold px-[5vh] md:p-[5vh] landscape:w-[45vw] list-disc">
                        Current Tech Stack & Skills
                        <Borders><div className="paragraph font-normal max-h-[350px]">
                            <li>HTML, CSS, Tailwind CSS</li>
                            <li>JavaScript, TypeScript</li>
                            <li>React, Next, Astro, Remix & more</li>
                            <li>APIs, CMS, SQL databases</li>
                            <li>Web accessibility</li>
                            <li>Responsive layouts</li>
                            <li>Version control with GitHub</li>
                            <li>UI animations & interactions</li>
                            <li>ChatGPT, Dall-E, Midjourney</li>
                        </div>
                        </Borders>
                        <br />
                    </ul>

                </section>
                <Resume />

            </main >
        </>
    )
}

export default Services