import apiClient from '@/lib/axios';
import { Banner } from '@/types/banner';

export const getBanners = async (): Promise<Banner[]> => {
  try {
    const response = await apiClient.get('/api/v1/banners/');
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu banner:", error);
    return [];
  }
};