import React from 'react'
import { ImLinkedin, ImTwitter, ImMail2 } from 'react-icons/im'
import Link from 'next/link'
const Contacticons = () => {
    return (
        <div className='iconsize fixed bottom-5
        flex flex-col justify-end space-y-[4vw] z-50'>

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