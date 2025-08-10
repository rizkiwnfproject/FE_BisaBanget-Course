import { apiAuthInstance } from "../utils/axios";

export const getSubject = async () => apiAuthInstance.get('/subject').then((res) => res.data)
export const getSubjectById = async (id) => apiAuthInstance.get(`/subject/${id}`).then((res) => res.data)
export const postSubject = async (data) => apiAuthInstance.post('/subject', data).then((res) => res.data)
export const updateSubject = async (data, id) => apiAuthInstance.put(`/subject/${id}`, data).then((res) => res.data)
export const deleteSubject = async (id) => apiAuthInstance.delete(`/subject/${id}`).then((res) => res.data)

export const getSubjectDetail = async (id) => apiAuthInstance.get(`/my-detail-subject/${id}`).then((res) => res.data)
export const getTeacherSubjects = async () => apiAuthInstance.get('/my-subject').then((res) => res.data)
