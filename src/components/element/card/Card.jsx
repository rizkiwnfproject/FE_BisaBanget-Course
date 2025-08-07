import React from 'react'

const Card = ({
    borderColor = "border-secondary-100",
    classname = "",
    align = "items-center",
    flexDirection = "",
    padding = "px-5",
    gap = "gap-4",
    children
}) => {
    return (
        <div className={`border ${borderColor} ${classname} ${align} ${flexDirection} ${padding} rounded-lg  flex ${gap}`}>
            {children}
        </div>
    )
}

export default Card