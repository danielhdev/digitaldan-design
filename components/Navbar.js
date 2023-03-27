import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const menu = [

    { title: 'work', path: '/Work' },
    { title: 'service', path: '/About' },
    { title: 'contact', path: '/Contact' },

]
const Navbar = () => {
    const router = useRouter();


    return (
        <div className="navbarcontainer">
            <nav className="flex justify-start w-[90vw] mx-auto space-x-[5vw]
            top-0">
                <Link href="/">
                    <span className="font-[octarine] tracking-widest cursor-pointer mix-blend-difference
                logo
                    
                    "> d.d</span>
                </Link>

                {menu.map((item, index) => {

                    return (
                        <Link key={index} href={item.path}>

                            <a className=
                                {`link ${router.pathname === item.path ? 'text-sky-400' : ''}`}

                            >
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