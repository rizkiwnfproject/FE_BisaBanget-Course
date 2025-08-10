import { useState } from 'react'
import Header from '../../element/header/Header'
import TextCustom from '../../element/text/TextCustom'
import Card from '../../element/card/Card'
import { Link, useLoaderData } from 'react-router'
import { getTeacherDetail } from '../../../services/authService'

const TeacherFragment = () => {
    const data = useLoaderData()
    let i = 1

    const [drawer, setDrawer] = useState(false)
    const [selectedTeacher, setSelectedTeacher] = useState(null)
    const [taughtSubjects, setTaughtSubjects] = useState([])

    const onClickDetail = async (teacher) => {
        setSelectedTeacher(teacher)
        setDrawer(true)
        try {
            const res = await getTeacherDetail(teacher._id) // fetch pelajaran guru
            setTaughtSubjects(res.data || [])
        } catch (error) {
            setTaughtSubjects([])
            console.error("Gagal ambil data pelajaran:", error)
        }
    }

    return (
        <>
            <div className="relative md:static">
                <Header height='h-[100px]'>
                    <div className="absolute top-13 left-1/2 -translate-x-1/2 border border-secondary-100 rounded-lg flex w-[96%] h-20 bg-primary-0 items-center px-5 justify-between">
                        <TextCustom type="xl_700" textColor='text-information-800'>
                            Halaman Guru Yang Mengajar
                        </TextCustom>
                    </div>
                </Header>
                <div className="mt-20 grid grid-cols-6 pr-4 gap-2">
                    <div className={`${drawer ? "col-span-6 md:col-span-4" : "col-span-6"} overflow-x-auto rounded-box border border-secondary-100 bg-base-100`}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th className=''>Nama</th>
                                    <th className=''>Email</th>
                                    <th className='w-40'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.teacher.map((data, index) =>
                                    data.role == "teacher" && (
                                        <tr key={index}>
                                            <th>{i++}</th>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td className='flex flex-col xl:flex-row gap-2'>
                                                <button
                                                    className='px-4 py-2 bg-success-800 text-primary-0 font-semibold rounded-lg'>
                                                    <Link to={`/user/teacher/${data._id}/assign-class-subject`}>
                                                        Assign
                                                    </Link>
                                                </button>
                                                <button
                                                    className='px-4 py-2 bg-warning-500 text-primary-0 font-semibold rounded-lg'
                                                    onClick={() => onClickDetail(data)}>
                                                    Detail
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                    {drawer && selectedTeacher && (
                        <>
                            <Card padding='px-5 py-5' align='items-start' flexDirection='flex-col' classname='absolute right-0 bg-primary-0 md:static col-span-2 min-h-[400px] max-h-[50%] justify-between'>
                                <div className="flex flex-col gap-3">
                                    <TextCustom type='xl_600'>
                                        {selectedTeacher.name}
                                    </TextCustom>
                                    <TextCustom type='xs_500' textColor='text-secondary-400' respText='text-xs'>
                                        {selectedTeacher.email}
                                    </TextCustom>
                                    {/* <TextCustom type='sm_500' textColor='text-secondary-800' classname='flex justify-between w-full'>
                                        Wali Kelas : <span className='font-bold text-warning-600'>X IPA 1</span>
                                    </TextCustom> */}
                                    <ul>
                                        {taughtSubjects.length > 0 ? (
                                            taughtSubjects.map((subj, index) => (
                                                <li key={index}><b>{subj.className}</b> : {subj.subjectName}</li>
                                            ))
                                        ) : (
                                            <li>Tidak ada pelajaran</li>
                                        )}
                                    </ul>
                                </div>
                                <button onClick={() => {
                                    setDrawer(false)
                                    setSelectedTeacher(null)
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

export default TeacherFragment