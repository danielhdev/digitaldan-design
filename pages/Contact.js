import Contacticons from '@components/Contacticons'
import FeedbackForm from '@components/FeedbackForm'
import Navbar from '@components/Navbar'
import React from 'react'

const Contact = () => {
    return (<>

        <Navbar />
        <Contacticons />

        <main className="h-screen flex justify-center items-center">


            <section className='flex flex-col md:flex-row justify-center items-center
            h-auto w-full py-[12vh] bg-[var(--stone)]'>
                <div className="w-[full] landscape:w-[50vw] font-[octarine] contactlogo text-center
                text-amber-500 tracking-wide">d.d</div>
                <div className="w-[full landscape:w-[50vw]">
                    <FeedbackForm />

                </div>
            </section></main>

    </>
    )
}

export default Contact