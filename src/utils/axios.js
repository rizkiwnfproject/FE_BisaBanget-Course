import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { STORAGE_KEY } from "./const";


export const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    timeout: 10000 
})

export const apiAuthInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    timeout: 10000 
})

apiAuthInstance.interceptors.request.use((config) => {
    const session = secureLocalStorage.getItem(STORAGE_KEY)
    if (!session) {
        return config
    }
    config.headers.Authorization = `Bearer ${session.token}`
    return config
})