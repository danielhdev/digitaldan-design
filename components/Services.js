import Aboutgallery from "./Aboutgallery"
import Resume from "./Resume"
import Borders from "./utility/Borders"


const Services = () => {

    return (
        <>
            <main id="About" className='h-auto flex flex-col justify-center items-center py-[10rem] lg:py-[15rem]'>

                <Aboutgallery />

                <section className="px-2 my-[5rem] grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <ul className="subheader font-bold px-[5vh] p-[5vh] landscape:w-[45vw]">
                        <li>About Me</li>
                        <Borders>
                            <div className="paragraph font-normal mr-[2rem] max-h-[350px]">
                                <p>Daniel Hubschmann (Germany) <br />
                                    <br />
                                    After two decades in web and graphic design, I took the next career step in recent years,
                                    now focusing on full stack development.</p>
                                <br />
                                <p>
                                    I&apos;m a fast learner and can grab new languages and their frameworks within a short time.


                                </p>
                            </div> </Borders></ul>

                    <ul className="subheader font-bold px-[5vh] md:p-[5vh] landscape:w-[45vw] list-disc">
                        Current Tech Stack & Skills
                        <Borders><div className="paragraph font-normal max-h-[350px]">
                            <li>HTML, CSS, Tailwind CSS</li>
                            <li>JavaScript & TypeScript</li>
                            <li>React, Next.js, Vite, Node.js</li>
                            <li>MySQL </li>
                            <li>Headless CMS (Sanity & more)</li>
                            <li>Code design principles (SOLID)</li>
                            <li>GitHub</li>
                            <li>UI animations & interactions</li>
                            <li> ChatGPT, Dall-E, Midjourney</li>
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