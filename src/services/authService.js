import { apiAuthInstance, apiInstance } from "../utils/axios";

export const postSignUp = async (data) => apiInstance.post('/sign-up', data).then((res) => res.data)
export const postSignIn = async (data) => apiInstance.post('/sign-in', data).then((res) => res.data)

export const getUserLogin = async () => apiAuthInstance.get('/user').then((res) => res.data)
export const getAllUser = async () => apiAuthInstance.get('/users').then((res) => res.data)
export const getUserById = async (id) => apiAuthInstance.get(`/user/${id}`).then((res) => res.data)

// admin using params
export const getTeacherDetail = async (id) => apiAuthInstance.get(`/teacher-detail/${id}`).then((res) => res.data)

export const assignTeacher = async (data, id) => apiAuthInstance.post(`/teacher/${id}/assign-class-subject`, data).then((res) => res.data)

