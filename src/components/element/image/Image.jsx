import React from 'react'

const ImageCustom = ({
    path,
    imageUrl,
    classname = "",
    alt,
    format = "png"
}) => {
    return (
        <img src={`/assets/images/${path}/${imageUrl}.${format}`} alt={alt} className={classname} />
    )
}

export default ImageCustom