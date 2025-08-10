import React, { useState } from 'react'
import Header from '../../element/header/Header'
import TextCustom from '../../element/text/TextCustom'
import { useLoaderData } from 'react-router'
import Card from '../../element/card/Card'

const AdvisorFragment = () => {
    const data = useLoaderData()
    console.log(data);

    let i = 1

    const [drawer, setDrawer] = useState(false)
    const [selectedAdvisor, setSelectedAdvisor] = useState(null)

    const onClickDetail = async (classes) => {
        setSelectedAdvisor(classes);
        setDrawer(true);
    };
    return (
        <>
            <div className="relative md:static">
                <Header height='h-[100px]'>
                    <div className="absolute top-13 left-1/2 -translate-x-1/2 border border-secondary-100 rounded-lg flex w-[96%] h-20 bg-primary-0 items-center px-5 justify-between">
                        <TextCustom type="xl_700" textColor='text-information-800'>
                            Halaman Wali Kelas
                        </TextCustom>
                    </div>
                </Header>
                <div className="mt-20 grid grid-cols-4 pr-4 gap-2">
                    <div className={`${drawer ? "col-span-4 md:col-span-2" : "col-span-4"} overflow-x-auto rounded-box border border-secondary-100 bg-base-100`}>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th className=''>Nama Kelas</th>
                                    <th className='w-40'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.teacher.map((data, index) =>
                                    <tr key={index}>
                                        <th>{i++}</th>
                                        <td>{data.name}</td>
                                        <td>
                                            <button
                                                className='px-4 py-2 bg-success-600 text-primary-0 font-semibold rounded-lg' onClick={() => onClickDetail(data)}>Detail</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {drawer && selectedAdvisor && (
                        <>
                            <Card padding='px-5 py-5' align='items-start' flexDirection='flex-col' classname='absolute right-0 bg-primary-0 md:static col-span-2 min-h-max h-auto max-h-[70%] justify-between'>
                                <div className="flex flex-col gap-3">
                                    <TextCustom type='xl_600'>
                                        {selectedAdvisor.name}
                                    </TextCustom>
                                    <TextCustom type='sm_400' textColor='text-secondary-400' classname='text-justify'>
                                        <span className='text-base font-semibold text-secondary-500'>Deskripsi Kelas : </span>
                                        {selectedAdvisor.description}
                                    </TextCustom>
                                    <TextCustom type='md_600' textColor='text-secondary-500'>Pelajaran Beserta Guru Pengampu : </TextCustom>
                                    <div className="flex flex-col w-full gap-2">
                                        {selectedAdvisor.subjects.map((item, index) => (
                                            <div key={index} className="flex justify-between">
                                                <TextCustom
                                                    type="sm_400"
                                                    textColor="text-secondary-400"
                                                    classname="text-justify"
                                                >
                                                    {index + 1}. {item.subjectId.name}
                                                </TextCustom>
                                                <TextCustom
                                                    type="sm_400"
                                                    textColor="text-secondary-400"
                                                    classname="text-justify"
                                                >
                                                    {item.teacherId.name}
                                                </TextCustom>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button onClick={() => {
                                    setDrawer(false)
                                    setSelectedAdvisor(null)
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

export default AdvisorFragment