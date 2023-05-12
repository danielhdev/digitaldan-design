import Casestudyimage from '@components/Casestudyimage';
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'


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
                    <ul className="paragraph font-bold md:ml-[10vw] px-[2rem]">

                        <li>Art direction</li>
                        <li>design &</li>
                        <li>development</li>

                    </ul>
                </section>

                <section className="my-[5vh]">
                    <div className="w-[95vw]">
                        <h1 className="font-[octarine] header p-4">
                            Design Thoughts
                        </h1>
                    </div>
                    <article className="md:ml-[10vw] md:w-[70ch] px-[2rem]">
                        <p className="paragraph font-[Oxygen] pt-[5vh]">
                            <span className="font-bold">Digital design & development for my agency:<br /></span>
                            I used my personal style that can be best described as expressive minimalism, based on the teachings of the 20th century greats like Vignelli.
                            Also used AI for the first time: DALL-E provided some of the images.
                        </p>
                    </article>
                    <section className="h-auto w-[95vw] my-[5vh] md:my-[15vh] p-4 mx-auto">
                        <h1 className="font-[octarine] header">
                            Social Media Assets
                        </h1>
                        <h2 className="paragraph py-[10vh]">AI DALL-E images for social media branding.</h2>
                    </section>
                    <Casestudyimage>
                        <img src='li.png'
                            alt="Image of AI generated images using circles"
                            className='border-[2px] border-zinc-900'
                        /></Casestudyimage>

                    <section className="h-auto my-[5vh] md:my-[10vh] p-1 mx-auto">
                        <h1 className="font-[octarine] header">
                            Website
                        </h1>
                        <Casestudyimage>
                            <img src='csdesk.png'
                                alt="Image of a LinkedIn profile header"
                            /></Casestudyimage>
                        <Casestudyimage>
                            <img src='cstab.png'
                                alt="Image of a LinkedIn profile header"
                            /></Casestudyimage>
                        <Casestudyimage>
                            <img src='csmob1.png'
                                alt="Image of a LinkedIn profile header"
                            /></Casestudyimage>

                    </section>

                </section>
                <div className="mx-auto pb-[2rem]">
                    <Link href="/#Selfbrand"
                    >
                        <a>
                            <h2 className="paragraph text-stone-900 dark:text-stone-100 cursor-pointer"> back <BsArrowUpRight /> </h2></a>
                    </Link></div>

            </main>
        </>
    );
};

export default DDbranding;
