'use client'; // Bắt buộc vì có dùng hooks và xử lý sự kiện click

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

// Chú ý: Thay bằng Client ID thật của bạn lấy từ Google Cloud Console
const GOOGLE_CLIENT_ID = "364393911866-fst47u5jcl8d2b9ipioce9u6r4p1skhj.apps.googleusercontent.com";

export default function LoginPage() {
  const [message, setMessage] = useState<string>('');

  const handleGoogleSuccess = async (credentialResponse: any) => {
    // Đây chính là token mà backend của bạn cần
    const token = credentialResponse.credential;
    setMessage('Đang gọi API backend...');

    try {
      const res = await fetch('http://localhost:8000/api/v1/users/google-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ token: token }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Đăng nhập thành công! Đã lưu Token.');
        console.log('Access Token từ Backend:', data.access_token);

        // Lưu token vào localStorage để dùng cho các request sau
        localStorage.setItem('access_token', data.access_token);
      } else {
        setMessage(`Lỗi từ server: ${data.detail || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Lỗi gọi API:', error);
      setMessage('Lỗi kết nối đến server backend (Kiểm tra lại backend hoặc lỗi CORS).');
    }
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Demo Đăng Nhập
          </h1>

          <p className="text-sm text-gray-500 text-center mb-4">
            Đăng nhập bằng tài khoản Google của bạn
          </p>

          {/* Nút đăng nhập Google sinh sẵn */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
              setMessage('Đăng nhập Google trên frontend thất bại');
            }}
            useOneTap={false} // Có thể bật true nếu muốn popup đăng nhập nhanh
          />

          {/* Hiển thị thông báo trạng thái */}
          {message && (
            <div className="w-full mt-4 p-3 text-sm rounded bg-blue-50 text-blue-700 break-words border border-blue-200">
              {message}
            </div>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}