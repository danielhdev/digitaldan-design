import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Contacticons from './Contacticons';

const Navbar = () => {

    const [theme, setTheme] = useState('light');
    const [isAnimating, setIsAnimating] = useState(false);


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
            <div className="navbarcontainer z-10">
                <nav className="flex items-center w-fit mx-auto space-x-[5vw] top-0 mt-[0.25rem] lg:ml-[1rem]">
                    <Link href="/">
                        <span className="font-[octarine] cursor-pointer mix-blend-difference logo"> digital.dan</span>
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
                    <Contacticons />
                </nav>
            </div >
        </>
    )
}

export default Navbar