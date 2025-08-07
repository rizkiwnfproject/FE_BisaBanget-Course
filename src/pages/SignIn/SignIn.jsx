import React from 'react'
import SignInFragment from '../../components/fragment/auth/SignInFragment'
import SectionWrapper from '../../components/fragment/wrapper/SectionWrapper'

const SignIn = () => {
  return (
    <>
      <SectionWrapper bgColor="bg-primary-0" padding="" classname="h-screen items-center justify-center">
        <SignInFragment />
      </SectionWrapper>
    </>
  )
}

export default SignIn