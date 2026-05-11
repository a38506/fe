import apiClient from '@/lib/axios';
import { Category } from '@/types/category';

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await apiClient.get('/api/v1/products/categories/');
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu categories:", error);
    return [];
  }
};