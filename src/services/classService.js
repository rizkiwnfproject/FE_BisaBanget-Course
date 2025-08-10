import { apiAuthInstance } from "../utils/axios";


// export const getClassByTeacher = async () => apiAuthInstance.get('/my-classes').then((res) => res.data)
export const getClass = async () => apiAuthInstance.get('/class').then((res) => res.data)
export const getClassById = async (id) => apiAuthInstance.get(`/class/${id}`).then((res) => res.data)
export const postClass = async (data) => apiAuthInstance.post('/class', data).then((res) => res.data)
export const updateClass = async (data, id) => apiAuthInstance.put(`/class/${id}`, data).then((res) => res.data)
export const deleteClass = async (id) => apiAuthInstance.delete(`/class/${id}`).then((res) => res.data)

export const getTeacherClasses= async () => apiAuthInstance.get('/my-classes').then((res) => res.data)
export const getTeacherClassesAdvisor = async () => apiAuthInstance.get('/my-classes-advisor').then((res) => res.data)
