import Back from '@components/Back'

const DDbranding = () => {

    return (
        <>
            <main className="md:py-[15vh] flex flex-col md:p-[5rem]">

                <section className="w-[75vw] flex flex-col justify-start  
                p-4 my-[5vh] mt-[10vh]">
                    <h1 className="aboutheader w-[95vw] font-bold p-2">
                        Case Study:<br />
                        Digitaldan Agency/<br /> Personal Branding
                    </h1 >
                    <ul className="paragraph font-bold md:ml-[10vw]">
                        <li>Art Direction</li>
                        <li>Graphic Design</li>
                        <li>Digital Design</li>
                        <li>Digital Development</li>
                    </ul>
                </section>

                <section className="my-[5vh]"></section>
                <div className="w-[75vw] flex justify-start ">
                    <h1 className="font-[octarine] header p-4">
                        Design Thoughts
                    </h1>
                </div>

                <article className="md:ml-[10vw] md:w-[70ch] p-4">
                    <p className="whitespace-normal paragraph font-[Oxygen] pt-[5vh]">
                        <span className="font-bold">A new brand design for the post-covid restart:<br /></span>
                        I used my personal style that can be best described as expressive minimalism, based on the teachings of the 20th century greats like Vignelli.
                        <br />
                        <br />
                        I also used AI for the first time. Agencies might fall behind if they don't start using its benefits now.
                    </p>
                    <br />
                    <br />
                    <ul className="list-disc paragraph">
                        <h1>Features</h1>
                        <li>The work section offers the option to either glance over the projects or visit links to study more details.</li>
                        <li>Important information provided in short texts.</li>
                        <li>Several contact options throughout the page.</li>
                        <li>Some images and ideas provided by DALL-E.</li>

                    </ul>

                </article>
                <section className="h-auto w-[95vw]">
                    <h1 className="font-[octarine] header my-[5vh] md:my-[15vh] p-4">
                        Typography
                    </h1>
                    <div className="h-auto flex justify-center items-start flex-col ml-[10vw]">
                        <h1 className="fonts font-[octarine] font-light my-[2.5vh]">
                            Octarine
                        </h1>
                        <h1 className="fonts font-[Oxygen] font-light my-[2.5vh]">
                            Oxygen
                        </h1>
                    </div>
                </section>

                <section className="h-auto w-[95vw] my-[5vh] md:my-[15vh] p-4">
                    <h1 className="font-[octarine] header">
                        Brand Colors
                    </h1>
                    <h2 className="paragraph py-[10vh] md:ml-[10vw]">Amber</h2>
                    <div
                        className="md:w-[55vw] h-auto flex flex-row
          paragraph md:ml-[10vw]"
                    >
                        <div className="h-[30vh] flex-1 bg-[#ffbf00] text-stone-900">
                            #ff8547
                        </div>
                        <div className="h-[30vh] flex-1 bg-[#ffd400] text-stone-900">
                            #ff8547
                        </div>
                        <div className="h-[30vh] flex-1 bg-[#ffe900] text-stone-900">
                            #ff8547
                        </div>

                    </div>
                </section>
                <section className="w-[95vw] h-auto mb-[10vh]">
                    <h2 className="paragraph py-[10vh] md:ml-[10vw]">
                        Stone & Zinc
                    </h2>
                    <div
                        className="md:w-[55vw] h-auto  flex flex-row justify-center 
          paragraph md:ml-[10vw]"
                    >
                        <div className="h-[30vh] flex-auto bg-[#383630] text-zinc">
                            #383630
                        </div>
                        <div className="h-[30vh] flex-auto bg-[#f3f5f6] text-stone-900 border-[1px] border-stone-900 border-solid">
                            #f3f5f6
                        </div>
                    </div>
                </section>
                <section className="h-auto w-[95vw] my-[5vh] md:my-[15vh] p-4">
                    <h1 className="font-[octarine] header">
                        Logo
                    </h1>
                    <h2 className="paragraph py-[10vh] md:ml-[10vw]">The circles the font Octarine is made of will be part of public branding.</h2>
                    <div
                        className="md:w-[55vw] h-auto flex flex-col md:flex-row
          workheader md:ml-[10vw]"
                    >
                        <div className="grid place-content-center p-8 md:p-2 h-[50vh] flex-1 bg-[#f3f5f6] text-stone-900">
                            digital.dan
                        </div>
                        <div className="grid place-content-center p-8 md:p-2 h-[50vh] flex-1 bg-[#383630] text-zinc-100 tracking-widest">
                            d.d
                        </div>


                    </div>
                </section>
                <section className="h-auto w-[95vw] my-[5vh] md:my-[15vh] p-4">
                    <h1 className="font-[octarine] header">
                        AI
                    </h1>
                    <h2 className="paragraph py-[10vh] md:ml-[10vw]">DALL-E images using Octarines circles and round elements <br />for social media branding.</h2>
                    <div className="md:w-[75%] flex justify-end my-[10vh] md:ml-[10vw]">
                        <img src='ai.png'
                            alt="Image of AI generated images using circles and balls"
                        /></div>
                    <div className="md:w-[75%] flex justify-end my-[15vh] md:ml-[10vw]">
                        <img src='twi23.png'
                            alt="Image of a Twitter profile header"
                        /></div>
                    <div className="md:w-[75%] flex justify-end mt-[15vh] md:ml-[10vw]">
                        <img src='li23.png'
                            alt="Image of a LinkedIn profile header"
                        /></div>
                </section>
                <section className="h-auto w-[95vw] my-[5vh] md:my-[10vh] p-2">
                    <h1 className="font-[octarine] header">
                        Website
                    </h1>

                    <div className="md:w-[35%] flex justify-end my-[15vh] md:ml-[20vw]">
                        <img src='mobile1.png'
                            alt="Image of a LinkedIn profile header"
                        /></div>
                    <div className="md:w-[75%] flex justify-end my-[15vh] mx-auto">
                        <img src='desktop1.png'
                            alt="Image of a LinkedIn profile header"
                        /></div>
                    <div className="md:w-[55%] flex justify-end my-[15vh] md:ml-[10vw]">
                        <img src='tablet1.png'
                            alt="Image of a LinkedIn profile header"
                        /></div>

                </section>
                <Back />
            </main>
        </>
    );
};

export default DDbranding;
