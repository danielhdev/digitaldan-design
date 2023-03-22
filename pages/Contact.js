
import FeedbackForm from '@components/FeedbackForm'

import React, { useEffect, useState } from 'react'

const Contact = () => {



    return (<>



        <main className="h-screen flex justify-center items-center">


            <section className='flex flex-col md:flex-row justify-center items-center
            h-auto w-full py-[12vh] bg-[var(--stone)]'>

                <div className="w-[full landscape:w-[50vw]">
                    <FeedbackForm />

                </div>
            </section></main>

    </>
    )
}

export default Contact