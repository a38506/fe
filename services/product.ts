import apiClient from '@/lib/axios';
import {ProductResponse} from "@/types/product";

export const getCategories = async () => {
    const response = await apiClient.get('/api/v1/products/categories');
    return response.data;
};

export const getBrands = async () => {
    const response = await apiClient.get('/api/v1/products/brands');
    return response.data;
};

export const getProducts = async (skip = 0, limit = 20): Promise<ProductResponse> => {
    const response = await apiClient.get(`/api/v1/products/?skip=${skip}&limit=${limit}&sort_by=created_at&sort_order=asc`);
    return response.data;
};