import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbarcontainer">
            <nav className="flex justify-start w-[90vw] mx-auto space-x-[5vw]
            top-0 z-50 mix-blend-difference">
                <Link href="/">
                    <span className="font-[octarine] tracking-widest cursor-pointer"> d.d</span>
                </Link>
                <Link href="/Work">work</Link>
                <Link href="About">about </Link>
                <Link href="#">contact</Link>

            </nav>

        </div>
    )
}

export default Navbar