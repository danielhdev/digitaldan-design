import Borders from "./Borders"

const Services = () => {

    return (
        <>
            <main id="About" className='h-auto flex flex-col justify-center items-center py-[5rem]'>
                <section className="px-2 mb-[2rem]">
                    <ul className="herolinks p-[5vh] md:p-[5vh] landscape:w-[45vw]">
                        <li>About</li>
                        <Borders><div className="paragraph mr-[2rem]">
                            <li>Digitaldan Agency founded and led by Daniel Hubschmann (Germany).</li>
                            <li>Designer & Art Director with over 20 years experience.
                                <br />
                                <br />
                                Let me and a team of remote professionals help you raise your brand&apos;s value, win more costumers and meet other day to day business challenges!<br /></li>
                        </div> </Borders></ul>
                </section>
                <section className="px-2 mb-[2rem]">
                    <ul className="herolinks p-[5vh] md:p-[5vh] landscape:w-[45vw]">
                        <li>Prizing</li>
                        <Borders><div className="paragraph mr-[1rem]">
                            <ul>
                                <li>No tricks, no hidden costs:
                                    Get your personal senior designer and consultant for a great prize!
                                    <br />
                                    <br />
                                    Options:<br />
                                    a) Project-based at 79,00 Euro/hour.
                                </li>
                                <li>
                                    For single, short-term projects.
                                </li>
                                <li>
                                    <br />
                                    b) Retainer <br /> 1.499,00 Euro/ 20 hours per month.
                                </li>
                                <li>
                                    Monthly contract, cancel anytime.
                                </li>
                                <li>
                                    Add 10 extra hours for 499,00.
                                </li>
                                <br />
                                Pros: Discounts on our hourly rate, fixed costs for calculating your budget.
                                <br />
                            </ul>
                        </div>
                        </Borders></ul>
                </section>
                <section className="flex md:justify-end px-2">
                    <ul className="herolinks list-disc md:pt-[10vh] p-[2rem]
                      landscape:w-[45vw]">
                        Services
                        <Borders><div className="paragraph">
                            Both options contain the following services:
                            Consultation and/ or execution
                            <li>UX/ UI design - apps, websites & landing pages</li>
                            <li>Latest user consent & accessibility rules</li>
                            <li>Images for ad & marketing campaigns</li>
                            <li>Social media content & marketing assets</li>
                            <li>Visual branding</li>
                            <li>Visual design for events & presentations</li>
                            <li>Curating and customizing AI images</li>
                        </div>
                        </Borders>
                        <br />
                    </ul>
                </section>
                <section className="herolinks grid place-content-center pb-[5rem] text-center">
                    Please contact us <br />
                    for a free first consultation:</section>
            </main >
        </>
    )
}

export default Services