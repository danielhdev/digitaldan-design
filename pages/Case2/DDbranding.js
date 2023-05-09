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

                        <li>Digital design with Figma</li>
                        <li>Digital development with Next.js</li>
                    </ul>
                </section>

                <section className="my-[5vh]">
                    <div className="w-[95vw]">
                        <h1 className="font-[octarine] header p-4">
                            Design Thoughts
                        </h1>
                    </div>
                    <article className="md:ml-[10vw] md:w-[70ch] p-4">
                        <p className="whitespace-normal paragraph font-[Oxygen] pt-[5vh]">
                            <span className="font-bold">Digital design & development for my agency:<br /></span>
                            I used my personal style that can be best described as expressive minimalism, based on the teachings of the 20th century greats like Vignelli.
                            Also used AI for the first time: DALL-E provided some of the images.
                        </p>
                    </article>
                    <section className="h-auto w-[95vw] my-[5vh] md:my-[15vh] p-4 mx-auto">
                        <h1 className="font-[octarine] header">
                            Social Media Assets
                        </h1>
                        <h2 className="paragraph py-[10vh] md:ml-[10vw]">AI DALL-E images for social media branding.</h2>
                        <div className="md:w-[75%] flex justify-end my-[10vh] md:ml-[10vw] ">
                            <img src='li.png'
                                alt="Image of AI generated images using circles"
                                className='border-[2px] border-zinc-900'
                            /></div>

                    </section>
                    <section className="h-auto my-[5vh] md:my-[10vh] p-1 mx-auto">
                        <h1 className="font-[octarine] header">
                            Website
                        </h1>

                        <div className="my-[15vh] mx-auto">
                            <img src='csdesk.png'
                                alt="Image of a LinkedIn profile header"
                            /></div>
                        <div className="my-[15vh]">
                            <img src='cstab.png'
                                alt="Image of a LinkedIn profile header"
                            /></div>
                        <div className="my-[15vh]">
                            <img src='csmob1.png'
                                alt="Image of a LinkedIn profile header"
                            /></div>

                    </section>

                </section>
                <Back />
            </main>
        </>
    );
};

export default DDbranding;
