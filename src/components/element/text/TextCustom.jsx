import React from 'react'

const TextCustom = ({
  children,
  type = "",
  classname = "",
  textColor = "",
  bgColor = "",
  isHover = false,
  textTransform = "capitalize",
  leading = "",
  respText = ""
}) => {
  if (type === "6xl_400") {
    return (
      <p className={`${respText} lg:text-7xl font-normal ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "6xl_500") {
    return (
      <p className={`${respText} lg:text-7xl font-medium  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "6xl_600") {
    return (
      <p className={`${respText} lg:text-7xl font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "6xl_700") {
    return (
      <p className={`${respText} lg:text-7xl font-bold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "5xl_400") {
    return (
      <p className={`${respText} lg:text-[40px] font-normal  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "5xl_500") {
    return (
      <p className={`${respText} lg:text-[40px] font-medium  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "5xl_600") {
    return (
      <p className={`${respText} lg:text-[40px] font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "5xl_700") {
    return (
      <p className={`${respText} lg:text-[40px] font-bold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "4xl_400") {
    return (
      <p className={`${respText} lg:text-4xl font-normal  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "4xl_500") {
    return (
      <p className={`${respText} lg:text-4xl font-medium  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "4xl_600") {
    return (
      <p className={`${respText} lg:text-4xl font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "4xl_700") {
    return (
      <p className={`${respText} lg:text-4xl font-bold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "3xl_400") {
    return (
      <p className={`${respText} lg:text-[32px] font-normal  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "3xl_500") {
    return (
      <p className={`${respText} lg:text-[32px] font-medium  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "3xl_600") {
    return (
      <p className={`${respText} lg:text-[32px] font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "3xl_700") {
    return (
      <p className={`${respText} lg:text-[32px] font-bold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "2xl_400") {
    return (
      <p className={`${respText} lg:text-2xl font-normal  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "2xl_500") {
    return (
      <p className={`${respText} lg:text-2xl font-medium  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "2xl_600") {
    return (
      <p className={`${respText} lg:text-2xl font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "2xl_700") {
    return (
      <p className={`${respText} lg:text-2xl font-bold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "xl_400") {
    return (
      <p className={`${respText} lg:text-xl font-normal  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "xl_500") {
    return (
      <p className={`${respText} lg:text-xl font-medium  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "xl_600") {
    return (
      <p className={`${respText} lg:text-xl font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "xl_700") {
    return (
      <p className={`${respText} lg:text-xl font-bold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "lg_400") {
    return (
      <p className={`${respText} lg:text-lg font-normal  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "lg_500") {
    return (
      <p className={`${respText} lg:text-lg font-medium  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "lg_600") {
    return (
      <p className={`${respText} lg:text-lg font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "lg_700") {
    return (
      <p className={`${respText} lg:text-lg font-bold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "md_400") {
    return (
      <p className={`${respText} lg:text-base font-normal  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "md_500") {
    return (
      <p className={`${respText} lg:text-base font-medium  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "md_600") {
    return (
      <p className={`${respText} lg:text-base font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "md_700") {
    return (
      <p className={`${respText} lg:text-base font-bold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "sm_400") {
    return (
      <p className={`${respText} lg:text-sm font-normal  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "sm_500") {
    return (
      <p className={`${respText} lg:text-sm font-medium  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "sm_600") {
    return (
      <p className={`${respText} lg:text-sm font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "sm_700") {
    return (
      <p className={`${respText} lg:text-sm font-bold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "xs_400") {
    return (
      <p className={`${respText} lg:text-xs font-normal  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "xs_500") {
    return (
      <p className={`${respText} lg:text-xs font-medium  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "xs_600") {
    return (
      <p className={`${respText} lg:text-xs font-semibold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "xs_700") {
    return (
      <p className={`${respText} lg:text-xs font-bold  ${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  } else if (type === "span") {
    return (
      <span className={`${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</span>
    )
  } else {
    return (
      <p className={`${classname} ${textColor} ${bgColor} ${leading} ${textTransform} ${isHover}`} >{children}</p>
    )
  }
}

export default TextCustom