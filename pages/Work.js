import Contacticons from '@components/Contacticons'
import Navbar from '@components/Navbar'
import React from 'react'

const Work = () => {
    return (
        <>
            <Navbar />
            <Contacticons />
            <main className="w-full h-auto pb-[20vh] flex flex-col">
                <section className="w-[70vw] flex flex-col justify-start mx-auto my-[15vh]">
                    <h1 className="header">Creating digital values</h1>
                    <div className="border-t-[2px] border-l-[2px] border-r-0 border-b-0 border-stone-800/50 border-[1rem] w-fit">
                        <p className="paragraph w-[40ch] pt-3 pl-8 ">
                            Welcome! I&apos;m Daniel, a senior designer from Germany,
                            offering:
                            <br />
                            <br />
                            <ol>
                                <li>App, UI, web design</li>
                                <li>Digital graphic design for</li>
                                <li>ads, events or presentaions</li>
                                <li>A (re)design of your brand  </li>
                            </ol>


                            <br />
                            Together we will reach your business goals.  </p>
                    </div>
                </section>

            </main></>
    )
}

export default Work