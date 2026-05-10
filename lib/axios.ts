import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('access_token');
            if (token) {
                config.headers.Authorization = token.includes("Bearer") ? token : `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            console.error("Token đã hết hạn hoặc không hợp lệ. Vui lòng đăng nhập lại.");
            if (typeof window !== 'undefined') {
                localStorage.removeItem('access_token');
                window.location.href = '/';
            }
        }
        return Promise.reject(error);
    }
);

export default apiClient;