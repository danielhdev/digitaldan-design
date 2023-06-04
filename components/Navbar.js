import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Contacticons from './Contacticons';
import Menu from './Menu';

const Navbar = () => {

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
            <div className="navbarcontainer z-10">
                <nav className="flex items-center w-fit mx-auto space-x-[5vw] top-0 mt-[0.25rem] lg:ml-[1rem]">
                    <Link href="/">
                        <span className="font-[octarine] cursor-pointer mix-blend-difference
                logo"> digital.dan</span>
                    </Link>
                    <section className={`MyApp ${theme}`} id="darkmodeicon">
                        <div onClick={toggleTheme}>
                            <div
                                className="w-[1rem] h-[1rem] 
                                lg:w-[1.5rem] lg:h-[1.5rem] 
                                
                                rounded-full cursor-pointer border-l-2 border-b-2 border-stone-100
                       dark:hidden"
                            ></div>
                            <div className="w-[1rem] h-[1rem] 
                                lg:w-[1.25rem] lg:h-[1.25rem] 
                            rounded-full cursor-pointer hidden dark:block bg-zinc-50">

                            </div>


                        </div>

                    </section>

                    <Menu />
                    <Contacticons />
                </nav>

            </div >
        </>
    )
}

export default Navbar