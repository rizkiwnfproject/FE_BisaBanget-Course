import { z } from 'zod'

export const signUpSchema = z.object({
  name: z.string().min(3, 'Nama Harus Lebih Dari 3 Karakter'),
  email: z.string().email(),
  password: z.string().min(5, 'Password Harus Lebih Dari 5 Karakter'),
  // role: z.enum(['admin', 'teacher', 'student'])
})

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, 'Password Harus Lebih Dari 5 Karakter'),
})


export const classSchema = z.object({
  name: z.string().min(5, 'Nama Harus Lebih Dari 5 Karakter'),
  description: z.string().min(10, 'Deskripsi Harus Lebih Dari 5 Karakter'),
  classAdvisorId: z.string().min(5, 'Wali Kelas Harus Diisi'),
  subjects: z.array(
    z.object({
      subjectId: z.string().min(5),
      teacherId: z.string().min(5),
    })
  )
    .optional()
    .default([])
})

export const subjectSchema = z.object({
  name: z.string().min(3, 'Nama Pelajaran Harus Lebih Dari 3 Karakter'),
})

export const assignTeacherSchema = z.object({
  classId: z.string().min(1, 'Kelas Harus Diisi'),
  subjectId: z.string().min(1, 'Pelajaran Harus Diisi'),
})