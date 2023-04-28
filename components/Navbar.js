import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menu = [
    { title: 'work', path: '/#Work' },
    { title: 'service', path: '#About' },
    { title: 'contact', path: '#Contact' }
]
const Navbar = () => {
    const router = useRouter()
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <>
            <div className="navbarcontainer">
                <nav className="flex justify-start items-center w-[90vw] mx-auto space-x-[5vw]
            top-0">
                    <Link href="/">
                        <span className="font-[octarine] tracking-widest cursor-pointer mix-blend-difference
                logo"> digital.dan</span>
                    </Link>


                    <ul className="flex flex-row items-center space-x-[4vw]">
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
                        )}</ul>
                    <section className={`MyApp ${theme}`} id="darkmodeicon">
                        <div onClick={toggleTheme}>
                            <div
                                className="w-[15px] h-[15px] rounded-full cursor-pointer border-l-2 border-b-2 border-stone-100
                       dark:hidden"
                            ></div>
                            <div className="w-[15px] h-[15px] rounded-full cursor-pointer hidden dark:block bg-zinc-50"></div>
                        </div>
                    </section>
                </nav>

            </div >
        </>
    )
}

export default Navbar