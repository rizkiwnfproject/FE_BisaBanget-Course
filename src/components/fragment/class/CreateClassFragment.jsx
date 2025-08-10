import Header from '../../element/header/Header'
import TextCustom from '../../element/text/TextCustom'
import ImageCustom from '../../element/image/Image'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { classSchema } from '../../../utils/schema'
import { useMutation } from '@tanstack/react-query'
import { postClass, updateClass } from '../../../services/classService'
import { useLoaderData, useNavigate, useParams } from 'react-router'

const CreateClassFragment = () => {
  const data = useLoaderData()
  const navigate = useNavigate()
  const { id } = useParams()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: data?.classes?.name || "",
      description: data?.classes?.description || "",
      classAdvisorId: data?.classes?.classAdvisorId?._id || "",
      subjects: data?.classes?.subjects?.length
        ? data.classes.subjects.map((s) => ({
          subjectId: s.subjectId?._id || "",
          teacherId: s.teacherId?._id || ""
        }))
        : [{ subjectId: "", teacherId: "" }]
    },
    resolver: zodResolver(classSchema)
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subjects"
  })

  const createClasses = useMutation({
    mutationFn: (values) => postClass(values)
  })
  const updateClasses = useMutation({
    mutationFn: (values) => updateClass(values, id)
  })

  const onSubmit = async (values) => {
    try {
      console.log(values)
      if (data.classes === null) {
        await createClasses.mutateAsync(values)
      } else {
        await updateClasses.mutateAsync(values)
      }

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
              {data.name} Kelas
            </TextCustom>
          </div>
        </Header>
        <div className="mt-20 grid lg:grid-cols-2 gap-2 pr-4">
          <div className="px-4">
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
              <div className="flex flex-col gap-2">
                <TextCustom type='sm_400'>Nama Kelas</TextCustom>
                <input type="text" className='w-full border border-secondary-100 py-2 px-4 rounded text-sm' {...register('name')} />
                {errors.name?.message && <p className='text-red-500 text-xs px-2'>{errors.name?.message}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <TextCustom type='sm_400'>Deskripsi Kelas</TextCustom>
                <textarea type="text" className='w-full border border-secondary-100 py-2 px-4 rounded h-20 text-sm max-h-60' {...register('description')} />
                {errors.description?.message && <p className='text-red-500 text-xs px-2'>{errors.description?.message}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <TextCustom type='sm_400'>Pilih Wali Kelas</TextCustom>
                <select {...register('classAdvisorId')} defaultValue="Pilih Wali Kelas" className="select w-full">
                  <option value="">Pilih Guru</option>
                  {data.users.map((item, index) => (
                    item.role === "teacher" && (
                      <option key={index} value={item._id}>{item.name}</option>
                    )
                  ))}
                </select>
                {errors.classAdvisorId?.message && <p className='text-red-500 text-xs px-2'>{errors.classAdvisorId?.message}</p>}
              </div>

              <div className="flex flex-col gap-4">
                {fields.map((field, index) => (
                  <div key={field.id} className="flex flex-col md:flex-row gap-2 items-end">
                    <div className="w-full space-y-2">
                      <TextCustom type='sm_400'>Mata Pelajaran</TextCustom>
                      <select {...register(`subjects.${index}.subjectId`)} defaultValue="Pilih Mata Pelajaran" className="select w-full">
                        <option value="">Pilih Mata Pelajaran</option>
                        {data.subjects.map((subject) => (
                          <option key={subject._id} value={subject._id}>
                            {subject.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full space-y-2">
                      <TextCustom type='sm_400'>Guru</TextCustom>
                      <select {...register(`subjects.${index}.teacherId`)} defaultValue="Pilih Wali Kelas" className="select w-full">
                        <option value="">Pilih Guru</option>
                        {data.users.map((item, index) => (
                          item.role === "teacher" && (
                            <option key={index} value={item._id}>{item.name}</option>
                          )
                        ))}
                      </select>
                    </div>
                    <button type="button" onClick={() => {
                      if (fields.length > 1) {
                        remove(index)
                      }
                    }}
                      className={`bg-error-600 py-2 px-2 rounded ${fields.length === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={fields.length === 1}
                    >
                      <TextCustom type='md_600' textColor='text-white'>Hapus</TextCustom>
                    </button>
                  </div>
                ))}
                {errors.classAdvisorId?.message && <p className='text-red-500 text-xs px-2'>{errors.classAdvisorId?.message}</p>}
                <div className="flex flex-col md:flex-row gap-2">
                  <button type="button" onClick={() => append({ subjectId: "", teacherId: "" })} className='bg-information-500 py-2 rounded cursor-pointer w-full'>
                    <TextCustom type='md_600' textColor='text-white'>Tambah Pelajaran dan Guru</TextCustom>
                  </button>
                  <button type='submit' disabled={data.classes === null ? createClasses.isLoading : updateClasses.isLoading} className='bg-information-700 py-2 rounded cursor-pointer w-full'>
                    <TextCustom type='md_600' textColor='text-white'>{data.classes === null ? "Buat Kelas" : "Update Kelas"}</TextCustom>
                  </button>
                </div>
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

export default CreateClassFragment