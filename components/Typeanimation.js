import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Typeanimation = () => {
    return (
        <div className="h-[1rem] font-bold heroheader">
            <Typewriter
                words={['UX', 'UI', 'Web']}
                loop={false}
                typespeed={10}
                deletespeed={10}
            /></div>
    )
}

export default Typeanimation