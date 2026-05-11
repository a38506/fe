// lib/userApi.ts
import apiClient from "@/lib/axios";
import { User } from "@/types/user";

export const getMe = async (): Promise<User> => {
  const res = await apiClient.get("/api/v1/users/me");
  return res.data;
};

export const updateMe = async (data: Partial<User>): Promise<User> => {
    const res = await apiClient.put("/api/v1/users/me", data);
    return res.data;
};