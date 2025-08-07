import React, { useState } from 'react'
import Header from '../../element/header/Header'
import TextCustom from '../../element/text/TextCustom'
import ImageCustom from '../../element/image/Image'

const CreateClassFragment = () => {
  const [subjects, setSubjects] = useState([
    { subject: '', teacher: '' }
  ])

  const handleAddSubject = () => {
    setSubjects([...subjects, { subject: '', teacher: '' }])
  }

  const handleChange = (index, field, value) => {
    const newSubjects = [...subjects]
    newSubjects[index][field] = value
    setSubjects(newSubjects)
  }
  return (
    <>
      <div className="">
        <Header height='h-[100px]'>
          <div className="absolute top-13 left-1/2 -translate-x-1/2 border border-secondary-100 rounded-lg flex w-[96%] h-20 bg-primary-0 items-center px-5 justify-between">
            <TextCustom type="xl_700" textColor='text-information-800'>
              Create Class
            </TextCustom>
          </div>
        </Header>
        <div className="mt-20 grid grid-cols-2 gap-2 pr-4">
          <div className="px-4">
            <form action="" className='space-y-5'>
              <div className="flex flex-col gap-2">
                <TextCustom type='sm_400'>Nama Kelas</TextCustom>
                <input type="text" className='w-full border border-secondary-100 py-2 px-4 rounded' />
              </div>
              <div className="flex flex-col gap-2">
                <TextCustom type='sm_400'>Deskripsi Kelas</TextCustom>
                <textarea type="text" className='w-full border border-secondary-100 py-2 px-4 rounded max-h-32' maxLength={"100px"} />
              </div>
              <div className="flex flex-col gap-2">
                <TextCustom type='sm_400'>Wali Kelas</TextCustom>
                <select defaultValue="Pilih Wali Kelas" className="select w-full">
                  <option disabled={true}>Pilih Wali Kelas</option>
                  <option>Crimson</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
              </div>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2">
                  <TextCustom type='sm_400'>Mata Pelajaran</TextCustom>
                  <TextCustom type='sm_400'>Guru</TextCustom>
                </div>

                {subjects.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <select
                      className="select w-full"
                      value={item.subject}
                      onChange={(e) => handleChange(index, 'subject', e.target.value)}
                    >
                      <option value="" disabled>Pilih Pelajaran</option>
                      <option>Matematika</option>
                      <option>Bahasa Inggris</option>
                      <option>Fisika</option>
                    </select>

                    <select
                      className="select w-full"
                      value={item.teacher}
                      onChange={(e) => handleChange(index, 'teacher', e.target.value)}
                    >
                      <option value="" disabled>Pilih Guru</option>
                      <option>Pak Bambang</option>
                      <option>Bu Sari</option>
                      <option>Pak Dedi</option>
                    </select>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={handleAddSubject}
                  className='text-sm text-blue-600 hover:underline w-fit'
                >
                  + Tambah Pelajaran
                </button>
              </div>
              <button className='bg-information-700 py-2 rounded cursor-pointer w-full'>
                <TextCustom type='md_600' textColor='text-white'>Create class</TextCustom>
              </button>
            </form>
          </div>
          <div className="banner max-h-[580px] w-full">
            <ImageCustom path="banner" imageUrl="image-1" format='jpg' alt="banner" classname='h-full w-full object-cover rounded-lg' />
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateClassFragment