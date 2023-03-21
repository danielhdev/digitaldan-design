import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbarcontainer">
            <nav className="flex justify-start w-[90vw] mx-auto space-x-[5vw]">
                <Link href="/">
                    <span className="font-[octarine]"> d.d</span>
                </Link>
                <Link href="#">work</Link>
                <Link href="#">contact</Link>

            </nav>

        </div>
    )
}

export default Navbar