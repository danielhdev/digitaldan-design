import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Typeanimation = () => {
    return (
        <span className="font-bold herosubtext">
            <Typewriter
                words={['User Experience', 'SEO', 'Conversion']}
                loop={false}
                typespeed={9}
                deletespeed={9}
            /></span>
    )
}

export default Typeanimation