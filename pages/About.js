import Contacticons from '@components/Contacticons'
import Navbar from '@components/Navbar'
import React from 'react'

const About = () => {
    return (
        <div>
            <Navbar />
            <Contacticons />
            <main className="h-auto pb-[20vh]">
                <section className="absolute top-[10vh] left-[10vw]">
                    <h1 className="header">
                        <section className="mx-auto mt-[5vh] mb-[15vh]">


                            <div>
                                <h1 className="header">About Digitaldan Agency</h1>
                                <div className="border-t-[1px] border-l-[1px] border-r-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                                    <p className="paragraph w-[60ch] pt-8 pl-12 ">
                                        I'm Daniel Hubschmann from Germany, senior digital designer with over 20 years of design experience.
                                        <br />
                                        <br />
                                        Offering web and app design, digital graphics for ads, events or presentations and I will also do brand design for my clients.
                                        <br />
                                        <br />
                                        My tools are Figma, Adobe Ae, PS, Ai, Blender, Inkscape and I can code in HTML, CSS and JavaScript.
                                        <br />
                                        <br />
                                        If you are looking for a reliable freelancer and/ or sub contractor, contact me HERE and let&apos;s talk about your project!
                                        <br />
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </section></h1>
                </section>
            </main>
        </div>
    )
}

export default About 