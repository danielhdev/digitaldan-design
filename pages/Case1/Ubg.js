import Back from '@components/Back'

const Ubg = () => {

    return (
        <>
            <main className="md:py-[15vh] flex flex-col md:p-[5rem]">

                <section className="w-[75vw] flex flex-col justify-start  
                p-4 my-[5vh] mt-[10vh]">
                    <h1 className="header w-[95vw] font-bold p-2">
                        Case Study:<br />
                        Upper Burger Grill/<br /> Berlin
                    </h1 >



                    <ul className="paragraph font-bold md:ml-[10vw]">

        
                        <li>Digital design with Figma</li>
                        <li>Digital development with Next.js & Strapi CMS</li>
                    </ul>


                </section>

                <section className="my-[5vh]">
                    <div className="w-[95vw] flex justify-start ">
                        <h1 className="font-[octarine] header p-4">
                            Design Thoughts
                        </h1>
                    </div>

                    <article className="md:ml-[10vw] md:w-[70ch] p-4">
                        <p className="whitespace-normal paragraph font-[Oxygen] py-[15vh]">
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
                  
                  
                  
                    <section>
                        <h1 className="header mx-auto">Before</h1>

                        <div className="md:w-[95%] flex justify-center my-[15vh]">
                            <img src='before.jpg'
                                alt="Image of the old website" />
                        </div>
                        <h1 className="header">Redesign</h1>
                        <div className="md:w-[85%] flex justify-end my-[15vh]">
                            <img src='wide1.jpg'
                                alt="Image of the new site on a smart phone"
                            /></div>
                        <div className="md:w-[65%] flex justify-center my-[15vh]">
                            <img src='mob1.png'
                                alt="Image of the new site on a laptop"
                            /></div>
                        <div className="md:w-[55%] flex justify-center md:ml-[10vw] my-[15vh]">
                            <img src='wide2.jpg'
                                alt="Image of the new site on a laptop"
                            /></div>
                        <div className="md:w-[85%] flex justify-center md:ml-[5rem] my-[15vh]">
                            <img src='mob2.jpg'
                                alt="Image of the new site on a laptop"
                            /></div>
                        <div className="flex justify-center my-[15vh]">
                            <img src='wide3.jpg'
                                alt="Image of the new site on a laptop"
                            /></div>
                        <div className="md:w-[95%] flex justify-end my-[15vh]">
                            <img src='wide5.jpg'
                                alt="Image of the new site on mobile"
                            /></div>
                        <div className="md:w-[95%] flex justify-end my-[15vh]">
                            <img src='wide4.png'
                                alt="Image of the new site on mobile"
                            /></div>

                        <div className="md:w-[75%] flex justify-center my-[15vh] md:ml-[5vw]">
                            <img src='mob3.jpg'
                                alt="Image of the new site on a laptop"
                            /></div>

                        <div className="w-[50%] md:w-[25%] mx-auto my-[15vh]">
                            <img src='bull.png'
                                alt="Image of the new site on a laptop"
                            /></div>

                    </section>

                </section>
                <Back />

            </main>
        </>
    );
};

export default Ubg;
