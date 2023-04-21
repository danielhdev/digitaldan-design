import Back from '@components/Back'

const DDbranding = () => {

    return (
        <>
            <main className="md:py-[15vh] flex flex-col md:p-[5rem]">

                <section className="w-[75vw] flex flex-col justify-start  
                p-4 my-[5vh] mt-[10vh]">
                    <h1 className="header w-[95vw] font-bold p-2">
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

                <section className="my-[5vh] flex flex-col justify-center items-center">
                <div className="w-[95vw]">
                    <h1 className="font-[octarine] header p-4">
                        Design Thoughts
                    </h1>
                </div>

                <article className="md:ml-[10vw] md:w-[70ch] p-4">
                    <p className="whitespace-normal paragraph font-[Oxygen] pt-[5vh]">
                        <span className="font-bold">A new brand design for my agency:<br /></span>
                        I used my personal style that can be best described as expressive minimalism, based on the teachings of the 20th century greats like Vignelli.
                        Also used AI for the first time: DALL-E provided some of the images.
                    </p>
                    <br />
                    <br />
        

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
                    <h2 className="paragraph py-[10vh] md:ml-[10vw]">The circles Octarine is made of will be part of public branding.</h2>
                    <div
                        className="md:w-[55vw] h-auto flex flex-col md:flex-row border-[1px] border-stone-900
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
                        <img src='ai1.png'
                            alt="Image of AI generated images using circles"
                        /></div>
                    <div className="md:w-[75%] flex justify-end my-[15vh] md:ml-[10vw]
                    border-[1px] border-stone-900">
                        <img src='twi23.png'
                            alt="Image of a Twitter profile header"
                        /></div>
                    <div className="md:w-[75%] flex justify-end mt-[15vh] md:ml-[10vw]  
                    border-[1px] border-stone-900">
                        <img src='li23.png'
                            alt="Image of a LinkedIn profile header"
                        /></div>
                </section>
                <section className="h-auto w-[95vw] my-[5vh] md:my-[10vh] p-1">
                    <h1 className="font-[octarine] header">
                        Website
                    </h1>

                    <div className="md:w-[45%] flex justify-end my-[15vh] md:ml-[15vw]">
                        <img src='mobile1.png'
                            alt="Image of a LinkedIn profile header"
                        /></div>
                    <div className="md:w-[75%] flex justify-end my-[15vh] mx-auto">
                        <img src='desktop1.png'
                            alt="Image of a LinkedIn profile header"
                        /></div>
                    <div className="md:w-[65%] flex justify-end my-[15vh] md:ml-[10vw]">
                        <img src='tablet1.png'
                            alt="Image of a LinkedIn profile header"
                        /></div>

                </section>
                <Back />
                </section>
            </main>
        </>
    );
};

export default DDbranding;
