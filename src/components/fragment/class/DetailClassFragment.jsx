import { Link, useLoaderData, useNavigate, useParams } from "react-router"
import Header from "../../element/header/Header"
import TextCustom from "../../element/text/TextCustom"
import { useMutation } from "@tanstack/react-query"
import { deleteClass } from "../../../services/classService"

const DetailClassFragment = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const detailClass = data.detailClass
    const role = data.role
    
    const navigate = useNavigate()


    const { mutateAsync } = useMutation({
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
            <div className="">
                <Header height='h-[100px]'>
                    <div className="absolute top-13 left-1/2 -translate-x-1/2 border border-secondary-100 rounded-lg flex w-[96%] h-20 bg-primary-0 items-center px-5 justify-between">
                        <TextCustom type="xl_700" textColor='text-information-800'>
                            Detail Class
                        </TextCustom>
                        {role === "admin" && (
                            <div className="flex gap-2 w-1/4">
                                <button className='bg-warning-500 py-2 rounded w-full'>
                                    <Link to={`/user/class/edit/${id}`}>
                                        <TextCustom type='md_500'>
                                            Edit
                                        </TextCustom>
                                    </Link>
                                </button>
                                <button className='bg-error-500 py-2 rounded w-full' onClick={() => handleDelete(id)}>
                                    <TextCustom type='md_500' textColor='text-white'>
                                        Hapus
                                    </TextCustom>
                                </button>
                            </div>
                        )}
                    </div>
                </Header>
                <div className="mt-20 grid grid-cols-1 gap-2 pr-4">
                    <div className="px-4">
                        <div className="space-y-5">
                            <TextCustom type="3xl_700">{detailClass.name}</TextCustom>
                            <div className="space-y-3">
                                <TextCustom type="lg_600">Deskripsi Kelas</TextCustom>
                                <TextCustom type="sm_400" classname="text-justify">{detailClass.description}</TextCustom>
                            </div>
                            <div className="border border-secondary-100 px-3 py-4 rounded flex justify-between">
                                <TextCustom type="lg_600">Wali Kelas : </TextCustom>
                                <TextCustom type="lg_600">{detailClass.classAdvisorId.name}</TextCustom>
                            </div>
                            <div className="border border-secondary-100 px-3 py-4 rounded flex flex-col gap-4">
                                <TextCustom type="lg_600">Mata Pelajaran </TextCustom>
                                {detailClass.subjects.map((item, index) => (
                                    <div key={index} className="w-full flex justify-between">
                                        <TextCustom type="sm_400">{item.subjectId.name}</TextCustom>
                                        <TextCustom type="sm_400">{item.teacherId.name}</TextCustom>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <div className="students w-full border border-secondary-100 rounded px-3 py-4 flex flex-col gap-4">
                        <TextCustom type="lg_600">Nama Siswa </TextCustom>
                        <ol className="list-decimal list-inside">
                            <li>Item pertama</li>
                            <li>Item kedua</li>
                            <li>Item ketiga</li>
                        </ol>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default DetailClassFragment