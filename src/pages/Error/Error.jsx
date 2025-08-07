import React from 'react'
import SectionWrapper from '../../components/fragment/wrapper/SectionWrapper'
import TextCustom from '../../components/element/text/TextCustom'
import ImageCustom from '../../components/element/image/Image'

const Error = () => {
  return (
    <SectionWrapper padding='' classname='items-center justify-center h-screen'>
      <ImageCustom path="banner" imageUrl="error" format='jpg' />
    </SectionWrapper>
  )
}

export default Error