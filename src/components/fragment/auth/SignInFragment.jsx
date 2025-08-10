import React, { useState } from 'react'
import ImageCustom from '../../element/image/Image'
import TextCustom from '../../element/text/TextCustom'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema } from '../../../utils/schema'
import { useMutation } from '@tanstack/react-query'
import { postSignIn } from '../../../services/authService'
import secureLocalStorage from 'react-secure-storage'
import { STORAGE_KEY } from '../../../utils/const'

const SignInFragment = () => {
    const [view, setView] = useState(false)
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signInSchema)
    })

    const { mutateAsync, isLoading } = useMutation({
        mutationFn: (data) => postSignIn(data)
    })

    const onSubmit = async (data) => {
        try {
            console.log(data)
            const response = await mutateAsync(data)
            secureLocalStorage.setItem(STORAGE_KEY, response.data)
            navigate('/user/dashboard')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full h-[800px] my-15">
            <div className="grid grid-cols-2 w-full h-full p-3">
                <div className="form h-full w-full">
                    <div className="logo flex gap-2 items-end">
                        <TextCustom type='4xl_700' textColor='text-information-700'>
                            B<span className='text-warning-500'>B</span>
                        </TextCustom>
                        <TextCustom type='lg_600'>BisaBanget</TextCustom>
                    </div>
                    <div className="h-full w-full flex items-center justify-start ml-25">
                        <div className="flex flex-col gap-5 w-7/12">
                            <div className="space-y-2.5">
                                <TextCustom type='2xl_700'>Sign in</TextCustom>
                                <TextCustom type='md_400' textColor='text-secondary-300'>Please login to continue to your account.</TextCustom>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-3'>
                                <div className="space-y-3">
                                    <TextCustom type='sm_500'>email</TextCustom>
                                    <input
                                        type="email"
                                        placeholder='Example@gmail.com'
                                        className='border border-secondary-200 rounded-lg px-4 py-2 w-full placeholder:text-sm'
                                        {...register('email')} />
                                </div>
                                {errors.email?.message && <p className='text-red-500 text-xs px-2'>{errors.email?.message}</p>}
                                <div className="space-y-3 relative">
                                    <TextCustom type='sm_500'>password</TextCustom>
                                    <input
                                        type={view ? "password" : "text"}
                                        placeholder='Password123'
                                        className='border border-secondary-200 rounded-lg px-4 py-2 w-full placeholder:text-sm'
                                        {...register('password')} />
                                    <button type='button' onClick={() => setView(!view)} className='absolute bottom-6 right-5'>{view ? <BsEye /> : <BsEyeSlash />}</button>
                                </div>
                                {errors.password?.message && <p className='text-red-500 text-xs px-2'>{errors.password?.message}</p>}
                                <button type="submit" disabled={isLoading} className='w-full bg-information-700 py-3 text-white font-semibold rounded-lg'>
                                    Login
                                </button>
                            </form>
                            <TextCustom type='sm_500' textColor='text-secondary-300' classname='text-center'>Don't have an accout ? <span className='text-information-600 font-bold'><Link to="/sign-up">sign up</Link></span></TextCustom>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[660px]">
                    <ImageCustom path="auth" imageUrl="sign-in" alt="sign-in" classname='w-full h-full object-cover rounded-r-xl rounded-l-3xl' />
                </div>
            </div>
        </div>
    )
}

export default SignInFragment