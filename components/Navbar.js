import React from 'react'
import Link from 'next/link'



const menu = [

    { title: 'work', path: '#Work' },
    { title: 'service', path: '#About' },
    { title: 'contact', path: '#Contact' },

]
const Navbar = () => {



    return (
        <div className="navbarcontainer">
            <nav className="flex justify-start w-[90vw] mx-auto space-x-[4vw]
            top-0">
                <Link href="/">
                    <span className="font-[octarine] tracking-widest cursor-pointer mix-blend-difference
                logo
                    
                    "> d.d</span>
                </Link>
                <h1 className="fixedheader fixed right-[1rem] top-[3rem] text-zinc-50 mix-blend-difference opacity-35">digital.dan</h1>
                {menu.map((item, index) => {

                    return (
                        <Link key={index} href={item.path}>

                            <a className="link">
                                {item.title}
                            </a>
                        </Link>
                    )
                }
                )}
            </nav>

        </div >
    )
}

export default Navbar