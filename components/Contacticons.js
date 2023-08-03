import React from 'react'
import { ImLinkedin, ImMail2 } from 'react-icons/im'
import Link from 'next/link'

const Contacticons = () => {
    return (
        <div className='iconsize fixed bottom-3
        flex justify-end z-40'>

            <div className="flex items-center space-x-[8vw] lg:space-x-[4vw]">
                <Link href="mailto:d.huebschmann@tutanota.com"  >
                    <a
                        method="get"
                        encType="text/plain"
                        alt="Email">
                        <ImMail2
                            className='cursor-pointer'
                        /></a>
                </Link>
                <Link
                    href="https://twitter.com/digitaldan_de">
                    <a target="_blank"
                        rel="noopener noreferrer" >
                        <span className='cursor-pointer'>X</span>

                    </a></Link>
                <Link
                    href="https://linkedin.com/in/daniel-huebschmann-175b66236/"
                >
                    <a target="_blank"
                        rel="noopener noreferrer"
                        alt="LinkedIn">
                        <ImLinkedin
                            className='cursor-pointer'
                        /></a>
                </Link>
            </div>
        </div>
    )
}

export default Contacticons