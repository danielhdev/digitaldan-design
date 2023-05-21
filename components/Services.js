import Borders from "./Borders"

const Services = () => {

    return (
        <>
            <main id="About" className='h-auto flex flex-col justify-center items-center py-[5rem]'>
                <section className="px-2 mb-[2rem]">
                    <ul className="herolinks p-[5vh] md:p-[5vh] landscape:w-[45vw]">
                        <li>About</li>
                        <Borders><div className="paragraph mr-[2rem]">
                            <li>Daniel Hubschmann (Germany).</li>
                            <li>Senior UX/ UI/ & digital designer with over 20 years experience.</li>
                            <br />
                            <li>I&apos;m your creative force in senior designer, art director or creative director roles.
                            </li>
                        </div> </Borders></ul>
                </section>
                <section id="prizes"
                    className="px-2 mb-[2rem]">
                    <ul className="herolinks p-[5vh] md:p-[5vh] landscape:w-[45vw]">
                        <li>Freelance Rate</li>
                        <Borders><div className="paragraph mr-[1rem]">
                            <ul>
                                <li>
                                    Your senior designer, consultant and director for 500 Euro/ day.
                                </li>
                                <li>Negotiable for longer projects.
                                </li>
                            </ul>
                        </div>
                        </Borders></ul>
                </section>
                <section id="services"

                    className="flex md:justify-end px-2">
                    <ul className="herolinks list-disc md:pt-[10vh] p-[2rem]
                      landscape:w-[45vw]">
                        My Skills & Tools
                        <Borders><div className="paragraph">
                            Over 20 years experience = long list:
                            <li>UX/ UI design - apps, websites & landing pages</li>
                            <li>A/B testing, conversion, SEO</li>
                            <li>HTML/ CSS/ JavaScript development</li>
                            <li>Digital graphic design for events, presentations, <br />
                                ad & marketing campaigns, visual branding</li>

                            <li>Curating and customizing AI images</li>
                            <br />
                            <br />
                            <li>Adobe Ps/ Ai/ Ae</li>
                            <li>Blender & Inkscape</li>
                            <li>Figma</li>
                            <li>React & other JavaScript libraries</li>
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