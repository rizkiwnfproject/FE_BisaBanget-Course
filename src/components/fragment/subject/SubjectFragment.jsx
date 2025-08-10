import Header from '../../element/header/Header'
import TextCustom from '../../element/text/TextCustom'
import Card from '../../element/card/Card'
import { Link, useLoaderData, useNavigate } from 'react-router'
import { BsPlusCircleFill } from 'react-icons/bs'
import { useMutation } from '@tanstack/react-query'
import { deleteSubject, getSubjectDetail } from '../../../services/subjectService'
import { useState } from 'react'

const SubjectFragment = () => {
  const data = useLoaderData()
  const role = data.role

  const navigate = useNavigate()

  const { mutateAsync } = useMutation({
    mutationFn: (id) => deleteSubject(id)
  })

  const [drawer, setDrawer] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [taughtSubjects, setTaughtSubjects] = useState([])

  const handleDetailSubject = async (data) => {
    setSelectedSubject(data);
    setDrawer(true);

    try {
      const res = await getSubjectDetail(data._id)
      setTaughtSubjects(res.data || [])
    } catch (error) {
      setTaughtSubjects([])
      console.error("Gagal ambil data pelajaran:", error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await mutateAsync(id)
      navigate('/user/subject')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="relative md:static">
        <Header height='h-[100px]'>
          <div className="absolute top-13 left-1/2 -translate-x-1/2 border border-secondary-100 rounded-lg flex flex-col sm:flex-row w-[96%] h-25 md:h-20 bg-primary-0 items-center px-5 py-2 md:py-0 justify-between">
            <TextCustom type="xl_700" textColor='text-information-800'>
              Halaman Pelajaran
            </TextCustom>
            {role === "admin" && (
              <Link to="/user/subject/create">
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
        <div className="mt-20 grid grid-cols-6 gap-2 pr-4">
          <table className={`table ${drawer ? "col-span-6 md:col-span-4" : "col-span-6"}`}>
            <thead>
              <tr>
                <th>No</th>
                <th className=''>Nama Pelajaran</th>
                {role === "admin" ? "" : <th className=''>Nama Kelas</th>}
                <th className=''></th>
              </tr>
            </thead>
            <tbody>
              {data.subject.map((data, index) =>
              (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{role === "admin" ? data.name : data.subjectName}</td>
                  {role === "admin" ? "" : <td className=''>{data.className}</td>}
                  {role === "admin" && (
                    <td>
                      <div className={`flex ${drawer ? "flex-col xl:flex-row" : "flex-col lg:flex-row"} w-full gap-3 `}>
                        <button
                          className='w-full px-4 py-2 bg-success-600 text-primary-0 font-semibold rounded-lg' onClick={() => handleDetailSubject(data)}>
                          Detail
                        </button>
                        <button className='w-full bg-warning-500 py-1 rounded'>
                          <Link to={`/user/subject/edit/${data._id}`}>
                            <TextCustom type='md_500'>
                              Edit
                            </TextCustom>
                          </Link>
                        </button>
                        <button className='w-full bg-error-500 py-1 rounded' onClick={() => handleDelete(data._id)}>
                          <TextCustom type='md_500' textColor='text-white'>
                            Hapus
                          </TextCustom>
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              )
              )}
            </tbody>
          </table>
          {drawer && selectedSubject && (
            <>
              <Card padding='px-5 py-5' align='items-start' flexDirection='flex-col' classname='absolute right-0 bg-primary-0 md:static col-span-2 min-h-[400px] max-h-[50%] justify-between'>
                <div className="flex flex-col gap-3">
                  <TextCustom type='xl_600'>
                    {selectedSubject.name}
                  </TextCustom>
                  <ul>
                    {taughtSubjects.length > 0 ? (
                      taughtSubjects.map((subj, index) => (
                        <li key={index}><b>{subj.className}</b> : {subj.teacherName}</li>
                      ))
                    ) : (
                      <li>Tidak Guru Yang Mengajar</li>
                    )}
                  </ul>
                </div>
                <button onClick={() => {
                  setDrawer(false)
                  setSelectedSubject(null)
                }}
                  className='text-sm w-full bg-information-800 py-2 rounded text-primary-0'>Close Detail</button>
              </Card>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default SubjectFragment