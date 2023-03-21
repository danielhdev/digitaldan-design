import Contacticons from '@components/Contacticons'
import Navbar from '@components/Navbar'


const About = () => {
    return (
        <>
            <Navbar />
            <Contacticons />

            <main>


                <section className="h-screen flex justify-center items-center">


                    <div className="w-[95vw] md:w-[70vw]">
                        <h1 className="header">About Digitaldan Agency</h1>
                        <div className="border-[0.15rem] border-l-0 border-b-0 border-amber-600 w-fit">
                            <p className="paragraph md:w-[60ch] text-[var(--stone)] font-bold
                            pt-4 pr-6 
                            md:pt-8 md:pr-12 
                            
                            ">
                                I'm Daniel Hubschmann from Germany,<br /> senior digital designer with over 20 years of experience.
                                <br />
                                <br />
                                Offering web and app design, digital graphics for ads, events or presentations and I will also do brand design for my clients.
                                <br />
                                <br />
                                My tools are Figma, Adobe Ae, PS, Ai, Blender, Inkscape and I can code in HTML, CSS and JavaScript.
                                <br />
                                <br />
                                If you are looking for a reliable freelancer and/ or sub contractor, contact me
                                <span className="text-amber-600 font-extrabold">    HERE  </span>
                                and let&apos;s talk about your project!
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </section>

            </main >
        </>
    )
}

export default About 