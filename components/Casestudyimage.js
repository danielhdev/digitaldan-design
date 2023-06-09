import React from 'react'

const Casestudyimage = ({ children }) => {
    const fullWidth = React.Children.map(children, child =>
        React.cloneElement(child, { className: 'w-full' }))

    return (
        <div className="w-full h-auto mx-auto my-[10%] lg:my-[5%]
        border-[1px] border-stone-800 border-solid">{fullWidth}</div>
    )
}

export default Casestudyimage