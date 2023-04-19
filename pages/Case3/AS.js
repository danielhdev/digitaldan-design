import Image from 'next/image'
import Twitter from './Twitter2.png'
import Mobile1 from './mobile1.png'
import Mobile2 from './mobile2.png'
import Mobile3 from './mobile3.png'
import Wide1 from './wide1.png'
import Wide2 from './wide2.png'
import Wide4 from './wide4.png'
import Back from '@components/Back'

const AS = () => {

    return (
        <>
            <main className="md:py-[15vh] flex flex-col md:p-[5rem]">

                <section className="w-[75vw] flex flex-col justify-start  
                p-4 my-[5vh] mt-[10vh]">
                    <h1 className="aboutheader w-[95vw] font-bold p-2">
                        Case Study:<br />
                        Armed Shutter<br/> Photography/ Texas
                    </h1 >



                    <ul className="paragraph font-bold md:ml-[10vw]">

                        <li>Art Direction</li>
                        <li>Brand Design</li>
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
                        <span className="font-bold">Brand design and a new portfolio page:<br /></span>
                       Ayo Ogunseinde is an American people and fashion photographer with millions of downloads on unsplash.com. 
                       His social media branding and website deseserved and got an update into the new decade.
                    </p>
                    <br />
                    <br />
                    <ul className="list-disc paragraph">
                        <h1>Features & Updates:</h1>
                        <li>New custom layout representing Ayo&apos;s minimalist and often experimental style.</li>
                        <li>Brand slogan and name visible on all pages .</li>
                        <li>More accessible contact options throughout the page.</li>

                    </ul>

                </article>
                <section className="h-auto w-[95vw]">
                    <h1 className="font-[octarine] header my-[5vh] md:my-[15vh] p-4">
                        Typography
                    </h1>
                    <div className="h-auto flex justify-center items-start flex-col ml-[10vw]">
                        <h1 className="fonts font-[Russo] font-light my-[2.5vh]">
                            Russo One
                        </h1>
                        <h1 className="fonts font-[Ubuntu] font-light my-[2.5vh]">
                            Ubuntu
                        </h1>
                    </div>
                </section>

                <section className="h-auto w-[95vw] my-[5vh] md:my-[15vh] p-4">
                    <h1 className="font-[octarine] header">
                        Brand Colors
                    </h1>
    
                    <div
                        className="md:w-[55vw] h-auto flex flex-row
          paragraph md:ml-[10vw]"
                    >
                        <div className="h-[30vh] flex-auto bg-[#f84242] text-stone-900">
                            #f84242
                        </div>                
                    </div>  
                    <div
                        className="md:w-[55vw] h-auto flex-row justify-center 
          paragraph md:ml-[10vw]"
                    >
                        <div className="h-[30vh] flex-auto bg-[#202023] text-zinc-100">
                            #202023
                        </div>
                       
                    </div>
                </section>
              
                <section className="h-auto w-[95vw] my-[5vh] md:my-[15vh] p-4">
                    <h1 className="font-[octarine] header">
                        Social Media
                    </h1>
                    <h2 className="paragraph py-[10vh] md:ml-[10vw]">Twitter profile header.</h2>
                    <div className="md:w-[75%] flex justify-end my-[10vh] md:ml-[10vw]">
                        <Image src={Twitter}
                            alt="Image of AI generated images using circles and balls"
                        /></div>
           </section>


                <section className="h-auto w-[95vw] my-[5vh] md:my-[10vh] p-2">
                    <h1 className="font-[octarine] header">
                        Website
                    </h1>

                    <div className="md:w-[65%] flex justify-end my-[15vh]">
                        <Image src={Wide1}
                            alt="Image of a LinkedIn profile header"
                        /></div>
                    <div className="md:w-[75%] flex justify-end my-[15vh] mx-auto">
                        <Image src={Mobile1}
                            alt="Image of a LinkedIn profile header"
                        /></div>
        
                    <div className="md:w-[65%] flex justify-end my-[15vh] md:ml-[10vw]">
                        <Image src={Wide2}
                            alt="Image of a LinkedIn profile header"
                        /></div>
     <div className="md:w-[25%] flex justify-end my-[15vh] md:ml-[35vw]">
                        <Image src={Mobile3}
                            alt="Image of a LinkedIn profile header"
                        /></div>
     <div className="md:w-[25%] flex justify-end my-[15vh] md:ml-[15vw]">
                        <Image src={Mobile2}
                            alt="Image of a LinkedIn profile header"
                        /></div>
                                  <div className="md:w-[75%] flex justify-end my-[15vh] md:ml-[10vw]">
                        <Image src={Wide4}
                            alt="Image of a LinkedIn profile header"
                        /></div>
                </section>
                <Back />
            </main>
        </>
    );
};

export default AS;