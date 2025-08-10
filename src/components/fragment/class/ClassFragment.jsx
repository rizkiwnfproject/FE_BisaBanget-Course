import React from 'react'
import Header from '../../element/header/Header'
import TextCustom from '../../element/text/TextCustom'
import { BsPlusCircle, BsPlusCircleFill } from 'react-icons/bs'
import Card from '../../element/card/Card'
import ImageCustom from '../../element/image/Image'
import { Link, useLoaderData, useNavigate } from 'react-router'
import { useMutation } from '@tanstack/react-query'
import { deleteClass } from '../../../services/classService'

const ClassFragment = () => {
  const data = useLoaderData()
  const classes = data.classes.data
  console.log(classes);
  
  
  const role = data.role
  
  const navigate = useNavigate()

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (id) => deleteClass(id)
  })

  const handleDelete = async (id) => {
    try {
      await mutateAsync(id)
      navigate('/user/class')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="overflow-y-hidden">
        <Header height='h-[100px]'>
        <div className="absolute top-13 left-1/2 -translate-x-1/2 border border-secondary-100 rounded-lg flex flex-col sm:flex-row w-[96%] h-25 md:h-20 bg-primary-0 items-center px-5 py-2 md:py-0 justify-between">
            <TextCustom type="xl_700" textColor='text-information-800'>
              Halaman Kelas
            </TextCustom>
            {role === "admin" && (
              <Link to="/user/class/create">
                <button className='bg-warning-500 hover:bg-warning-400 duration-150 cursor-pointer px-5 py-3 rounded-lg'>
                  <TextCustom type='md_700' textColor='text-secondary-800' classname='flex gap-2 items-center'>
                    <BsPlusCircleFill size="20px" />
                    Tambahkan Data
                  </TextCustom>
                </button>
              </Link>
            )}
          </div>
        </Header>
        <div className="mt-20 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 pr-4 overflow-y-hidden">
          {classes.map((item, index) => (
            <Card classname='min-h-[300px] max-h-[400px]' align='' padding='' flexDirection='flex-col' key={index}>
              <div className="w-full h-[150px] ">
                <ImageCustom path="course" imageUrl="image-1" format='jpg' alt="kelas" classname='w-full h-full object-cover object-top rounded-t-lg' />
              </div>
              <div className="h-[150px] px-5 py-2 flex flex-col justify-between">
                <div className="flex flex-col">
                  <TextCustom type='md_600'>
                    {item.name}
                  </TextCustom>
                  <div className="flex justify-between mt-2">
                    <TextCustom type='xs_600'>
                      Jumlah Pelajaran
                    </TextCustom>
                    <TextCustom type='xs_600'>
                      {classes[index].subjects.length}
                    </TextCustom>
                  </div>
                  <div className="flex justify-between mt-2">
                    <TextCustom type='xs_600'>
                      Wali Kelas
                    </TextCustom>
                    <TextCustom type='xs_600'>
                      {item.classAdvisorId.name}
                    </TextCustom>
                  </div>
                </div>
                <div className={`grid ${role === "admin" ? "grid-cols-3 gap-2 justify-between" : "grid-cols-1"}`}>
                  <button className='bg-success-600 py-1 rounded '>
                    <Link to={`/user/class/detail/${item._id}`}>
                      <TextCustom type='md_500' textColor='text-white'>
                        Detail
                      </TextCustom>
                    </Link>
                  </button>
                  {role === "admin" && (
                    <>
                      <button className='bg-warning-500 py-1 rounded'>
                        <Link to={`/user/class/edit/${item._id}`}>
                          <TextCustom type='md_500'>
                            Edit
                          </TextCustom>
                        </Link>
                      </button>
                      <button className='bg-error-500 py-1 rounded cursor-pointer' onClick={() => handleDelete(item._id)} disabled={isLoading}>
                        <TextCustom type='md_500' textColor='text-white'>
                          Hapus
                        </TextCustom>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default ClassFragment