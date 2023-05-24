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
                            <li>Senior Graphic & Web designer with over 20 years experience that changed careers to web development in recent years.</li>
                            <br />
                            <li>With my background in web design I can work closely with your UX/UI teams to deliver great experiences for your users.
                            </li>
                        </div> </Borders></ul>
                </section>
                <section id="services"
                    className="flex md:justify-end px-2">
                    <ul className="herolinks list-disc md:pt-[10vh] p-[2rem]
                      landscape:w-[45vw]">
                        My Skills & Tools
                        <Borders><div className="paragraph">

                            <li>HTML/ CSS/ JavaScript/ PHP development</li>
                            <li>Fullstack with focus on frontend development</li>
                            <li>Search engine, conversion, accessibility & other page optimizations</li>
                            <li>UI animations</li>
                            <li>Custom CMS (Strapi & others)</li>
                            <li>Figma</li>
                            <li>Wordpress & Shopify</li>
                            <li>React & other JavaScript libraries</li>
                            <li>Laravel for PHP</li>
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