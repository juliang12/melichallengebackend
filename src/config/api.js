import axios from "axios"

export const fetchApi = axios.create({
    baseURL: process.env.API_URL
})