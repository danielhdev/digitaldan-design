import Borders from "./Borders"

const Services = () => {

    return (
        <>
            <main id="About" className='h-auto flex flex-col justify-center items-center py-[5rem]'>
                <section className="px-2 mb-[2rem]">
                    <ul className="herolinks p-[5vh] md:p-[10vh] landscape:w-[45vw]">
                        <li>20 Years Experience</li>
                        <Borders><div className="paragraph mr-[2rem]">
                            <li>Daniel Hubschmann (Germany).</li>
                            <li>Web, graphic & digital designer with over
                                two decades experience helping clients.<br /></li>
                        </div> </Borders></ul>
                </section>
                <section className="flex md:justify-end px-2">
                    <ul className="herolinks list-disc p-[5vh] md:pt-[10vh]
                      landscape:w-[45vw]">

                        Services
                        <Borders><div className="paragraph">
                            <li>Digital design:</li>
                            ads, websites, landing pages,
                            social media content,
                            visual brands identities,
                            events, presentations, billboards<br />
                            <li>Online ad campaigns on Google & social media</li>
                            <li> Web development</li></div> </Borders>

                        <br />

                        <br />
                        <br />
                        <br /></ul>

                </section>

                <section className="herolinks grid place-content-center pb-[5rem]">
                    How can I help you succeed? <br />
                    Let&apos;s talk about your project:</section>






            </main>
        </>
    )
}

export default Services