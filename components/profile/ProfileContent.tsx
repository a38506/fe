// components/profile/ProfileContent.tsx
"use client";

import { useEffect, useState } from "react";
import { User } from "@/types/user";
import { getMe } from "@/services/user";

type Props = {
  active: string;
};

export default function ProfileContent({ active }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getMe();
        setUser(data);
      } catch (err) {
        console.error("Fetch me error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!user) return <div className="p-4">Không có dữ liệu</div>;

  return (
    <div className="flex-1 p-6">
      {active === "info" && (
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Thông tin cá nhân</h2>

          <p><b>Username:</b> {user.username}</p>
          <p><b>Họ tên:</b> {user.full_name ?? "Chưa cập nhật"}</p>
          <p><b>Email:</b> {user.email ?? "Chưa có"}</p>
          <p><b>SĐT:</b> {user.phone_number ?? "Chưa có"}</p>
          <p><b>Role:</b> {user.role}</p>
        </div>
      )}

      {active === "security" && (
        <div>
          <h2 className="text-xl font-bold">Bảo mật</h2>
          <p>Đổi mật khẩu / bảo mật tài khoản</p>
        </div>
      )}

      {active === "orders" && (
        <div>
          <h2 className="text-xl font-bold">Đơn hàng</h2>
          <p>Danh sách đơn hàng của bạn</p>
        </div>
      )}
    </div>
  );
}