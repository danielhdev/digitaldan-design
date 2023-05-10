import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'
import Casestudyimage from '@components/Casestudyimage';

const AS = () => {

    return (
        <>
            <main className="md:py-[15vh] flex flex-col md:p-[5rem]">

                <section className="w-[75vw] flex flex-col justify-start  
                p-4 my-[5vh] mt-[10vh]">
                    <h1 className="header w-[95vw] font-bold p-2">
                        Case Study:<br />
                        Armed Shutter<br /> Photography/ Texas
                    </h1 >
                    <ul className="paragraph font-bold md:ml-[10vw]">
                        <li>Art direction</li>
                        <li>digital design</li>
                        <li>& development</li>
                    </ul>
                </section>
                <section className="my-[5vh]">
                    <div className="w-[95vw] flex justify-start">
                        <h1 className="font-[octarine] header p-4">
                            Design Thoughts
                        </h1>
                    </div>

                    <article className="md:ml-[10vw] md:w-[70ch] p-[2rem]">
                        <p className="whitespace-normal paragraph font-[Oxygen] pt-[5vh]">
                            <span className="font-bold">Brand design and a new portfolio page:<br /></span>
                            Ayo Ogunseinde is an American people and fashion photographer with millions of downloads on unsplash.com.
                            His social media branding and website deseserved and got an update into the new decade.
                        </p>
                        <br />
                        <br />
                        <ul className="list-disc paragraph">
                            <h1>Updates:</h1>
                            <li>New custom layout representing Ayo&apos;s minimalist and often experimental style.</li>
                            <li>Brand slogan and name on all pages.</li>
                            <li>More accessible contact option throughout the page.</li>

                        </ul>

                    </article>

                    <section className="h-auto w-[95vw] my-[5vh] md:my-[15vh]">

                        <h1 className="header">Twitter profile header</h1>

                    </section>

                    <Casestudyimage>
                        <img src='Twitter2.png'
                            alt="Image of AI generated images using circles and balls"
                        /></Casestudyimage>
                    <section className="h-auto w-[95vw] my-[5vh] md:my-[15vh]">

                        <h1 className="header">Website</h1>

                    </section>
                    <Casestudyimage>
                        <img src='dsk1.png'
                            alt="Image of AI generated images using circles and balls"
                        />

                    </Casestudyimage>
                    <Casestudyimage>
                        <img src='tb1.png'
                            alt="Image of AI generated images using circles and balls"
                        />

                    </Casestudyimage>
                    <Casestudyimage>
                        <img src='mb1.png'
                            alt="Image of AI generated images using circles and balls"
                        />

                    </Casestudyimage>
                </section>


                <div className="mx-auto pb-[2rem]">
                    <Link href="/#ASnew"
                    >
                        <a>
                            <h2 className="paragraph text-stone-900 dark:text-stone-100 cursor-pointer"> back <BsArrowUpRight /> </h2></a>
                    </Link></div>

            </main>
        </>
    );
};

export default AS;