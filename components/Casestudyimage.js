import React from 'react'

const Casestudyimage = ({ children }) => {
    const fullWidth = React.Children.map(children, child =>
        React.cloneElement(child, { className: 'w-full' }))

    return (
        <div className="lg:w-[95%] h-auto mx-auto my-[10%] lg:my-[5%]">{fullWidth}</div>
    )
}

export default Casestudyimage