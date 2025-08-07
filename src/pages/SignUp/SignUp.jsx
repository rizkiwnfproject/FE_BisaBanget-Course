import React from 'react'
import SectionWrapper from '../../components/fragment/wrapper/SectionWrapper'
import SignUpFragment from '../../components/fragment/auth/SignUpFragment'

const SignUp = () => {
  return (
    <SectionWrapper bgColor="bg-primary-0" padding="" classname="h-screen items-center justify-center">
      <SignUpFragment />
    </SectionWrapper>
  )
}

export default SignUp