import React from 'react'
import Card from '../../element/card/Card'
import TextCustom from '../../element/text/TextCustom'
import Header from '../../element/header/Header'
import { useLoaderData } from 'react-router'

const DashboardFragment = () => {
  const data = useLoaderData()
  const role = data.role
  console.log(data);
  return (
    <>
      <Header>
        <div className="grid grid-cols-3 absolute top-30 px-5 z-1 w-full gap-4">
          <Card classname='h-[150px] border-b-8 border-b-information-800 w-full bg-primary-0 justify-between'>
            <TextCustom type='2xl_700' textColor='text-information-800' classname='tracking-wider'>Jumlah Kelas</TextCustom>
            <TextCustom type='6xl_700' textColor='text-warning-500' classname='tracking-wider'>{data.classes.length}</TextCustom>
          </Card>
          <Card classname='h-[150px] border-b-8 border-b-information-800 w-full bg-primary-0 justify-between'>
            <TextCustom type='2xl_700' textColor='text-information-800' classname='tracking-wider'>Pelajaran </TextCustom>
            <TextCustom type='6xl_700' textColor='text-warning-500' classname='tracking-wider'>{data.subject.length}</TextCustom>
          </Card>
          <Card classname='h-[150px] border-b-8 border-b-information-800 w-full bg-primary-0 justify-between'>
            <TextCustom type='2xl_700' textColor='text-information-800' classname='tracking-wider'>{role === "admin" ? "Teacher" : "Wali Kelas"}</TextCustom>
            <TextCustom type='6xl_700' textColor='text-warning-500' classname='tracking-wider'>{role === "admin" ? data.teacher.filter(u => u.role === "teacher").length : data.advisor.length}</TextCustom>
          </Card>
        </div>
      </Header>
    </>
  )
}

export default DashboardFragment