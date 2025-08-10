import Header from '../../element/header/Header'
import TextCustom from '../../element/text/TextCustom'
import ImageCustom from '../../element/image/Image'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { subjectSchema } from '../../../utils/schema'
import { useMutation } from '@tanstack/react-query'
import { useLoaderData, useNavigate, useParams } from 'react-router'
import { postSubject, updateSubject } from '../../../services/subjectService'


const CreateSubjectFragment = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
    const { id } = useParams()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: data?.subject?.name || "",
        },
        resolver: zodResolver(subjectSchema)
    })

    const createSubject = useMutation({
        mutationFn: (values) => postSubject(values)
    })
    const updateSubjects = useMutation({
        mutationFn: (values) => updateSubject(values, id)
    })

    const onSubmit = async (values) => {
        try {
            console.log(values)
            if (data.subject === null) {
                await createSubject.mutateAsync(values)
            } else {
                await updateSubjects.mutateAsync(values)
            }
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
                            {data.name} Pelajaran
                        </TextCustom>
                    </div>
                </Header>
                <div className="mt-20 grid lg:grid-cols-2 gap-2 pr-4">
                    <div className="px-4">
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                            <div className="flex flex-col gap-2">
                                <TextCustom type='sm_400'>Nama Pelajaran</TextCustom>
                                <input type="text" className='w-full border border-secondary-100 py-2 px-4 rounded text-sm' {...register('name')} />
                            </div>
                            {errors.name?.message && <p className='text-red-500 text-xs px-2'>{errors.name?.message}</p>}
                            <div className="flex gap-2">
                                <button type='submit' disabled={data.subject === null ? createSubject.isLoading : updateSubjects.isLoading} className='bg-information-700 py-2 rounded cursor-pointer w-full'>
                                    <TextCustom type='md_600' textColor='text-white'>{data.subject === null ? "Buat Kelas" : "Update Kelas"}</TextCustom>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="banner max-h-[580px] w-full hidden lg:block">
                        <ImageCustom path="banner" imageUrl="image-1" format='jpg' alt="banner" classname='h-full w-full object-cover rounded-lg' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateSubjectFragment