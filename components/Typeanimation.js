import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Typeanimation = () => {
    return (
        <div className="h-[1rem] font-bold herosubtext">
            <Typewriter
                words={['User Experience', 'SEO', 'Conversion']}
                loop={false}
                typespeed={10}
                deletespeed={10}
            /></div>
    )
}

export default Typeanimation