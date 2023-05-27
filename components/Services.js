import Borders from "./Borders"

const Services = () => {

    return (
        <>
            <main id="About" className='h-auto flex flex-col justify-center items-center py-[5rem]'>
                <section className="px-2 mb-[2rem]">
                    <ul className="herolinks p-[5vh] md:p-[5vh] landscape:w-[45vw]">
                        <li>About Me</li>
                        <Borders><div className="paragraph mr-[2rem]">
                            <li>Daniel Hubschmann (Germany).</li>
                            <li>Senior digital, ai, ui and visual designer with over 20 years experience.</li>
                            <br />
                            <li>I can create timeless visuals, your client&apos;s investment will last for a long time.
                                <br />
                                <br />
                                Taking classic rules and the teachings of the art and design greats into the 21st century.
                            </li>
                        </div> </Borders></ul>
                </section>
                <section id="services"
                    className="flex md:justify-end px-2">
                    <ul className="herolinks list-disc md:pt-[10vh] p-[2rem]
                      landscape:w-[45vw]">
                        My Skills & Tools
                        <Borders><div className="paragraph">
                            <li>Digital, user interface & visual design</li>
                            <li>Proficient in HTML, CSS</li>
                            <li>JavaScript & JavaScript framework basics for UI components </li>
                            <li>Fields: Adverstisement (online & public), apps, websites, landing pages, events & presentations</li>
                            <li>Figma</li>
                            <li>Adobe Ae, Ps, Ai</li>
                            <li>Inkscape, Fusion, Blender</li>
                            <li>Dall-E, Midjourney</li>
                        </div>
                        </Borders>
                        <br />
                    </ul>
                </section>
                <section className="herolinks grid place-content-center pb-[5rem] text-center">
                    Please contact me <br />
                    under:</section>
            </main >
        </>
    )
}

export default Services