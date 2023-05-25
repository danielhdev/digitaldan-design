import React from 'react'
const Heroimage = ({ children }) => {
    const fullHeroWidth = React.Children.map(children, child =>
        React.cloneElement(child, { className: 'w-full' }))
    return (
        <div className="lg:w-[75%] h-auto mx-auto">{fullHeroWidth}</div>
    )
}

export default Heroimage