import React from 'react'
import Link from 'next/link'
const pageNotFound = () => {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center relative">

            <div className="absolute w-[300px] h-[300px] border-t-[2px] border-[var(--stone)]"></div>
            <div className="absolute w-[300px] h-[300px] border-r-[2px] border-[var(--stone)]
            right-[30vw] rotate-[20deg]"></div>
            <h1 className="font-[octarine] header z-20">404</h1>
            <h1 className="font-[octarine] header z-20">page not found</h1>
            <h2 className="font-[Oxygen] text-[2vw] z-20 text-amber-600">
                <Link href="/">
                    go back

                </Link>
            </h2>

        </main>
    )
}

export default pageNotFound