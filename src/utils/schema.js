import { z } from 'zod'

export const signUpSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(5),
  // role: z.enum(['admin', 'teacher', 'student'])
})

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
})


export const classSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(10),
  classAdvisorId: z.string().min(5),
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
  name: z.string().min(1, 'Name is required'),
})

export const assignTeacherSchema = z.object({
  classId: z.string().min(1, 'Name is required'),
  subjectId: z.string().min(1, 'Name is required'),
})