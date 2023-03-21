import React from 'react'
import Link from 'next/link'
const Hero = () => {
    return (
        <main className="h-screen pt-[32vh]">
            <section className="absolute top-[20vh] left-[10vw]">
                <h1 className="header">digital.dan agency</h1>
                <div className="paragraph">digital design - brand design</div>

            </section>
            <div className="herobg bg-cover bg-center bg-no-repeat w-screen h-[60vh]
            flex flex-col justify-center items-center
            " >
                <Link href="/Work">
                    <span className='header bg-zonc-50 p-1 
                    cursor-pointer
                    '>work </span></Link>
                <Link href="/About">
                    <span className='header bg-zonc-50 p-1 
                    cursor-pointer
                    '>about </span></Link>


                <span className='header bg-zonc-50 p-1'>contact </span>


            </div>
        </main>
    )
}

export default Hero