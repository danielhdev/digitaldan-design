import React from 'react'
import { ImLinkedin, ImTwitter, ImMail } from 'react-icons/im'

const Contacticons = () => {
    return (
        <div className='iconsize fixed bottom-5 right-[5vw]
        flex flex-row space-x-[5vw] md:space-x-[3vw]'>
            <ImMail />
            <ImTwitter />
            <ImLinkedin />
        </div>
    )
}

export default Contacticons