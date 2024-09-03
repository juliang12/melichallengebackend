import { fetchApi } from "../config/api.js"

export const searchItem = async (query) => {
    return await fetchApi.get(`/sites/MLA/search?q=${query}&limit=4`)
}

export const getItem = async (itemId) => {
    return await fetchApi.get(`/items/${itemId}`);
}

export const getItemDescription = async (itemId) => {
    return await fetchApi.get(`/items/${itemId}/description`);
}

export const getCategoriesById = async (categoryId) => {
    return await fetchApi.get(`/categories/${categoryId}`);
}

export const getSellerAddress = async (sellerId) => {
    return await fetchApi.get(`/users/${sellerId}`);
}