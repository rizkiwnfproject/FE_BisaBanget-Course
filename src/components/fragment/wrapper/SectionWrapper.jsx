import React from 'react'

const SectionWrapper = ({
    classname = "",
    maxWidth = "max-w-10/12",
    padding = "py-15",
    bgColor = "",
    children
}) => {
    return (
        <>
            <div className={`${bgColor} ${padding}`}>
                <div className={`flex flex-col w-full mx-auto ${maxWidth} ${classname}`}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default SectionWrapper