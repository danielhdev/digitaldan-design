import Contacticons from '@components/Contacticons'
import Navbar from '@components/Navbar'
import React from 'react'
import Image from 'next/image'
import AS from '../public/as.png'
import Beauty from '../public/beauty.png'
import Burger from '../public/burger.png'
import Dev from '../public/devport.png'
import Self from '../public/selfbrand1.png'
import Social from '../public/social1.png'
import VR from '../public/vr1.png'

const Work = () => {
    return (
        <>
            <Navbar />


            <main className="h-auto pb-[20vh] flex flex-col">
                <section className="absolute top-[10vh] left-[10vw]">
                    <h1 className="header">work</h1>
                </section>

                <section className="md:w-[70vw] h-auto flex flex-col md:flex-row justify-start md:gap-12 mx-auto mt-[25vh] mb-[15vh]">

                    <div className="border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                      w-screen md:w-[50%]">

                        <Image src={AS}
                            alt="AS portfolio redesign"
                        />

                    </div>
                    <div className="md:w-[50%]">
                        <h1 className="header">A New Look</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <p className="paragraph w-[40ch] pt-3 pr-8 ">
                                Some branding and a new portfolio site for one of the best photographers on unsplash.com. His old portfolio looks a bit dated and too minimal.
                                <br />
                                <br />


                                Styleguide and website mockup coded with React.  </p>
                        </div></div>
                </section>

                <section className="md:w-[70vw] h-auto flex flex-col md:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                     w-screen md:w-[50%]">
                        <Image src={Burger}
                            alt="AS portfolio redesign"
                        />
                    </div>
                    <div className="md:w-[50%]">
                        <h1 className="header">Just Premium</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <p className="paragraph w-[40ch] pt-3 pr-8 ">
                                Redesign of a Berlin upscale burger joints' online presense. The old one was looking like an outdated template and didn't match the owner&apos;s strive for classy fast food.
                                <br />
                                <br />


                                This website mockup was coded with Next.js.  </p>
                        </div></div>
                </section>
                <section className="md:w-[70vw] h-auto flex flex-col md:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className=" border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                      w-screen md:w-[50%]">  <Image src={Self}
                            alt="AS portfolio redesign"
                        /></div>
                    <div className="md:w-[50%]">
                        <h1 className="header">It&apos;s Personal!</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <p className="paragraph w-[40ch] pt-3 pr-8 ">
                                Branding Digitaldan agency in light of the post-covid restart. AI was glad to help out with ideas.
                                <br />
                                <br />


                                Case study coded with React.js. This website is made with Next.js  </p>
                        </div></div>
                </section>
                <section className="md:w-[70vw] h-auto flex flex-col md:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className=" border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                     w-screen  md:w-[50%]">  <Image src={Beauty}
                            alt="AS portfolio redesign"
                        /></div>
                    <div className="md:w-[50%]">
                        <h1 className="header">Just Beautiful</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <p className="paragraph w-[40ch] pt-3 pr-8 ">
                                Designing a landing page for the launch of new skin care product line. Testing colors, layout and scroll animations.
                                <br />
                                <br />


                                Mockup coded with React.js.  </p>
                        </div></div>
                </section>
                <section className="md:w-[70vw] h-auto flex flex-col md:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className=" border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                     w-screen  md:w-[50%]">  <Image src={Social}
                            alt="AS portfolio redesign"
                        /></div>
                    <div className="md:w-[50%]">
                        <h1 className="header">Social Media</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <p className="paragraph w-[40ch] pt-3 pr-8 ">
                                Stand out from the noise with stylish ads, headers and other images for your social media accounts.
                                <br />
                                <br />


                                Let&apos;s grap the user&apos;s attention.  </p>
                        </div></div>
                </section>
                <section className="md:w-[70vw] h-auto flex flex-col md:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className=" border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                     w-screen  md:w-[50%]">  <Image src={VR}
                            alt="AS portfolio redesign"
                        /></div>
                    <div className="md:w-[50%]">
                        <h1 className="header">VR Nightclub</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <p className="paragraph w-[40ch] pt-3 pr-8 ">
                                Order VR assets like these digital items for a virtual reality night club in the game Second Life.

                                <br />
                                <br />

                                Stand out with style.
                            </p>
                        </div></div>
                </section>
                <section className="md:w-[70vw] h-auto flex flex-col md:flex-row justify-start gap-12 mx-auto mt-[15vh] mb-[15vh]">

                    <div className="border-r-0 border-b-0 border-stone-800/50 border-[0.5rem] 
                   w-screen md:w-[50%]">
                        <Image src={Dev}
                            alt="AS portfolio redesign"
                        /></div>
                    <div className="md:w-[50%]">
                        <h1 className="header">For Tool Fans</h1>
                        <div className="border-t-[1px] border-r-[1px] border-l-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                            <p className="paragraph w-[40ch] pt-3 pr-8 ">
                                Portfolio site, find the source of the mysterious headline.
                                <br />
                                <br />


                                Mockup coded with Next.js.  </p>
                        </div></div>
                </section>


            </main> <Contacticons /></>
    )
}

export default Work