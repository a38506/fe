'use client';

import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from "@/contexts/AuthContext";
import apiClient from "@/lib/axios";

export default function GoogleLoginButton() {
  const { login } = useAuth();

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        try {
          const res = await apiClient.post(
            "/api/v1/users/google-login",
            {
              token: credentialResponse.credential,
            }
          );

          await login(res.data.access_token);

        } catch (err) {
          console.error("Đăng nhập google thất bại:", err);
        }
      }}
      onError={() => {
        console.log("Đăng nhập google thất bại");
      }}
    />
  );
}