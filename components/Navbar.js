import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Contacticons from './Contacticons';

const Navbar = () => {

    const [theme, setTheme] = useState('dark');
    const [isAnimating, setIsAnimating] = useState(false);

    const menu = [
        { id: 1, title: 'work', path: '/#Work' },
        { id: 2, title: 'about', path: '/#About' },
        { id: 3, title: 'contact', path: '/#Contact' },
        { id: 4, title: 'resume', path: "https://drive.google.com/file/d/1JIKTwgwAZAFZ8fyAO0eYpzlEM95a5YWM/view?usp=drive_link" }
    ]


    const toggleTheme = () => {
        setIsAnimating(true);
        if (theme === 'dark') {
            setTimeout(() => {
                setTheme('light');
                setIsAnimating(false);
            }, 300);
        } else {
            setTimeout(() => {
                setTheme('dark');
                setIsAnimating(false);
            }, 300);
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <main className="navbarcontainer z-10">
                <nav className="flex items-center w-fit mx-auto space-x-[1.25rem] top-0 mt-[0.25rem] lg:ml-[1rem]">
                    <Link href="/">
                        <span className="font-[octarine] cursor-pointer mix-blend-difference logo">digital.dan</span>
                    </Link>
                    <section className={`MyApp ${theme}`} id="darkmodeicon">
                        <div className={`${isAnimating ? 'dark-mode-transition' : 'light-mode-transition'}`}
                            onClick={toggleTheme}>
                            <div
                                className="w-[1rem] h-[1rem] 
                                lg:w-[1.25rem] lg:h-[1.25rem] 
                                dark:hidden rounded-full cursor-pointer border-l-2 border-b-2 border-stone-100"
                            ></div>
                            <div className="w-[1rem] h-[1rem] 
                                lg:w-[1rem] lg:h-[1rem] 
                            hidden dark:block rounded-full cursor-pointer  bg-zinc-50">
                            </div>
                        </div>
                    </section>
                    {menu.map((item) => {
                        return (
                            <nav className='hidden sm:block space-x-[1.25rem]'>
                                <Link key={item.id} href={item.path}>
                                    <a className="mix-blend-difference logo hover:text-amber-200">{item.title}
                                    </a>
                                </Link>
                            </nav>
                        )
                    }
                    )}
                    <Contacticons />

                </nav>
            </ main>
        </>
    )
}

export default Navbar