import React from 'react'
import Card from '../../element/card/Card'
import TextCustom from '../../element/text/TextCustom'
import Header from '../../element/header/Header'

const DashboardFragment = () => {
  return (
    <>
      <Header>
        <div className="grid grid-cols-4 absolute top-30 px-5 z-1 w-full gap-4">
          <Card classname='h-[150px] border-b-8 border-b-information-800 w-full bg-primary-0 justify-between'>
            <TextCustom type='2xl_700' textColor='text-information-800' classname='tracking-wider'>Class</TextCustom>
            <TextCustom type='6xl_700' textColor='text-warning-500' classname='tracking-wider'>10</TextCustom>
          </Card>
          <Card classname='h-[150px] border-b-8 border-b-information-800 w-full bg-primary-0 justify-between'>
            <TextCustom type='2xl_700' textColor='text-information-800' classname='tracking-wider'>Course</TextCustom>
            <TextCustom type='6xl_700' textColor='text-warning-500' classname='tracking-wider'>10</TextCustom>
          </Card>
          <Card classname='h-[150px] border-b-8 border-b-information-800 w-full bg-primary-0 justify-between'>
            <TextCustom type='2xl_700' textColor='text-information-800' classname='tracking-wider'>Teacher</TextCustom>
            <TextCustom type='6xl_700' textColor='text-warning-500' classname='tracking-wider'>10</TextCustom>
          </Card>
          <Card classname='h-[150px] border-b-8 border-b-information-800 w-full bg-primary-0 justify-between'>
            <TextCustom type='2xl_700' textColor='text-information-800' classname='tracking-wider'>Student</TextCustom>
            <TextCustom type='6xl_700' textColor='text-warning-500' classname='tracking-wider'>10</TextCustom>
          </Card>
        </div>
      </Header>
    </>
  )
}

export default DashboardFragment