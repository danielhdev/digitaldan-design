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
                            <li>Senior UX/ UI/ & Web designer with over 20 years experience.</li>
                            <br />
                            <li>I&apos;m your creative force in senior designer, art director or creative director roles.
                            </li>
                        </div> </Borders></ul>
                </section>

                <section id="services"

                    className="flex md:justify-end px-2">
                    <ul className="herolinks list-disc md:pt-[10vh] p-[2rem]
                      landscape:w-[45vw]">
                        My Skills & Tools
                        <Borders><div className="paragraph">
                            <li>UX/ UI design - apps, websites & landing pages</li>
                            <li>A/B testing, conversion, SEO</li>
                            <li>HTML/ CSS/ JavaScript development</li>
                            <br />
                            <br />
                            <li>Figma</li>
                            <li>React & other JavaScript libraries</li>
                            <li>Adobe Ps/ Ai/ Ae</li>
                            <li>Blender & Inkscape</li>
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