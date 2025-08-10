import { Link, useLoaderData, useNavigate, useParams } from "react-router"
import Header from "../../element/header/Header"
import TextCustom from "../../element/text/TextCustom"
import { useMutation } from "@tanstack/react-query"
import { deleteSubject } from "../../../services/subjectService"

const DetailSubjectFragment = () => {
    const { id } = useParams()
    let data = useLoaderData()
    console.log(data);
    
    const navigate = useNavigate()


    const { mutateAsync } = useMutation({
        mutationFn: (id) => deleteSubject(id)
    })

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
            <div className="">
                <Header height='h-[100px]'>
                    <div className="absolute top-13 left-1/2 -translate-x-1/2 border border-secondary-100 rounded-lg flex w-[96%] h-20 bg-primary-0 items-center px-5 justify-between">
                        <TextCustom type="xl_700" textColor='text-information-800'>
                            Detail Pelajaran
                        </TextCustom>
                        {data.role === "admin" && (
                            <div className="flex gap-2 w-1/4">
                                <button className='bg-warning-500 py-2 rounded w-full'>
                                    <Link to={`/user/subject/edit/${id}`}>
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
                <div className="mt-20 grid grid-cols-2 gap-2 pr-4">
                    <div className="px-4">
                        <div className="space-y-5">
                            <TextCustom type="3xl_700">Nama Pelajaran : {data.subject.name}</TextCustom>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailSubjectFragment