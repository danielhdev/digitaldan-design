import Back from '@components/Back'
import Casestudyimage from '@components/Casestudyimage';

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
                    <ul className="paragraph font-bold md:ml-[10vw] px-[2rem]">


                        <li>Art direction</li>
                        <li>design &</li>
                        <li>development</li>
                    </ul>


                </section>

                <section className="my-[5vh]">
                    <div className="w-[95vw] flex justify-start ">
                        <h1 className="font-[octarine] header p-4">
                            Design Thoughts
                        </h1>
                    </div>

                    <article className="md:ml-[10vw] md:w-[70ch] px-[2rem]">
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

                        <Casestudyimage>
                            <img src="./bef1.png" alt="Upper Burger Before Image 1" />
                        </Casestudyimage>
                        <Casestudyimage>
                            <img src="./bef2.png" alt="Upper Burger Before Image 1" />
                        </Casestudyimage>
                        <h1 className="header">Redesign</h1>
                        <Casestudyimage>
                            <img src="./new1.png" alt="Upper Burger Before Image 1" />
                        </Casestudyimage>
                        <Casestudyimage>
                            <img src="./new2.png" alt="Upper Burger Before Image 1" />
                        </Casestudyimage>
                        <Casestudyimage>
                            <img src="./new3.png" alt="Upper Burger Before Image 1" />
                        </Casestudyimage>
                        <Casestudyimage>
                            <img src="./new4.png" alt="Upper Burger Before Image 1" />
                        </Casestudyimage>
                        <Casestudyimage>
                            <img src="./new5.png" alt="Upper Burger Before Image 1" />
                        </Casestudyimage>
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
