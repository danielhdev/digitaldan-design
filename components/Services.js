import Borders from "./Borders"

const Services = () => {

    return (
        <>
            <main id="About" className='h-auto flex flex-col justify-center items-center py-[5rem]'>
                <section className="px-2 mb-[2rem]">
                    <ul className="title p-[5vh] md:p-[5vh] landscape:w-[45vw]">
                        <li>About Me</li>
                        <Borders><div className="paragraph mr-[2rem]">
                            <p>Daniel Hubschmann (Germany).
                                UI, web and graphic designer with over 20 years experience. I have been focusing on digital design in the recent decade.</p>
                            <br />

                            <p>Taking classic rules and the teachings of the art and design greats into the 21st century.</p>

                            <br />

                            <p>I can create timeless visuals for all industries, your client&apos;s investment will last for a long time.

                                <br />

                            </p>
                        </div> </Borders></ul>
                </section>
                <section id="services"
                    className="flex md:justify-end px-2">
                    <ul className="title list-disc md:pt-[10vh] p-[2rem]
                      landscape:w-[45vw]">
                        Skills/ Tools
                        <Borders><div className="paragraph">
                            <li>User interface & web design</li>
                            <li>Graphic design</li>
                            <li>Design systems</li>
                            <li>Proficient in HTML, CSS, Tailwind CSS</li>
                            <li>JavaScript & JavaScript frameworks for UI components </li>
                            <li>Fields: Adverstisement, apps, websites, landing pages, micro pages, events & presentations</li>
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