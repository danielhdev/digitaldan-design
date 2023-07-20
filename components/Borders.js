import React from 'react'

const Borders = ({ children }) => {
    return (
        <div className="border-t-[2px] border-r-[2px] border-l-0 border-b-0 
                      border-stone-800/50 dark:border-zinc-50 ">
            {children}
        </div>
    )
}

export default Borders