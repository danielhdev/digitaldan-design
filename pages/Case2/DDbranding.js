import Image from 'next/image'

const DDbranding = () => {

    return (
        <>
            <main className="md:py-[15vh] flex flex-col md:p-[5rem]">

                <section className="w-[75vw] flex flex-col justify-start  
                p-4 my-[5vh] mt-[10vh]">
                    <h1 className="aboutheader w-[95vw] font-bold p-2">
                        Case Study:<br />
                        Upper Burger Grill/<br /> Berlin
                    </h1 >



                    <ul className="paragraph font-bold md:ml-[10vw]">

                        <li>Art Direction</li>
                        <li>Graphic Design</li>
                        <li>Web Design</li>
                        <li>Web Development</li>
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
                        <span className="font-bold">Upper Burger Grill </span>
                        is an upscale burger restaurant in the heart of Berlin, close to Gedächtniskirche.
                        The successful grill house was founded in 2016 and their outdated website hadn&apos;t changed since.
                        Time for a new site that matched their young and modern presence in social media like Instagram.</p>
                    <br />
                    <br />
                    <ul className="list-disc paragraph">
                        <h1>Updates</h1>
                        <li>A fresh color scheme</li>
                        <li>De-cluttering the landing page & site map</li>
                        <li>A modern, responsive layout</li>
                        <li>Custom CMS, easy to use for non-tech staff</li>
                    </ul>

                </article>
                <section className="h-auto w-[95vw]">
                    <h1 className="font-[octarine] header my-[5vh] md:my-[15vh] p-4">
                        Typography
                    </h1>
                    <div className="h-auto flex justify-center items-start flex-col ml-[10vw]">
                        <h1 className="fonts font-[Times] font-light my-[2.5vh]">
                            Headlines: Times
                        </h1>
                        <h1 className="fonts font-[Roboto] font-light my-[2.5vh]">
                            Texts: Roboto
                        </h1>
                    </div>
                </section>

                <section className="h-auto w-[95vw] my-[5vh] md:my-[15vh] p-4">
                    <h1 className="font-[octarine] header">
                        Brand Colors
                    </h1>
                    <h2 className="paragraph py-[10vh] md:ml-[10vw]">Orange</h2>
                    <div
                        className="md:w-[55vw] h-auto flex flex-row
          paragraph md:ml-[10vw]"
                    >
                        <div className="h-[30vh] flex-1 bg-[#ff8547] text-stone-900">
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
                        <div className="h-[30vh] flex-auto bg-[#f3f5f6] text-stone-900 border-[1px] border-stone border-solid">
                            #f3f5f6
                        </div>
                    </div>
                </section>
                <section>
                    
                </section>



            </main>
        </>
    );
};

export default DDbranding;
