import Header from '../../element/header/Header'
import TextCustom from '../../element/text/TextCustom'
import ImageCustom from '../../element/image/Image'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from '@tanstack/react-query'
import { useLoaderData, useNavigate, useParams } from 'react-router'
import { assignTeacher } from '../../../services/authService'
import { assignTeacherSchema } from '../../../utils/schema'

const TeacherAssignFragment = () => {
  const data = useLoaderData()

  const navigate = useNavigate()
  const { id } = useParams()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(assignTeacherSchema)
  })

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (values) => assignTeacher(values, id)
  })
  const onSubmit = async (values) => {
    try {
      console.log({
        teacherId: id,
        values: values
      })
      await mutateAsync(values)

      navigate('/user/teacher')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="">
        <Header height='h-[100px]'>
          <div className="absolute top-13 left-1/2 -translate-x-1/2 border border-secondary-100 rounded-lg flex flex-col md:flex-row w-[96%] h-30 md:h-20 bg-primary-0 items-center px-5 py-2 md:py-0 justify-between">
            <TextCustom type="xl_700" textColor='text-information-800'>
              Assign Guru Ke Kelas
            </TextCustom>
            <TextCustom type="xl_700" textColor='text-information-800'>
              Nama : {data.user.data.name}
            </TextCustom>
          </div>
        </Header>
        <div className="mt-20 grid lg:grid-cols-2 gap-2 pr-4">
          <div className="px-4">
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
              <div className="flex flex-col gap-2">
                <TextCustom type='sm_400'>Pilih Kelas</TextCustom>
                <select {...register('classId')} defaultValue="Pilih Kelas" className="select w-full">
                  <option value="">Pilih Kelas</option>
                  {data.classes.map((item, index) => (
                    <option key={index} value={item._id}>{item.name}</option>
                  ))}
                </select>
              </div>
              {errors.classId?.message && <p className='text-red-500 text-xs px-2'>{errors.classId?.message}</p>}
              <div className="flex flex-col gap-2">
                <TextCustom type='sm_400'>Pilih Pelajaran</TextCustom>
                <select {...register('subjectId')} defaultValue="Pilih Pelajaran" className="select w-full">
                  <option value="">Pilih Pelajaran</option>
                  {data.subjects.map((item, index) => (
                    <option key={index} value={item._id}>{item.name}</option>
                  ))}
                </select>
              </div>
              {errors.subjectId?.message && <p className='text-red-500 text-xs px-2'>{errors.subjectId?.message}</p>}
              <div className="flex gap-2">
                <button type='submit' disabled={isLoading} className='bg-information-700 py-2 rounded cursor-pointer w-full'>
                  <TextCustom type='md_600' textColor='text-white'>Masukkan Ke Kelas</TextCustom>
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

export default TeacherAssignFragment