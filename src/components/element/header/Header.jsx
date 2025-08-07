import React from 'react'

const Header = ({
    children,
    height = "h-[200px]",
    bgColor = "bg-information-800"
}) => {
    return (
        <div className={`${height} ${bgColor} w-full  relative rounded-bl-lg`}>
            {children}
        </div>
    )
}

export default Header