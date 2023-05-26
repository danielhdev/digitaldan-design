import React from 'react'
import { ImLinkedin, ImTwitter, ImMail2 } from 'react-icons/im'
import Link from 'next/link'

const Contacticons = () => {
    return (
        <div className='iconsize fixed bottom-3
        flex justify-end space-x-[8vw] lg:space-x-[4vw] z-40'>


            <Link href="mailto:d.huebschmann@tutanota.com"  >
                <a
                    method="get"
                    encType="text/plain">
                    <ImMail2
                        className='cursor-pointer'
                    /></a>
            </Link>
            <Link
                href="https://twitter.com/digitaldan_de">
                <a target="_blank"
                    rel="noopener noreferrer" >
                    <ImTwitter
                        className='cursor-pointer'
                    /></a></Link>
            <Link
                href="https://linkedin.com/in/daniel-huebschmann-175b66236/"
            >
                <a target="_blank"
                    rel="noopener noreferrer" >

                    <ImLinkedin
                        className='cursor-pointer'
                    /></a>
            </Link>
        </div>
    )
}

export default Contacticons