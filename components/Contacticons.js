import React from 'react'
import { ImLinkedin, ImTwitter, ImMail } from 'react-icons/im'

const Contacticons = () => {
    return (
        <div className='iconsize fixed bottom-5 left-[85vw]
        flex flex-row justify-end space-x-[5vw] md:space-x-[3vw]'>
            <ImMail />
            <ImTwitter />
            <ImLinkedin />
        </div>
    )
}

export default Contacticons