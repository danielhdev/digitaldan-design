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
                            <li>Freelance web developer with focus on frontend, UX, SEO and conversion rates.
                                <br />
                                <br />

                                I worked as a web designer for two decades before changing careers to development: The best of both worlds for your projects.<br /></li>
                        </div> </Borders></ul>
                </section>

                <section className="px-2 mb-[2rem]">
                    <ul className="herolinks p-[5vh] md:p-[5vh] landscape:w-[45vw]">
                        <li>Prizes & Rates</li>
                        <Borders><div className="paragraph mr-[1rem]">
                            <ul>
                                <li> Options: <br />Freelance rate 500 Euro/ day with discounts for longer contracts.
                                </li>
                                <br />
                                <li>Project based,
                                    simple landing pages and portfolios already starting at 1.200 Euro including all services.</li>
                            </ul>
                        </div>

                        </Borders></ul>
                </section>
                <section className="flex md:justify-end px-2">
                    <ul className="herolinks list-disc md:pt-[10vh] p-[2rem]
                      landscape:w-[45vw]">

                        My Services
                        <Borders><div className="paragraph">

                            <li>Apps, landing pages, websites with languages like JavaScript and frameworks like React</li>
                            <li>E-commerce development, custom store fronts</li>
                            <li> Custom CMS</li>
                            <li> Mobile optimization</li>
                            <li>User consent rules </li>
                            <li>UX/UI: design or recreating provided designs on point, easy navigation, fast loading times, engaging animations, high accessibility</li>
                            <li>Helping you navigate through the rapid, ever changing SEO field</li>
                            <li> Turning visitors into customers through great UX</li>
                        </div>

                        </Borders>

                        <br />

                        <br />
                        <br />
                        <br /></ul>

                </section>

                <section className="herolinks grid place-content-center pb-[5rem]">
                    How can I help you succeed? <br />
                    Let&apos;s talk about your project:</section>






            </main >
        </>
    )
}

export default Services