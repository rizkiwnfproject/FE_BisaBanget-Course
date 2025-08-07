import React from 'react'
import Header from '../../element/header/Header'
import TextCustom from '../../element/text/TextCustom'
import { BsPlusCircle, BsPlusCircleFill } from 'react-icons/bs'
import Card from '../../element/card/Card'
import ImageCustom from '../../element/image/Image'
import { Link } from 'react-router'

const ClassFragment = ({
  id = 1
}) => {
  return (
    <>
      <div className="overflow-y-hidden">
        <Header height='h-[100px]'>
          <div className="absolute top-13 left-1/2 -translate-x-1/2 border border-secondary-100 rounded-lg flex w-[96%] h-20 bg-primary-0 items-center px-5 justify-between">
            <TextCustom type="xl_700" textColor='text-information-800'>
              Class Page
            </TextCustom>
            <Link to="/user/class/create">
              <button className='bg-warning-500 hover:bg-warning-400 duration-150 cursor-pointer px-5 py-3 rounded-lg'>
                <TextCustom type='md_700' textColor='text-secondary-800' classname='flex gap-2 items-center'>
                  <BsPlusCircleFill size="20px" />
                  New Class
                </TextCustom>
              </button>
            </Link>
          </div>
        </Header>
        <div className="mt-20 grid grid-cols-4 gap-2 pr-4 overflow-y-hidden">
          <Card classname='h-[300px]' align='' padding='' flexDirection='flex-col'>
            <div className="w-full h-[150px] ">
              <ImageCustom path="course" imageUrl="image-1" format='jpg' alt="kelas" classname='w-full h-full object-cover object-top rounded-t-lg' />
            </div>
            <div className="h-[150px] px-5 py-2 flex flex-col justify-between">
              <div className="flex flex-col">
                <TextCustom type='md_600'>
                  Nama Kelas
                </TextCustom>
                <div className="flex justify-between mt-2">
                  <TextCustom type='xs_600'>
                    Jumlah Siswa
                  </TextCustom>
                  <TextCustom type='xs_600'>
                    20 Siswa
                  </TextCustom>
                </div>
                <div className="flex justify-between mt-2">
                  <TextCustom type='xs_600'>
                    Wali Kelas
                  </TextCustom>
                  <TextCustom type='xs_600'>
                    Bambang .spd
                  </TextCustom>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 justify-between">
                <button className='bg-success-600 py-1 rounded '>
                  <Link to={`/user/class/detail/${id}`}>
                    <TextCustom type='md_500' textColor='text-white'>
                      Detail
                    </TextCustom>
                  </Link>
                </button>
                <button className='bg-warning-500 py-1 rounded'>
                  <Link to={`/user/class/edit/${id}`}>
                    <TextCustom type='md_500'>
                      Edit
                    </TextCustom>
                  </Link>
                </button>
                <button className='bg-error-500 py-1 rounded' onClick={() => document.getElementById('delete').showModal()}>
                  <TextCustom type='md_500' textColor='text-white'>
                    Hapus
                  </TextCustom>
                </button>
              </div>
            </div>
          </Card>
        </div>
        <dialog id="delete" className="modal" >
          <div className="modal-box overflow-y-hidden">
            <h3 className="font-bold text-lg">Nama Kelas</h3>
            <p className="py-4">Apakah Yakin Ingin Mengapus</p>
            <div className="modal-action">
              <form method="dialog" className='flex gap-3'>
                <button className="bg-gray-200 px-4 py-2 rounded font-semibold">Cancel</button>
                <button className="bg-error-500 px-4 py-2 rounded font-semibold text-primary-0">Delete</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default ClassFragment