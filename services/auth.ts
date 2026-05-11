import apiClient from '@/lib/axios';

import {
    LoginRequest,
    LoginResponse
} from '@/types/auth';

export const login = async (
    data: LoginRequest
): Promise<LoginResponse> => {

    const response =
        await apiClient.post(
            '/api/v1/users/login',
            data
        );

    return response.data;
};