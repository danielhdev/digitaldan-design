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
                    <div className="subheader font-bold px-[5vh] p-[5vh]">
                        <h1>About Me</h1>
                        <Borders>
                            <div className="paragraph font-normal mr-[2rem] max-h-[350px]">
                                <br />
                                <br />
                                <p>Daniel Hubschmann (Germany)
                                    <br />
                                    <br />
                                    After two decades in web design, I changed careers in recent years:
                                    Now working as a full stack software and web developer.
                                </p>
                                <br />
                            </div>
                        </Borders>
                    </div>

                    <ul className="subheader font-bold px-[5vh] md:p-[5vh] list-disc">
                        Current Tech Stack & Skills
                        <Borders><div className="paragraph font-normal max-h-[350px]">
                            <li>JavaScript, Python</li>
                            <li>React, Next, Django, Flask</li>
                            <li>HTML, CSS, Tailwind CSS, Bootstrap</li>
                            <li>Web accessibility</li>
                            <li>Responsive layouts</li>
                            <li>APIs, CMS, SQL databases</li>
                            <li>AI application and AI training</li>
                            <li>TensorFLow</li>
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