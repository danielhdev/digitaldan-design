import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbarcontainer">
            <nav className="flex justify-start w-[90vw] mx-auto space-x-[5vw]
            top-0">
                <Link href="/">
                    <span className="font-[octarine] tracking-widest cursor-pointer
                    text-[5.5vw]
                    md:text-[3.5vw]
                    lg:text-[2.5vw]
                    
                    "> d.d</span>
                </Link>
                <div className="link space-x-[4vw]">
                    <Link href="/Work">work</Link>
                    <Link href="/About">about</Link>
                    <Link href="/Contact">contact</Link>
                </div>

            </nav>

        </div>
    )
}

export default Navbar